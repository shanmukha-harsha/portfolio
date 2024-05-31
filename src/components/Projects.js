import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map((project) => {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4" // Added mb-4 for margin bottom
            key={project.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item" style={{ width: '100%', height: '100%' }}>
              <div className="foto" onClick={() => detailsModalShow(project)} style={{ width: '100%', height: '100%' }}>
                <div style={{ width: '100%', height: '100%' }}>
                  <img
                    src={project.images[0]}
                    alt="projectImages"
                    style={{
                      width: '100%',
                      height: '200px', // Set a fixed height for the images
                      objectFit: 'cover', // Ensure images cover the area without distortion
                      marginBottom: 0,
                      paddingBottom: 0,
                      position: 'relative'
                    }}
                  />
                  <span className="project-date">{project.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">{project.title}</p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black", fontSize: "24px", fontWeight: "bold" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
