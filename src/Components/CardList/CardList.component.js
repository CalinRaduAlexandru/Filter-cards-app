import React from "react";
import "./CardList.styles.css";
import { connect } from "react-redux";
import { Card } from "../Card/Card.component";
import { setSearchField, requestUsers } from "../../actions";
import { Loader } from "../Loader/Loader.component";

class CardList extends React.Component {
  componentDidMount() {
    this.props.onRequestUsers();
  }

  render() {
    const { users, isPending, searchFilter } = this.props;
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchFilter.toLowerCase())
    );
    return (
      <div className="wrapper">
        <div className="card-list">
          {!isPending ? (
            filteredUsers
              .reverse()
              .map((user) => <Card key={user.id} user={user} />)
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchFilter: state.searchUsers.searchFilter,
  isPending: state.requestUsers.isPending,
  users: state.requestUsers.users,
  error: state.requestUsers.error,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestUsers: () => dispatch(requestUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
