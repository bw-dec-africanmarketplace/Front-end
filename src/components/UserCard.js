import React from "react";

export default function UserCard({id,email,username,owner_first_name, owner_last_name,business_name,avatar_url}){



    return(
        <section>
            <div>
                <img src={avatar_url} alt="merchant"/>
            </div>
            <div>
                <h1>ID:{id}</h1>
                <p>Email:{email}</p>
                <p>Username: {username}</p>
                <p>fname: {owner_first_name}</p>
                <p>lname:{owner_last_name}</p>
                <p>Business: {business_name}</p>
            </div>
        </section>

    )
}