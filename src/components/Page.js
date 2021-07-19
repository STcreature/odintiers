import React, { Component } from 'react';
import './Page.css'
import video from '../Videos/videobackground.mp4'
import { Button } from './Button';
import Grid from './Grid';





class Page extends Component{
    constructor(props){
        super(props);
    }
    
    state = {


    }

    render() {
        return (
                <div className="page-div">
                    <section className="page-1">
                        <div className="metamask-div">
                            <div className={this.props.txtTierstyle}>
                                <h1>Welcome, Your Tier Is :</h1>
                            </div>
                            <img className={this.props.imgclassStyle} src={this.props.TierImage}></img>
                            <h1 className="welcome">Welcome to the ODIN User Interface</h1>
                            <h3 className="welcome">Please connect to metamask.</h3>
                            <Button isdisabled={this.props.setVisible} onClicked={this.props.clicked} className="metamask-btn" buttonStyle={this.props.buttonSyling} buttonSize="btn--largex">{this.props.titleBtn}</Button>
                        </div>
                        <video className="vid" loop autoPlay muted type="video/mp4" src={video}></video>
                    </section>
                    <section className="page-2">
                        <Grid details2={[this.props.NFTclaim , this.props.ETHclaim]} details={[this.props.isBot,this.props.isWinner_text,this.props.hodltime]}/>
                    </section>
                </div>
        );
    }
}


export default Page;