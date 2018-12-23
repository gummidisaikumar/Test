import React from "react";
import { withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import PropTypes from 'prop-types';
import { HashLink as Link } from "react-router-hash-link";
import { Nav, NavItem } from "reactstrap";

class PublicNavigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Nav>
        <NavItem className="nav-item--custom">
          <Link
            scroll={el =>
              el.scrollIntoView({ behavior: "smooth", block: "center" })
            }
            to="/#home"
            onClick={() => this.props.toggleNavBar()}
          >
            Home
          </Link>
        </NavItem>
        <NavItem className="nav-item--custom">
          <Link
            scroll={el =>
              el.scrollIntoView({ behavior: "smooth", block: "center" })
            }
            to="/#latest-music"
            onClick={() => this.props.toggleNavBar()}
          >
            latest-music
          </Link>
        </NavItem>
        <NavItem className="nav-item--custom">
          <Link
            scroll={el =>
              el.scrollIntoView({ behavior: "smooth", block: "center" })
            }
            to="/#trailers"
            onClick={() => this.props.toggleNavBar()}
          >
            latest-music
          </Link>
        </NavItem>

        {/* <LinkContainer to="/trailers">
    <NavItem className="nav-item--custom">Team</NavItem>
  </LinkContainer> */}
      </Nav>
    );
  }
}

PublicNavigation.propTypes = {
  toggleNavBar: PropTypes.func.isRequired,
};

export default PublicNavigation;
