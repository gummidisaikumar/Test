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
      <Nav className="custom-nav">
        <NavItem className="custom-nav--item">
          <Link
            scroll={el =>
              el.scrollIntoView({ behavior: "smooth", block: "center" })
            }
            to="/#home"
            className="custom-nav--item_link"
            onClick={() => this.props.toggleNavBar()}
          >
            Home
          </Link>
        </NavItem>
        <NavItem className="custom-nav--item">
          <Link
            scroll={el =>
              el.scrollIntoView({ behavior: "smooth", block: "center" })
            }
            to="/#latest-music"
            className="custom-nav--item_link"
            onClick={() => this.props.toggleNavBar()}
          >
            latest-music
          </Link>
        </NavItem>
        <NavItem className="custom-nav--item">
          <Link
            scroll={el =>
              el.scrollIntoView({ behavior: "smooth", block: "center" })
            }
            to="/#trailers"
            className="custom-nav--item_link"
            onClick={() => this.props.toggleNavBar()}
          >
            Trailers
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
