import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { About } from "../About";
import { PhotoGallery } from "../Gallery";
import { Discussion } from "../Discussion";
import { Header } from "../components/Header";
import { Password } from "../components/authorization/password";
export const Routes = () => {
  return (
    <>
      <Header />
      <Router>
        <div>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/discussion">
              <Discussion />
            </Route>
            <Route path="/gallery">
              <PhotoGallery />
            </Route>
            <Route path="/password">
              <Password />
            </Route>
            <Route path="/">
              <Home />
            </Route>
       
          </Switch>
        </div>
      </Router>
    </>
  );
};
