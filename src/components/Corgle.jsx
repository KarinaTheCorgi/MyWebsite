import { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom";

export default function Corgle() {
    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const [timer, setTimer] = useRef(0);
    const [guessesCount, setGuessesCount] = useRef(0);
    const [guesses, setGuesses] = useState([]);

    const answer = "test"; // would be cool to use an api call

    const handleChange = (e) => {
        setGuesses((prev) => [])
    }

    // called once at render
    useEffect(() => {
        fetch().then(response => {
            
        })
    })



    const startGame = () => {
        const startingGuess = "";
        // get the answer somehow
        setTimer(0);
        setGuessesCount(0);
        setGuesses([]);
        setGameOver(false);
        setIsPaused(false);
        setGameStarted(true);
    }

    const togglePause = () => {
        if(!gameOver) setIsPaused((prev) => !prev);
    }

    return (
        <></>
    );

}