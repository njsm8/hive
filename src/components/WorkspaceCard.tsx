import React from "react";
import "./workspace.style.css";
import directionIcon from "../assets/direction.svg";
import workspaceIcon from "../assets/workspace.svg";
import arrowIcon from "../assets/arrow.svg";

declare type WorkspaceCardProps = {
  tag: string
  image: string
}

const WorkspaceCard: React.FC<WorkspaceCardProps> = (props) => {
  const { tag, image } = props;
  return (
    
    <div className="workspace-card">
      <div className="workspace-header">
        <h2>HSR Sector 6, Service Road</h2>
        <div className="location-badge">
          <img
            className="location-icon"
            src={directionIcon}
            alt="Location"
          />
          <div>6 Kms</div>
        </div>
      </div>
      <div className="workspace-image">
        <div className="workspace-tag-container">
          <img
            className="workspace-tag-icon"
            src={workspaceIcon}
            alt="Workspace"
          />
          <span className="workspace-tag">{tag}</span>
        </div>
        <img className="workspace-image-cover" src={image} alt="Workspace" />
      </div>
      <div className="workspace-button-container">
        <button className="day-pass-button">
          <div className="button-text">

            <span>Day Pass</span>
            <h3>
              ₹ 249<span>/ Day</span>
            </h3>
          </div>
          <span className="arrow-container">
            <img
              className="arrow arrow-first"
              src={arrowIcon}
              alt="Arrow"
            />
            <img
              className="arrow arrow-second"
              src={arrowIcon}
              alt="Arrow"
            />
            <img
              className="arrow arrow-third"
              src={arrowIcon}
              alt="Arrow"
            />
          </span>
        </button>
        <button className="bulk-pass-button">
          <div className="discount-badge">20% Discount</div>
          <div className="button-text">
       
            <span>Bulk Pass</span>
            <h3>
              ₹ 2400<span>/ 10 Days</span>
            </h3>


          </div>
          <div className="arrow-container">
            <img
              className="arrow arrow-first"
              src={arrowIcon}
              alt="Arrow"
            />
            <img
              className="arrow arrow-second"
              src={arrowIcon}
              alt="Arrow"
            />
            <img
              className="arrow arrow-third"
              src={arrowIcon}
              alt="Arrow"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default WorkspaceCard;
