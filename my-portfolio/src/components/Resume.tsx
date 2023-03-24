import resumeFile from "../assets/Ian Hnizdo, Resume.pdf";


export default function Resume(){
    return(
        <section className="resume-section">
            <a href={resumeFile} className="My resume" download="Ian Hnizdo, Resume">
                <img src={resumeFile} alt="Resume image"/>
            </a>
        </section>
    )
}