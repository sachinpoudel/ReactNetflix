import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login, signUp } from "../../firebase";
import netflix_spinner from "../../assets/netflix_spinner.gif";
function Login() {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signUp(name, email, password);
    }
    setLoading(false);
  };
  return (
    loading ?
        <div className="login-spinner">
          <img src={netflix_spinner} alt="" />
        </div> : 
    <>
   
  
      <div className="login">
        <img src={logo} className="login-logo" alt="" />
        <div className="login-form">
          <h1>{signState}</h1>
          <form action="">
            {signState === "Sign Up" ? (
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Your Name"
              />
            ) : (
              <></>
            )}

            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Your Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="password"
            />
            <button onClick={user_auth} type="submit">
              {signState}
            </button>
            <div className="form-help">
              <div className="remember">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Remember me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
          <div className="form-switch">
            {signState === "Sign In" ? (
              <p>
                New to Netflix
                <span
                  onClick={() => {
                    setSignState("Sign Up");
                  }}
                >
                  Sign Up now
                </span>
              </p>
            ) : (
              <p>
                Already have account?
                <span
                  onClick={() => {
                    setSignState("Sign In");
                  }}
                >
                  Sign In now
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
