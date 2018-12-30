import React from "react";
import shaka from "shaka-player";
import { Row, Col } from 'reactstrap';

class Video extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    shaka.polyfill.installAll();
    if (shaka.Player.isBrowserSupported()) {
      this.initPlayer();
    } else {
      console.error("Browser not supported!");
    }
  }
  initPlayer() {
    var player = new shaka.Player(this.refs.video);
    player.addEventListener("error", this.onErrorEvent);
    player
      .load(this.props.VideoUrl)
      .then(function() {
        console.log("The video has now been loaded!");
      })
      .catch(this.onError);
  }

  onErrorEvent(event) {
    this.onError(event.detail);
  }

  onError(error) {
    console.error("Error code", error.code, "object", error);
  }

  componentWillUnmount() {}

  render() {
   console.log("main", this.props.VideoUrl);
    return (
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <h3 className="popup__title">{this.props.title}</h3>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="common-flex">
          <video
            ref="video"
            width="600"
            poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
            controls
            autoPlay
          />
        </Col>
      </Row>
    );
  }
}

export default Video;
