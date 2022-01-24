import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Results from './Results';


const Dropdown = () => {
    const [ data, setData ] = useState([]);
    const [ value, setValue ] = useState('');

    const falconOne = '5e9d0d95eda69955f709d1eb';
    const falconNine = '5e9d0d95eda69973a809d1ec';
    const falconHeavy = '5e9d0d95eda69974db09d1ed';
    const starship = '5e9d0d96eda699382d09d1ee';

    
    const getValue = (e) => {
        setValue(e.target.value);
        
    }
    
    useEffect(() => {
        const url = `https://api.spacexdata.com/v4/rockets/${value}`;
        
        const getRocketData = () => {
            axios.get(url)
            .then((response) => {
                setData(response.data)
            })
            .catch(error => {console.error(error `Error Loading`)});
        }

        getRocketData();
        
    }, [value])

    return (
        <div>
            <label htmlFor="rockets">Choose a Rocket</label>
            <select onChange={getValue} name="rockets" id="rockets">
                <option value="empty">Choose Your Rocket</option>
                <option value={falconOne}>Falcon 1</option>
                <option value={falconNine}>Falcon 9</option>
                <option value={falconHeavy}>Falcon Heavy</option>
                <option value={starship}>Starship</option>
            </select>

            <Results data={data} />
        </div>
    )
}

export default Dropdown;
