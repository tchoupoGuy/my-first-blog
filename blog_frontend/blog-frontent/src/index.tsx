import "./index.scss";

import { Route, Router, Switch } from "react-router-dom";
import { persistor, store } from "./store";

// import AppView from "./views/app";
// import AuthenticationView from "./views/authentification";
// import Error404 from "./views/noContent/Error404";
// import { I18nextProvider } from "react-i18next";
// import MaintenanceView from "./views/noContent/MaintenancePage/maintenanceView";

// import OnePager from "./onboarding/OnePager";

// import { PersistGate } from "redux-persist/integration/react";
// import { Provider } from "react-redux";
// import React from "react";
// import ReactDOM from "react-dom";
// import ReactGA from "react-ga";
// import { Spinner } from "react-bootstrap";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { frontendUrl } from "./urls";
// import { history } from "./helpers/history";
// import i18n from "./assets/configi18n/i18n";
// import { library } from "@fortawesome/fontawesome-svg-core";

// Google analytics tracking function
function initializeReactGA() {
  // We only track analytics in production not in develop
  if (process.env.NODE_ENV === "production") {
    ReactGA.initialize("UA-136362439-1");
    // Here we add the page we want to track (use frontendURL)
    ReactGA.pageview(frontendUrl.home);
    /* TODO: FIX ALL OF THESE AS THEY ALWAYS SHOW UP IN THE CONSOLE*/
    // ReactGA.pageview(frontendUrl.market);
    // ReactGA.pageview(frontendUrl.settings);
    // ReactGA.pageview(frontendUrl.userProfile);
    // ReactGA.pageview(frontendUrl.companyProfile);
    // ReactGA.pageview(frontendUrl.contracts);
  }
}

function initializeConsole() {
  // In production we don't want to output the console log
  // so we make the console.X() function become empty functions
  if (process.env.NODE_ENV === "production") {
    var console = {};
    console.log = function() {};
    console.info = function() {};
    console.warn = function() {};
    console.error = function() {};
    window.console = console;
  }
}

// Create the Persitant-React-Redux app and lay out the routing
function initialize() {
  // TODO: Need to only add the fontawesome stuff we really need
  library.add(fas);
  library.add(fab);
  ReactDOM.render(
    <Provider store={store}>
      {/*include our i18n configuration file to be able to use it in all our Application. */}
      <I18nextProvider i18n={i18n}>
        <PersistGate loading={<Spinner animation="border" />} persistor={persistor}>
          <Router history={history}>
            <Switch>
              <Route exact path={frontendUrl.home} component={OnePager} />
            </Switch>
          </Router>
        </PersistGate>
      </I18nextProvider>
    </Provider>,
    document.getElementById("root")
  );
}

initialize();
initializeReactGA();
initializeConsole();

// ReactDOM.render(<App />, document.getElementById("root"));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
