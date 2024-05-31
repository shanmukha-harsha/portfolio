import React, { Component } from "react";

class About extends Component {
  render() {
    let profilepic;
    if (this.props.sharedBasicInfo) {
      profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    let sectionName, hello, about1, about2, about3;
    if (this.props.resumeBasicInfo) {
      sectionName = this.props.resumeBasicInfo.section_name.about;
      hello = this.props.resumeBasicInfo.description_header;
      about1 = this.props.resumeBasicInfo.description;
      about2 = this.props.resumeBasicInfo.philosophy;
      about3 = this.props.resumeBasicInfo.preference;
    }

    return (
      <section id="about">
        <style>
          {`
            .hello-text {
              display: block;
            }

            @media (max-width: 767px) {
              .hello-text {
                text-align: center;
              }
            }
          `}
        </style>
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span style={{ fontSize: "24px", fontWeight: "bold" }}>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-5 mb-5 center">
              {/* Flex container to center polaroid */}
              <div className="d-flex justify-content-center">
                <div className="polaroid">
                  <span style={{ cursor: "auto", display: "flex", justifyContent: "center" }}>
                    <img
                      style={{ width: "100%", height: "100%" }} // Ensures image is full width of the polaroid
                      src={profilepic}
                      alt="Avatar placeholder"
                    />
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-7 center d-flex align-items-center justify-content-center">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <span className="iconify" data-icon="emojione:red-circle" data-inline="false"></span> &nbsp;
                    <span className="iconify" data-icon="twemoji:yellow-circle" data-inline="false"></span> &nbsp;
                    <span className="iconify" data-icon="twemoji:green-circle" data-inline="false"></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "152%",
                      lineHeight: "200%",
                    }}
                  >
                    <span className="wave hello-text">{hello}</span>
                    {about1}
                    <br />
                    {about2}
                    <br />
                    {about3}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
