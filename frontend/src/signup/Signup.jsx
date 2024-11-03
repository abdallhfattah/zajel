import "./Signup.css";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useState, useContext } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const { registerUser } = useContext(AuthContext);

  console.log(username);
  console.log(email);
  console.log(password1);
  console.log(password2);

  const handleSubmit = async (e) => {
    e.preventDefault();
    registerUser(username, email, password1, password2);
  };

  return (
    <div className="backs" id="login">
      <form className="forms" onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <input
          className="user"
          type="text"
          name="username"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />

        <input
          className="email"
          type="email"
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <input
          className="password"
          type="password"
          name="password1"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          className="confirm_password"
          type="password"
          name="password"
          placeholder="Enter Password again"
          onChange={(e) => setPassword2(e.target.value)}
        />
        <button className="signupbutton" type="submit">
          Sign up
        </button>
        <p>
          <Link to="/login">Already have an account</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;