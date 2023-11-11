import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfilePhoto = (props) => {
  return props.isLoggedIn ? (
    <div className="d-flex align-items-center justify-between">
      <p>Welcome Name!</p>
      <img
        className="border border-dark rounded-circle m-2"
        width="30"
        height="30"
        src="https://img.icons8.com/officel/16/person-male.png"
        alt="person-male"
      />
    </div>
  ) : (
    <div>
      <button className="pt-2 pb-2 ps-3 pe-3 btn btn-success m-2">Login</button>
    </div>
  );
};

export default ProfilePhoto;
