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
          {/* Computational Reasoning Group */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Aug 2024 – Sep 2025"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Undergraduate Research Assistant — Computational Reasoning Group, UF
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Gainesville, FL
            </h4>
            <p>
              • Directed product strategy for a redesigned scalable educational autograder serving 2,000+ students annually.<br />
              • Evaluated and integrated LLM-based AI tools with faculty and engineers to guide feature prioritization and implementation.<br />
              • Designed a long‑term roadmap and identified high‑priority features for platform rollout.
            </p>
          </VerticalTimelineElement>

          {/* Dover Fueling Solutions */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2025 – Aug 2025"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Product Management Intern — Dover Fueling Solutions
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Austin, TX</h4>
            <p>
              • Analyzed 20,000+ warranty return records using Excel + SQL, uncovering $1M+ in profit recovery and reducing test errors by 20%.<br />
              • Automated KPI tracking in Excel, reducing reporting time by 5+ hours/week and error rates by 40%.<br />
              • Conducted market analysis and designed a mobile app for small gas stations, increasing TAM by 10%.
            </p>
          </VerticalTimelineElement>

          {/* Intersect Health */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2025 – Apr 2025"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Product Management Intern — Intersect Health
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>
              • Led a 5‑person cross‑functional team evaluating FHIR telehealth adoption and benchmarked 10+ competitors.<br />
              • Built a data‑driven GTM strategy influencing 2025 roadmap priorities.<br />
              • Authored PRDs and feature briefs; recommendations adopted for MVP scope, reducing decision cycle time by 20%.
            </p>
          </VerticalTimelineElement>

          {/* Amattazon */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 2024 – Jul 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Founder & CEO — Amattazon</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>
              • Analyzed 1,000+ product listings using historical data analytics to identify high‑margin opportunities and optimize inventory turnover.<br />
              • Generated 5‑figure quarterly revenue while managing 30+ vendor partnerships and 100+ customers.<br />
              • Implemented dynamic pricing strategies to boost margins and customer retention.
            </p>
          </VerticalTimelineElement>

          {/* Product Space */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2024 – Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Director of Outreach — Product Space</h3>
            <h4 className="vertical-timeline-element-subtitle">Gainesville, FL</h4>
            <p>
              • Directed outreach efforts, forming 6+ startup partnerships and placing 40+ fellows.<br />
              • Expanded the project pipeline by 25% and increased the startup pool by 125%.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
