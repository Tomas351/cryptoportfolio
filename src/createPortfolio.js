import React, { Component } from 'react';

export default class Create extends Component {
    constructor(props)
    {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            portfolio_name: "",
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
        console.log(`The values are ${this.state.portfolio_name}, ${this.state.btc}, and ${this.state.eth}, and ${this.state.xrp}`)
        this.setState({
            portfolio_name: "",
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
                        <label>Amount of XRP: </label>
                        <input type="text" 
                        className="form-control"
                        name="xrp"
                        value={this.state.xrp}
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