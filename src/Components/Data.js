import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Buttons from './Buttons';

const Data = () => {
    const [ data, setData ] = useState([]);
    useEffect(() => {
       const url = 'https://api.spacexdata.com/v3/rockets';
       axios({
           url: url,
           method: "GET",
           dataResponse: "json",
           params: {
               format: "json"
           },
       }).then((response) => {
           setData(response.data);
       })
    }, [])

    return (
        <>
            {
                data.map(rockets => {
                    return (
                        <Buttons  
                            title={rockets.rocket_name}
                            key={rockets.id}
                            company={rockets.company}
                        />

                    )
                })
            }
        </>
    )
}

export default Data;
