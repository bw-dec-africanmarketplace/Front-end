import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import { purple } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

const Form = styled.form`
            display: flex;
            flex-direction: column;
            width: 50%;
            margin: 2% auto;
            background: dodgerblue;
        `
const Input = styled.input`
             display: block;
             width: 75%;
             padding: 9px;
             border-radius: 4px;
             margin: 3% auto;
             
        `

export default class UserForm extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            owner_firstname: '',
            owner_lastname: '',
            business_name: '',

        };
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.value);
    }

    createUser = (e) => {
        e.preventDefault();
        const {username, password, owner_firstname, owner_lastname, business_name } = this.state;
        axios
            .post('https://african-marketplace-backend.herokuapp.com/api/register', { username, password, owner_firstname, owner_lastname, business_name })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.error('Error', err)
            });
        
    };
    

    render() {
        const {username, password, owner_firstname, owner_lastname, business_name } = this.state;
       
        const ColorButton = withStyles(theme => ({
            root: {
                color: theme.palette.getContrastText(purple[500]),
                backgroundColor: purple[500],
                '&:hover': {
                    backgroundColor: purple[700],
                },
            },
        }))(Button);


        return (
            <Form className="inputFields">
                
                <Input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={this.onChange}
                />
                <br />
                <Input
                    type="text"
                    placeholder="First Name"
                    name="owner_firstname"
                    value={owner_firstname}
                    onChange={this.onChange}
                />
                <br />
                <Input
                    type="text"
                    placeholder="Last Name"
                    name="owner_lastname"
                    value={owner_lastname}
                    onChange={this.onChange}
                />
                <br />
                <Input
                    type="text"
                    placeholder="Business"
                    name="business_name"
                    value={business_name}
                    onChange={this.onChange}
                />

                <ColorButton variant="contained" color="primary" onClick={this.createUser} >
                    Submit
                </ColorButton>
            </Form>
        );
    }
}