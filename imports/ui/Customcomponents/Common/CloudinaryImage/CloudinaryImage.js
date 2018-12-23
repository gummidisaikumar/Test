import React from "react";
import PropTypes from "prop-types";

import Config from '../../../../api/Services/Integrations/Cloudinary/config';
const cloudName = Config.cloud_name;


import { CloudinaryContext, Image, Transformation } from "cloudinary-react";


class CloudinaryImage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
     const {publicId, classNames, options} = this.props; 
    return (
      <CloudinaryContext cloudName={cloudName}>
        <Image
          sizes="100vw"
          publicId={publicId}
          client_hints="true"
          responsive
          className={`${classNames}`}
        >
          <Transformation {...options} />
        </Image>
      </CloudinaryContext>
    );
  }
}
CloudinaryImage.propTypes = {
  publicId: PropTypes.string,
  classNames: PropTypes.string,
  options: PropTypes.object,
};
CloudinaryImage.defaultProps = {
  publicId: "",
  options: {
    crop: "scale",
    quality: "100",
    dpr: "auto",
    width: "auto",
    fetchFormat: "auto"
  },
  classNames: "",
};

export default CloudinaryImage;
