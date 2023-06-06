import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Profile from "./Profile/Profile";
import ChatRoom from "./ChatRoom/ChatRoom";
import AdminPanel from "./AdminPanel/AdminPanel";

export default function RoutingComponent({ setIsAuthenticated }) {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard setIsAuthenticated={setIsAuthenticated}/>} />
                <Route path="/user" element={<Profile />} />
                <Route path="/chatroom" element={<ChatRoom />} />
                <Route path="/admin" element={<AdminPanel />} />
            </Routes>
        </Router>
    );
}