import React from "react";
import "./CardForm.styles.css";
import { connect } from "react-redux";
import { togglePopup } from "../../actions";
import { requestUsers } from "../../actions";
import CancelX from "./CancelX";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

class CardForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phone: "",
      number: 16,
    };
  }
  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPhoneChange = (event) => {
    this.setState({ phone: event.target.value });
  };

  numberIncrese = () => {
    this.setState({ number: this.state.number + 1 });
  };

  numberDecrease = () => {
    this.setState({ number: this.state.number - 1 });
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
  render() {
    return (
      <div className="shade">
        <form onSubmit={this.onSubmitSignIn} className="cardform-container">
          <CancelX />
          <div className="header-card">
            <h1 className="register"> Register</h1>
          </div>
          <div className="user">
            <NavigateBeforeIcon
              onClick={this.numberDecrease}
              style={{
                cursor: "pointer",
                fontSize: "40px",
                marginLeft: "40px",
              }}
            />
            <img
              alt="user"
              src={`https://robohash.org/${this.state.number}?set=set5&size=100x100`}
            />
            <NavigateNextIcon
              onClick={this.numberIncrese}
              style={{
                cursor: "pointer",
                fontSize: "40px",
                marginRight: "40px",
              }}
            />
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
                onChange={this.onNameChange}
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
                onChange={this.onEmailChange}
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
                onChange={this.onPhoneChange}
              />
            </div>
            <div className="">
              <input className="submit" type="submit" value="Submit" />
            </div>
          </main>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  popup: state.togglePopup.popup,
});

const mapDispatchToProps = (dispatch) => ({
  togglePopup: () => dispatch(togglePopup()),
  onRequestUsers: () => dispatch(requestUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);
