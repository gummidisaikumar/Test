import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import { Row, Col } from "reactstrap";

import CloudinaryImage from "../CloudinaryImage/CloudinaryImage";
import VideoMusicItem from '../VideoMusicItem/VideoMusicItem';

class DisplayData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const { image, title, id, subTitle } = this.props;
    return (
      <Row>
        <Col xl={12} onClick={this.openModal}>
          <CloudinaryImage publicId={image} />
          <Modal isOpen={this.state.modalIsOpen} 
            onRequestClose={this.closeModal}
           contentLabel={title}>
            <VideoMusicItem
              onClick={this.closeModal}
              id={id}
              image={`${image}`}
              title={title}
            />
          </Modal>
        </Col>
        <Col xl={12}>
          <p className="p-medium gallery-title">{title}</p>
          <p className="p-medium gallery-title">{subTitle}</p>
        </Col>
      </Row>
    );
  }
}

DisplayData.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  subTitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default DisplayData;
