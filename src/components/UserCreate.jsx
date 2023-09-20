import React, { useContext, useState } from "react";
import UserContext from "./userContext";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

//form validation schema
const formValidationSchema = yup.object({
  name: yup.string().min(5,"Need minimum 5 charcters for name")
  .required("Required to fill name"),
  mobile:yup.string().min(10,"Need minimum 10 numbers")
  .max(10,"Enter valid Mobile number").required("Required to fill mobile number"),
  email:yup.string().required("Required to fill email")
  .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Enter Valid email")
})

//user create component

function UserCreate() {
 
  const data = useContext(UserContext);
  let history = useHistory();
  const formik = useFormik({
  initialValues:{name:"",mobile:"",email:""},
  validationSchema: formValidationSchema,
  onSubmit:(values)=>{
    console.log("onSubmit",values);

    data.setUserData([...data.userData, values]);
    history.push("/user");
  }
});
 
  return (
    <div className="container">
      <h1>User Form</h1>
      <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="col-lg-6">
          <label>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
           {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
        </div>
        <div className="col-lg-6">
          <label>Mobile</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            className="form-control"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
           {formik.touched.mobile && formik.errors.mobile ? formik.errors.mobile : ""}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <label>Email</label>
          <input
            type="text"
            id="email"
            name="email"
            className="form-control"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
           {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
        </div>
      </div>
      <div className="row mt-3">
        <div className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <input
            type="submit"
            className="btn btn-primary"
          />
        </div>
      </div>
      </form>
    </div>
  );
  }

export default UserCreate;
