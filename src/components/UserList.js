import React from "react";
import UserItem from "./UserItem";
import Card from "../UI/Card";

import "./UserList.css";

const UserList = (props) => {
    return (
        <Card>
            {props.users.length > 0 ? (
                props.users.map((user, index) => (
                    <UserItem user={user} key={index} />
                ))
            ) : (
                <p>No Users Exists</p>
            )}
        </Card>
    );
};

export default UserList;
