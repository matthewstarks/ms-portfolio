import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience / Involvement</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Aug 2024 - present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Product Management Undergraduate Research Assistant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Gainesville, FL
            </h4>
            <p>
              • Organize weekly team meetings through timely communication and
              Notion skills • Create timelines for the development of an
              autograder to be used by over 2000 students at the University of
              Florida • Track, research, and present analytics on historic
              autograder research for improvement of team productivity
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2024 - present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Product Space Fellowship Member
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Gainesville, FL
            </h4>
            <p>
              • Participate in an 8-week fellowship with 22 other fellows to
              gain an in-depth understanding of product management, strategy,
              lifecycle, marketing, and design • Design a capstone project to
              gain hands on experience with tech startups to demonstrate
              knowledge of product management
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2024 - present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Space Systems Design Club Telemetry Team Member
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Gainesville, FL</h4>
            <p>
              • Design an advanced CanSat device for a NASA competition, while
              learning new technologies such as Pi Pico, MicroPython and R •
              Authored and presented Critical and Preliminary Design Review
              presentations to a panel of four NASA appointed judges
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar - July 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Business Founder
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Longmont, CO</h4>
            <p>
              • Analyzed over 1,000 products through advanced software
              applications to determine profitability, in selecting merchandise
              and establishing a supply chain • Managed 5 figures worth of
              revenue and accounted for unexpected circumstances in shipping,
              supply, demand and price • Established and maintained outstanding
              customer service for over 100 customers and cultivated over 30
              strong vendor relationships
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;