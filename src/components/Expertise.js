import React, { Component } from "react";

class Expertise extends Component {
  render() {
    let sectionName = "";
    let expertise = [];

    if (this.props.resumeExpertise && this.props.resumeBasicInfo) {
      sectionName = this.props.resumeBasicInfo.section_name.expertise;

      expertise = this.props.resumeExpertise.map((expertiseItem, i) => {
        return (
          <div className="col-md-6 text-center mx-auto" key={i}>
            <h3 className="pt-5" style={{fontSize: "18px"}}>
              {expertiseItem.title}
            </h3>
            <p
              className="text-center"
              style={{ fontSize: "150%", marginTop: "4px", marginLeft: "50px", marginRight: "50px" }}
            >
              {expertiseItem.description}
            </p>
          </div>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white" style={{ fontSize: "24px", fontWeight: "bold" }}>{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 mx-auto">
            <div 
              className="row mx-auto"
              style={{ color: "white" }}
            >
              {expertise}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Expertise;
