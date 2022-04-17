Vue.component('time-header', {
    template: '#time-header',
    props: {
        elapsedtime: {
            type: Number,
            default: 0
        }
    },
    data: function () {
        return {
            tweenedTime: this.elapsedtime
        };
    },
    watch: {
        elapsedtime: function (newVal) {
            TweenLite.to(this.$data,
                0.75, {
                    tweenedTime: newVal,
                    roundProps: "tweenedTime"
                });
        }
    },
    computed: {
        animatedTime: function () {
            let tweenedTime = this.tweenedTime;
            let tweenedMsg = null;

            if (tweenedTime == 1) {
                tweenedMsg = tweenedTime + ' ' + 'Month';
            } else if (tweenedTime < 12) {
                tweenedMsg = tweenedTime + ' ' + 'Months';
            } else {
                let year = parseInt(tweenedTime / 12);
                let month = tweenedTime % 12;
                let yearText = year > 1 ? year + ' Years' : year + ' Year';
                let monthText = month == 0 ? '' : month == 1 ? month + ' Month' : month + ' Months';
                let dateText = month == 0 ? yearText : yearText + ', ' + monthText;

                tweenedMsg = dateText;
            }

            return tweenedMsg;
        }
    }
});

Vue.component('category-count', {
    template: '#category-count',
    props: {
        x: {
            type: Number,
            default: 0
        },
        fill: {
            type: String
        },
        count: {
            type: Number,
            default: 0
        }
    },
    data: function () {
        return {
            tweenedCount: this.count,
            categoryColor: this.fill
        };
    },
    watch: {
        count: function (newVal) {
            TweenLite.to(this.$data,
                0.75, {
                    tweenedCount: newVal,
                    roundProps: "tweenedCount"
                });
        }
    },
    methods: {},
    computed: {
        animatedCount: function () {
            return this.tweenedCount;
        },
        animatedColor: function () {
            return this.categoryColor;
        }
    }
});

Vue.component('category-name', {
    template: '#category-name',
    props: {
        x: {
            type: Number,
            default: 0
        },
        fill: {
            type: String
        },
        name: {
            type: String
        }
    },
    data: function () {
        return {
            categoryName: this.name,
            categoryColor: this.fill
        };
    },
    computed: {
        animatedColor: function () {
            return this.categoryColor;
        }
    }
});

Vue.component('svg-circle', {
    template: '#svg-circle',
    props: {
        r: {
            type: Number,
            default: 3
        },
        stroke: {
            type: String,
            default: 'black'
        },
        strokewidth: {
            type: Number,
            default: 0.75
        },
        opacity: {
            type: String,
            default: '0.8'
        },
        fillopacity: {
            type: String,
            default: '1'
        },
        strokeopacity: {
            type: String,
            default: '1'
        },
        fill: {
            type: String,
            default: 'steelblue'
        }
    },
    data: function () {
        return {
            tweenRadius: this.r
        };
    },
    watch: {
        r: function (newVal) {
            TweenLite.to(this.$data, 
                0.75, {
                tweenRadius: newVal
            });
        }
    },
    methods: {
        circleClick: function (event) {
            console.log("This is the circleClick function to handle the click event.\nInfo on the event: ", event.target.value);
        }
    },
    computed: {
        animatedRadius: function () {
            return this.tweenRadius;
        }
    }
});

new Vue({
    el: '#chart',
    data: function () {
        return {
            chart: {
                width: window.innerWidth,
                height: 360
            },
            margins: {
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            },
            colors: ['#66545e', '#aa6f73', '#eea990', '#000000'],
            simulation: null,
            radius: 5,
            padding: 0.5, // Space between nodes
            cluster_padding: 5,
            groups: {},
            people: {},
            nodes: [],
            time_so_far: 0
        };
    },
    mounted: function () {

        this.calculateGroups();
        
        fetch('./stages.json', {
                headers: {
                    "Method": "GET",
                    "Accept": "applicaiton/json"
                }
            })
            .then(response =>
                response.json()
            )
            .then(results => {
                this.parseData(results);
                this.computeNodes();
                this.simulation = d3.forceSimulation(this.nodes)
                    .force("x", d => d3.forceX(d.x))
                    .force("y", d => d3.forceY(d.y))
                    .force("cluster", this.forceCluster())
                    .force("collide", this.forceCollide())
                    .alpha(0.35)
                    .alphaDecay(0)
                    ;
            });

        setTimeout(() => {
            this.movePosition();
            setInterval(() => {
                this.movePosition();
            }, 2000);
        }, 5000);
    },
    methods: {
        parseData: function (data) {
            let that = this;
            data.forEach(d => {
                if (Object.keys(that.people).indexOf(d.pid + "") > -1) {
                    that.people[d.pid + ""].push(d);
                } else {
                    that.people[d.pid + ""] = [d];
                }
            });
        },
        calculateGroups: function () {
            this.groups = {
                "met": {
                    x: this.chart.width / 5,
                    y: this.chart.height / 2,
                    color: this.colors[0],
                    cnt: 0,
                    fullname: "Met"
                },
                "romantic": {
                    x: 2 * this.chart.width / 5,
                    y: this.chart.height / 2,
                    color: this.colors[1],
                    cnt: 0,
                    fullname: "Romantic"
                },
                "lived": {
                    x: 3 * this.chart.width / 5,
                    y: this.chart.height / 2,
                    color: this.colors[2],
                    cnt: 0,
                    fullname: "Lived Together"
                },
                "married": {
                    x: 4 * this.chart.width / 5,
                    y: this.chart.height / 2,
                    color: this.colors[3],
                    cnt: 0,
                    fullname: "Married"
                }
            };
        },
        computeNodes: function () {
            let that = this;
            this.nodes = Object.keys(this.people).map(function (d) {

                // Initialize count for each group.
                that.groups[that.people[d][0].grp].cnt += 1;

                return {
                    id: "node" + d,
                    x: that.groups[that.people[d][0].grp].x + Math.random(),
                    y: that.groups[that.people[d][0].grp].y + Math.random(),
                    r: that.radius,
                    color: that.groups[that.people[d][0].grp].color,
                    group: that.people[d][0].grp,
                    timeleft: that.people[d][0].duration,
                    istage: 0,
                    stages: that.people[d]
                };
            });
        },
        forceCluster: function () {
            const strength = 0.11;
            let nodes;
            let that = this;

            function force(alpha) {
                const l = alpha * strength;
                for (const d of nodes) {
                    d.vx -= (d.x - that.groups[d.group].x) * l;
                    d.vy -= (d.y - that.groups[d.group].y) * l;
                }
            }
            force.initialize = _ => nodes = _;

            return force;
        },
        forceCollide: function () {
            const alpha = 0.2;
            const padding1 = this.padding;
            const padding2 = this.cluster_padding;
            let nodes;
            let maxRadius;

            function force() {
                const quadtree = d3.quadtree(nodes, d => d.x, d => d.y);
                for (const d of nodes) {
                    const r = d.r + maxRadius;
                    const nx1 = d.x - r,
                        ny1 = d.y - r;
                    const nx2 = d.x + r,
                        ny2 = d.y + r;
                    quadtree.visit((q, x1, y1, x2, y2) => {

                        if (!q.length)
                            do {
                                if (q.data !== d) {
                                    const r = d.r + q.data.r + (d.group === q.data.group ? padding1 : padding2);
                                    let x = d.x - q.data.x,
                                        y = d.y - q.data.y,
                                        l = Math.hypot(x, y);
                                    if (l < r) {
                                        l = (l - r) / l * alpha;
                                        d.x -= x *= l, d.y -= y *= l;
                                        q.data.x += x, q.data.y += y;
                                    }
                                }
                            } while (q = q.next);
                        return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
                    });
                }
            }

            force.initialize = _ => maxRadius = Math.max(nodes = _, d => d.r) + Math.max(padding1, padding2);

            return force;
        },
        enter: function (el, i) {
            const circle = el.children[0];
            const currRadius = circle.getAttribute('r');
            const currId = circle.getAttribute('id');
            let currIndex = Number(currId.slice(currId.indexOf("_") + 1, currId.length));
            
            TweenLite.fromTo(
                circle,
                0.5, {
                    attr: {
                        r: 0
                    }

                }, {
                    attr: {
                        r: currRadius
                    },
                    delay: 0.005 * currIndex
                }
            );
        },
        movePosition: function () {
            let that = this;
            this.nodes.forEach((node) => {
                node.timeleft -= 1;
                if (node.timeleft == 0 && node.istage < node.stages.length - 1) {
                    // Decrease count for previous group.
                    that.groups[node.group].cnt -= 1;

                    // Update current node to new group.
                    node.istage += 1;
                    node.group = node.stages[node.istage].grp;
                    node.timeleft = node.stages[node.istage].duration;

                    // Increment count for new group.
                    that.groups[node.group].cnt += 1;
                }
            });
            this.time_so_far += 1;

        }
    }
});