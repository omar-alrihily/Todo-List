import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const registerFunc = (e) => {
    e.preventDefault();
    console.log("reg");
    const newUser = {
      // ES6
      email,
      // "email": "email value in the state"
      password,
      username,
    };
    axios
      .post(`http://localhost:5000/users/register`, newUser)
      .then((response) => {
        console.log("DATA: ", response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  return (
    <div className=" Login d-flex justify-content-center">
      <form className="d-grid ">
      <div className="form-floating ">

      
        <input
       type="email"
       className="form-control"
       id="floatingInput"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <label htmlFor="floatingInput">Email address</label>
        
        </div>


      
        <br />
        <div className="form-floating">
        
        <input
          type="password"
          //placeholder="Write password here ..."
          className="form-control"
          id="floatingPassword"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
         <label htmlFor="floatingPassword">Password</label>
        </div>

        <br />

        <div className="form-floating">
        
        <input
          type="text"
          // placeholder="Write username here ..."
          className="form-control"
          id="floatingInput"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
        />
        <label htmlFor="floatingInput">Username</label>

       </div>
        <br />
        <input type="submit"  className="btn btn-primary btn-lg m-3" value="Register" onClick={registerFunc} />
        <Link to='/login'>Have An Account?</Link>
      </form>
    </div>
  );
}