import React, { useEffect } from 'react'
import { useRoutes, useNavigate } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import '../../res/styles/Entry.css';

const EntryPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            console.log('entered in app entry ...');
            navigate('login');
        }, 2000)
    });

    return (
        <div className='main-container'>
            <ScaleLoader />
        </div>
    );

}

export default EntryPage