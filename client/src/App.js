import "./App.css";
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
import { useEffect } from "react";
import { gapi } from "gapi-script";

const clientId =
  "392990046278-n7s7ihp71s35g0o2ps53nh2e4g09soab.apps.googleusercontent.com";

function App() {

  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    }
    gapi.load('client:auth2', start)
  })

  return <div>
    <LoginButton/>
    <LogoutButton/>
  </div>
}

export default App;
