import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const SectionStyle = {
  height: "90vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

class Resume extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div style={{ ...SectionStyle, backgroundColor: "white" }}>
          <Document file="../Res.pdf" onLoadError={console.error} />
        </div>
      </React.Fragment>
    );
  }
}

export default Resume;
