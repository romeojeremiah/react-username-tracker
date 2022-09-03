import React from "react";
import "./UserItem.css";

const UserItem = (props) => {
    return <p>{`${props.user.userName} (${props.user.age} years old)`}</p>;
};

export default UserItem;
