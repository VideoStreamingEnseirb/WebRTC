import React, { Component } from 'react'
import launch from '../GIF/LaunchFront.gif';


export class howto extends Component {
    render() {
        const introduction = ['The purpose to this project is to create a web page dedicated to an overview of WebRTC functionnalities. This part will explain how to use and deploy the demonstration part and the project itself, so it can work with three entities : 2 clients and 1 server.'];
        const prerequisites = ['Before using and starting and retrieving the project some prerequisites are mandatory :']
        const steps = ['The steps are divided into three parts. First, it consists of installing the prerequisites then retrieving the project (Front & Back).']
        return (
            <div className="card">
                <div className="card-header">
                    HowTo
            </div>
                <div className="card-body">
                    {/* --------- WebRTC Introduction --------- */}
                    <h4>
                        WebRTC -
                    <small className="text-muted"> Conference Application</small>
                        <hr></hr>

                    </h4>
                    <p className="card-text text-justify ml-3 mr-3">
                        {introduction}
                    </p>
                    <br />

                    {/* --------- Getting started --------- */}
                    <h5>
                        Getting started
                    </h5>
                    <hr></hr>

                    {/* --------- 1. Prerequisites --------- */}
                    <div style={{ "text-indent": "20px" }}>
                        <h6><strong>1. Prerequisites</strong></h6>
                    </div>
                    <p className="card-text">
                        <ul>{prerequisites}
                            <li style={{ "text-indent": "50px" }}> <em>Node.js</em> with Version greater than 6.0 </li>
                            <li style={{ "text-indent": "50px" }}> <em>Ngrok</em> providing secure URL to your localhost server through any NAT or firewall</li>
                        </ul>
                    </p>

                    {/* --------- 2. Installing --------- */}
                    <div style={{ "text-indent": "20px" }}>
                        <h6><strong>2. Installing</strong></h6>
                    </div>
                    <p className="card-text mr-3">
                        <ul>{steps}
                            {/* --------- Step 1 : NodeJs --------- */}
                            <li style={{ "text-indent": "50px" }}> <em></em> <strong> Step 1 : </strong> Installing <em>Node.js </em></li>
                            <p className="code">$ apt-get install node </p>

                            {/* --------- Step 2 : Installing ngrok --------- */}
                            <li style={{ "text-indent": "50px" }}> <em></em> <strong> Step 2 : </strong> Installing ngrok </li>
                            <p style={{ "text-indent": "80px" }}> Download the zip with the following link : <a href="https://ngrok.com/download"> https://ngrok.com/download </a></p>

                            {/* --------- Unzip/Authenticate --------- */}
                            <ul style={{ "text-indent": "90px" }}>
                                <li>
                                    <p> Unzip the file : </p>
                                    <p className="code2">$ unzip /path/to/ngrok.zip</p>
                                </li>
                                <li>
                                    <p> Authenticate yourself after <a href="https://dashboard.ngrok.com/signup"> signing up </a> to ngrok : </p>
                                    <p className="code2">$ ./ngrok authtoken &lt;YOUR_AUTH_TOKEN&gt;</p>
                                </li>
                            </ul>



                            {/* --------- Step 3 : Cloning project --------- */}
                            <li style={{ "text-indent": "50px" }}> <em></em> <strong> Step 3 : </strong> Cloning the project </li>
                            <p className="code">$ git clone <a href="https://github.com/VideoStreamingEnseirb/WebRTC.git">https://github.com/VideoStreamingEnseirb/WebRTC.git</a></p>

                        </ul>
                    </p>

                    <br />
                    {/* --------- Front deployment --------- */}
                    <h5>Front deployment</h5>
                    <hr></hr>

                    <img className="img-fluid mx-auto d-block" src={launch} alt="FrontLaunch" style={{ "width": "80%" }}></img>


                </div>
            </div>
        )
    }
}

export default howto
