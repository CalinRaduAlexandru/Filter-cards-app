import React from "react";
import { Link } from "react-router-dom";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import "./AssignmentIcon.styles.css";

const AssignmentIcon = () => (
  <div>
    <Link className="assignment-icon" to="/submit">
      <AssignmentIndIcon />
    </Link>
  </div>
);

export default AssignmentIcon;
