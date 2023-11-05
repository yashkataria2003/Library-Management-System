import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../MyBook/MyBook.css";

export default function MyBook(props) {
    const history = useNavigate();
    const { _id, name, author, description, price, image } = props.book;

    const deleteHandler = async () => {
        await axios
            .delete(`http://localhost:5000/books/${_id}`)
            .then((res) => res.data)
            .then(() => history("/"))
            .then(() => history("/books"));
    };

    const handleClick = () => {
        history(`/books/${_id}`);
    }

    return (
        <div className="container1mb">
            <div className="cardmb">
                <img src={image} alt={name} />
                <h3>{name}</h3>
                <article>By {author}</article>
                <p>{description}</p>
                <h3>Rs {price}</h3>
                <div className="btn-containermb">
                    <button onClick={handleClick} className="btnmb">
                        Update
                    </button>
                    <button onClick={deleteHandler} className="btnmb">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}
