import React from "react";
import Home from "./screens/Home";
// import DetailView from "./screens/DetailView";
// import Profile from "./screens/Profile";
import Route from "./navigations/BottomNavigator";

import { Provider as ReactProvider } from "react-redux";
import configureStore from "./redux/configureStore";

const store = configureStore();

const App = () => {
  return (
    <ReactProvider store={store}>
      <Route />
    </ReactProvider>
  );
};

export default App;
