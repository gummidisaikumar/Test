import React from "react";

import RenderPage from "../../Customcomponents/Common/RenderPage/RenderPage";
import Strip from '../../Customcomponents/Common/Strip/Strip';

class LatestMusic extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <RenderPage className="render-page" containerType="container-fluid">
        <Strip className="strip" containerType="container-fluid">
          <h1>LatestMusic</h1>
        </Strip>
      </RenderPage>
    );
  }
}

export default LatestMusic;
