import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase";

export const AuthContext = createContext();
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(true);

  //
  //register user
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update
  const update = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  // singIn
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google login
  const googleLog = () => {
    return signInWithPopup(auth, GoogleProvider);
  };
  // logOut
  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (CurrntUser) => {
      setUser(CurrntUser);
    });
    return () => unSubscribe();
  }, []);

  const userInfo = { logout, user, register, update, login, googleLog };

  //
  return (
    <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
