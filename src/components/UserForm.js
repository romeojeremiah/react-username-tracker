import React, { useState } from "react";
import "./UserForm.css";
import Card from "../UI/Card";

const UserForm = (props) => {
    const [userName, setUserName] = useState("");
    const [age, setAge] = useState("");
    const [userNameInvalid, setUserNameInvalid] = useState(false);
    const [ageInvalid, setAgeInvalid] = useState(false);

    const handleUserName = (e) => {
        setUserName(e.target.value);
    };

    const handleAge = (e) => {
        setAge(e.target.value);
    };

    const handleNewUser = (e) => {
        e.preventDefault();
        if (userName.trim().length <= 0) {
            setUserNameInvalid(true);
            return;
        }
        if (age < 0) {
            setAgeInvalid(true);
            return;
        }

        setUserNameInvalid(false);
        setAgeInvalid(false);
        setAge("");
        setUserName("");
        props.onUserSubmit({ userName, age });
    };

    return (
        <Card>
            <form onSubmit={handleNewUser}>
                <label htmlFor="username">Username</label>
                <input
                    className={userNameInvalid ? "invalid" : ""}
                    type="text"
                    id="username"
                    placeholder="username"
                    value={userName}
                    onChange={handleUserName}
                />
                <label htmlFor="age">Age</label>
                <input
                    className={ageInvalid ? "invalid" : ""}
                    type="number"
                    id="age"
                    placeholder="age"
                    value={age}
                    onChange={handleAge}
                />
                <button type="submit">add user</button>
            </form>
        </Card>
    );
};

export default UserForm;
