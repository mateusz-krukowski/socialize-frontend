import "./UserTableRow.css";
import { useState } from "react";
import {fetchData} from "../../../API";

export default function UserTableRow({ id, username, email, is_admin, password }) {
    const [isBeingEdited, setIsBeingEdited] = useState(false);
    const [dataToPost, setDataToPost] = useState({
        id:id,
        username: username,
        email: email,
        is_admin: is_admin,
        password: password,
    });

    const handleEditClick = () => {
        setIsBeingEdited(true);
    };

    const handleSaveClick = (event) => {
        event.preventDefault();
        console.log((dataToPost));
        sendFormData();
        setIsBeingEdited(false);
    };

    const handleUndoClick = () => {
        resetData();
        setIsBeingEdited(false);
    }


    const resetData = () => {
      setDataToPost(  {
        username: username,
        email: email,
        is_admin: is_admin,
        password: password,
        })
    }

    const sendFormData = () => {
        const url = 'http://127.0.0.1:5000/api/edituser';

        fetchData(url, 'POST', dataToPost)
            .then((response) => {
                // Obsługa odpowiedzi po zakończeniu wysyłania
                console.log('response::', response);
            })
            .catch((error) => {
                // Obsługa błędu
                console.error('Błąd:', error);
            });
    };

    const handleDelete = () => {
        const url = 'http://127.0.0.1:5000/api/deleteuser';
        fetchData(url, 'POST', dataToPost.id)
            .then((response) => {
                // Obsługa odpowiedzi po zakończeniu wysyłania
                console.log('response::', response);
            })
            .catch((error) => {
                // Obsługa błędu
                console.error('Błąd:', error);
            });
    }

    return (
        <div className="user-table-row">
            {isBeingEdited ? (
                <form className="edit-user-form" action="/api/edituser" method="POST" onSubmit={handleSaveClick}>
                    <input
                        className="edit-login"
                        value={dataToPost.username}
                        onChange={(e) =>
                            setDataToPost({ ...dataToPost, username: e.target.value })
                        }
                    />
                    <input
                        className="edit-email"
                        value={dataToPost.email}
                        onChange={(e) =>
                            setDataToPost({ ...dataToPost, email: e.target.value })
                        }
                    />
                    <select
                        className="edit-is_admin"
                        value={dataToPost.is_admin.toString()} // konwertuj wartość logiczną na ciąg znaków
                        onChange={(e) =>
                            setDataToPost({ ...dataToPost, is_admin: e.target.value === "true" ? true : false })
                        }
                    >
                        <option value={true.toString()}>True</option>
                        <option value={false.toString()}>False</option>
                    </select>
                    <input
                        className="edit-password"
                        value={dataToPost.password}
                        onChange={(e) =>
                            setDataToPost({ ...dataToPost, password: e.target.value })
                        }
                    />
                    <button className="save" type="submit">
                        Save
                    </button>
                    <button className="undo" onClick={handleUndoClick}>
                        Undo
                    </button>
                </form>
            ) : (
                <>
                    <p className="col1">{username}</p>
                    <p className="col2">{email}</p>
                    <p className="col3">{is_admin ? "True" : "False"}</p>
                    <p className="col4">{password}</p>
                    <button className="edit" onClick={handleEditClick}>
                        Edit
                    </button>
                    <button className="delete" onClick={handleDelete}>Delete</button>
                </>
            )}

        </div>
    );
}