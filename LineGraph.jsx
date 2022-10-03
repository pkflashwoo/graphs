
import React from 'react';

 
import {Line} from'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);



const LineGraph = () => {
    const grapghouter={
        width: '20rem',
        border: '1px solid',
        padding: '1%',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2%'
    }
    const data ={
        labels:['iron','coal','zinc','uranium','bauxite '],
        datasets:[{
            data:[1,2,3,4,5],
            label:'consumtions',
            labelColor:'red',
            backgroundColor:[
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor:[
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            hoverBackgroundColor:[
                'red',
                'black',
                'grey',
                'lime',
                'white'

            ]
            ,
            borderWidth:1
        }]
    }
  return (
    <div style={grapghouter}><Line data={data}/></div>
  )
}

export default LineGraph