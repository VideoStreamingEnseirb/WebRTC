import React from "react";
import "webrtc-adapter";
import faker from "faker";
import SignalingConnection from "./SignalingConnection";
import PeerConnection from "./PeerConnection";
class demo extends React.Component {
    state = {
        startDisabled: true,
        targetUsername: '',
        callDisabled: true,
        hangUpDisabled: true,
        localStream: null,
        clientID: new Date().getTime() % 1000,
        username: faker.internet.userName(),
        userList: []
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
            socketURL: "54b655cc.ngrok.io",
            onOpen: () =>
                this.setState({
                    startDisabled: false
                }),
            onMessage: this.onSignalingMessage
        });
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
        //console.log("YEEESSS");
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
                    <div className="container-fluid center">
                        <div>
                            <div className="mb-3">
                                Username:{" "}
                                <input
                                    type="text"
                                    value={username}
                                    onChange={this.changeUsername}
                                />
                                <button className="btn btn-dark btn-sm ml-2" onClick={this.setUsername}> Set Username </button>
                            </div>


                            <div className="row">

                                <div className="col-sm">
                                    <p>Local camera : </p>
                                    <video
                                        ref={this.localVideoRef}
                                        autoPlay
                                        style={{
                                            width: "400px",
                                            height: "300px"
                                        }}
                                    />

                                </div>

                                <div className="col-sm">
                                    <p>Remote camera : </p>
                                    <video
                                        ref={this.remoteVideoRef}
                                        autoPlay
                                        style={{
                                            width: "400px",
                                            height: "300px"
                                        }}
                                    />
                                </div>


                            </div>




                            <div>
                                <button className="btn btn-dark btn-sm mr-2" onClick={this.initMedia} disabled={startDisabled}>
                                    Init Media
                    </button>
                                <button className="btn btn-danger btn-sm" onClick={this.hangUp} disabled={hangUpDisabled}>
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
                                                <button className="btn btn-success btn-sm"
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
