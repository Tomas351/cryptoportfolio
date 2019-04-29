import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow.js';

export default class List extends Component {
    constructor(props){
        super(props)
        this.state = {portfolios: []}
    }
    componentDidMount(){
        axios.get('http://localhost:4000/portfolio')
        .then(response => {
          this.setState({ portfolios: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
        return this.state.portfolios.map(function(object, i){
            return <TableRow obj={object} key={i} />
        })
    }
    render() {
        return (
            <div>
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