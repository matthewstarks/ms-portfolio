import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "Flask",
    "Python",
    "SQL",
    "Java",
    "C"
];

const labelsSecond = [
    "Notion",
    "Flowcharts",
    "Mind Maps",
    "Slideshows",
    "User Stories"
];

const labelsThird = [
    "My Brain",
    "My Mouth",
    ":)"
];

function Expertise() {
    return (
      <div className="container" id="expertise">
        <div className="skills-container">
          <h1>Expertise</h1>
          <div className="skills-grid">
            <div className="skill">
              <FontAwesomeIcon icon={faReact} size="3x" />
              <h3>Full Stack Web Development</h3>
              <p>
                I design, develop, and maintain software systems, ensuring they
                are efficient, reliable, and meet the needs of users through
                collaboration and problem-solving.
              </p>
              <div className="flex-chips">
                <span className="chip-title">Tools:</span>
                {labelsFirst.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faDocker} size="3x" />
              <h3>Product Management</h3>
              <p>
                {" "}
                I guide a product from concept to market, ensuring its
                development aligns with customer needs and delivering it
                successfully through collaboration and strategic
                decision-making.
              </p>
              <div className="flex-chips">
                <span className="chip-title">Tools:</span>
                {labelsSecond.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faPython} size="3x" />
              <h3>Effective Communication</h3>
              <p>
                I ensure information is clearly conveyed and understood by
                tailoring my message to the audience, fostering collaboration,
                and promoting transparency through active listening and
                thoughtful expression.
              </p>
              <div className="flex-chips">
                <span className="chip-title">Tools:</span>
                {labelsThird.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Expertise;