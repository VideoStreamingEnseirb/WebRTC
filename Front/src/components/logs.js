import React from "react";
import "webrtc-adapter";
import faker from "faker";
class Logs extends React.Component {
    constructor(props) {
        super(props);
    };
    dateOf = (line)=> {
        var liste = line.split(']');
        var date = "<b>"+ liste[0]+']'+"</b>";
        var a ;
        a=String(liste[1]).substring(1,17);
        if(a.localeCompare("Connection close")==0){
            liste[1]='<font color="red">'+liste[1]+'</font>';
        }
        if(a.localeCompare("Received Message")==0){
            liste[1]='<font color="green">'+liste[1]+'</font>';
        }
        if(a.localeCompare("Server is listen")==0){
            liste[1]='<font color="magenta">'+liste[1]+'</font>';
        }
        if(a.localeCompare("Connection accep")==0){
            liste[1]='<font color="blue">'+liste[1]+'</font>';
        }
        var messageTotale=date+liste[1];
        return messageTotale;
  };
    componentDidMount() {
        window.setInterval(function(){
            fetch('http://127.0.0.1:4000',{method:"get"} ).then( (response) =>
            {
                response.text().then((text)=>     
                {
                    var lines=text.split('\n');
                    return lines;
                }
                ).then((lines)=>{
                    var i=0;
                    for(i=0;i<lines.length;i++){
                        lines[i] = this.dateOf(lines[i]);
                        //console.log(lines[i]);
                        //document.querySelector("#klog").innerHTML+=t;
                    }
                    document.querySelector("#klog").innerHTML=lines;
                });
        }
        );
        }.bind(this), 2000);
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
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

