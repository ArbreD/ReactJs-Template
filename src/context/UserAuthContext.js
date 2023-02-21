import { createContext, useContext, useState } from "react";

const userAuthContext = createContext();

export const useUserAuth = () => {
  return useContext(userAuthContext);
};

export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  async function loginWithEmail(email, password) {
    try {
      // const response = await api.post('/auth/sign-in', {
      //     email,password,
      // });
      if (email == "admin@store.vn" && password == "admin123") {
        const response = {
          data: {
            id: "1",
            fullName: "admin",
            email: "admin@store.vn",
            password: "admin123",
            roleId: 1,
            statusId: true,
          },
        };
        localStorage.setItem("user", JSON.stringify(response.data));
        setUser(response.data);
        return response.data;
      } else if (email === "staff@store.vn" && password === "staff123") {
        const response = {
          data: {
            id: "2",
            fullName: "staff",
            email: "staff@store.vn",
            password: "staff123",
            roleId: 2,
            statusId: true,
          },
        };
        localStorage.setItem("user", JSON.stringify(response.data));
        setUser(response.data);
        return response.data;
      }
    } catch (error) {
      console.log("Login with email err", error);
    }
  }

  function logOut() {
    setUser();
    localStorage.removeItem("user");
  }

  function getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  return (
    <userAuthContext.Provider value={{ user, logOut, loginWithEmail, getUser }}>
      {children}
    </userAuthContext.Provider>
  );
};
