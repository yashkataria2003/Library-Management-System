import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../MyBookDetail/MyBookDetail.css";

export default function MyBookDetails() {
  const [inputs, setInputs] = useState({
    name: "",
    author: "",
    description: "",
    price: 0,
    image: "",
  });

  const id = useParams().id;
  const [checked, setChecked] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/books/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.book));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/books/${id}`, {
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
    sendRequest().then(() => history("/books"));
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <h2 className="headingmbd">Update Details ... </h2>
      <div className='container1mbd'>
        <form className='form' onSubmit={handleSubmit}>
          <input className="formItemsmbd" type="text" placeholder="Book Name ..." name="name" value={inputs.name} onChange={handleChange} />
          <input className="formItemsmbd" type="text" placeholder="Author Name ..." name="author" value={inputs.author} onChange={handleChange} />
          <input className="formItemsmbd" type="text" placeholder="Description ..." name="description" value={inputs.description} onChange={handleChange} />
          <input className="formItemsmbd" type="number" placeholder="Price ..." name="price" value={inputs.price} onChange={handleChange} />
          <input className="formItemsmbd" type="text" placeholder="Image ..." name="image" value={inputs.image} onChange={handleChange} />
          <input type="checkBox" id="chk" checked={checked} onChange={() => setChecked(!checked)} />
          <label htmlFor="chk">
            Available
          </label>
          <button className="submitmbd" type="submit">Update</button>
        </form>
      </div>
    </>
  )
}
