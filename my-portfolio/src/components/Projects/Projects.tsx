import BreweryApp from "../assets/BreweryApp.png";
import PinkFairy from "../assets/PinkFairyShopGrabber.png";

export default function Projects(){
    return(
        <section className="Projects">
            <figure className="Svelvet">

            </figure>

            <figure className="APIDatabase">
                <img src={PinkFairy} alt="The API Driven Database"/>
                <figcaption>
                    API Driven Database Inventory
                </figcaption>
            </figure>

            <figure className="Brewery">
                <img src={BreweryApp} alt="The Brewery Lookup Application"/>
                <figcaption>
                    Location Based Brewery Lookup
                </figcaption>
            </figure>
        </section>
    )
}