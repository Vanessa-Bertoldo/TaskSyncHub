import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/store";
import AppRoute from "./route";
import DialogUpdate from "./dialogs/dialogUpdate";
import "./assets/globalStyles/styles.css"
import { AlertYesNo } from "./utils/alert/alertYesNo";

ReactDOM.render(
  <Provider store={store}>
      <AppRoute />
      <DialogUpdate/>
    </Provider>,
  document.getElementById("root")
);

reportWebVitals();