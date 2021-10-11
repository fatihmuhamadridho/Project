import React from "react";
import Login from "./components/login";
// import "./App.css";

import { selectUser } from "../redux/userSlice";
import { useSelector } from "react-redux";
import Logout from "./components/logout";

export default function Home() {
  const user = useSelector(selectUser);
  console.log(user);

  return <div>{user ? <Logout /> : <Login />}</div>;
}
