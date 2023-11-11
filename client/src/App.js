import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import "./App.css";

function App() {

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: ", response.credential)
    let userObject = jwtDecode(response.credential)
    console.log(userObject)
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "392990046278-n7s7ihp71s35g0o2ps53nh2e4g09soab.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    )
  }, []);

  return (
    <div>
      <Navbar />
      <div id="signInDiv"></div>
    </div>
  );
}

export default App;
