import React, { Component } from "react";
import Webcam from "react-webcam";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import "../MakePrediction/Prediction.css";
import storage from '../base';
import emoji from '../stickers/emoji.png';
import logo from '../stickers/DawgPack.png';
import smileyface from '../stickers/smileyface.png';
import home from "../Home.PNG";
import "./camera.css"

class CameraTwo2 extends Component {
    constructor(props){
        super(props);
        this.canvas = React.createRef();
        this.cheer = React.createRef();
        this.emoji = React.createRef();
        this.logo = React.createRef();
        this.state = {
            img_data: '',
            canv_image:'',
            img_id: null,
            filter_id: 0,
            max_filters: 2
        };
    }
    
    componentDidMount() {

        const  { img_data, img_id} = this.props.location.state;
        this.setState({
            img_data: img_data,
            img_id: img_id,
        });

        const img = this.cheer.current;
        const emoji = this.emoji.current;
        const ctx = this.canvas.current.getContext('2d');
        img.onload = () => {
            ctx.drawImage(img, 0, 0);
            ctx.font = "40px Courier";
            ctx.fillStyle = 'white';
            ctx.fillText("GO TEAM!!! THIS IS FILTER 0", 210, 75);
            ctx.drawImage(emoji, 50, 50);
            const cheerImage = this.canvas.current.toDataURL("image/jpeg",1);
            this.setState({
                    canv_image: cheerImage
                }
            );
        }

    }
    
    changeFilter= (e) => {

        const sticker = this.emoji.current;
        const logo = this.logo.current;
        const filters = [sticker, logo];
        let filter = this.state.filter_id;
        if(e.target.id === 'prev' && filter !== 0){
            filter = filter - 1;
        }else if(filter !== filters.length-1){
            filter = filter + 1;
        }
        //let text = `this is filter${filter}`

        const canv = this.canvas.current;
        const ctx = canv.getContext('2d');
        ctx.clearRect(0,0,canv.width, canv.height);
        const img = this.cheer.current;
        ctx.drawImage(img, 0, 0);
        //ctx.font = "40px Courier";
        //ctx.fillText(`GO TEAeeeeeM!!!${text}`, 210, 75);
        console.log('filter val ', filter)
        ctx.drawImage(filters[filter], 50, 50);
        const cheerImage = this.canvas.current.toDataURL("image/jpeg",1);
        this.setState({
            canv_image: cheerImage
            });
        if(e.target.id === 'prev'){
            this.setState((state) => {
                return{filter_id: filter}
            });
        }else{
            this.setState((state) => {
                return{filter_id: filter}
            });
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
                <img className="hidden" ref={this.emoji} src={emoji} alt="" />
                <img className="hidden" ref={this.logo} src={logo} alt="" />
                {(this.state.filter_id !== 0) ?
                <span><Button id="prev" onClick={this.changeFilter}>Prev Filter</Button></span>
                    :null}
                    {(this.state.filter_id !== this.state.max_filters) ?
                <span><Button id="next" onClick={this.changeFilter}>Next Filter</Button></span>
                    :null}
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