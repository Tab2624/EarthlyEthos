import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfilePhoto = ({ user }) => {

  const openProfilePopup = () => {
    console.log("open")
  }
  const closeProfilePopup = () => {
    console.log("close")
  }

  return user && user.email_verified ? (
    <>
    <div className="justify-between d-flex align-items-center">
      <p>Welcome {user.name}!</p>
      <img
        className="m-2 border border-dark rounded-circle"
        width="30"
        height="30"
        src={user.picture}
        alt="person-male"
        onClick={openProfilePopup()}
        />
    </div>
    <div id="profileBox" className="fixed bg-light p-3 border border-dark rounded">
      <div className="d-flex justify-between align-items-center">
    <h1>{user.name}</h1>
    <button onClick={closeProfilePopup()} className="">❌</button>
      </div>
    <hr />
    <button className="btn btn-outline-success">View Cart</button>
    <button className="btn btn-outline-success">Orders</button>
    <button className="btn btn-outline-success">Reviews</button>
    <hr />
    <button className="btn btn-danger">Logout</button>
    </div>
        </>
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
