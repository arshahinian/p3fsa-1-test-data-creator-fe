import React from "react";
import MessagesComponent from './MessagesComponent.js'
import BannerComponent from './BannerComponent.js'
import ArtifactComponent from './ArtifactComponent'
import InquestComponent from './InquestComponent'

function MainComponent() {    
    return (
        <div className='main-container'>
            <BannerComponent />
            <MessagesComponent />
            <main>
                <InquestComponent />              
                <ArtifactComponent/>
            </main>
            <footer>
                <small>&copy; Copyright 2022 Test Data Creator</small>
            </footer>
        </div>
    )
}

export default MainComponent