import React, { Component } from 'react'

import InitiationPhase from '../Images/InitiationPhase.png'
import PeerCommunication from '../Images/PeerCommunication.png'

import MediaProtocolStack from '../Images/MediaProtocolStack.png'
import SignallingProtocolStack from '../Images/SignallingProtocolStack.png'





export class presentation extends Component {


    render() {


        return (
            <div className="card">
                <div className="card-header">
                    WebRTC <em>(Web Real-Time Communication)</em>
                </div>


                <div className="card-body">

                    <hr></hr>
                    <h4 style={{ "text-align": "center" }}>
                        Introduction
                                 <hr></hr>
                    </h4>


                    <p className="card-text text-justify ml-3 mr-3">
                        With the creation of rich web pages, the development of animations and the apparition of new functionality like drag
                         and drop system to share files on websites, the development of <strong>real-time data</strong> sharing and bidirectional <strong>
                            video flux </strong> lead
to the creation of a fast and almost real-time protocol.
Direct exchanges between navigators already existed thanks to the creation of different plugins like Adobe Flash or Microsoft Active X.
                         Yet, these proprietary solutions weren’t <strong>standardized</strong> and thus, because of the diversity, not really useful.
                         To overcome this lack of coherence <strong><a href="https://webrtc.org">WebRTC</a></strong> <em>(Web Real-Time Communication)</em> has been created by Justin Uberti and Peter Thatcher.
                    </p>
                    <br />


                    <hr></hr>
                    <h4 style={{ "text-align": "center" }}>
                        Technically detailed figures
                        </h4>
                    <hr></hr>

                    <p> <strong>WebRTC</strong> <em>(Web Real-Time Communication)</em> main purpose is to provide <strong>real-time communication</strong>, it is an API that has three main services and is based on a Javascript API. </p>

                    <div className="card-text">
                        <p>The three services provided by WebRTC are the following ones :</p>
                        <ul>
                            <li className="mb-2"> <strong> MediaStream </strong> : MediaStream contains MediaStreamTrack objects which can either be audio or video tracks. For instance, it is use for retrieving the live flow of a camera or even a stored media.</li>
                            <li className="mb-2"> <strong> RTCPeerConnection : </strong> This interface is used to create a peer-to-peer connection directly between browser. For instance, it can be used to create a video conference with extremely low latency. </li>
                            <li className="mb-2"> <strong> RTCDataChannel : </strong> This interface enable to create a channel between two peers/browsers but this time the data format can be chosen by the user. </li>
                        </ul>

                    </div>
                    <p>In order to launch a peer-to-peer communication, it involves two different entities : <em>client</em> and <em>server</em>. The server is here to initialize the connection between the two peers before they communicate with each other directly by sharing data, audio and even video stream. </p>
                    <p>Thus, two steps can be distinguished : the <strong>initiation phase</strong> and the <strong>peer communication phase</strong>. As the two phases are completely different, the protocol stack are not the same. Each phase and protocol stack will be described precisely in this part. </p>


                    <div class="row mb-3">
                        <div className="col-md card mr-2">
                            <a href={InitiationPhase}><img className="img-fluid mx-auto d-block mt-4 mb-2" src={InitiationPhase} alt="FrontLaunch" style={{ "width": "100%" }}></img></a>
                            <p className="mt-5 text-center"><strong>Figure 1</strong> : Initiation Phase</p>
                        </div>
                        <div className="col-md card">
                            <a href={SignallingProtocolStack}><img className="img-fluid mx-auto d-block mt-4" src={SignallingProtocolStack} alt="FrontLaunch" style={{ "width": "50%" }}></img></a>
                            <p className="text-center"><strong>Figure 2</strong> : Initiation phase protocol Stack</p>
                        </div>
                    </div>

                    <p>The first phase is called the <strong>initiation phase</strong> and it involves the two peers who want to communicate with each other and a Web Server. The web browser of both peers connects to the same server to download in their local context an application based on the WebRTC API. The server then supervises the exchanges for the connection of peer 1 and 2.  </p>
                    <p>This part are broken down into four parts as can be seen in <span className="figure">Figure 1:</span></p>
                    <ul>
                        <li className="mb-2"> <span className="client1">Client 1</span> send a connection request to <span className="client2">Client 2</span></li>
                        <li className="mb-2"> Web server relays the request to <span className="client2">Client 2</span> </li>
                        <li className="mb-2"> <span className="client2">Client 2</span> send a connection request to <span className="client1">Client 1</span> </li>
                        <li className="mb-2"> Web server relays the request to <span className="client2">Client 2</span></li>

                    </ul>
                    <p> As it is depicted in <span className="figure">Figure 2</span>, TCP is used for the signalling and Web sockets among SEE, XHR can be used to send information to the Web Server. Then, through <strong>SDP </strong> <em>(Session Description Protocol)</em>, the configuration of one peer is sent to the other to allow the second peer to send data with the right configuration.</p>
                    <div class="row mb-3">
                        <div class="col-md card mr-2">
                            <a href={PeerCommunication}><img className="img-fluid mx-auto d-block mt-3 mb-2" src={PeerCommunication} alt="FrontLaunch" style={{ "width": "100%" }}></img></a>
                            <p className="text-center mt-5"><strong>Figure 3</strong> : Peer-to-peer communication</p>
                        </div>
                        <div class="col-md card">
                            <a href={MediaProtocolStack}><img className="img-fluid mx-auto d-block mt-3" src={MediaProtocolStack} alt="FrontLaunch" style={{ "width": "100%" }}></img></a>
                            <p className="text-center mt-5"><strong>Figure 4</strong> : Peer-to-peer communication protocol stack</p>
                        </div>
                    </div>

                    <p>Once the server requests are done and the connection is accepted, <span className="client1">client 1 </span>and <span className="client2">client 2</span> establish a bidirectional communication where data will transit.</p>


                    <p>Yet, in most use cases the two peers are not in the same network and are separated by NAT’s and even Firewalls. That is why WebRTC also has a set of tools that perpetuates the peer communication (<span className="figure">Figure 3</span>). Indeed, the three entities are now supported by two other servers that enable the peer to peer connection. </p>
                    <p> Specification of the two other servers :</p>
                    <ul>
                        <li className="mb-2"> <strong> STUN </strong> <em> (Session Traversal Utilities for NAT) </em>   : STUN servers are used to associate public addresses of peers and port associated for the communication. Thus, clients can talk directly to each other. It also allows us to bypass router restrictions.
                        </li>
                        <li className="mb-2"> <strong> TURN </strong> <em> (Traversal Using Relays around NAT) </em> : TURN servers are needed during the data transfer to allow recovering connection between peers in case of loss of the initial connection.
                        </li>
                    </ul>
                    <p>WebRTC also deals with security and disponibility concerns, as show in the media protocol stack figure, it uses multiple protocol for this purpose (<span className="figure">Figure 4</span>):
                        <ul className="mt-2">
                            <li className="mb-2"> <strong> DTLS</strong> <em>(Datagram Transport Layer Security) </em>: This protocol is used to encrypt the data between the peers which is mandatory for WebRTC</li>
                            <li className="mb-2"> <strong> SRTP </strong> <em>(Secure Real-time Transport Protocol) </em>  : This protocol adds encoding and authentication to restrict attacks by DOS, it encrypts the media stream too.
                            </li>
                            <li className="mb-2">
                                <strong>SCTP </strong> <em>(Stream Control Transmission Protocol)</em>  : Used for congestion control and support for multiple channels and streams
                            </li>
                        </ul>
                    </p>
                    <p>Moreover, in general UDP is used for peer-to-peer but sometimes it is not possible so TCP is used instead. g</p>


                    <hr></hr>


                    <div class="row mb-5">





                        <div class="col-md">
                            <h5 style={{ "text-align": "center" }}>
                                Advantages and drawbacks
                                   <hr></hr>
                            </h5>
                            <p className="card-text text-justify ml-3 mr-3">
                                <ul>
                                    <li style={{ "text-indent": "5px" }} className="mb-2">

                                        <strong>Advantages</strong>:

                                        <ul>
                                            <li>Standardized protocol using both peer to peer and server model</li>
                                            <li>Low latency for live video conference</li>
                                            <li>
                                                Code open source
                                            </li>
                                        </ul>

                                    </li>


                                    <li style={{ "text-indent": "5px" }}>
                                        <strong>Disadvantages: </strong>{"\n"}
                                        <ul>
                                            <li>
                                                Security (js app, personal data)
                                            </li>
                                            <li>
                                                Ip exposed
                                            </li>
                                            <li>
                                                Uses UDP protocol, no packet loss check
                                            </li>
                                            <li>
                                                No adaptive bitrate
                                            </li>
                                            <li>
                                                Not compatible with all browsers
                                            </li>
                                        </ul>

                                    </li>
                                </ul>
                            </p>
                        </div>



                        <div class="col-md">
                            <h5 style={{ "text-align": "center" }}>
                                Details on use cases and fields of application
                                   <hr></hr>
                            </h5>

                            <div className="card-text text-justify ml-3 mr-3">
                                <p>We can showcase WebRTC technology through multiple applications :</p>
                                <ul>
                                    <li>Voice/Video Chat app </li>
                                    <li>Live drawing app </li>
                                    <li>Broadcast app</li>
                                    <li>Voice/Chat translator</li>
                                </ul>
                                <p>Every app that needs to send and receive data in real time or at least close to real time.</p>
                                <p>
                                    In just eight years of existence, WebRTC is now massively used for multiple
                                    applications. Indeed, this API that enabled people to communicate in real-time
                                    directly through web applications and namely in peer to peer mode is now used in
                                    <em>Google Meet, Facebook Messenger</em> and even <em>Discord</em>.
                                </p>

                            </div>



                        </div>


                    </div>

                    <hr></hr>
                    <h4 style={{ "text-align": "center" }}>
                        Existing projects and links
                                <hr></hr>
                    </h4>
                    <div className="card">

                        <div className="card-body">
                            <p className="card-text text-justify ml-3 mr-3">
                                In this section, are listed links to existing WebRTC projects and applications.
                             </p>
                            <ul>
                                <li > Official WebRTC website :  <br /> <a href="https://webrtc.org">https://webrtc.org</a></li>
                                <li> This site contains a lot of WebRTC app : <br /> <a href="https://www.webrtc-experiment.com">https://www.webrtc-experiment.com</a></li>
                                <li> A cool WebRTC app that allows you to record your video stream: <br /> <a href="https://www.webrtc-experiment.com/RecordRTC/">https://www.webrtc-experiment.com/RecordRTC/</a></li>
                                <li> WebRTC source code : <br /> <a href="https://webrtc.googlesource.com/src">https://webrtc.googlesource.com/src</a></li>
                                <li>Simplify the development of peer-to-peer with WebRTC : <br/> <a href="https://peerjs.com/">https://peerjs.com/</a></li>
                            </ul>
                        </div>
                    </div>



                </div>
            </div>












        )
    }
}

export default presentation
