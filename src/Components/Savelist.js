import React, { Component } from 'react'
import { formatTime } from '../utils/formatTime'

export default class Savelist extends Component {
    
    static defaultProps = { list: [] }

    render(){
        const { list } = this.props
        return(            
            <div>
                {list.map((time, index) => (
                    <div key={index}>{formatTime(time.minutes)}:{formatTime(time.seconds)}:{formatTime(time.milliseconds)}</div>
                ))}
            </div>
        )
    }    
}