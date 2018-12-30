import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Modal , ModalHeader, ModalBody} from "reactstrap";

import CloudinaryImage from "../CloudinaryImage/CloudinaryImage";
import Video from '../Video/Video';
import publicIds from '../../../constants/cloudinary_static_public_ids';

class DisplayData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { image, title, id, subTitle, video, views, daysMonths } = this.props;
    return (
      <Row>
        <Col xl={12} onClick={this.toggle} className="img__container">
          <CloudinaryImage publicId={image} />
          <Modal
            isOpen={this.state.modal}
            fade={false}
            toggle={this.toggle}
            className="modal__container-position"
            modalClassName="modal__container"
            contentClassName= "modal__content-container"
          >
            <ModalHeader toggle={this.toggle} className="modal__title">{title}</ModalHeader>
            <ModalBody>
              <Video id={id} VideoUrl={video}/>
            </ModalBody>
          </Modal>
        </Col>
        <Col xl={12}>
          <h4 className="h4-small gallery-title title-overflow-ellipsis pt-4px pb-4px">{title}</h4>
          <p className="p-medium gallery-sub-title pt-2px pb-2px title-dim-grey common-flex justify-content-start">
            {subTitle}
            <CloudinaryImage publicId={publicIds.checkIcon} classNames="circle-icon__width"/>
          </p>
          <p className="p-medium gallery-sub-title pt-2px pb-2px title-dim-grey common-flex align-item-unset justify-content-start">{views} <font className="pt-4px pb-4px pl-4px pr-4px">*</font> {daysMonths} ago</p>
        </Col>
      </Row>
    );
  }
}

DisplayData.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  subTitle: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  daysMonths: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  modalClassName: PropTypes.string,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  wrapClassName: PropTypes.string,
};

export default DisplayData;
