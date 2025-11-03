import { useState, useEffect, useRef } from "react";

export default function SnakeGame() {
  const BOARD_SIZE = 30;
  localStorage.clear();

  const [snake, setSnake] = useState([[5, 10]]);
  const [food, setFood] = useState(generateFood([[5, 10]]));
  const [direction, setDirection] = useState([0, 0]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(
    parseInt(localStorage.getItem("snake-high-score")) || 0
  );
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef(null);

  function generateFood(currentSnake) {
    let newFood;
    do {
      newFood = [
        Math.floor(Math.random() * BOARD_SIZE) + 1,
        Math.floor(Math.random() * BOARD_SIZE) + 1,
      ];
    } while (
      currentSnake.some((seg) => seg[0] === newFood[0] && seg[1] === newFood[1])
    );
    return newFood;
  }

  const handleKey = (e) => {
    const [dx, dy] = direction;
    if (!gameStarted || isPaused || gameOver) return;

    switch (e.key) {
      case "ArrowUp":
        if (dy !== 1) setDirection([0, -1]);
        break;
      case "ArrowDown":
        if (dy !== -1) setDirection([0, 1]);
        break;
      case "ArrowLeft":
        if (dx !== 1) setDirection([-1, 0]);
        break;
      case "ArrowRight":
        if (dx !== -1) setDirection([1, 0]);
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [direction, gameStarted, isPaused, gameOver]);

  // Game loop
  useEffect(() => {
    if (!gameStarted || gameOver || isPaused) {
      clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setSnake((prevSnake) => {
        const newSnake = [...prevSnake];
        const [dx, dy] = direction;

        if (dx === 0 && dy === 0) return prevSnake;

        const newHead = [newSnake[0][0] + dx, newSnake[0][1] + dy];

        // Wall collision
        if (
          newHead[0] <= 0 ||
          newHead[0] > BOARD_SIZE ||
          newHead[1] <= 0 ||
          newHead[1] > BOARD_SIZE
        ) {
          setGameOver(true);
          return prevSnake;
        }

        // Self collision
        if (newSnake.some((seg) => seg[0] === newHead[0] && seg[1] === newHead[1])) {
          setGameOver(true);
          return prevSnake;
        }

        newSnake.unshift(newHead);

        // Eat food
        if (newHead[0] === food[0] && newHead[1] === food[1]) {
          const newScore = score + 1;
          setScore(newScore);

          // Update high score if needed
          if (newScore > highScore) {
            setHighScore(newScore);
            localStorage.setItem("snake-high-score", newScore);
          }

          setFood(generateFood(newSnake));
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 125);

    return () => clearInterval(intervalRef.current);
  }, [gameStarted, direction, food, gameOver, isPaused, score, highScore]);

  const startGame = () => {
    const startingSnake = [[5, 10]];
    setSnake(startingSnake);
    setFood(generateFood(startingSnake));
    setDirection([0, 0]);
    setScore(0);
    setGameOver(false);
    setIsPaused(false);
    setGameStarted(true);
  };

  const togglePause = () => {
    if (!gameOver) setIsPaused((prev) => !prev);
  };

  return (
    <div className="snake-game">
      <div className="game-info">
        <h2 className="game-title">Snake Game</h2>
      </div>

      <div className="snake-wrapper">
        <div className="snake-game-details">
          <span className="snake-score">Score: {score}</span>
          <span className="snake-high-score">High Score: {highScore}</span>
          {gameStarted && !gameOver && !isPaused && (
            <button className="button pause-button" onClick={togglePause}>
              ⏸ Pause
            </button>
          )}
        </div>

        <div className="snake-game-board">
          {snake.map(([x, y], idx) => (
            <div
              key={idx}
              className={idx === 0 ? "head" : "body"}
              style={{ gridArea: `${y} / ${x}` }}
            />
          ))}
          <div className="food" style={{ gridArea: `${food[1]} / ${food[0]}` }} />

          {/* Start overlay */}
          {!gameStarted && !gameOver && (
            <div className="start-overlay">
              <h2>Snake Game</h2>
              <button onClick={startGame}>▶ Play</button>
            </div>
          )}

          {/* Pause overlay */}
          {isPaused && !gameOver && (
            <div className="pause-overlay">
              <h2>Paused</h2>
              <button onClick={togglePause}>▶ Resume</button>
            </div>
          )}

          {/* Game Over overlay */}
          {gameOver && (
            <div className="pause-overlay">
              <h2>Game Over</h2>
              <button onClick={startGame}>⟳ Restart</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
