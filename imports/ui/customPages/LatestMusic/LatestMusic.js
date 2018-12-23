import React from "react";
import { Row, Col } from "reactstrap";

import Strip from "../../Customcomponents/Common/Strip/Strip";
import VideoMusic from '../../Customcomponents/Common/VideoMusic/VideoMusic';
import LatestMusicData from './LatestMusicData';

class LatestMusic extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Strip
        className="strip strip--short"
        containerType="container-fluid"
        id="latest-music"
      >
        <Row className="container--width">
          <Col xl={12} className="no-padding">
            <h1>LatestMusic</h1>
          </Col>
          <Col xl={12} className="no-padding">
            <VideoMusic data={LatestMusicData}/>
          </Col>
        </Row>
      </Strip>
    );
  }
}

export default LatestMusic;
