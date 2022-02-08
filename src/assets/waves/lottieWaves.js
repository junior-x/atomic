import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from './wavesLoop.json'

export default class LottieWaves extends React.Component {

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

        return <div>
            <Lottie
                options={defaultOptions}
                speed={0.5}
                height={60}
                width={100}
                isStopped={this.state.isStopped}
                isPaused={this.state.isPaused}
                style={{ 
                    pointerEvents: "none",  
                    height: "30px",
                    width: "240px" 
                }}
            />
        </div>
    }
}
