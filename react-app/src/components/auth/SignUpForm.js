import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [passwordMatches, setPasswordMatches] = useState(true);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(
        signUp(username, email, password, first_name, last_name)
      );
      if (data) {
        setErrors(data);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };
  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="form-container">
      <form onSubmit={onSignUp}>
        <div className="error-validation">
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className="form-fields">
          <label>User Name: </label>
          <input
            type="text"
            name="username"
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div className="form-fields">
          <label>Email: </label>
          <input
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div className="form-fields">
          <label>First Name: </label>
          <input
            type="text"
            name="email"
            onChange={updateFirstName}
            value={first_name}
          ></input>
        </div>
        <div className="form-fields">
          <label>Last Name: </label>
          <input
            type="text"
            name="email"
            onChange={updateLastName}
            value={last_name}
          ></input>
        </div>

        <div className="form-fields">
          <label>Password: </label>
          <input
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
          ></input>
        </div>

        <div className="form-fields">
          <label>Repeat Password: </label>
          <input
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        {password !== repeatPassword && (
          <div className="password-match-error">Passwords Must Match</div>
        )}
        <button type="submit" className="form-submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
