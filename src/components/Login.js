import React, { Component } from 'react';
import './Login.css';

export class Login extends Component {

    constructor(props) {
        super(props);

        this.state = { email: "", password: "", contacts: [] };
        this.handlePassowrdChange = this.handlePassowrdChange.bind(this);
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    handlChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handlePassowrdChange(e) {
        this.setState({ password: e.target.value });
    }

    handleFormSubmit = event => {
        alert(this.state.email + this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <div className="login">
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter email" onChange={this.handlChange} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" className="form-control" placeholder="Enter password" onChange={this.handlChange} />
                    </div>
                    <button type="submit" className="btn btn-outline-primary btn-block">Submit</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
            </div>
        );
    }

    async populateWeatherData() {
        const response = await fetch('https://localhost:44319/WeatherForecast');
        const data = await response.json();
        this.setState({ contacts: data });
    }
}