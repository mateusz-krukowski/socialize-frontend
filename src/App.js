import './App.css';
import  Home from './components/Home'
import Dashboard from "./components/Dashboard";
import {useEffect, useState} from "react";
import Cookies from 'js-cookie';

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
        {isAuthenticated? <Dashboard setIsAuthenticated={setIsAuthenticated}/> : <Home setIsAuthenticated={setIsAuthenticated}/>}

    </div>
  );
}

export default App;
