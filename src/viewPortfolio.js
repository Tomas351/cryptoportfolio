import React, { Component } from 'react';
import axios from 'axios';
import PieChart from './pieChart';

export default class List extends Component {
    constructor(){
        super()
        this.state = {
            portfolio_name: "",
            description: "",
            btc: "",
            eth: "",
            ltc: "",
            ethprice : "",
            btcprice : "",
            ltcprice : ""
        }
    }

componentDidMount(){
    axios.get('/portfolio/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({ 
                    portfolio_name: response.data.portfolio_name, 
                    description: response.data.description,
                    btc: response.data.btc,
                    eth: response.data.eth,
                    ltc: response.data.ltc
                })
            })
            .then(axios.get('https://api.coinranking.com/v1/public/coins?ids=1,2,7')
            .then(response => {
                this.setState({ 
                    btcprice: response.data.data.coins[0].price,
                    ethprice: response.data.data.coins[1].price,
                    ltcprice: response.data.data.coins[2].price
                } )
            }))
            .catch(function (error) {
                console.log(error)
            })
}
    render() {
        return (
        <div align="center">
           <h1>{this.state.portfolio_name} portfolio</h1>
           <br />
           <p>{this.state.description}</p>
           <br />
           <h2>Current crypto currency price:</h2>
               <table className="table table-bordered" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>Coin</th>
                  <th>Price ($)</th>
                </tr>
              </thead>
              <tbody>
      <tr>
        <td>BTC</td>
        <td>{this.state.btcprice}</td>
      </tr>
      <tr>
        <td>ETH</td>
        <td>{this.state.ethprice}</td>
      </tr>
      <tr>
        <td>LTC</td>
        <td>{this.state.ltcprice}</td>
      </tr>
              </tbody>
            </table>
            <br />
            <h2>Your portfolio information:</h2>
            <table className="table table-bordered" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>Coin</th>
                  <th>Amount you own</th>
                  <th>Value in $</th>
                </tr>
              </thead>
              <tbody>
      <tr>
        <td>BTC</td>
        <td>{this.state.btc}</td>
        <td>{this.state.btcprice*this.state.btc}</td>
      </tr>
      <tr>
        <td>ETH</td>
        <td>{this.state.eth}</td>
        <td>{this.state.ethprice*this.state.eth}</td>
      </tr>
      <tr>
        <td>LTC</td>
        <td>{this.state.ltc}</td>
        <td>{this.state.ltcprice*this.state.ltc}</td>
      </tr>
              </tbody>
            </table>
            <br/>
<PieChart btc= {this.state.btc} eth= {this.state.eth} ltc= {this.state.ltc} btcprice={this.state.btcprice} ethprice={this.state.ethprice} ltcprice={this.state.ltcprice} />
           </div>
        )
    }
}