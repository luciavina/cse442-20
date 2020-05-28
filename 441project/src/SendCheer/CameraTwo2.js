import React, { Component } from "react";
import Webcam from "react-webcam";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import "../MakePrediction/Prediction.css";
import storage from '../base';
import emoji from '../stickers/emoji.png';
import smileyface from '../stickers/smileyface.png';
import home from "../Home.PNG";
import "./camera.css"

class CameraTwo2 extends Component {
    constructor(props){
        super(props);
        this.canvas = React.createRef();
        this.cheer = React.createRef();
        this.sticker = React.createRef();
        this.state = {
            img_data: '',
            canv_image:'',
            img_id: null,
            filter_id: 0
        };
    }
    
    componentDidMount() {

        const  { img_data, img_id} = this.props.location.state;
        this.setState({
            img_data: img_data,
            img_id: img_id,
        });

        const img = this.cheer.current;
        const sticker = this.sticker.current;
        const ctx = this.canvas.current.getContext('2d');
        img.onload = () => {
            ctx.drawImage(img, 0, 0);
            ctx.font = "40px Courier";
            ctx.fillStyle = 'white';
            ctx.fillText("GO TEAM!!! THIS IS FILTER 0", 210, 75);
            ctx.drawImage(sticker, 50, 50);
            const cheerImage = this.canvas.current.toDataURL("image/jpeg",1);
            this.setState({
                    canv_image: cheerImage
                }
            );
        }

    }
    
    changeFilter= (e) => {

        const sticker = this.sticker.current;
        let filter = this.state.filter_id;
        let text = `this is filter${filter}`

        if(e.target.id === 'prev'){
            this.setState((state) => {
                return{filter_id: filter - 1}
            });
        }else{
            this.setState((state) => {
                return{filter_id: filter + 1}
            });
        }
        console.log("here", filter)
        const img = this.cheer.current;
        const ctx = this.canvas.current.getContext('2d');
        img.onload = () => {
            console.log('ummmm')
            ctx.drawImage(img, 0, 0);
            ctx.font = "40px Courier";
            ctx.fillText(`GO TEAeeeeeM!!!${text}`, 210, 75);
            ctx.drawImage(sticker, 50, 50);
            const cheerImage = this.canvas.current.toDataURL("image/jpeg",1);
            this.setState({
                    canv_image: cheerImage
                }
            );
        }
    }

    saveImage = () => {
        const image = this.state.canv_image.substring(23, this.state.canv_image.length);
        const uploadTask = storage.ref(`images/${this.state.img_id}`).putString(image, 'base64');
        uploadTask.on(
            "state_changed",
            snapshot => {
                // progress function ...
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                this.setState({ progress });
            },
            error => {
                // Error function ...
                console.log(error);
            },
            () => {
                // complete function ...
                storage
                    .ref("images")
                    .child(this.state.img_id.toString())
                    .getDownloadURL()
                    .then(url => {
                        this.setState({ url });
                    });
            }
        );
    }
    render(){

        return (
            <div>
                <div>
                    <div className="home">
                        <Link to={{pathname: '/'}}>
                            <Button><img src={home} alt="Home" /></Button>
                        </Link>
                    </div>
                    <div className="controlbutton">
                        <div className="top"><h1>Send a Cheer</h1></div>
                        <br/>
                    </div>
                <canvas ref={this.canvas} width={1280} height={720} />
                <img className="hidden" ref={this.cheer} src={this.state.img_data} alt="" />
                <img className="hidden" ref={this.sticker} src={emoji} alt="" />
                <span><Button id="prev" onClick={this.changeFilter}>Prev Filter</Button></span>
                <span><Button id="next" onClick={this.changeFilter}>Next Filter</Button></span>
                    <Link to={{
                        pathname: '/SendCheer/Sent'
                    }}>
                    <Button onClick={this.saveImage}>Save</Button>
                    </Link>
                </div>
            </div>
        );
    }
}
export default CameraTwo2;