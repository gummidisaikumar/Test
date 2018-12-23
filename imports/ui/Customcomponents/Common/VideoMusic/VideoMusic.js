import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "reactstrap";
import CloudinaryImage from '../CloudinaryImage/CloudinaryImage';

class VideoMusic extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.data);
    return (
      <Row>
        {this.props.data
          ? this.props.data.map(item => (
              <Col xl={3} key={item.id}>
              <CloudinaryImage publicId={item.image}/>
               <p>{item.title}</p>
               <p>{item.subTitle}</p>
               <p>{item.video}</p> 
              </Col>
            ))
          : null}
      </Row>
    );
  }
}

VideoMusic.propTypes = {
  data: PropTypes.array.isRequired,
};

export default VideoMusic;
