import HeaderMain from "../../../components/HeaderMain";
import Footer from "../../../components/Footer";

export default function ChatRoom({setIsAuthenticated}){
    return(<div className="ChatRoom">
        <HeaderMain setIsAuthenticated={setIsAuthenticated}/>
        <h1>Chatroom</h1>
        <Footer/>
    </div>)
}