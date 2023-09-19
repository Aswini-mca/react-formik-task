import React, { useContext, useState } from "react";
import UserContext from "./userContext";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

function UserCreate() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const data = useContext(UserContext);
  let history = useHistory();

  const handleSubmit = () => {
    console.log({
      name,
      mobile,
      email,
    });
    const newUserData = {
      name,
      mobile,
      email,
    };
    data.setUserData([...data.userData, newUserData]);
    console.log("Data => ", data.userData);
    history.push("/user");
  };
 
  return (
    <div className="container">
      <h1>User Form</h1>
      {/* <form onSubmit={formik.handleSubmit}> */}
      <div className="row">
        <div className="col-lg-6">
       
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            
          />
        </div>
        <div className="col-lg-6">
          <label>Mobile</label>
          <input
            type="text"
            name="mobile"
            className="form-control"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <label>Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <input
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          />
        </div>
      </div>
      {/* </form> */}
    </div>
  );
}

export default UserCreate;
