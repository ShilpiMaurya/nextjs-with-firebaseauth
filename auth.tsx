import { useState, useEffect, useContext, createContext } from "react";
import nookies from "nookies";
import firebaseClient from "./firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";

const AuthContext = createContext({});

interface Props {
  children: React.ReactNode;
}
export const AuthProvider = ({ children }: Props) => {
  firebaseClient();
  const [user, setUser] = useState({});
  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async user => {
      if (!user) {
        setUser({});
        nookies.set(undefined, "token", "", {});
        return;
      } else {
        const token = await user.getIdToken();
        setUser(user);
        nookies.set(undefined, "token", token, {});
      }
    });
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
