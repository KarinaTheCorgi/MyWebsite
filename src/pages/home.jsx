import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <title>Home</title>

            <Navbar/>

            <main>
                <section className="home-page">
                    <div className="section-content">
                        <div className="home-details">
                            <h2 className="title">Welcome</h2>
                            <h3 className="subtitle">You've come to the right place!</h3>
                            <p className="description">Stay for a while to learn about an up-and-coming developer, me.</p>
                            <div className="buttons">
                                <a href="https://github.com/KarinaTheCorgi" className="button github">See my code!</a>
                                <Link to='/socials' className="button follow-me">Socials</Link>
                            </div>
                        </div>
                        <div className="home-image-wrapper">
                            <img src="../orange_dino_cartoon.png" alt="orange cartoon dinosaur" className="hero-image"/>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}