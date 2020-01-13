import React, { useState, Component } from "react";
import axios from "axios";
import AxiosWithAuth from "../utilities/AxiosWithAuth";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { red } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 2% auto;
  background: black;
`;
const Input = styled.input`
  display: block;
  width: 75%;
  padding: 9px;
  border-radius: 4px;
  margin: 3% auto;
`;
const UserForm = props => {
    const [users, setUsers] = useState({
        username: "",
        password: "",
        owner_firstname: "",
        owner_lastname: "",
        business_name: ""
    });
    const onChange = e => {
        setUsers({ ...users, [e.target.name]: e.target.value });
    };
    /// ===== AARON'S NOTE: THE BELOW CODE IS NOT TO BE USED (LINES 38 - 47). THIS IS JUST FOR TESTING =====
    //  axios 
    //      .post("https://african-marketplace-backend.herokuapp.com/api/login", {
    //          username: "admin",
    //          password: "gr33ng0bl1n"
    //      })
    //      .then(res => {
    //          localStorage.setItem("token", res.data.token);
    //      });
    // PLEASE NOTE: AxiosWithAuth is not to be used when registering. A normal axios call will do. AxiosWithAuth is used for all requests once users are logged into the app. Registration doesn't require login.
    const handleSubmit = e => {
        e.preventDefault();
        axios
            .post(`https://african-marketplace-backend.herokuapp.com/api/register`, {
                users
            })
            .then(sessionStorage.setItem("token", "users"))
            .then(props.history.push("/"))
            .catch(err => {
                console.log("error", err);
            });
    };
    const ColorButton = withStyles(theme => ({
        root: {
            color: theme.palette.getContrastText(red[500]),
            backgroundColor: red[500],
            "&:hover": {
                backgroundColor: red[700]
            }
        }
    }))(Button);

    return (
        <Form className='inputFields'>
            <Input
                required
                type='text'
                placeholder='Username'
                name='username'
                value={users.username}
                onChange={onChange}
            />
            <br />
            <Input
                required
                type='password'
                placeholder='Password'
                name='password'
                value={users.password}
                onChange={onChange}
            />
            <Input
                required
                type='text'
                placeholder='First Name'
                name='owner_firstname'
                value={users.owner_firstname}
                onChange={onChange}
            />
            <br />
            <Input
                required
                type='text'
                placeholder='Last Name'
                name='owner_lastname'
                value={users.owner_lastname}
                onChange={onChange}
            />
            <br />
            <Input
                type='text'
                placeholder='Business'
                name='business_name'
                value={users.business_name}
                onChange={onChange}
            />
            {/*Add the submit function handler to the button*/}
            <ColorButton type='submit' variant='contained' color='primary' onSubmit={handleSubmit}>
                Submit
            </ColorButton>
        </Form>
    );
    //}
};
export default UserForm;















