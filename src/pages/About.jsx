import headshot from '../assets/images/headshot.png'

export default function About() {
    return (
        <section className="container col-md-12" id="about">
            <div className="row">
                <div>
                    <div className="d-flex flex-wrap align-items-center">
                        <div className="intro col-md-6 d-flex flex-column">
                            <h2 className="fs-3 fw-normal fst-italic">Actor, Singer, Designer</h2>
                            <p className="fs-6">
                                Murmurs from the house, a last minute prop check, and...
                                <br></br>
                                <br></br>
                                My name is Gillian Flatt and I am an Indianapolis based actor, singer, and costume designer. Throughout the past four years I have 
                                been cultivating my love for storytelling and pushing myself to learn new tools in order to tell those stories. I hold immense value 
                                in trying to find new angles and aspects of theatre as we all lift each other up as artists. Outside of theatre I enjoy writing, 
                                drawing, and showing off pictures of my french bulldog, Kevin! Please feel free to take some time to peruse my past acting and 
                                costume design projects, and I hope to work with you soon ◡̈
                                <br></br>
                                <br></br>
                                ...Lights down, curtain up, and away we go!
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