import React from "react";
import {Link} from 'react-router-dom';
import './DogList.css'
import Nav from './Nav';

const DogsList = ({dogs}) => {

    const names = dogs.map(dog => dog.name)
        
    return (
        <>
            <Nav names={names}/>
            <div id="dog-list">
                {dogs.map(dog => (
                    <Link to={`/dogs/${dog.name}`} key={dog.name}>
                        <div>
                            <h2>{dog.name}</h2>
                            <img src={dog.src} alt={dog.name}/>
                        </div>
                    </Link>
            
                ))}
            </div>
        </>
    )
}

export default DogsList;