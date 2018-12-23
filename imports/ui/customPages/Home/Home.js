import React from "react";

import RenderPage from "../../Customcomponents/Common/RenderPage/RenderPage";
import Strip from "../../Customcomponents/Common/Strip/Strip";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <RenderPage className="render-page" containerType="container-fluid" >
        <Strip className="strip" containerType="container-fluid" id="home">
          <h1>Home</h1>
        </Strip>
        <Strip className="strip" containerType="container-fluid" id="latest-music">
          <h1>LatesMusic</h1>
        </Strip>
        <Strip className="strip" containerType="container-fluid" id="trailers">
          <h1>Trailers</h1>
        </Strip>
      </RenderPage>
    );
  }
}

export default Home;
