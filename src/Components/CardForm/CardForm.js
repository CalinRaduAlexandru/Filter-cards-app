import React from "react";
import "./CardForm.styles.css";
import { connect } from "react-redux";
import { togglePopup } from "../../actions";
import { requestUsers, increaseNumber } from "../../actions";
import CancelX from "./CancelX";

const CardForm = ({ increaseNumber }) => {
  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPhoneChange = (event) => {
    this.setState({ phone: event.target.value });
  };

  onSubmitSignIn = (event) => {
    event.preventDefault();
    const { name, email, phone, number } = this.state;
    fetch("http://localhost:3000/", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        number: number,
      }),
    });
    return (window.location = "/");
  };

  return (
    <div className="shade">
      <form onSubmit={props.onSubmitSignIn} className="cardform-container">
        <CancelX />
        <div className="header-card">
          <h1 className="register"> Register</h1>
        </div>
        <div>
          <p onClick={props.decreaseNumber}> &#60; </p>
          <img
            alt="user"
            src={`https://robohash.org/${this.state.number}?set=set5&size=100x100`}
          />
          <p onClick={props.increaseNumber}> &#62; </p>
        </div>
        <main className="contour">
          <div className="input">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              onChange={props.onNameChange}
            />
          </div>
          <div className="input">
            <label className="label" htmlFor="email-address">
              Email
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              required
              onChange={props.onEmailChange}
            />
          </div>
          <div className="input">
            <label className="label" htmlFor="phone">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              required
              onChange={props.onPhoneChange}
            />
          </div>
          <div className="">
            <input className="submit" type="submit" value="Submit" />
          </div>
        </main>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  popup: state.togglePopup.popup,
  number: state.user.number,
});

const mapDispatchToProps = (dispatch) => ({
  togglePopup: () => dispatch(togglePopup()),
  onRequestUsers: () => dispatch(requestUsers()),
  increaseNumber: () => dispatch(increaseNumber()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);
