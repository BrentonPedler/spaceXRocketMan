import React from 'react';

const Results = ({data}) => {

    let { description, name } = data;

    console.log(data);
    
    
    return (
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
        
    )
}

export default Results;
