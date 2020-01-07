import React, { Component } from 'react'

export class presentation extends Component {
    render() {
        return (




                <div className="card">
                         <div className="card-header">
                             Home WebRTC
                        </div>

                         <div className="card-body">
                            
                             <hr></hr>
                             <h4 style={{"text-align":"center"}}>
                                 Introduction
                                 <hr></hr>
                             </h4>


                             <p className="card-text text-justify ml-3 mr-3">
                             With the creation of rich web pages, the development of animations and the apparition of new functionality like drag
                              and drop system to share files on websites, the development of real-time data sharing and bidirectional video flux lead
                              to the creation of a fast and almost real-time protocol.
                               Direct exchanges between navigators already existed thanks to the creation of different plugins like Adobe Flash or Microsoft Active X.
                              Yet,these proprietary solutions weren’t standardized and thus, because of the diversity, not really useful.
                              To overcome this lack of coherence Web RTC has been created by Justin Uberti and Peter Thatcher.
                              Souce code of Web RTC can be found in the following link : {"\n"}
                              <a href={"https://webrtc.googlesource.com/src"}>https://webrtc.googlesource.com/src </a>
                              </p>
                              <br />


                              <hr></hr>
                             <h4 style={{"text-align":"center"}}>
                                 Technically detailed figures
                                 <hr></hr>
                             </h4>

                             <div class="row mb-5">

                               <div class="col-md">
                               <h5 style={{"text-align":"center"}}>
                                   Technical {"\n"} Specificities
                                   <hr></hr>
                               </h5>
                               <p className="card-text text-justify ml-3 mr-3">
                               WebRTC (Web Real-Time Communication) main purpose is to provide real-time communication,
                               it is an API that has three main services and is based on a Javascript API. Indeed, it involved
                               a minimum of three entities: two peers and one server. The server is here to initialize
                                the connection between the two peers before they communicate with each other directly by sharing data,
                                audio and even video stream.
                               </p>
                               </div>



                               <div class="col-md">
                               <h5 style={{"text-align":"center"}}>
                                   Advantages and drawbacks
                                   <hr></hr>
                               </h5>
                               <p className="card-text text-justify ml-3 mr-3">
                               <ul>prerequisites
                                   <li style={{ "text-indent": "50px" }}>

                                   Advantages:{"\n"}
                                   Standardized protocol{"\n"}
                                   Using both peers to peer and server model{"\n"}

                                   </li>



                                   <li style={{ "text-indent": "50px" }}>
                                   Disadvantages:{"\n"}

                                   Security (js app, personal data){"\n"}
                                   Ip exposed{"\n"}
                                   Uses UDP protocol, no packet loss check{"\n"}
                                   Usage in companies can be difficult (udp and peer to peer, firewall and nat){"\n"}
                                   No adaptive bitrate{"\n"}
                                   </li>
                               </ul>
                               </p>
                               </div>



                               <div class="col-md">
                                <h5 style={{"text-align":"center"}}>
                                  Details on use cases and fields of opplication
                                   <hr></hr>
                                </h5>

                               <p className="card-text text-justify ml-3 mr-3">
                                In just eight years of existence, WebRTC is now massively used for multiple
                                applications. Indeed, this API that enabled people to communicate in real-time
                                directly through web applications and namely in peer to peer mode is now used in
                                Google Meet, Facebook Messenger and even Discord.
                               </p>

                               </div>


                             </div>

                             <hr></hr>
                            <h4 style={{"text-align":"center"}}>
                                Existing projects and links
                                <hr></hr>
                            </h4>




                         </div>
                     </div>












        )
    }
}

export default presentation
