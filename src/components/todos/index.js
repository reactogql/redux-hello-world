import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Todos extends Component {
  render() {
    return (
      <div>
        <h2>hi todos</h2>
        <p>you can navigate:</p>
        <NavLink to="/todos/1">id 1</NavLink>
        <div>
          <h3>State:</h3>
          <p>
            {this.props.uids.map(x => (
              <h3>{x}</h3>
            ))}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    uids: state.todoReducer.id
  };
};

export default connect(mapStateToProps)(Todos);
