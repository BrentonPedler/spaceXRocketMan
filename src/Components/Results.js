import React from 'react';

const Results = ({data}) => {

    let { description, name } = data;
    let imageOne = data.flickr_images[0];
    let imageTwo = data.flickr_images[1];
    
    
    return (
        <div className="results">
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="images">
                <img src={imageOne} alt="" />
                <img src={imageTwo} alt="" />
            </div>
        </div>

    )
}

export default Results;
