import { ADD_TODO, DEL_TODO } from "../actions/types";

export default (state = { id: [] }, action = {}) => {
  switch (action.type) {
    case ADD_TODO:
      //   console.log("in reducer, id: " + action.payload);
      const newState = { id: [...state.id, action.payload] };
      console.log("new state: " + newState.id.join(" "));
      return newState;
    case DEL_TODO:
      return state;
    default:
      return state;
  }
};
