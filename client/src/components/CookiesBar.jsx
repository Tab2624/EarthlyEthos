import React from "react";

const CookiesBar = (props) => {

    const removeCookies = () => {
        let element = document.getElementById("cookies-bar")
        element.remove()
    }

  return (
    <div className="bg-success-subtle w-100 d-flex border rounded p-3 justify-around align-items-center" id="cookies-bar">
      <div className="">
        <h6>Cookies Policy</h6>
        <hr />
        <p>
          This website uses cookies to enhance your browsing experience, analyze
          site traffic, and personalize content. By clicking "Accept," you
          consent to the use of cookies on this site. For more information,
          please read our Privacy Policy.
        </p>
      </div>
      <div className="">
        <button onClick={() => {removeCookies()}} className="btn btn-primary flex-end">Accept Cookies</button>
      </div>
    </div>
  );
};

export default CookiesBar;
