import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { useState } from "react";

function App() {
    const [users, setUsers] = useState([]);

    const handleNewUser = (newUser) => {
        console.log(newUser);
        setUsers((prevState) => {
            return [...prevState, newUser];
        });
    };

    return (
        <div className="container">
            <UserForm onUserSubmit={handleNewUser} />
            <UserList users={users} />
        </div>
    );
}

export default App;
