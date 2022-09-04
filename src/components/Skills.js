import react from "../assets/img/React-icon.svg.png";
import node from "../assets/img/node.png";
import all from "../assets/img/all.png";
import postgres from "../assets/img/postgres.png";
import mysql from "../assets/img/mysql.png";
import php from "../assets/img/php.png";
import github from "../assets/img/github.png";
import linux from "../assets/img/linux.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Estas são as tecnologias que eu já trabalhei durante minha jornada.<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div style={{width: '200px', height: '200px'}} className="item">
                                <img style={{width: '120px', height: '100px'}}src={react} alt="Image" />
                                <h5>ReactJs</h5>
                            </div>
                            <div style={{width: '200px', height: '200px'}} className="item">
                                <img src={node} alt="Image" />
                                <h5>NodeJs</h5>
                            </div>
                            <div style={{width: '200px', height: '200px'}} className="item">
                                <img style={{width: '200px', height: '100px'}} src={all} alt="Image" />
                                <h5>Desenvolvimento Web</h5>
                            </div>
                            <div style={{width: '200px', height: '200px'}} className="item">
                                <img src={postgres} alt="Image" />
                                <h5>PostgreSQL</h5>
                            </div>
                            <div style={{width: '200px', height: '200px'}} className="item">
                                <img style={{width: '150px', height: '100px'}}  src={mysql} alt="Image" />
                                <h5>MySQL</h5>
                            </div>
                            <div style={{width: '200px', height: '200px'}} className="item">
                                <img style={{width: '180px', height: '100px'}}  src={php} alt="Image" />
                                <h5>PHP</h5>
                            </div>
                            <div style={{width: '200px', height: '200px'}} className="item">
                                <img src={github} alt="Image" />
                                <h5>GitHub</h5>
                            </div>
                            <div style={{width: '200px', height: '200px'}} className="item">
                                <img src={linux} alt="Image" />
                                <h5>Linux</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
