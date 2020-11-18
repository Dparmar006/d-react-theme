import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import FormElements from "./Components/form/FormElements";
import ExtraComponents from "./Pages/ExtraComponents";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/form-components" component={FormElements} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/extra-components" component={ExtraComponents} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Router;
