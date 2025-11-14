import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <>
            <title>About</title>
            <main>
                <section className="about-page">
                    <div className="section-content">
                        <div className="about-details">
                            <h2 className="title">About Me</h2>
                            <h3 className="subtitle">Who am I?</h3>
                            <p className="description">
                                Hello! I'm Karina. I'm currently pursuing a bachelor's degree in Software Engineering at 
                                Embry-Riddle Aeronautical University. I am set to graduate in May 2026, so I'm curently getting all 
                                my projects together, including this one. For those who are curious, here's some of my background.
                            </p>
                            
                            <h3 className="subtitle">Going to College</h3>
                            <p className="description">
                                In 6th grade, I was in a Lego Robotics club at BASIS Tucson Primary, where I worked with a small team to build a 
                                small robot with lego nxt, which would then compete in a small obstacle course. This ignighted what I thought was 
                                just a hobby. I continued developing my knowledge in 8th grade by taking an introduction to computer science course, 
                                where I was taught python. Then, in my freshman year, I continued this path by taking AP Computer Science, which 
                                utilized Java. But in 10th grade, COVID hit, and I transferred to Desert View. At BASIS, I was taking AP Chemistry and 
                                Honors Biology, so when I transferred, I decided to take Sports Medicine and Anatomy classes, and lean into the idea
                                of pursuing a career in the medical field. But in my spare time, I had started building my own computer. While I had 
                                all the parts laid out on a table, I had what I can only describe as an epiphany. I loved both biology and computer 
                                science for the same reason. I love fixing things. I love breaking systems down into their simplest forms and finding 
                                solutions for issues that way.
                            </p>
                            <p className="description">
                                Looking at colleges in-state, I found Embry-Riddle Aeronautical University. I had heard about it from my sister, so I
                                decided to visit during their preview day. So, my parents and I drove to Prescott to take a look. Upon touring the 
                                campus, I was entranced by their STEM building. One display in particular was a robotic arm. I immediately thought: 
                                <em> "that</em> is what I want to do". Mechatronics was the perfect blend of Biology and Computer Science. So, I applied 
                                to major in Mechanical Engineering on the robotics track. 
                            </p>

                            <h3 className="subtitle">College Life</h3>
                            <p className="description">
                                In my first semester, most of my friends had to take a class in MatLab, which was covered by my AP Computer Science credit.
                                But by helping them in that class, my interest in the Software side of robotics was piqued. I also realized that I didn't
                                care for the future physic classes that I would've had to take. After planning out my second semester to take courses that
                                both ME and SEs had to take to test out the change. I decided that my skill set and genuine academic interest more closely
                                aligned with Software Engineering. Because this school focuses on aeronautical endeavors, SEs are taught about developing
                                software for embedded systems, including aircraft/UAVs, satelites, and robots. I couldn't be happier with my decision to 
                                switch. 
                            </p>
                            <p className="description">Also during my time here, I've worked in the on-campus IT department, further developing my confidence 
                                in customer-interfacing, troubleshooting, with various kinds of systems, and team-oriented problem-solving.
                            </p>
                            <h3 className="subtitle">What's in store for me?</h3>
                            <p className="description">
                                As I said before, I'm currently a senior at ERAU, so I'm looking for a full-time position. Ideally, I would work on embedded 
                                systems, but I've also got experience in Fullstack development by virtue of being a Software Engineer. I've also found taught
                                frontend development lets me be creative graphically, which is nice. I thoroughly enjoy making and building this website, 
                                and I would be interested in developing applications in almost any avenue: mobile, desktop, or web.</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
    