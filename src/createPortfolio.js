import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props)
    {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            portfolio_name: "",
            description: "",
            btc: "",
            eth: "",
            ltc: ""
        }
    }

    onChange(event){
        const{name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        const obj = {
            name: this.state.portfolio_name,
            description: this.state.description,
            btc: this.state.btc,
            eth: this.state.eth,
            ltc: this.state.ltc
        }
        axios.post('http://localhost:4000/portfolio/add', obj)
        .then(res => console.log(res.data));
        this.setState({
            portfolio_name: "",
            description: "",
            btc: "",
            eth: "",
            ltc: ""
        })
    }
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Portfolio</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name:  </label>
                        <input type="text" 
                        className="form-control"
                        name="portfolio_name"
                        value={this.state.portfolio_name}
                        onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Description:  </label>
                        <input type="textarea" 
                        className="form-control"
                        name="description"
                        value={this.state.description}
                        onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Amount of BTC: </label>
                        <input type="text"
                        className="form-control"
                        name="btc"
                        value={this.state.btc}
                        onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Amount of ETH: </label>
                        <input type="text"
                        className="form-control"
                        name="eth"
                        value={this.state.eth}
                        onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Amount of LTC: </label>
                        <input type="text" 
                        className="form-control"
                        name="ltc"
                        value={this.state.ltc}
                        onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add portfolio" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}