import React from "react";
import "webrtc-adapter";
import faker from "faker";
import SignalingConnection from "./SignalingConnection";
import PeerConnection from "./PeerConnection";
import Logs from "./logs";
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
global.a='';
class demo extends React.Component {
    state = {
        startDisabled: true,
        targetUsername: '',
        callDisabled: true,
        hangUpDisabled: true,
        localStream: null,
        clientID: new Date().getTime() % 1000,
        username: faker.internet.userName(),
        userList: [],
        logs:[],
    };

    localVideoRef = React.createRef();
    remoteVideoRef = React.createRef();
    peerConnection = null;
    signalingConnection = null;

    setUsername = () => {
        const { username, clientID } = this.state;
        this.signalingConnection.sendToServer({
            name: username,
            date: Date.now(),
            id: clientID,
            type: "username"
        });
    };

    changeUsername = event =>
        this.setState({
            username: event.target.value
        });

    componentDidMount() {
        this.signalingConnection = new SignalingConnection({
            socketURL: "localhost:6503",
            onOpen: () =>
                this.setState({
                    startDisabled: false
                }),
            onMessage: this.onSignalingMessage
        });
        // fetch('http://127.0.0.1:4000')
        // .then(function(response) {
        //   if (!response.ok) {
        //     throw Error(response.statusText);
        //   }
        //   // Read the response as json.
        //   console.log(response);
        // //   return response.json();
        // }).then(function(response){
        //     this.setState({
        //         logs: response
        //         })}
        // )
        // .then(function(responseAsJson) {
        //   // Do stuff with the JSON
        //   console.log(responseAsJson);
        // })
        // .catch(function(error) {
        //   console.log('Looks like there was a problem: \n', error);
        // });
        // fetch('http://127.0.0.1:4000')
        // .then((response)=> {
        //   if (!response.ok) {
        //     throw Error(response.statusText);
        //   }
        //   // Read the response as json.
        // //   return response.json();
        //     console.log(response);
        //     this.setState({
        //         logs: response.text()
        //         })}
        // )
        // .catch((error) =>{
        //   console.log('Looks like there was a problem: \n', error);
        // });
        window.setInterval(function(){
            fetch('http://127.0.0.1:4000',{method:"get"} ).then((function(response) 
            {
                response.text().then(function(text)      
                {
                    document.querySelector("#klog").innerHTML=text}
                );
        })
        );
        }, 2000);


//         fetch('http://127.0.0.1:4000',{method:"get"} ).then((function(response) 
//     {
//         response.text().then(function(text)      
//         {
//             document.querySelector("#klog").innerHTML=text}
//         );
// })
// );
    //    fetch('http://127.0.0.1:4000',{method:"get"} )
    //    .then(
    //      (res) => {
    //        this.setState({
    //          logs: res
    //        });
    //      },
    //      (err) => {
    //        this.setState({
    //          logs: JSON.stringify(err)
    //        });
    //      }
    //    );

    }

    onSignalingMessage = msg => {
        console.log(msg);
        switch (msg.type) {
            case "id":
                this.setState({
                    clientID: msg.id
                });
                this.setUsername();
                break;

            case "rejectusername":
                this.setState({
                    username: msg.name
                });
                console.log(
                    `Your username has been set to <${
                    msg.name
                    }> because the name you chose is in use`
                );
                break;

            case "userlist": // Received an updated user list
                this.setState({
                    userList: msg.users
                });
                break;

            // // Signaling messages: these messages are used to trade WebRTC
            // // signaling information during negotiations leading up to a video
            // // call.

            case "connection-offer": // Invitation and offer to chat
                this.createPeerConnection();
                this.peerConnection.connectionOffer(msg);
                break;
        }
    };

    gotStream = stream => {
        console.log("YEEESSS");
        this.localVideoRef.current.srcObject = stream;
        this.setState({
            callDisabled: false,
            localStream: stream
        });
    };
    gotRemoteTrack = event => {
        console.log("YEEESSS");
        let remoteVideo = this.remoteVideoRef.current;

        if (remoteVideo.srcObject !== event.streams[0]) {
            remoteVideo.srcObject = event.streams[0];
        }

        this.setState({
            hangUpDisabled: false
        });
    };
    gotRemoteStream = event => {
        console.log("YEEESSS");

        this.remoteVideoRef.current.srcObject = event.stream;
        this.setState({
            hangUpDisabled: false
        });
    };

    initMedia = () => {
        this.setState({
            startDisabled: true
        });
        navigator.mediaDevices
            .getUserMedia({
                audio: true,
                video: true
            })
            .then(this.gotStream)
            .catch(e => alert("getUserMedia() error:" + e.name));
    };

    call = (user) => {
        this.setState({
            targetUsername: user
        }, function () {
            console.log("USERNAME3 : " + this.state.targetUsername)
            this.createPeerConnection();
        });

    };

    hangUp = () => {
        console.log("YEEESSS");
        this.signalingConnection.sendToServer({
            name: this.state.username,
            target: this.state.targetUsername,
            type: "hang-up"
        });
        this.peerConnection.close();
    };

    createPeerConnection = () => {
        if (this.peerConnection) return;
        console.log("USER4 : " + this.state.targetUsername)
        this.peerConnection = new PeerConnection({
            gotRemoteStream: this.gotRemoteStream,
            gotRemoteTrack: this.gotRemoteTrack,
            signalingConnection: this.signalingConnection,
            onClose: this.closeVideoCall,
            localStream: this.state.localStream,
            username: this.state.username,
            targetUsername: this.state.targetUsername
        });

        //GROS PROBLEME NE SET PAS LE TARGET USERNAME


    };

    closeVideoCall = () => {
        this.remoteVideoRef.current.srcObject &&
            this.remoteVideoRef.current.srcObject
                .getTracks()
                .forEach(track => track.stop());
        this.remoteVideoRef.current.src = null;

        this.setState({
            targetUsername: null,
            callDisabled: false
        });
    };

    render() {
        const {
            startDisabled,
            callDisabled,
            hangUpDisabled,
            username,
            userList
        } = this.state;

        return (
            <div className="card">
                <div className="card-header">
                    Demonstration
                </div>
                <div className="card-body">
                    <div className="logs" id="klog">
                        <BrowserRouter>
                            <Route path="logs" exact component={Logs}/>
                        </BrowserRouter>
                       Here are the logs 
                    </div>
                    <div className="container-fluid center">
                        <div>
                            <div>
                                Username:{" "}
                                <input
                                    type="text"
                                    value={username}
                                    onChange={this.changeUsername}
                                />
                                <button onClick={this.setUsername}> Set Username </button>
                            </div>
                            <video
                                ref={this.localVideoRef}
                                autoPlay
                                muted
                                style={{
                                    width: "240px",
                                    height: "180px"
                                }}
                            />
                            <video
                                ref={this.remoteVideoRef}
                                autoPlay
                                muted
                                style={{
                                    width: "240px",
                                    height: "180px"
                                }}
                            />
                            <div>
                                <button onClick={this.initMedia} disabled={startDisabled}>
                                    Init Media
                    </button>
                                <button onClick={this.hangUp} disabled={hangUpDisabled}>
                                    Hang Up
                    </button>
                            </div>
                            <div>
                                <ul>
                                    {userList.map(user => (
                                        <li key={user}>
                                            {user}
                                            {"  "}
                                            {user !== username ? (
                                                <button
                                                    onClick={() => this.call(user)}
                                                    disabled={callDisabled}
                                                >
                                                    Call
                                    </button>
                                            ) : null}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default demo
