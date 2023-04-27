import React from 'react';
import './Chartbar.css'

const ChartBar = props => {
    let barFillHeight = '0%' //as a text cz this will be assigned as css val later
    if(props.maxValue>0){
        barFillHeight = Math.round((props.value / props.maxValue)*100)+ '%'; //since css val so converted to string (0-100)
    }
    //dynamic style--gets an object{'background-color':"red" or backgroungColor:'red}
    return <div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" style={{height: barFillHeight }}></div>
            </div>
                <div className="chart-bar__label">{props.label}</div>
            
        
    </div>

}

export default ChartBar;