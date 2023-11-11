// store.js
import { createStore } from "redux";

// Initial state
const initialState = {
  user: null, // Set initial user state
  // other initial states...
};

// Reducer function
// Reducer function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload, // Update the user in the state
      };
    case "USER_LOGOUT": // New case to handle user logout
      return {
        ...state,
        user: null, // Reset the user to null
      };
    default:
      return state;
  }
};


// Create the store
const store = createStore(rootReducer);

export default store;
