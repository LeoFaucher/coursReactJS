import React, { Component } from 'react'
import { formatTime } from '../utils/formatTime'


export default class Chrono extends Component {

    static defaultProps = {
        title : "",
        onSave: () => {}
    }

    state = { minutes: 0, seconds: 0, milliseconds: 0 }

    start(){
        this.timer = setInterval(() => {
            const{ milliseconds, seconds, minutes } = this.state

            this.setState({ milliseconds: milliseconds + 1 })
            
            if(milliseconds == 100){
                this.setState({
                    milliseconds: 0,
                    seconds: seconds + 1                    
                })
            }
            else if(seconds == 60){
                this.setState({
                    seconds: 0,
                    minutes: minutes + 1
                })
            }            
        }, 10)
        document.getElementById("buttonstart").disabled = true;
    }
    stop(){
        clearInterval(this.timer)
        document.getElementById("buttonstart").disabled = false;
    }
    reset(){
        clearInterval(this.timer)
        this.setState({ milliseconds: 0, seconds: 0, minutes: 0 })
        document.getElementById("buttonstart").disabled = false;
    }
    save(){
        const {minutes, seconds, milliseconds} = this.state
        this.props.onSave(minutes, seconds, milliseconds)
    }
    render(){
        const { minutes, seconds, milliseconds } = this.state

        const { title } = this.props

        return(
            <div>
                <div>{title}</div> 
                {formatTime(minutes)}:{formatTime(seconds)}:{formatTime(milliseconds)}<br/>
                <button id = "buttonstart" onClick={() => this.start()}>START</button>
                <button onClick={() => this.stop()}>STOP</button><br/>
                <button onClick={() => this.reset()}>RESET</button><br/>
                <button onClick={() => this.save()}>SAVE</button>                           
            </div>            
        )
    }
}