import React from "react";
import "./Card.styles.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export const Card = (props) => {
  return (
    <section>
      <div className="card">
        <div className="view front">
          <div className="user-image">
            <img
              alt="user"
              src={`https://robohash.org/${props.user.number}?set=set5&size=100x100`}
            />
          </div>
          <div>
            <h1 className="name">{props.user.name}</h1>
          </div>
        </div>
        <div className="view back">
          <p className="email">{props.user.email}</p>
          <p className="text">{props.user.phone}</p>
          <div className="symbols">
            <FacebookIcon color="primary" fontSize="large" className="fb" />
            <LinkedInIcon
              color="primary"
              fontSize="large"
              className="linkedin"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
