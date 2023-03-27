import react from 'react';
import Portfolio from '../assets/Portfolio Image.png';
import Nav from '../Nav/nav'

export default function About(){
  return(
    // <section className="Heading">
    <section className="About">
        <Nav />

    <figure className="figure-container">

    <img src="Portfolio" alt="A picture of myself, Ian Hnizdo"/>

    <figcaption className="myCaption">
      Me lol, who else?
    </figcaption>
    
    </figure>
      <article className="About-me-section">
        
      </article>
      </section>
    // </section>
  )  
}