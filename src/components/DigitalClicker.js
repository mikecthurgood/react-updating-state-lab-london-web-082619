import React from 'react'

export default class DigitalClicker extends React.Component {

    constructor() {
        super()

        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        const clicks = this.state.timesClicked
        this.setState({
            timesClicked: clicks + 1
        })
        console.log(this.state)
    }

    render() {
        return (
            <button onClick={this.handleClick}>Times Clicked: {this.state.timesClicked}</button>
        )
    }

}