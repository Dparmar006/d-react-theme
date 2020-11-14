import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import FormElements from "./Components/form/FormElements";
import LoginForm from "./Components/form/LoginForm";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={LoginForm} />
          <Route path="/form-components" exact component={FormElements} />

          {/* <PrivateRoutes path="/uploadBook" exact component={uploadBook} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default Routes;
