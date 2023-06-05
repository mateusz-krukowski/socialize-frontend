import React from "react";
import './WelcomeCard.css'

export default function WelcomeCard() {
    return(
        <div className='WelcomeCard' id="welcome-card">
            <h2 className='welcome' >Welcome to Socialize</h2>
            <div className='welcome-content-wrapper'>
                <p className='welcome-content'>

                    Are you tired of mainstream social media
                    platforms bombarding you with ads and
                    selling your data? Try our service.
                    Socialize is an independent social
                    networking platform that creates
                    technologies and services that empower
                    users to connect, build communities, and
                    pursue their interests. Join us today!

                </p>
            </div>
        </div>
    )
}