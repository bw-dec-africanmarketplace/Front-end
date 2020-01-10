import React from "react";
import {Route, Link} from "react-router-dom";
import UserList from "./UserList";
import SearchForm from "./SearchForm";
import styled from "styled-components";
import UserForm from "./SignUpForm";

export default function Header (){

    const HeaderStyling = styled.header`
        display: flex;
        justify-content: space-evenly;
        flex-direction: row;

        
    `


    return(
    <section>
        <HeaderStyling className="App-header">
            <Link to='/'>Sign Up</Link>
            <Link to='/users'>Members</Link>
            <Link to='/search'>Search</Link>
        </HeaderStyling>

            <div>
                 <Route exact path='/' component={UserForm}></Route>
            </div>
            <div>
                 <Route  path='/users' component={UserList}></Route>
            </div>
            <div>
                <Route  path='/search' component={SearchForm}></Route>
            </div>
    
    </section>

    )
};