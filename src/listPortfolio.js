import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow.js';

export default class List extends Component {
    constructor(props){
        super(props)
        this.state = {portfolios: []}
    }
    componentDidMount(){
        axios.get('/portfolio/')
        .then(response => {
          this.setState({ portfolios: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
/*     componentDidUpdate(){
      axios.get('http://localhost:4000/portfolio')
      .then(response => {
        this.setState({portfolios: response.data})
      })
        .catch(function (error) {
          console.log(error);
          })
      } */
    tabRow(){
        return this.state.portfolios.map(function(object, i){
            return <TableRow obj={object} key={i} />
        })
    }
    render() {
        return (
            <div>
                        <hr size="30"></hr>
          <div align="center">
        <h1> Crypto Portfolio</h1>
        <h6>
          "Crypto Portfolio" is a website for your crypto currency portfolio. It allows you to add, modify and delete your portfolio. Once you have your portfolio created you can view it and the website will generate charts to visualize your current portfolio.
        </h6>
        </div>
        <hr size="30"></hr>
            <h3 align="center">Portfolio List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th colSpan="3">Actions</th>
                </tr>
              </thead>
              <tbody>
                { this.tabRow() }
              </tbody>
            </table>
          </div>
        )
    }
}