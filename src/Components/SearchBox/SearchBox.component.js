import React from "react";
import "./SearchBox.styles.css";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import AssignmentIcon from "../AssigmentIcon/AssignmentIcon";
import { connect } from "react-redux";
import CardForm from "../CardForm/CardForm";
import { setSearchField } from "../../actions";

const SearchBox = ({ handleChange, popup }) => {
  return (
    <div>
      <div className="header">
        <TextField
          className="search-box"
          alt="text"
          type="search"
          onChange={handleChange}
          label="Search Users"
        />
        <SearchIcon className="search-icon" />
        <AssignmentIcon />
      </div>
      {popup ? <CardForm /> : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  popup: state.togglePopup.popup,
  searchFilter: state.searchUsers.searchFilter,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (event) => dispatch(setSearchField(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
