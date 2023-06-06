import WelcomeCard from "./WelcomeCard";
import RegisterCard from "./RegisterCard";
import './CardsContainer.css';
export default function CardsContainer(){
    return( <div className='cards-container'>
            <WelcomeCard/>
            <RegisterCard/>
        </div>

    )
}