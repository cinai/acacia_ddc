import React from 'react';
import {Line} from 'react-chartjs-2';

const LineChart = props => {
  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Seotiembre', 'Octubre','Noviembre','Diciembre'],
    datasets: [
      {
        yAxisID: "2",
        label: 'Predicción',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: '#262d44',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'grey',
        pointBackgroundColor: '#262d44',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'grey',
        pointHoverBorderColor: 'grey',
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 10,
        responsive: true,
        maintainAspectRatio: true,
        data: props.prediccion
      }
    ]
  };

  return (
    <Line data={data} options={{
      tooltips: {
        callbacks: {
          label: l => l.yLabel.toLocaleString('de-DE', {
            maximumFractionDigits: 2
          }) + ' unidades'
        }
      },
      scales: {
        yAxes: [
          {
            id: "2",
            scaleLabel: {
              display: true,
              labelString: 'Unidades'
            }
          }
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Próximos meses'
            }
          }
        ]
      }
    }} />
  );
}
export default LineChart;