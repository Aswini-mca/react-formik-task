import React, { useState } from "react";

let UserContext = React.createContext();

export default UserContext;

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState([{name:"jack",email:"jack@gmail.com",mobile:12345678},{name:"jone",email:"jone@gmail.com",mobile:87654321}]);
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
