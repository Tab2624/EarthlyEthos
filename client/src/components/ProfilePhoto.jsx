import React from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfilePhoto = ({ user }) => {
  return user && user.email_verified ? (
    <div className="justify-between d-flex align-items-center">
      <p>Welcome {user.name}!</p>
      <img
        className="m-2 border border-dark rounded-circle"
        width="30"
        height="30"
        src={user.picture}
        alt="person-male"
      />
    </div>
  ) : (
    <div>
      <button className="pt-2 pb-2 m-2 ps-3 pe-3 btn btn-success">Login</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user // Assuming 'user' is the key for user data in your Redux store
  };
};

export default connect(mapStateToProps)(ProfilePhoto);
