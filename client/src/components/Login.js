import { GoogleLogin } from "react-google-login";

const clientId =
  "392990046278-n7s7ihp71s35g0o2ps53nh2e4g09soab.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS!!! Current user: ", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("LOGIN FAILEDS! res: ", res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
