import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from './jupiterLoop.json'

export default class LottieJupiter extends React.Component {

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
                speed={0.5}
                options={defaultOptions}
                height={400}
                width={630}
                isStopped={this.state.isStopped}
                isPaused={this.state.isPaused}
                style={{ pointerEvents: "none" }}
            />
        </div>
    }
}