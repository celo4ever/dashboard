import React from 'react';
import "./chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({title,data,dataKey, grid}) {
    console.log(grid);
  return <div className='chart'>
      <h3 className="chartTittle">{title}</h3>
      <ResponsiveContainer width='100%' aspect={4/1}>
            <LineChart data= {data}>
                <XAxis dataKey="name" stroke="#5558bd"/>
                <Line type="monotone" dataKey={dataKey} stroke="#5558bd"/>
                <Tooltip />
                {grid && <CartesianGrid stroke="#e0dfdf"  strokeDasharray="5 5"/>}
            </LineChart>
        </ResponsiveContainer> 
  </div>;
}

