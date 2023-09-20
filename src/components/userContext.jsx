import React, { useState } from "react";

let UserContext = React.createContext();

export default UserContext;

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState([{ name: "jack", email: "jack@gmail.com", mobile: 1234567890 }, { name: "alex", email: "alex@gmail.com", mobile: 8765432100 },{ name: "jone", email: "jone@gmail.com", mobile: 9876543210 }]);
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

