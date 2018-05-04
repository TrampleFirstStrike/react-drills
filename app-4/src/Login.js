import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: ""
        };

        this.handleLogin = this.handleLogin.bind(this);
    }
}