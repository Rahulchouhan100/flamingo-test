import { createContext, useState, useEffect, useContext } from "react";

const initialState = { favoriteItem: [] };

const AuthContext = createContext(initialState);

export const useAuthContext = () => {
  return useContext(AuthContext);
};
const parseUser = () => {
  try {
    const user = localStorage.getItem("authUserData");
    return (user && typeof user === "string" && JSON.parse(user)) || null;
  } catch (error) {
    return null;
  }
};

const AuthContextAPI = ({ children }) => {
  const [currUserData, setCurrUserData] = useState(() => {
    return parseUser();
  });

  useEffect(() => {
    const authUserData = parseUser();
    if (authUserData) {
      setCurrUserData(authUserData);
    } else {
      setCurrUserData(null);
    }
  }, []);

  const userLogin = (userData) => {
    if (userData) {
      localStorage.setItem("authUserData", JSON.stringify(userData));
      setCurrUserData(userData);
    }
  };

  const userLogout = () => {
    localStorage.clear();
    setCurrUserData(null);
  };

  const addFavorite = (data) => {
    data.isFavourite = !data.isFavourite;
    console.log(data.isFavourite, "isFavourite");
    // const arr = initialState.favoriteItem.filter((item) => {
    //   return item.id !== data.id;
    // });
    // console.log(arr, "arrr");

    // arr.push(data);
    // initialState.favoriteItem.push(data);

    // initialState.favoriteItem.indexOf(data) === -1
    //   ? initialState.favoriteItem.push(data)
    //   : console.log("This item already exists");

    console.log(data, "initialState data");
  };

  return (
    <AuthContext.Provider
      value={{
        currUserData,
        doLogin: userLogin,
        doLogout: userLogout,
        addFavorite,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextAPI;
