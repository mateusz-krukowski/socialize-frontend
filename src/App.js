import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import  Home from './pages/Home/Home'
import {useEffect, useState} from "react";
import Cookies from 'js-cookie';
import RoutingComponent from "./pages/Dashboard/RoutingComponent";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const isAuthenticatedCookie = Cookies.get('isAuthenticated');
        if (isAuthenticatedCookie === 'true') {
            setIsAuthenticated(true);
        }
    }, []);



  return (
    <div className="App">

        {isAuthenticated
            ? <RoutingComponent setIsAuthenticated={setIsAuthenticated} />
            : <Home setIsAuthenticated={setIsAuthenticated}/>}

    </div>
  );
}

export default App;
