import { GoogleLogout } from "react-google-login";

const clientId =
  "392990046278-n7s7ihp71s35g0o2ps53nh2e4g09soab.apps.googleusercontent.com";

function logout() {
  const onSuccess = () => {
    console.log("Log out successful");
  };

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default logout;
