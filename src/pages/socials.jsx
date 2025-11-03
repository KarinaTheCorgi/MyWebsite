import Navbar from "../components/Navbar";

export default function Socials() {
    return (
        <>
            <title>Socials</title>
            <main>
                <section className="socials-page">
                    <div className="section-content">
                        <div className="social-details">
                            <h2 className="title">Follow Me on Social Media</h2>
                            <div className="social-buttons">
                                <a href="https://www.twitch.tv/karinathecorgi" class="social-button twitch" target="_blank">
                                    <i class="fab fa-twitch"></i> Follow me on Twitch
                                </a>
                                <a href="https://twitter.com/karinathecorgi" class="social-button twitter" target="_blank">
                                    <i className="fab fa-twitter"></i> Follow me on Twitter
                                </a>
                                <a href="https://www.instagram.com/karinathecorgi" class="social-button instagram" target="_blank">
                                    <i className="fab fa-instagram"></i> Follow me on Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}