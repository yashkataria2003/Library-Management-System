import React, {useState} from 'react'
import '../Navbar/Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../Images/logo.png'

function Navbar() {
    const [value, setValue] = useState();

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }
    return (
        <div className="container1nb">
            <div className="Navbarnb">
                <img src={logo} alt="Logo" onClick={handleClick} className='logo'/>
                <ul className="nav-optionsnb" value={value} onChange={(e, val) => setValue(val)}>
                    <li className="optionsnb"><a href="https://database.worldlibrary.org/#/browse" className="opsnb" target='_blank'>Read Book</a></li>
                    <li className="optionsnb"><Link to="/add" className="opsnb">Add Book</Link></li>
                    <li className="optionsnb"><Link to="/books" className="opsnb">Books</Link></li>
                    <li className="optionsnb"><Link to="/about" className="opsnb">About Us</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
