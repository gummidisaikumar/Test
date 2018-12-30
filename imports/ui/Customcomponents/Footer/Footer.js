import React from "react";
import { Row, Col } from "reactstrap";
import Strip from "../Common/Strip/Strip";


class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Strip className="strip strip--short" containerType="container-fluid">
        <Row className="container--width">
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <p className="p-medium gallery-sub-title pt-2px pb-2px title-dim-grey">
              &copy; {2018}, Test
            </p>
          </Col>
        </Row>
      </Strip>
    );
  }
}

export default Footer;
