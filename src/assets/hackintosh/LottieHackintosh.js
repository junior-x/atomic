import React from 'react';
import "./../../App.css";
import Lottie from 'react-lottie';
import * as animationData from './hackintoshLoop.json'

export default class LottieHackintosh extends React.Component {


    constructor(props) {
        super(props);
        this.state = { isStopped: false, isPaused: false };
    }

    render() {

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return <div style={{ margin: '27px', width: 'fit-content' }}>
            <Lottie
                options={defaultOptions}
                height={100}
                width={100}
                isStopped={this.state.isStopped}
                isPaused={this.state.isPaused}
                style={{
                    pointerEvents: "none",
                    height: "210px",
                    width: "210px",
                    borderRadius: '9px',
                    padding: '10px',
                }}
            />
        </div>
    }
}
