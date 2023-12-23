import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/SignUp.module.css";

function SignUp() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("No errors");
      success(); // Call success if there are no errors
      setIsSubmit(true); // Set isSubmit to true when there are no errors
    } else {
      setIsSubmit(false); // Set isSubmit to false if there are errors
    }
  };

  const success = () => {
    if (isSubmit) {
      const storedData = localStorage.getItem("SignUpData");
      const SignUpData = storedData ? JSON.parse(storedData) : [];

      const newUser = {
        id: SignUpData.length + 1,
        username: formValues.username,
        email: formValues.email,
        password: formValues.password,
      };

      const updatedSignUpData = [...SignUpData, newUser]; // New array with added user
      const temp = JSON.stringify(updatedSignUpData);
      localStorage.setItem("SignUpData", temp);

      console.log("SignUpData after adding new user:", updatedSignUpData);
    }
  };

  useEffect(() => {
    console.log(formErrors);
    success();
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    } else if (!/[a-z]/.test(values.password)) {
      errors.password = "Password must contain at least one lowercase letter";
    } else if (!/[A-Z]/.test(values.password)) {
      errors.password = "Password must contain at least one uppercase letter";
    } else if (!/[0-9]/.test(values.password)) {
      errors.password = "Password must contain at least one number";
    }
    return errors;
  };

  return (
    <div className={`${styles.container}`}>
      <form onSubmit={handleSubmit}>
        <h1 className="text-center">Sign Up Form</h1>

        <div className="ui form">
          <div className="field d-flex flex-column">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field d-flex flex-column ">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field d-flex flex-column">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="fluid button btn btn-warning">Submit</button>
        </div>
        <h6>
          Is already exitst account? <Link to="/login">Log in</Link>
        </h6>
      </form>
    </div>
  );
}

//   const success = () => {
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       // Create a new user object with an incremental ID
//       const newUser = {
//         id: SignUpData.length + 1,
//         username: formValues.username,
//         email: formValues.email,
//         password: formValues.password,
//       };

//       // Update SignUpData by adding the new user

//       //   SignUpData.push(newUser);
//       //   const temp = JSON.stringify(newUser);
//       //   localStorage.setItem("SignUpData", temp);
//       const updatedSignUpData = [...SignUpData, newUser]; // New array with added user
//       const temp = JSON.stringify(updatedSignUpData);
//       localStorage.setItem("SignUpData", temp);

//       console.log("SignUpData after adding new user:", updatedSignUpData);
//     }
//     // {
//     //   SignUpData.filter((item) => {
//     //     return;
//     //     item.n;
//     //     //   search.toLowerCase() === ""
//     //     //     ? item
//     //     //     : item.name.toLowerCase().includes(search);
//     //   });
//     // }
//   };

// {Object.keys(formErrors).length === 0 && isSubmit ? (
//     <div className="ui message success">
//       Signed in successfully
//       {/* {success()} */}
//     </div>
//   ) : (
//     <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
//   )}
export default SignUp;
