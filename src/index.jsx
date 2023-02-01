import * as ReactDOM from "react-dom";
import {
  Navigate,
  Route,
  Routes,
  useHistory,
  BrowserRouter as Router,
} from "react-router-dom";
import WelcomePage from "./containers/WelcomePage";
import MainPage from "./containers/MainPage";

import { routes } from "./constants";

const MOUNT_NODE = document.getElementById("app");

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Navigate replace to={routes.WelcomePage} />}
          />
          <Route exact path={routes.WelcomePage} element={<WelcomePage />} />
          <Route exact path={routes.MainPage} element={<MainPage />} />
        </Routes>
      </Router>
    </>
  );
};

ReactDOM.render(<App />, MOUNT_NODE);
