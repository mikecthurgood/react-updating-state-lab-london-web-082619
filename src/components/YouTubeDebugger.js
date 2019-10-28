import React from 'react'

export default class YouTubeDebugger extends React.Component {

    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleBitrateClick = () => {
        this.setState({
            ...this.state,
            settings: {
                ...this.state.settings,
                bitrate: 12,
            }
        })
        console.log(this.state)
    }

    handleResolutionClick = () => {
        this.setState({
            ...this.state,
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
        console.log(this.state)

    }
    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleBitrateClick}>Bitrate: {this.state.settings.bitrate}</button>
                <button className="resolution" onClick={this.handleResolutionClick}>Resolution: {this.state.settings.video.resolution}</button>
            </div>
        )
    }
}