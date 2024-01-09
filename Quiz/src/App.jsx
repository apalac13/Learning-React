import { useState, useEffect } from "react";
import Quiz from "./components/Quiz";
import "./App.css";
import axios from "axios";

function App() {
  const [question, setQuestion] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("any");
  const [selectedCategory, setSelectedCategory] = useState("any");
  const [selectedNumQuestions, setSelectedNumQuestions] = useState(5);
  const [showSettings, setShowSettings] = useState(false);

  const handleStartGame = () => {
    const url = `https://opentdb.com/api.php?amount=${selectedNumQuestions}&difficulty=${selectedDifficulty}&category=${selectedCategory}&type=multiple`;

    axios
      .get(url)
      .then((res) => setQuestion(res.data.results))
      .catch((err) => alert(err));

    setShowSettings(false); // Hide settings after starting the game
  };

  return (
    <>
      <div>
        {showSettings ? (
          <div>
            <h2>Quiz Settings</h2>
            <label>
              Difficulty:
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
              >
                <option value="any">Any</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </label>
            <label>
              Category:
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="any">Any</option>
                <option value="9">General Knowledge</option>
                <option value="10">Books</option>
                {/* Add more categories as needed */}
              </select>
            </label>
            <label>
              Number of Questions:
              <input
                type="number"
                value={selectedNumQuestions}
                onChange={(e) => setSelectedNumQuestions(e.target.value)}
              />
            </label>
            <button onClick={handleStartGame}>Start Game</button>
          </div>
        ) : (
          <button onClick={() => setShowSettings(true)}>Start Game</button>
        )}
      </div>

      <Quiz questions={question} resetQuiz={handleStartGame} />
    </>
  );
}

export default App;
