import React from 'react';

const Results = ({data}) => {

    let { wikipedia, boosters, first_flight: firstFlight, stages, description, name } = data;

    console.log(data);
    
    
    return (
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <p><a href={wikipedia}>{wikipedia}</a></p>
        </div>
    )
}

export default Results;
