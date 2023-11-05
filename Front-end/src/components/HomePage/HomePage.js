import React from 'react';
import '../HomePage/HomePage.css';
import { useNavigate } from 'react-router-dom';
import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpg';
import Library from '../Images/Library.jpg';
import About from '../Images/AboutINS.jpg';
import Chairman from '../Images/chairman.jpg';
import Techtonics from '../Images/techtonics.jpeg';
import Training from '../Images/SummerTraning.jpg';
import Fiesta from '../Images/fiesta.jpg';
import Magzines from '../Images/magzines.jpg';
import Director from '../Images/director.jpeg';

export default function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/books');
  };

  return (
    <div className="containerhp">
      <h2 className="headinghp">
        Welcome to{' '}
        <span className="iitm">
          II<span className="tSize">T</span>M
        </span>{' '}
        Library
      </h2>
      <div className="boxhp">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <button onClick={handleClick} className="btnhp">
        View All Books
      </button>
      <section className="showcaseHP" id="explore-mountains">
        <div className="containerHP">
          <div className="rowHP row1HP">
            <div className="img-boxHP">
              <img src={Library} alt="Reload" />
            </div>
            <div className="text-boxHP">
              <h2 className="lg-headingHP">About Library</h2>
              <p className="text-greyHP">
                The IITM Library is a vital academic resource for Management and
                IT students and faculty. With a vast collection of 19,000+
                books, CDs, and cassettes, it offers a modern, air-conditioned
                reading space. The library houses 17 National and International
                Journals, along with e-journals and DELNET membership. Book
                Bank, OPAC, and open bookshelf access enrich the research and
                learning experience for all
              </p>
            </div>
          </div>
          <div className="rowHP row1HP">
            <div className="img-boxHP">
              <img src={Training} alt="Reload" />
            </div>
            <div className="text-boxHP">
              <h2 className="lg-headingHP" HP>
                Summer Tranning
              </h2>
              <p className="text-greyHP">
                Elevate your skills this summer with our MERN Stack Training led
                by expert <b>Piyush Sir</b>. Dive into MongoDB, Express.js,
                React, and Node.js and build powerful web applications.
                Practical insights, real projects, and expert guidance await you
                in this immersive program.
              </p>
            </div>
          </div>
          <div className="rowHP row2HP">
            <div className="img-boxHP">
              <img src={About} alt="Dekho" />
            </div>
            <div className="text-boxHP">
              <h2 className="lg-headingHP">About Institute</h2>
              <p className="text-greyHP">
                The Institute aims to excel in technical education, nurturing
                competent and ethical professionals. With an emphasis on
                learning, values, and practical skills, it grooms future
                leaders. Affiliated with Guru Gobind Singh Indraprastha
                University, the campus offers IT and management programs in a
                modern environment with AC lecture theaters, i5 computer labs,
                and a well-equipped library.
              </p>
            </div>
          </div>
          <div className="rowHP row1HP">
            <div className="img-boxHP">
              <img src={Chairman} alt="Reload" />
            </div>
            <div className="text-boxHP">
              <h2 className="lg-headingHP">Chairman Message</h2>
              <p className="text-greyHP">
                IITM is committed to providing globally recognized education
                that prepares students for professional challenges. Balancing
                modernity with values, the institute offers holistic learning
                through academics, extracurriculars, and sports, aiming to
                develop well-rounded individuals.
              </p>
            </div>
          </div>
          <div className="rowHP row2HP">
            <div className="img-boxHP">
              <img src={Techtonics} alt="Dekho" />
            </div>
            <div className="text-boxHP">
              <h2 className="lg-headingHP">Techtonics</h2>
              <p className="text-greyHP">
                Techtonics is a tech-centered extravaganza uniting students in
                diverse tech events. From coding challenges to hackathons, it's
                a dynamic platform for showcasing innovation. Workshops by
                experts enrich participants' skills in AI, robotics, and more.
                Techtonics fosters learning, collaboration, and passion for
                technology, igniting the tech community's vibrancy.
              </p>
            </div>
          </div>
          <div className="rowHP row2HP">
            <div className="img-boxHP">
              <img src={Fiesta} alt="Dekho" />
            </div>
            <div className="text-boxHP">
              <h2 className="lg-headingHP">Fiesta</h2>
              <p className="text-greyHP">
                Fiesta, IITM Janakpuri's Annual Cultural fest, is a two-day
                extravaganza displaying students' zeal through dance, music,
                drama, and more. With participants from Delhi institutes, it
                features performances, celebrity attractions, and a grand finale
                at Talkatora Stadium with stars like Jassie Gill. Passionate
                students create an unforgettable event.
              </p>
            </div>
          </div>
          <div className="rowHP row1HP">
            <div className="img-boxHP">
              <img src={Magzines} alt="Reload" />
            </div>
            <div className="text-boxHP">
              <h2 className="lg-headingHP">Magzines</h2>
              <p className="text-greyHP">
                IITM Janakpuri Delhi's annual magazine, 'Navonmesh', is a
                creative platform reflecting student talent and institution's
                growth. Filled with stories, poems, and artwork, it embodies the
                college's commitment to excellence in education and research.
              </p>
            </div>
          </div>
          <div className="rowHP row2HP">
            <div className="img-boxHP">
              <img src={Director} alt="Dekho" />
            </div>
            <div className="text-boxHP">
              <h2 className="lg-headingHP">Director</h2>
              <p className="text-greyHP">
                Nurturing Excellence" is our motto, driving quality education
                since inception. We foster holistic development, aiming to mold
                leaders and ethical individuals. Our strong faculty,
                state-of-the-art facilities, and high placement rates set us
                apart. We're committed to making our degree program a terminal
                achievement.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="featuresHP">
        <div className="container">
          <div className="box-wrapperHP">
            <div className="boxHP box-1HP">
              <i className="fa-solid fa-route fa-2x"></i>
              <h2 className="mg-headingHP">ADMISSION</h2>
              <p>
                Admissions are Conducted Solely On the basis of merit through a
                common entrance test(CET) Conducted by GGSIPU
              </p>
            </div>
            <div className="boxHP box-2HP">
              <i className="fa-solid fa-shop fa-2x"></i>
              <h2 className="mg-headingHP">PROGRAMMES</h2>
              <p>
                the Insititue offer UGC approved GGSIPU conducted BBA,BCA and
                BCom(Hons)
              </p>
            </div>
            <div className="boxHP box-3HP">
              <i className="fa-solid fa-dumbbell fa-2x"></i>
              <h2 className="mg-headingHP">PLACEMENT</h2>
              <p>
                The IITM Industry Insititue Partnership Center(IIPC) for
                enhacing interface between the Insititue and Industry
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
