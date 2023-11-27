import { createContext, useState } from "react";

const UserInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {

  let [name, setName] = useState([{}]);
  let [email, setEmail] = useState([{}]);

  return (
    <UserInfoContext.Provider value={{
      name,
      setName,
      email,
      setEmail
    }}>
      {children}
    </UserInfoContext.Provider>


  );
};

export default UserInfoContext;
