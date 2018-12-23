import React from "react";
import { Row, Col } from "reactstrap";

import Strip from "../../Customcomponents/Common/Strip/Strip";
import VideoMusic from '../../Customcomponents/Common/VideoMusic/VideoMusic';
import TrailersData from './TrailersData';

class Trailers extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Strip className="strip strip--short" containerType="container-fluid" id="trailers">
        <Row className="container--width">
          <Col xl={12} className="no-padding">
            <h1>Trailers</h1>
          </Col>
          <Col xl={12} className="no-padding">
            <VideoMusic data={TrailersData}/>
          </Col>
        </Row>
      </Strip>
    );
  }
}

export default Trailers;
