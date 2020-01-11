import React, { useState,Component } from "react";
import axios from "axios";
import AxiosWithAuth from '../utilities/AxiosWithAuth'
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






// export default class UserForm extends Component {
//     constructor() {
//         super();
//         this.state = {
//             username: '',
//             owner_firstname: '',
//             owner_lastname: '',
//             business_name: '',

//         };
//     }
//     handleSubmit = event =>{
//         event.preventDefault();
        
//         const newMember ={
//             username: this.state.username,
//             owner_firstname: this.state.owner_firstname,
//             owner_lastname: this.state.owner_lastname,
//             business_name: this.state.business_name,
//         }

//         AxiosWithAuth()
//             .post(`https://african-marketplace-backend.herokuapp.com/api/register`, {newMember})
//             .then(res =>{
//                 console.log(res);
//                 console.log(res.data);
//             });

//         const createUser = (e) => {
//             e.preventDefault();
//             const { username, password, owner_firstname, owner_lastname, business_name } = this.state;
//             AxiosWithAuth()
//                 .post('https://african-marketplace-backend.herokuapp.com/api/register', { username, password, owner_firstname, owner_lastname, business_name })
//                 .then(res => {
//                     console.log(this.res.data)
//                 })
//                 .catch(err => {
//                     console.error('Error', err)
//                 });

//         };
//     }

//      onChange = (e) => {
//         this.setState({ [e.target.name]: e.target.value });
//         console.log(e.target.value);
//     }

    
     const UserForm = (props)=>{

            const [users, setUsers] = useState({
            username: '',
            password: '',
            owner_firstname: '',
            owner_lastname: '',
            business_name: '',
        });


            const onChange = e =>{

                setUsers({...users,[e.target.name]:e.target.value})
            }

        //  axios *****NOT SURE IF THIS IS TO BE USED OR NOT************
        //      .post("https://african-marketplace-backend.herokuapp.com/api/login", {
        //          username: "admin",
        //          password: "gr33ng0bl1n"
        //      })
        //      .then(res => {

        //          localStorage.setItem("token", res.data.token);

        //      });

            
            const handleSubmit = e =>{
                e.preventDefault();
            AxiosWithAuth()
                .post(`https://african-marketplace-backend.herokuapp.com/api/register`, {users})
                .then(sessionStorage.setItem("token", "users"))
                .then(props.history.push("/"))
                .catch(err =>{
                    console.log('error', err)
                })
            };

    



    //render() {
        // const {username, owner_firstname, owner_lastname, business_name } = this.state;
       
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
            <Form className="inputFields" onSubmit={handleSubmit}>
                
                <Input
                    required
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={users.username}
                    onChange={onChange}
                />
                <br />
                <Input
                    required
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={users.password}
                    onChange={onChange}
                />
                <Input
                    required
                    type="text"
                    placeholder="First Name"
                    name="owner_firstname"
                    value={users.owner_firstname}
                    onChange={onChange}
                />
                <br />
                <Input
                    required
                    type="text"
                    placeholder="Last Name"
                    name="owner_lastname"
                    value={users.owner_lastname}
                    onChange={onChange}
                />
                <br />
                <Input                          
                    type="text"
                    placeholder="Business"
                    name="business_name"
                    value={users.business_name}
                    onChange={onChange}
                />

                <ColorButton  type="submit" variant="contained" color="primary" >
                    Submit
                </ColorButton>
            </Form>
        );
    //}
}
export default UserForm;