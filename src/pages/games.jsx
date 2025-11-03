import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SnakeGame from "../components/SnakeGame";

export default function Games() {
    return (
        <>
            <title>Games</title>
            <main>
                <section className="games">
                    <SnakeGame />
                </section>
            </main>
        </>
    )
}