import React from "react";
import { Redirect } from "react-router-dom";
import {useParams} from 'react-router-dom';
import './DogDetails.css';
import Nav from './Nav';

const DogDetails = ({dogs}) => {

    const {name} = useParams();
    const names = dogs.map(dog => dog.name)

    const selectedDog = dogs.filter(dog => (dog.name === name));

    if(selectedDog.length === 0) return <Redirect to="/dogs"/>
        
    return (
        <>
            <Nav names={names}/>
            <div id="details">
                <h1>{selectedDog[0].name}</h1>
                <img src={selectedDog[0].src} alt={selectedDog[0].name}/>
                <p>Age: {selectedDog[0].age}</p>
                <h4>Fun Facts:</h4>
                <ul>
                    <li>
                        {selectedDog[0].facts[0]}
                    </li>
                    <li>
                        {selectedDog[0].facts[1]}
                    </li>
                    <li>
                        {selectedDog[0].facts[2]}
                    </li>
                </ul>
            </div>
        </>
    )
}

export default DogDetails;