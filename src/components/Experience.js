import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  constructor(props) {
    super(props);
    // Initialize state with the current window width
    this.state = { width: window.innerWidth };
  }

  componentDidMount() {
    // Update the width when the window is resized
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    // Clean up listener when the component unmounts
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    // Update the width in state
    this.setState({ width: window.innerWidth });
  };

  render() {
    // Style for the date
    const dateStyle = {
      fontSize: '16px',
      fontWeight: 'bold',
      margin: "10px"
    };

    // Style for the main technology badges
    const mainTechStyle = {
      fontSize: '18px',
      backgroundColor: '#ddd',
      borderRadius: '10px',
      padding: '5px 10px',
      margin: '2px 5px',
      display: 'inline-block',
      textAlign: "center"
    };

    // Style for the specific 'tech' badges within the div
    const techStyle = {
      fontSize: '12px',
      backgroundColor: '#f0f0f0',
      borderRadius: '10px',
      padding: '5px 10px',
      margin: '2px 5px',
      display: 'inline-block',
      textAlign: "center"
    };

    // Mobile view threshold (e.g., for tablets and mobile devices)
    const mobileThreshold = 768;

    // Determine if the current view is mobile
    const isMobileView = this.state.width <= mobileThreshold;

    // Modify dateStyle if in mobile view
    const adjustedDateStyle = {
      ...dateStyle,
      ...(isMobileView ? {
        position: 'absolute', // Position absolutely within the box
        top: '-10px', // Adjust top position to lift it to the box's top
        left: '50%', // Center it horizontally
        transform: 'translateX(-50%)',
        width: '100%',
        textAlign: 'center',
        display: 'block',
        margin: '10px 0'
      } : {})
    };

    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map((work, i) => {
        const { technologies, mainTech, responsibilities } = work;

        var mainTechBadges = mainTech.map((technology, i) => (
          <Badge pill className="main-badge mr-2 mb-2 mt-4" key={i} style={mainTechStyle}>
            {technology}
          </Badge>
        ));

        var techDivs = technologies.map((technology, i) => (
          <div key={i} style={techStyle}>
            {technology}
          </div>
        ));

        var responsibilityItems = responsibilities.map((responsibility, i) => (
          <li key={i}>{responsibility}</li>
        ));

        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={<span style={adjustedDateStyle}>{work.years}</span>}
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className="fas fa-briefcase experience-icon"></i>}
            key={i}
            contentStyle={{ paddingTop: isMobileView ? '30px' : '0' }} // Adjust top padding in mobile view
          >
            <div style={{ textAlign: "left", marginBottom: "4px"}}>
              {mainTechBadges}
            </div>

            <h3 className="vertical-timeline-element-title" style={{ textAlign: "left" }}>
              {work.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ textAlign: "left" }}>
              {work.company}
            </h4>
            <p className="vertical-timeline-element-subtitle" style={{ textAlign: "left", fontSize: "140%" }}>
              {work.description}
            </p>

            <ul className="vertical-timeline-element-subtitle mr-4" style={{ textAlign: "justify", fontSize: "140%" }}>
              {responsibilityItems}
            </ul>
            <div style={{ textAlign: "center", marginTop: "15px" }}>
              {techDivs}
            </div>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={<i className="fas fa-hourglass-start mx-auto experience-icon"></i>}
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
