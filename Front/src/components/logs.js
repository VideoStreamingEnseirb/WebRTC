import React from "react";
import "webrtc-adapter";
import faker from "faker";
class Logs extends React.Component {
    componentDidMount() {
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
    };
    render() {
        return (
            <div className="card-body">
                    <div className="logs" id="klog">
                       Here are the logs
                    </div>
            </div>
        );
    }
}
export default Logs