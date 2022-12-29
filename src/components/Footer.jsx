import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import icon from "../img/icon.png";

const useStyles = makeStyles((theme) => ({
  rootBox: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  footerNav: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginRight: "auto",
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(0),

    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginLeft: "auto",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
  },
  footerLink: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(2),
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  const content = {
    copy: "Built by Lucas Wu using React and Material UI. Updated December 2022.",
    link1: "Home",
    link2: "About Me",
    link3: "Resume",
    link4: "Projects",
    link5: "Blog",
    ...props.content,
  };
  let brand = <img src={icon} alt="icon" width="80" />;

  return (
    <footer>
      <Container maxWidth="lg">
        <Box
          py={6}
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          className={classes.rootBox}
        >
          <Link href="#" color="inherit" underline="none">
            {brand}
          </Link>
          <Box component="nav" className={classes.footerNav}>
            <Link
              href="/"
              variant="body1"
              color="textPrimary"
              className={classes.footerLink}
            >
              {content["link1"]}
            </Link>
            <Link
              href="/about"
              variant="body1"
              color="textPrimary"
              className={classes.footerLink}
            >
              {content["link2"]}
            </Link>
            <Link
              href="/resume"
              variant="body1"
              color="textPrimary"
              className={classes.footerLink}
            >
              {content["link3"]}
            </Link>
            <Link
              href="/projects"
              variant="body1"
              color="textPrimary"
              className={classes.footerLink}
            >
              {content["link4"]}
            </Link>
            <Link
              href="/blog"
              variant="body1"
              color="textPrimary"
              className={classes.footerLink}
            >
              {content["link5"]}
            </Link>
          </Box>
          <Typography
            color="textSecondary"
            component="p"
            variant="caption"
            gutterBottom={false}
          >
            {content["copy"]}
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}
