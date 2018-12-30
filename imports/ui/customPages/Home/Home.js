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
              <h2 className="section__title pt-8px pb-8px pl-16px pr-16px">Home</h2>
            </Col>
            <Col xl={12}>
              <VideoMusic data={HomeData}/>
            </Col>
          </Row>
        </Strip>
        <div className="container--width pl-12px pr-12px">
         <hr className="section-divider"/>  
        </div>
        <LatestMusic />
        <div className="container--width pl-12px pr-12px">
         <hr className="section-divider"/>  
        </div>
        <Trailers />
      </RenderPage>
    );
  }
}

export default Home;
