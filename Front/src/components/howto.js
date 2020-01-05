import React, { Component } from 'react'
import launch from '../GIF/LaunchFront.gif';
import launchNgrok from '../GIF/LaunchNgrok.gif'
import launchNgrokBack from '../GIF/LaunchNgrokBack.gif'
import https from '../Images/ngrok3000.png'

export class howto extends Component {
    render() {
        const introduction = ['The purpose to this project is to create a web page dedicated to an overview of WebRTC functionnalities. This part will explain how to use and deploy the demonstration part and the project itself, so it can work with three entities : 2 clients and 1 server.'];
        const prerequisites = ['Before using and starting and retrieving the project some prerequisites are mandatory :']
        const steps = ['The steps are divided into three parts. First, it consists of installing the prerequisites then retrieving the project (Front & Back).']

        const frontIntro = ['After cloning the repo, go to the front folder WebRTC/Front : ']

        const backIntro = ['After cloning the repo, go to the back folder WebRTC/Back : ']

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
                            <li style={{ "text-indent": "50px" }}> <em>Ngrok</em> which provides secure URL to your localhost server through any NAT or firewall</li>
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
                            <li style={{ "text-indent": "50px" }}> <em></em> <strong> Step 2 : </strong> Installing <em>Ngrok</em> </li>
                            <p style={{ "text-indent": "80px" }}> Download the zip with the following link : <a href="https://ngrok.com/download"> https://ngrok.com/download </a></p>

                            {/* --------- Unzip/Authenticate --------- */}
                            <ul style={{ "text-indent": "90px" }}>
                                <li>
                                    <p> Unzip the file : </p>
                                    <p className="code">$ unzip /path/to/ngrok.zip</p>
                                </li>
                                <li>
                                    <p> Authenticate yourself after <a href="https://dashboard.ngrok.com/signup"> signing up </a> to ngrok : </p>
                                    <p className="code">$ ./ngrok authtoken &lt;YOUR_AUTH_TOKEN&gt;</p>
                                </li>
                            </ul>

                            {/* --------- Step 3 : Cloning project --------- */}
                            <li style={{ "text-indent": "50px" }}> <em></em> <strong> Step 3 : </strong> Cloning the project </li>
                            <p className="code">$ git clone <a href="https://github.com/VideoStreamingEnseirb/WebRTC.git">https://github.com/VideoStreamingEnseirb/WebRTC.git</a></p>

                        </ul>
                    </p>

                    <br />
                    {/* --------- Back deployment --------- */}
                    <h5>Back deployment</h5>
                    <hr></hr>


                    {/* --------- 1. Start the server --------- */}
                    <div style={{ "text-indent": "20px" }}>
                        <h6><strong>1. Start the server</strong></h6>
                    </div>


                    <div>
                        {/* --------- Steps to deploy the server --------- */}
                        <p className="card-text mr-3 pl-5">{frontIntro}</p>
                        <p className="code">$ cd /path_to_repo/WebRTC/Back </p>

                        <p className="card-text mr-3 pl-5">Then, start the server with : </p>
                        <p className="code">$ node index.js </p>

                        <p className="card-text mr-3 pl-5">You should see the following lines prompted in your terminal : </p>
                        {/* Add node index.js terminalizer*/}
                        <img className="img-fluid mx-auto d-block" src={launch} alt="FrontLaunch" style={{ "width": "80%" }}></img>

                    </div>


                    {/* --------- 2. Allowing website --------- */}
                    <div style={{ "text-indent": "20px" }} className="pt-3">
                        <h6><strong>2. HTTPS without certificate</strong></h6>
                    </div>


                    <div>
                        {/* --------- NGROK --------- */}
                        <p className="card-text mr-3 pl-5" >Go to the folder where you downloaded Ngrok and write the following command : </p>
                        <p className="code">$ ./ngrok http 6503 </p>

                        <p className="card-text mr-3 pl-5" >You should see the following lines prompted in your terminal : </p>
                        <img className="img-fluid mx-auto d-block" src={launchNgrokBack} alt="FrontLaunch" style={{ "width": "80%" }}></img>

                    </div>


                    {/* --------- 3. Link Back and Front--------- */}
                    <div style={{ "text-indent": "20px" }} className="mt-3">
                        <h6><strong>3. Link Back to Front</strong></h6>
                    </div>

                    <div>
                        {/* --------- Change link in demo.js--------- */}
                        <p className="card-text mr-3 pl-5" >Open the file <strong>/path_to_repo/WebRTC/Front/src/component/demo.js</strong>, with visual studio code for instance </p>
                        <p className="code">$ code /path_to_repo/WebRTC/Front/src/component/demo.js</p>
                        <p className="card-text mr-3 pl-5" >Go to line 41 and change the <em>socketURL</em> with the link provided by ngrok which is <strong>4b131a57.ngrok.io</strong> in this case</p>
                        <p className="code"> socketURL: "4b131a57.ngrok.io"</p>
                    </div>


                    <br />
                    {/* --------- Front deployment --------- */}
                    <h5>Front deployment</h5>
                    <hr></hr>
                    {/* --------- 1. Start the user Interface --------- */}
                    <div style={{ "text-indent": "20px" }}>
                        <h6><strong>1. Start the User Interface (UI)</strong></h6>
                    </div>


                    <div>
                        {/* --------- Steps to deploy the UI --------- */}
                        <p className="card-text mr-3 pl-5" >{frontIntro}</p>
                        <p className="code">$ cd /path_to_repo/WebRTC/Front </p>

                        <p className="card-text mr-3 pl-5" >Then, start the user interface with : </p>
                        <p className="code">$ npm start </p>

                        <p className="card-text mr-3 pl-5" >You should see the following lines prompted in your terminal : </p>
                        <img className="img-fluid mx-auto d-block" src={launch} alt="FrontLaunch" style={{ "width": "80%" }}></img>

                        <p className="card-text mr-3 pl-5" >If no pages had been opened then go to your browser on <a href="http://localhost:3000">localhost:3000</a>, you should see the application running.</p>
                    </div>


                    {/* --------- 2. Allowing website --------- */}
                    <div style={{ "text-indent": "20px" }} className="pt-3">
                        <h6><strong>2. HTTPS without certificate</strong></h6>
                    </div>


                    <div>
                        {/* --------- Steps to deploy the UI --------- */}
                        <p className="card-text mr-3 pl-5" >Go to the folder where you downloaded Ngrok and write the following command : </p>
                        <p className="code">$ ./ngrok http 3000 </p>

                        <p className="card-text mr-3 pl-5" >You should see the following lines prompted in your terminal : </p>
                        <img className="img-fluid mx-auto d-block" src={launchNgrok} alt="FrontLaunch" style={{ "width": "80%" }}></img>

                        <p className="card-text mr-3 pl-5"> Afterwards, go to the link provided by ngrok in https, in our case <strong>https://bdac2d87.ngrok.io</strong> which is link to our localhost:3000. You should be able to retrieve the same site as the one in localhost:3000 but now the site is in https.</p>
                        <img className="img-fluid mx-auto d-block" src={https} alt="FrontLaunch" style={{ "width": "80%" }}></img>

                    </div>


                    <br />
                    {/* --------- Demonstration --------- */}
                    <h5>Demonstration</h5>
                    <hr></hr>




                </div>
            </div>
        )
    }
}

export default howto
