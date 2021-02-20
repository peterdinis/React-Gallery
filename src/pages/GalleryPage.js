import React from 'react';
import './GalleryPage.scss';
import PhotoSearch from '../components/PhotoSearch';

function GalleryPage() {
    return (
        <div>
            <h1 className='header'>Gallery App</h1>
            <PhotoSearch />
        </div>
    )
}

export default GalleryPage
