import headshot from '../assets/images/headshot.png'
import resume from '../assets/images/resume.png'

export default function Resume() {
  return (
    <section className="container col-md-12" id="skills">
      <div className="row">
        <h3 className="title fw-medium">Resume</h3>
        <div>
            <div className="d-flex flex-wrap align-items-center">
                <div className="col-md-6 d-flex justify-content-center">
                    <img className="img-resume col-md-12" src={headshot} alt="Gillian Resume"/>
                </div>
                
                <div className="col-md-6 d-flex justify-content-center">
                    <img className="img-gillian col-md-12" src={resume} alt="Gillian Flatt"/>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}


