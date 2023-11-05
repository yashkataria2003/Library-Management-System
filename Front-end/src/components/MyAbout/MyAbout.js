import React from 'react';
import '../MyAbout/MyAbout.css';
import image1 from '../Images/YashImg.png';
import image2 from '../Images/AbhishekImg.png';
import image3 from '../Images/MilanImg.png';

export default function MyAbout() {
  return (
    <>
      <div className="containerma">
        <div className="boxma">
          <h3>About Us</h3>
          Welcome to our Library Management System! This platform is the
          brainchild of Milandeep, Abhishek, and Yash. We are a team of
          passionate developers committed to revolutionizing the way libraries
          operate. Our Library Management System is built on the MERN stack, a
          powerful combination of MongoDB, Express.js, React.js, and Node.js.
          This technology stack allows us to provide a seamless and efficient
          experience for both librarians and students.
        </div>
      </div>
      <div className="container1ma">
        <div className="cardma">
          <img src={image1} alt="img" className="imgma" />
          <h3>Yash Kumar</h3>
          <article>BCA M2</article>
          <div className="socialma">
            <a
              href="https://www.instagram.com/_yash_kumar_03_/"
              target="_blank"
            >
              <i className="icon ion-social-instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/yash-kumar-04a893272/"
              target="_blank"
            >
              <i className="icon ion-social-linkedin" />
            </a>
          </div>
          <p>
            Yash Kumar, a BCA final year student at IINTM, is fervently engaged
            in web development, aiming to create innovative and user-friendly
            digital solutions.
          </p>
        </div>
        <div className="cardma">
          <img src={image2} alt="img" className="imgma" />
          <h3>Abhishek Ranjan</h3>
          <article>BCA E1</article>
          <div className="socialma">
            <a
              href="https://www.instagram.com/abhishek_ranjan033/"
              target="_blank"
            >
              <i className="icon ion-social-instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-ranjan-1bb080239/"
              target="_blank"
            >
              <i className="icon ion-social-linkedin" />
            </a>
          </div>
          <p>
            Abhishek Ranjan, an ambitious final year BCA student at IINTM, is
            deeply engrossed in programming and aims to make significant
            contributions to the field.
          </p>
        </div>
        <div className="cardma">
          <img src={image3} alt="img" className="imgma" />
          <h3>Milandeep Singh</h3>
          <article>BCA M2</article>
          <div className="socialma">
            <a href="https://www.instagram.com/milan__do_04/" target="_blank">
              <i className="icon ion-social-instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/milan-saleria-73b73527a/"
              target="_blank"
            >
              <i className="icon ion-social-linkedin" />
            </a>
          </div>
          <p>
            Milandeep Singh, a dedicated BCA final year student at IINTM, is
            immersed in game development, striving to create engaging and
            immersive gaming experiences.
          </p>
        </div>
      </div>
    </>
  );
}
