import React, { Component } from 'react'

import ReactDOM from "react-dom";



const constraints = {
    video : true,
    audio : true
}



export class demo extends Component {

    componentDidMount() {
        const node = ReactDOM.findDOMNode(this);

        if (node instanceof HTMLElement) {
            var video = node.querySelector('video');
        }
        console.log(node)
        console.log(video)
        navigator.mediaDevices.getUserMedia(constraints).
        then((stream) => {
            video.srcObject = stream
    
        })
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Demonstration
            </div>
                <div className="card-body">
                    <p className="card-text">Bon courage pour cette partie.</p>
                    <div id="container-fluid center">
                        <video autoPlay></video>
                    </div>
                </div>
            </div>

        )
    }
}

export default demo
