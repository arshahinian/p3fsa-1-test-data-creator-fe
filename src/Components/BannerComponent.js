import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function BannerComponent() {
    return (
        <div className='title'>
            <h1 className="testDataCreator">Test Data Creator</h1>
            <Button className="logout"><Link className='main' to="/">Logout</Link></Button>
        </div>
    )
}

export default BannerComponent