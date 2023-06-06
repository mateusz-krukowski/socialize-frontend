import Cookies from "js-cookie";

export default function Dashboard({setIsAuthenticated}) {

    const handleLogout = () => {
        setIsAuthenticated(false);
        Cookies.remove('isAuthenticated');
    };

    return(<div className='Dashboard'>
        <h1>Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
    </div> )

}