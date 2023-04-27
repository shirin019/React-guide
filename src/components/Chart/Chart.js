import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props)=>{
    const dataPointValues = props.dataPoints.map((dataPoint)=>{
             return dataPoint.value; //now dataPoints, an array of object transformed to value
    })
    const totalMaximum = Math.max(...dataPointValues);
   return(<div className="chart">
  {
    props.dataPoints.map((dataPoint)=>
    <ChartBar
    key={dataPoint.label}
    value={dataPoint.value}
    maxValue={totalMaximum}
    label={dataPoint.label}
    ></ChartBar>)
    
    }

   </div>)
}
export default Chart