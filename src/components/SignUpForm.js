import React, {Component} from "react";
import axios from "axios";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import { purple } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';


export default class UserForm extends Component{
        constructor(){
            super();
            this.state = {
                email: '',
                username: '',
                owner_first_name: '',
                owner_last_name: '',
                business_name: '',
            
            };
        }
     

    onChange = (e) => {
        
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { email, username, owner_first_name, owner_last_name, business_name} = this.state;

        axios
            .post('https://app.swaggerhub.com/apis/ajohnson1031/AMP_Backend/1.0', { email, username, owner_first_name, owner_last_name, business_name })
            .then(res =>{
                console.log(res.data)
            })
            .catch(err =>{
                console.error('Error', err)
            });
    }
    
    render() {
        const { email, username, owner_first_name,owner_last_name,business_name } = this.state;

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
                    placeholder="Email"
                    email="email"
                    value={email}
                    onChange={this.onChange}
                />
                <br/>
                <Input
                    type="text"
                    placeholder="Username"
                    username="username"
                    value={username}
                    onChange={this.onChange}
                />
                <br/>
                <Input
                    type="text"
                    placeholder="First Name"
                    fname="first name"
                    value={owner_first_name}
                    onChange={this.onChange}
                />
                <br/>
                <Input
                    type="text"
                    placeholder="Last Name"
                    lname="last name"
                    value={owner_last_name}
                    onChange={this.onChange}
                    />
                <br/>
                <Input
                    type="text"
                    placeholder="Business"
                    business="business name"
                    value={business_name}
                    onChange={this.onChange}
                    />
                    
                <ColorButton variant="contained" color="primary">
                    Submit
                </ColorButton>
                    
            </Form>
        );
    }
}

