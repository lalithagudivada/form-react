import React, { useState } from "react";

const initialValues = {
  email: "",
  password: "",
  firstname: "",
  lastname: "",
  gender: "",
  country: "",
};
const SignInForm = () => {
  const [values, setValues] = useState(initialValues);

  const inputHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({...values,[name]: value,});
  };
  const displayOutput = (evt) => {
    evt.preventDefault();
    console.log(values);
    console.log(values.email);
    console.log(values.password);
    console.log(values.firstname);
    console.log(values.lastname);
    console.log(values.gender);
    console.log(values.country);
  };
  return (
    <div>
      <center>
        <div className="form">
          <form onSubmit={displayOutput}>
            
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={inputHandle}
              ></input>
              <br></br>
              <br></br>

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={inputHandle}
              ></input>
              <br></br>
              <br></br>
              <input
                type="password"
                name="password"
                placeholder="Re-type Password"
                value={values.password}
                onChange={inputHandle}
              ></input>
              <br></br>
              <br></br>
            
            
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                value={values.firstname}
                onChange={inputHandle}
              ></input>
              &nbsp;&nbsp;
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={values.lastname}
                onChange={inputHandle}
              ></input>
              <br></br>
              <br></br>
            
            <input
              type="radio"
              name="gender"
              value={"Male"}
              onChange={inputHandle}
            ></input>
            Male&nbsp;&nbsp;
            <input
              type="radio"
              name="gender"
              value={"Female"}
              onChange={inputHandle}
            ></input>
            Female<br></br>
            <br></br>
            
              <select
                name="country"
                value={values.country}
                onChange={inputHandle}
              >
                <option value={"select a country"}>Select a country</option>
                <option value={"India"}>India</option>
                <option value={"Australia"}>Australia</option>
                <option value={"Europe"}>Europe</option>
                <option value={"United States"}>United States</option>
              </select>
              <br></br>
              <br></br>
            
            
              <input type="checkbox"></input>
              <label>I agree with terms and conditions</label>
              <br></br>
              <br></br>
              <input type="checkbox"></input>
              <label>I want to receive the newsletter </label>
              <br></br>
              <br></br>
            
            <div className="btn">
              <button type="submit" value="Submit">
                Register
              </button>
              <br></br>
            </div>
          </form>
        </div>
      </center>
    </div>
  );
};

export default SignInForm;