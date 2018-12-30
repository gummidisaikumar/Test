import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Styled from "styled-components";

import Navigation from '../../Customcomponents/Navigation/Navigation';
import Home from "../../customPages/Home/Home";
import LatestMusic from '../../customPages/LatestMusic/LatestMusic';
import Trailers from '../../customPages/Trailers/Trailers';
import Footer from '../../Customcomponents/Footer/Footer';

const StyledApp = Styled.div`
> p{
    margin-bottom: 0;
}
`;
class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { ready: false };
  }
  componentDidMount() {
    this.setPageReady();
  }
  setPageReady() {
    this.setState({ ready: true });
  }
  render() {
    const { props, state } = this;
    return (
      <StyledApp ready={this.state.ready} className="App">
        <Navigation {...props} {...state} />
        <Switch>
          <Route exact name="home" path="/" component={Home} />
          <Route path="/latest-music" component={LatestMusic} {...props} />
          <Route path="/trailers" component={Trailers} {...props} />>
        </Switch>
        <Footer/>
      </StyledApp>
    );
  }
}

export default App;