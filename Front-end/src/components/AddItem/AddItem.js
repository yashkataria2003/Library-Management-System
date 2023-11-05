import React, { useState } from 'react'
import '../AddItem/AddItem.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Create() {
    const history = useNavigate();

    const [inputs, setInputs] = useState({
        name: "",
        description: "",
        price: "",
        author: "",
        image: "",
    });

    const [checked, setChecked] = useState(true);

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        // console.log(e.target.name, "Value", e.target.value);
    };

    const sendRequest = async () => {
        await axios
            .post("http://localhost:5000/books", {
                name: String(inputs.name),
                author: String(inputs.author),
                description: String(inputs.description),
                price: Number(inputs.price),
                image: String(inputs.image),
                available: Boolean(checked),
            })
            .then((res) => res.data);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs, checked);
        sendRequest().then(() => history("/books"));
    };

    return (
        <>
            <h2 className='headingai'>Enter Book Details ... </h2>
            <div className='container1ai'>
                <form className='formai' onSubmit={handleSubmit}>
                    <input className="formItemsai" type="text" placeholder="Book Name ..." name="name" value={inputs.name} onChange={handleChange} />
                    <input className="formItemsai" type="text" placeholder="Author Name ..." name="author" value={inputs.author} onChange={handleChange} />
                    <input className="formItemsai" type="text" placeholder="Description ..." name="description" value={inputs.description} onChange={handleChange} />
                    <input className="formItemsai" type="number" placeholder="Price ..." name="price" value={inputs.price} onChange={handleChange} />
                    <input className="formItemsai" type="text" placeholder="Image ..." name="image" value={inputs.image} onChange={handleChange} />
                    <input type="checkBox" id="chk" checked={checked} onChange={() => setChecked(!checked)} />
                    <label htmlFor="chk">
                        Available
                    </label>
                    <button className="submitai" type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Create
