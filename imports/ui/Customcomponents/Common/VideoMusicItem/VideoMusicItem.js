import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import Video from '../Video/Video';

class VideoMusicItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col xs={10} sm={10} md={12} lg={10} xl={10}>
          <h3 className="popup__title">{this.props.title}</h3>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2} xl={2} onClick={this.props.onClose}>
          <h3>Close</h3>
        </Col>
        <Col xl={12} className="common-flex">
            <Video/>
        </Col>
      </Row>
    );
  }
}

VideoMusicItem.propsTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};

export default VideoMusicItem;
