import React from 'react';
import shaka from 'shaka-player'

var manifestUri = '//storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';

class Video extends React.Component{
   constructor(props){
      super(props) 
   } 
   componentDidMount() {
    shaka.polyfill.installAll();
    if (shaka.Player.isBrowserSupported()) {
      this.initPlayer();
    } else {
      console.error('Browser not supported!');
    }
  }
  
  initPlayer(){
    var player = new shaka.Player(this.refs.video);
    player.addEventListener('error', this.onErrorEvent);
    player.load(manifestUri).then(function() {
      console.log('The video has now been loaded!');
    }).catch(this.onError); 
  }
  
  onErrorEvent(event) {
    this.onError(event.detail);
  }
  
  onError(error) {
    console.error('Error code', error.code, 'object', error);
  }
  
  componentWillUnmount() {
  }

  render(){
      return(
        <video ref="video"
        width="600"
            poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
        controls autoPlay>
        </video> 
      )
  } 
}
export default Video;