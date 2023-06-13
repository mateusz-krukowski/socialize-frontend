import HeaderMain from "../../../components/HeaderMain";
import AdminCard from "./AdminCard";
import "./AdminPanel.css"
import Footer from "../../../components/Footer";

export default function AdminPanel({setIsAuthenticated}){
    return(
        <div className='admin-panel'>
            <HeaderMain setIsAuthenticated={setIsAuthenticated} />

            <h1>Admin Panel</h1>
            <AdminCard/>

        </div>
    )
}