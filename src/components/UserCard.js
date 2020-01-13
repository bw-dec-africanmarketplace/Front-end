import React from "react";
import styled from 'styled-components'




export default function UserCard({id,email,username,owner_firstname, owner_lastname,business_name,avatar_url}){

    const Section = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #000000;
    
        
    `
    const Card = styled.h1`
         color: white;
         border-radius: 5px solid blue;
         width: 50%;
        
    `

    return(
        <Section>
            
            <Card>
                <h1>ID:{id}</h1>
                <p>Email:{email}</p>
                <p>Username: {username}</p>
                <p>fname: {owner_firstname}</p>
                <p>lname:{owner_lastname}</p>
                <p>Business: {business_name}</p>
            </Card>
        </Section>

    )
}