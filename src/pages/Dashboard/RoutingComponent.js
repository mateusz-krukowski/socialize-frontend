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
                <Route path="/user/:username" element={<Profile setIsAuthenticated={setIsAuthenticated}/>} />
                <Route path="/chatroom" element={<ChatRoom setIsAuthenticated={setIsAuthenticated}/>} />
                <Route path="/admin" element={<AdminPanel setIsAuthenticated={setIsAuthenticated}/>} />
            </Routes>
        </Router>
    );
}