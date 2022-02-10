import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from './skillsLoop.json'

export default class LottieSkills extends React.Component {

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
                height={50}
                width={50}
                isStopped={this.state.isStopped}
                isPaused={this.state.isPaused}
                style={{ 
                    pointerEvents: "none",  
                    height: "120px",
                    width: "120px" 
                }}
            />
        </div>
    }
}
