import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class TodoOne extends Component {
  state = {
    id: ""
  };

  getId = e => {
    let newId = parseInt(e.target.value);
    if (!newId) newId = "";
    this.setState({ id: newId });
    console.log(newId);
  };

  submitme = e => {
    e.preventDefault();
    axios
      .post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: "foo",
          body: "bar",
          userId: 1
        },
        {
          "Content-type": "application/json; charset=UTF-8"
        }
      )
      .then(r => {
        const newId = `${r.data.id}_${Math.random()}`;
        this.props.setId(newId);
        console.log("OK!!! Resp: " + newId);
      })
      .catch(e => console.log("Error: " + e));
    this.setState({ id: "" });
    console.log("submit: " + this.state.id);
  };

  render() {
    return (
      <div>
        <h2>hi one todo</h2>
        <p>the id is: {this.props.match.params.id}</p>
        <form onSubmit={this.submitme}>
          <input type="text" value={this.state.id} onChange={this.getId} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    uid: state.uid
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setId: id => {
      dispatch({ type: "ADD_TODO", payload: id });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoOne);
