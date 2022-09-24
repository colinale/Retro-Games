import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };
    return  (
      <section className="login-sec">
        <div id className="selection-div login-window">
          <div className="title-bar">
            <div className="blk-bars-div">
              <div className="blk-bar" />
              <div className="blk-bar" />
              <div className="blk-bar" />
              <div className="blk-bar" />
            </div>
            <a>Git Crash</a>
          </div>
          <div className="login">
            <div className="login-div bg-light">
              <div className="login-box">
                <div className="login-box-header">
                  <pre className="pre-txt">░█░░░█▀█░█▀▀░▀█▀░█▀█{"\n"}░█░░░█░█░█░█░░█░░█░█{"\n"}░▀▀▀░▀▀▀░▀▀▀░▀▀▀░▀░▀{"\n"}{"\n"}</pre>
                </div>
                <div className="login-box-body">
                  {/* Login form */}
                  <form className="login-form" onSubmit={handleFormSubmit}>
                    <div className="form-group">
                      <label htmlFor="login-email">&gt; Email address</label>
                      <input type="email"
                       className="form-control"
                        id="login-email"
                        aria-describedby="emailHelp"
                        value={formState.email}
                        onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="login-password">&gt; Password</label>
                      <input type="password" className="form-control" id="login-password" value={formState.password} onChange={handleChange}/>
                    </div>
                    <div className="form-group form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">
                        Remember me
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary login-btn">
                      Login
                    </button>
                  </form>
                </div>
                <pre className="dash">------------------------------------------------</pre>
                <div className="login-box-header sign-up">
                  <pre className="pre-txt">{"\n"}{"\n"}░█▀▀░▀█▀░█▀▀░█▀█░░░░░█░█░█▀█{"\n"}░▀▀█░░█░░█░█░█░█░▄▄▄░█░█░█▀▀{"\n"}░▀▀▀░▀▀▀░▀▀▀░▀░▀░░░░░▀▀▀░▀░░{"\n"}{"   "}</pre>
                </div>
                <div className="login-box-body">
                  {/* Signup form */}
                  <form className="signup-form">
                    <div className="form-group">
                      <label htmlFor="signup-username">&gt; Username:</label>
                      <input type="text" className="form-control type-username" id="signup-username" aria-describedby="usernameHelp" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="signup-email">&gt; Email address</label>
                      <input type="email" className="form-control" id="signup-email" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="signup-password">&gt; Password</label>
                      <input type="password" className="form-control" id="signup-password" />
                    </div>
                    <div className="form-group form-check">
                    </div>
                    <button type="submit" className="btn btn-primary login-btn">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow login-shadow" />
        </div>
      </section>
    );
};

export default Login;