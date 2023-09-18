import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./userContext";
function Users() {
  const data = useContext(UserContext);

  return (
    <div className="container-fluid">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 className="h3 mb-0 text-gray-800">User List</h1>
        <Link
          to="/user-create"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create User
        </Link>
      </div>
      <br/>

      {/* <h1 className="h3 mb-2 text-gray-800">Tables</h1>
      <p className="mb-4">
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables, please visit the{" "}
        <a target="_blank" href="https://datatables.net">
          official DataTables documentation
        </a>
      </p> */}

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            User List Table
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              style={{ width: "100%", cellspacing: "0" }}
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {data.userData.map((user) => {
                  return (
                    <tr>
                      <td>{user.name}</td>
                      <td>{user.mobile}</td>
                      <td>{user.email}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
