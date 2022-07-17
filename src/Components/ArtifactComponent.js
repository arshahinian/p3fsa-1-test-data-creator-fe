import React, { useContext } from "react";
import AppContext from "../AppContext";
import { Form } from 'react-bootstrap';

function ArtifactComponent() {
    let appContext = useContext(AppContext);
    return (
        <div className="three-row">
            <div className="artifactHeaderSection">                
                <h2 className="artifactHeader">ARTIFACTS</h2>
            </div>
            <div className="stats">                
                <p>An audit of the inquest changes is coming in a future release!</p>                                
            </div>
        </div>
    )
}

export default ArtifactComponent