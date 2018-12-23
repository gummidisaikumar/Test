import React from "react";
import windowSize from "react-window-size";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Collapse,
  Container
} from "reactstrap";

import PublicNavigation from "./PublicNavigation/PublicNavigation";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar expand="md" className="custom-navbar custom-navbar--postion">
          <Container className="no-padding container--width">
            <NavbarBrand>Test</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <PublicNavigation toggleNavBar={this.toggle} />
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default windowSize(Navigation);
