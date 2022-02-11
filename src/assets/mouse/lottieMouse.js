import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from './mouseLoop.json'

export default class LottieMouse extends React.Component {

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
                height={300}
                width={300}
                isStopped={this.state.isStopped}
                isPaused={this.state.isPaused}
                style={{ 
                    pointerEvents: "none",  
                    height: "93px",
                    width: "60px",
                    borderRadius: '9px',
                    padding: '10px',
                }}
            />
        </div>
    }
}
