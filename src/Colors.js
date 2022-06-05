import React from "react";
import { Link } from "react-router-dom";
import './Colors.css'


const Colors = ({colors}) => {

    // const [colors, setColors] = useState([{
    //     id: uuid(),
    //     color: "red"
    // }])

    // function addColor  (color) {
    //     const newColors = colors.map(colors => [...colors, {color:color, id:uuid()}]);
    //     setColors(newColors);
    // }


    return (
        <>
            <div id="welcome-banner">
                <h1>Welcome to the color factory</h1>
                <Link to="/colors/new">Add Color</Link>
            </div>
            <div id="color-select">
                <h3>Select a Color</h3>
                <ul>
                {colors.map(color => 
                    <Link to={`/colors/${color.color}`} key={color.id}>
                        <li>{color.color}</li>
                    </Link>)}
                </ul>
                
            </div>
        </>
    )

}

export default Colors