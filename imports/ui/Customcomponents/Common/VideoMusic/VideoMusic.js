import React from "react";
import PropTypes from "prop-types";


import { Row, Col } from "reactstrap";
import DisplayData from '../DisplayData/DisplayData';

class VideoMusic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        {this.props.data
          ? this.props.data.map((item, index) => (
              <Col xl={3} key={index} className="pt-16px pb-16px">
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

