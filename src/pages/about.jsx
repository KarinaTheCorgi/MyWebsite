import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <>
            <title>About</title>
            
            <Navbar/>

            <main>
                <section className="about-page">
                    <div className="section-content">
                        <div className="about-details">
                            <h2 className="title">About Me</h2>
                            <h3 className="subtitle">Here's a little background for those curious.</h3>
                            <p className="description">Hello! My name is Karina. I'm currently pursuing a bachelor's degree in Software Engineering at 
                                                Embry-Riddle Aeronautical University. I am set to graduate in May 2026, so I'm curently getting all 
                                                my projects together, including this one. </p>
                            
                            <p className="description">I was initially accepted at ERAU intending to pursue a career in Mechanical Engineering, but decided 
                                                that my skillsets more closely aligned with Software Engineering. In 8th grade, I was first introduced 
                                                to the idea of computer science, by taking an elective that taught python. There is no better feeling 
                                                than being in a classroom and just fully understanding the content being taught. At the time I thought, 
                                                this is how most people feel in all there classes, so I didn't think it was that special. I applied to
                                                be a mechanical engineering major because I when I came to visit the University before applying I had 
                                                seen a robotic arm on display that some of the students had created, and I thought "I wanna do <em>that</em>".
                                                Up to that point I had been really into STEM, English was not my strong suit. I hated the readings, 
                                                the essays, and the discussions. So, I picked the furthest thing from that I could think of. I 
                                                thought that I could possibly be into the idea of creating medical devices. I especially liked the 
                                                idea of being involved in the creation of mechatronic appendages, like robotic arms for amputees.
                                                </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}
    