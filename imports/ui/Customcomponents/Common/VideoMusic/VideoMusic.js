import React from "react";
import PropTypes from "prop-types";


import { Row, Col } from "reactstrap";
import DisplayData from '../DisplayData/DisplayData';
import CloudinaryImage from "../CloudinaryImage/CloudinaryImage";
import VideoMusicItem from "../../../Customcomponents/Common/VideoMusicItem/VideoMusicItem";

class VideoMusic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        {this.props.data
          ? this.props.data.map((item, index) => (
              <Col xl={3} key={index}>
                <DisplayData key={item.id} {...item}/>
              </Col>
            ))
          : null}
      </Row>
    );
  }
}

VideoMusic.propTypes = {
  data: PropTypes.array.isRequired
};

export default VideoMusic;

