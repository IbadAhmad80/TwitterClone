import React from "react";
import SignIn from "./components/AccountPages/SignIn";
import SignUp from "./components/AccountPages/SignUp";
import ProfileApp from "../src/components/ProfilePage/App";
import { Route, Switch } from "react-router-dom";
import ResetPassword from "./components/AccountPages/ResetPassword";

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={SignIn} exact />
        <Route path="/signUp" component={SignUp} />
        <Route path="/profile" component={ProfileApp} />
        <Route path="/resetPassword" component={ResetPassword} />
      </Switch>
    </div>
  );
}
