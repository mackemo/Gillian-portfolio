import headshot from '../assets/images/headshot.png'

export default function About() {
    return (
        <section className="container col-md-12" id="about">
            <div className="row">
                <div>
                    <div className="d-flex flex-wrap align-items-center">
                        <div className="intro col-md-6 d-flex flex-column">
                            <h2 className="fs-3 fw-normal fst-italic">Theater Actress</h2>
                            <p className="fs-6">
                                My journey in theater began through extensive training and performances, where I developed my skills and received 
                                recognition for my passion and dedication to the stage. This accomplishment showcases my unwavering commitment 
                                and drive for excellence in acting!
                                <br></br>
                                <br></br>
                                I previously performed with a respected theater troupe in Babylon as an Actress. During my time there, I portrayed a variety of roles, 
                                demonstrating my ability to bring diverse characters to life. At present, I continue to perform in productions, where I immerse myself 
                                in the story and explore complex emotional depth within each role.
                                <br></br>
                                <br></br>
                                Holding a Bachelor's degree in Performing Arts from the University, I bring a meticulous and creative approach to every character. 
                                I am passionate about pushing my boundaries and perfecting my craft to deliver memorable and compelling performances in every show!
                            </p> 
                        </div>
                        
                        <div className="col-md-6 d-flex justify-content-center">
                            <img className="img-gillian col-md-6" src={headshot} alt="Gillian Flatt"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 