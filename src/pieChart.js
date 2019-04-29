import React from 'react';
import {Pie} from 'react-chartjs-2';

export default class PieChart extends React.Component{
  render() {

    const{ btcprice, ethprice, ltcprice, btc, eth, ltc} = this.props
    const dataamount = {
        labels: [
            'BTC',
            'ETH',
            'LTC'
        ],
        datasets: [{
            data: [btc, eth, ltc],
            backgroundColor: [
                '#FFC100',
                '#0C00FF',
                '#E9E8F0'
            ],
            hoverBackgroundColor: [
                '#FFC100',
                '#0C00FF',
                '#E9E8F0'
            ]
        }]
    }
    const dataprice = {
        labels: [
            'BTC',
            'ETH',
            'LTC'
        ],
        datasets: [{
            data: [btc*btcprice, eth*ethprice, ltc*ltcprice],
            backgroundColor: [
                '#FFC100',
                '#0C00FF',
                '#E9E8F0'
            ],
            hoverBackgroundColor: [
                '#FFC100',
                '#0C00FF',
                '#E9E8F0'
            ]
        }]
    }
    return (
      <div>
        <h2>Your portfolio by $</h2>
        <Pie data={dataprice} />
        <h2>Your portfolio by amount</h2>
        <Pie data={dataamount} />
      </div>
    );
  }
};