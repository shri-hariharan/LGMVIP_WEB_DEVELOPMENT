import React from "react";
import "./Card.css";

const Card =({user}) =>{
    return (
    <div  key = {user.id} className="card">
      <img src={user.avatar} alt="image"/>
      <div className="text">
        <h3>{user.email}</h3>
        <p>{user.first_name+" "+user.last_name}</p>
      </div>
    </div>
    )
}
export default Card;