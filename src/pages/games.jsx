import Navbar from "../components/Navbar";
import SnakeGame from "../components/SnakeGame";

export default function Games() {
    return (
        <>
            <title>Games</title>

            <Navbar/>
            <main>
                <section className="games">
                    <SnakeGame />
                </section>
            </main>
            
        </>
    )
}