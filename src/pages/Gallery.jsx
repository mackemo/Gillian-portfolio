import images from '../assets/images'

export default function Gallery() {
    return (
        <section className="container col-md-10" id="projects">
            <div className="row">
                <div>
                    <h3 className="title fw-medium">Gallery</h3>
                    <div className="work-topics">
                        <div className="work">
                            <a href="" target="_blank">
                                <img src={images.theydont} alt="They Don't Pay? We Won't Pay!"/>
                                <div className="info">
                                <h5>They Don't Pay? We Won't Pay!</h5>
                                </div>
                            </a>
                        </div>
                        <div className="work">
                            <a href="" target="_blank">
                                <img src={images.radium} alt="Radium Girls"/>
                                <div className="info">
                                <h5>Radium Girls</h5>
                                </div>
                            </a>
                        </div>
                        <div className="work">
                            <a href="" target="_blank">
                                <img src={images.men} alt="Men on Boats"/>
                                <div className="info">
                                <h5>Men on Boats</h5>
                                </div>
                            </a>
                        </div>
                        <div className="work">
                            <a href="" target="_blank">
                                <img src={images.love} alt="About Love"/>
                                <div className="info">
                                <h5>About Love</h5>
                                </div>
                            </a>
                        </div>
                        <div className="work">
                            <a href="" target="_blank">
                                <img src={images.costume} alt="Specific Costume Work"/>
                                <div className="info">
                                <h5>Specific Costume Work</h5>
                                </div>
                            </a>
                        </div>
                        <div className="work">
                            <a href="" target="_blank">
                                <img src={images.wonderland} alt="Wonderland"/>
                                <div className="info">
                                <h5>Wonderland</h5>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 