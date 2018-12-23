import React from "react";
import { Meteor } from "meteor/meteor";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";


import App from '../../ui/layouts/App/App';
import '../../ui/Stylesheets/app.scss';

const theme = {};

Meteor.startup(() =>
  ReactDOM.render(
      <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <App />
            </Switch>
          </BrowserRouter>
      </ThemeProvider>,
    document.getElementById("react-root")
  )
);