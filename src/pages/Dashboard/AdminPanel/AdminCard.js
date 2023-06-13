import "./AdminCard.css"
import {useEffect, useState} from "react";
import {fetchData} from "../../../API";
import UserTableRow from "./UserTableRow";
import UserTableHeader from "./UserTableHeader";



export default function AdminCard(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
        const interval = setInterval(fetchUsers, 1000); // Ask  server every second

        return () => {
            clearInterval(interval);
        };
    }, []);

    async function fetchUsers() {
        try {
            const response = await fetchData('http://127.0.0.1:5000/api/getusers');
            setUsers(response.data);
            // console.log(response.data)

            //add one user more for adding new user
            const usersPlusOne= [...response.data, {id:response.data.length+1,username:"",email:"",password:"",is_admin:false}];
            setUsers(usersPlusOne);
        } catch (error) {
            console.error('Błąd podczas pobierania wiadomości:', error);
        }
    }

    function saveUsersToFile() {
        const usersToSave = users.slice(0, users.length - 1);
        const usersData = JSON.stringify(usersToSave, null, 2);
        const blob = new Blob([usersData], { type: 'application/json' });

        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'users.json';

        link.click();

        // Zwolnienie zasobów po zakończeniu
        URL.revokeObjectURL(link.href);
    }

    return <div className="admin-card">
        <div className="users-list">
            <UserTableHeader/>
            {users.map((user,index)=> (
                <UserTableRow
                    key={index}
                    id={user.id}
                    username={user.username}
                    email={user.email}
                    is_admin={user.is_admin}
                    password={user.password}
                />
                ))}

        </div>
        <button className="download-users" onClick={saveUsersToFile}>download users</button>
    </div>
}