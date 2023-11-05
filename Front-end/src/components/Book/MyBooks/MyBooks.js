import React, { useEffect, useState } from "react";
import "../MyBooks/MyBooks.css";
import axios from "axios";
import MyBook from "../MyBook/MyBook";
const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
};

export default function MyBooks() {
    const [books, setBooks] = useState();

    useEffect(() => {
        fetchHandler().then((data) => setBooks(data.books));
    }, []);

    console.log(books);

    return (
        <div>
            <div>
                <h2 className="headingmbs">Book Inventory</h2>
                <ul className="books">
                    {books &&
                        books.map((book, i) => (
                            <li key={i}>
                                <MyBook book={book} />
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}
