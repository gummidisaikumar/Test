import React from "react";
import { Row, Col } from "reactstrap";

import RenderPage from "../../Customcomponents/Common/RenderPage/RenderPage";
import Strip from "../../Customcomponents/Common/Strip/Strip";
import Trailers from "../Trailers/Trailers";
import LatestMusic from "../LatestMusic/LatestMusic";
import VideoMusic from '../../Customcomponents/Common/VideoMusic/VideoMusic';
import HomeData from './HomeData';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <RenderPage className="render-page" containerType="container-fluid">
        <Strip className="strip strip--short" containerType="container-fluid" id="home">
          <Row className="container--width">
            <Col xl={12} className="no-padding">
              <h1>Home</h1>
            </Col>
            <Col xl={12}>
              <VideoMusic data={HomeData}/>
            </Col>
          </Row>
        </Strip>
        <LatestMusic />
        <Trailers />
      </RenderPage>
    );
  }
}

export default Home;
