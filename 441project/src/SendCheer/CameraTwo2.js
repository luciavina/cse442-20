import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import "../MakePrediction/Prediction.css";
import storage from '../base';
import filter1 from '../stickers/Filter1.png';
import filter2 from '../stickers/Filter2.png';
import filter3 from '../stickers/Filter3.png';
import filter4 from '../stickers/Filter4.png';
import "./camera.css"
import { Multiselect } from 'multiselect-react-dropdown';
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

class CameraTwo2 extends Component {
    constructor(props){
        super(props);
        this.canvas = React.createRef();
        this.cheer = React.createRef();
        this.emoji = React.createRef();
        this.logo = React.createRef();
        this.filter1 = React.createRef();
        this.filter2 = React.createRef();
        this.filter3 = React.createRef();
        this.filter4 = React.createRef();
        
        this.state = {
            img_data: '',
            canv_image:'',
            img_id: null,
            options: ['W. Basketball', 'M. Football', 'M. Soccer', 'W. Beach Volleyball',
                "W. Golf", "W. Tennis", 'W. Volley Ball', 'M. Rowing',
                "W. Gymnastics", "M. Track & Field", "M. Baseball", "W. Soccer", "M. Cross Country", "M. Soccer",
                "W. Track & Field", "M. Golf", "M. Tennis", "M. Basketball", "W. Rowing", "W. Cross Country", "W. Softball"]
        };
    }
    
    componentDidMount() {

        const  { img_data, img_id} = this.props;
        this.setState({
            img_data: img_data,
            img_id: img_id,
        });

        const img = this.cheer.current;
        const emoji = this.emoji.current;
        const ctx = this.canvas.current.getContext('2d');
        img.onload = () => {
            ctx.drawImage(img, 0, 0);
            const cheerImage = this.canvas.current.toDataURL("image/jpeg",1);
            this.setState({
                    canv_image: cheerImage
                }
            );
        }

    }
    
    changeFilter= (e) => {
        let filter = null;
        const filter1 = this.filter1.current;
        const filter2 = this.filter2.current;
        const filter3 = this.filter3.current;
        const filter4 = this.filter4.current;
        const filters = [filter1, filter2, filter3, filter4];
        

        if(e.target.id ==="filter1" || e.target.id ==="filter11") {
            console.log('fheuwi')
            filter = filter1;
        }else if(e.target.id ==="filter2" || e.target.id ==="filter22") {
            filter = filter2;
        }else if(e.target.id ==="filter3" || e.target.id ==="filter33"){
            filter = filter3;
        }else if(e.target.id ==="filter4" || e.target.id ==="filter44"){
            filter = filter4;
        }

        const canv = this.canvas.current;
        const ctx = canv.getContext('2d');
        ctx.clearRect(0,0,canv.width, canv.height);
        const img = this.cheer.current;
        ctx.drawImage(img, 0, 0);

        if( filter != null){
            ctx.drawImage(filter, 0, 0, 336, 189);
        } 
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
                <div className="contents">
                    <div className="image">
                        <div><canvas ref={this.canvas} width={880} height={495} /></div>
                        <img className="hidden" ref={this.cheer} src={this.state.img_data} alt="" />
                        <img className="hidden" ref={this.filter1} src={filter1} alt="" width={10}/>
                        <img className="hidden" ref={this.filter2} src={filter2} alt="" />
                        <img className="hidden" ref={this.filter3} src={filter3} alt="" />
                        <img className="hidden" ref={this.filter4} src={filter4} alt="" />
                        <div id="filtOpt">
                            <h6>Choose a filter:</h6>
                            <div id="filter"><span><Button id="filter1" onClick={this.changeFilter}>
                                <img id="filter11" src={filter1} alt="Home"/>
                            </Button></span></div>
                            <div id="filter"><span><Button id="filter2" onClick={this.changeFilter}>
                                <img id="filter22" src={filter2} alt="Home"/>
                            </Button></span></div>
                            <div id="filter"><span><Button id="filter3" onClick={this.changeFilter}>
                                <img id="filter33" src={filter3} alt="Home"/>
                            </Button></span></div>
                            <div id="filter"><span><Button id="filter4" onClick={this.changeFilter}>
                                <img id="filter44" src={filter4} alt="Home"/>
                            </Button></span></div>
                            <div id="nofilter"><span><Button id="none" onClick={this.changeFilter}>
                                <h3>NONE</h3>
                            </Button></span></div>
                        </div>
                </div>
                <div className="display">
                    <p>Pick which teams to send your cheer to:</p>
                    <Multiselect
                        options={this.state.options}
                        className="selection"
                        isObject={false}
                        placeholder='Tap to select teams'
                    />
                </div>
                    <div className="display">
                    <p>Would you like to show your cheer on the public display?</p>
                    <ToggleButtonGroup type='radio' name='options' defaultValue={0} id="opt">
                        <ToggleButton
                            value={0}
                            className="optinbtn">
                            YES
                        </ToggleButton>
                        <ToggleButton
                            value={1}
                            className="optinbtn">
                            NO
                        </ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                </div>
                <div className="inner">
                    <Link to={{
                        pathname: '/SendCheer/Sent'
                    }}>
                    <Button onClick={this.saveImage}>Send</Button>
                    </Link>
                </div>
                </div>
        );
    }
}
export default CameraTwo2;