import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserInfoContext from '../context/UserInfoContext';

const Register = () => {

  const navigate = useNavigate();

  let { name, setName } = useContext(UserInfoContext);
  let { email, setEmail } = useContext(UserInfoContext);


  const handleSubmit = (event) => {

    event.preventDefault();

    navigate("/topics");

  };


  return (
    <>
      <div className="card">

        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-wrapper flex flex-col relative">
            <label>
              Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="enter your name"
              required
            />


            <label>
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="example@gmail.com"
              required
            />



          </div>
          <div className="action__wrapper">
            <button
              className=""
              type="sumbit"
            >
              Continue
            </button>
          </div>
        </form>


      </div>
      <div className="step">
        <span>Step 1 of 3</span>
        <ul className="step__list">
          <li className="active"><span></span></li>
          <li><span></span></li>
          <li><span></span></li>
        </ul>
      </div>
    </>
  );
};

export default Register;
