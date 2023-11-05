import React from 'react';
import '../Footer/Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <div className="footer-basic">
        <footer>
          <div className="social">
            <a href="https://www.instagram.com/" target="_blank">
              <i className="icon ion-social-instagram" />
            </a>
            <a href="https://www.snapchat.com/" target="_blank">
              <i className="icon ion-social-snapchat" />
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <i className="icon ion-social-twitter" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <i className="icon ion-social-facebook" />
            </a>
          </div>
          <ul className="list-inline">
            {/* <li className="list-inline-item">
                            <Link to={handleClick}>Home</Link>
                        </li> */}
            <li className="list-inline-item">
              <Link to="/">Home</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/add">Services</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/books">Books</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/about">About</Link>
            </li>
          </ul>
          <p className="copyright">
            IITM - Library Management &copy; 2023 ALL Right Reserved by
            Milandeep, Abhishek Ranjan and Yash Kumar
          </p>
        </footer>
      </div>
    </>
  );
}
