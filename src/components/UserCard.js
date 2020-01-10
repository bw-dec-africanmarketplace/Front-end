import React from "react";

export default function UserCard({id,email,username,owner_firstname, owner_lastname,business_name,avatar_url}){



    return(
        <section>
            
            <div>
                <h1>ID:{id}</h1>
                <p>Email:{email}</p>
                <p>Username: {username}</p>
                <p>fname: {owner_firstname}</p>
                <p>lname:{owner_lastname}</p>
                <p>Business: {business_name}</p>
            </div>
        </section>

    )
}