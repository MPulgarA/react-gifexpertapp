import React from 'react';

const GifGridItem = ({ id, image, title }) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={image} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem