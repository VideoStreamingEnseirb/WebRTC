import React, { Component } from 'react'



export class Biblio extends Component {
  render() {


    return (
      <div className="card">
        <div className="card-header">
          Bibliography
            </div>
        <div className="card-body">
          <div className="card-text ml-3 mr-3">
              <p>
              In this section, are listed links which have been used to understant WebRTC protocol and to redact this web page.
              </p>

          </div>

          <ul>
            <li> The link to the official WebRTC page for explanations:  <br />  <a href="https://webrtc.org/start/"> https://webrtc.org/start/ </a></li>
            <li> This page allows us to understand the WebRTC project in his globality: <br /><a href="https://en.wikipedia.org/wiki/WebRTC"> https://en.wikipedia.org/wiki/WebRTC </a>  </li>
            <li> This site was usefull to create our web application: <br />  <a href="https://codeutopia.net/blog/2016/02/08/using-webrtc-and-react-to-build-a-basic-chat-server/"> https://codeutopia.net/blog/2016/02/08/using-webrtc-and-react-to-build-a-basic-chat-server/ </a></li>
            <li> Usefull tips to implement WebRTC:  <br />  <a href="https://www.html5rocks.com/en/tutorials/webrtc/basics/"> https://www.html5rocks.com/en/tutorials/webrtc/basics/ </a></li>
            <li> Website that justifies the creation of WebRTC:  <br />  <a href="https://bloggeek.me/massive-applications-using-webrtc/"> https://bloggeek.me/massive-applications-using-webrtc/ </a></li>

          </ul>
        </div>
      </div>






    )
  }
}

export default Biblio
