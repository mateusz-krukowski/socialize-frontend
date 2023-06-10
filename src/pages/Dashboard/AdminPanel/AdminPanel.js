import HeaderMain from "../../../components/HeaderMain";

export default function AdminPanel({setIsAuthenticated}){
    return(
        <div className='AdminPanel'>
            <HeaderMain setIsAuthenticated={setIsAuthenticated} />
            <h1>Admin Panel</h1>
        </div>
    )
}