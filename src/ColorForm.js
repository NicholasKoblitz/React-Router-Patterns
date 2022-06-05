import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import './ColorForm.css'

const ColorForm = ({addColor}) => {

    const INITIAL_STATE = {
        color: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const history = useHistory();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(formData);
        console.log(formData)
        setFormData(INITIAL_STATE);
        history.push('/colors')
    }

    return (
        <div id="form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="color">Enter a Color</label>
                <input type="text" id="color" name="color" value={formData.color} onChange={handleChange}/>
                <button>Add Color</button>
            </form>
        </div>
    )

}

export default ColorForm;