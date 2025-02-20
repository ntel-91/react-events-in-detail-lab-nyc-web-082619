import React, { Component } from 'react'

class DelayedButton extends React.Component {

    delayEvent = (event) => {
        event.persist()
        setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)

    }

    render(){
        return(
            <button onClick={this.delayEvent}>
                DelayedButton
            </button>
        )
    }
}

export default DelayedButton