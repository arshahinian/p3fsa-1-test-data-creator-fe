import React from 'react';
import Aside from './Aside.js'
import TopBar from './TopBar.js'
import ArtifactComponent from './ArtifactComponent'
import InquestComponent from './InquestComponent'

function Profile(props) {
    return (
        <div className='main-container'>
            <TopBar />
            <Aside maneuverInquestData={props.maneuverInquestData} />
            <main>
                <InquestComponent/>
                <ArtifactComponent/>
            </main>
            <footer>
                <small>&copy; Copyright 2022 Test Data Creator</small>
            </footer>
        </div>
    )
}

export default Profile