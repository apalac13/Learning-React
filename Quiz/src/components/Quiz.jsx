import { useState } from "react";

function Quiz({ questions, resetQuiz }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Initialize selectedAnswer

  const handleRestartQuiz = () => {
    resetQuiz();

    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
  };

  // Add a conditional check to ensure questions exist
  if (!questions || questions.length === 0) {
    return <div>Loading...</div>;
  }

  const handleAnswerClick = (selectedAnswer) => {
    // Check if the selected answer is correct
    if (selectedAnswer === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }

    // Set the selected answer
    setSelectedAnswer(selectedAnswer);

    // Use setTimeout to delay moving to the next question
    setTimeout(() => {
      setSelectedAnswer(null);
      setCurrentQuestion(currentQuestion + 1);
    }, 500); // Delay for 1 second (1000 milliseconds)
  };

  // Check if all questions have been answered
  const isQuizComplete = currentQuestion === questions.length;

  return (
    <div className="flex items-center justify-center gap-4 p-2 bg-[#7f7fff92] rounded-2xl">
      {!isQuizComplete ? (
        <div className="w-full flex items-center ">
          <div className="w-1/2 flex flex-col items-center gap-2">
            <div className="w-full bg-[#cdcdcd]  border border-yellow-600 rounded-xl">
              <p className="text-xl">Pitanje {currentQuestion + 1}: </p>
              <p className="text-lg">{questions[currentQuestion]?.question}</p>
            </div>
            <div className="w-1/2 flex flex-col gap-2 cursor-pointer">
              {questions[currentQuestion]?.incorrect_answers.map(
                (answer, index) => (
                  <div
                    key={index}
                    className={`p-2 border border-yellow-600 rounded-xl ${
                      selectedAnswer === answer &&
                      answer !== questions[currentQuestion]?.correct_answer
                        ? "bg-red-300" // Incorrect answer
                        : "bg-[#cdcdcd]" // Not selected
                    }`}
                    onClick={() => handleAnswerClick(answer)}
                  >
                    <p>{answer}</p>
                  </div>
                )
              )}
              <div
                className={`p-2 border border-yellow-600 rounded-xl ${
                  selectedAnswer === questions[currentQuestion]?.correct_answer
                    ? "bg-green-300" // Correct answer
                    : "bg-[#cdcdcd]" // Not selected
                }`}
                onClick={() =>
                  handleAnswerClick(questions[currentQuestion]?.correct_answer)
                }
              >
                <p>{questions[currentQuestion]?.correct_answer}</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-3 text-2xl">
            <div>
              <p>Pitanje:</p>
              <p>
                {currentQuestion + 1}/{questions.length}
              </p>
            </div>
            <div>
              <p>Rezultat:</p>
              <p> {score}</p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="flex flex-col
        "
        >
          <p className="bg-green-200 rounded ">Quiz completed!</p>
          <p className="mb-3">
            Your result: {score}/{questions.length}
          </p>
          <div>
            <p className="mb-2">Do you wanna restart quiz?</p>
            <div className="flex items-center justify-evenly">
              <p
                className="w-12 h-8 bg-[#cdcdcd] border border-yellow-600 rounded cursor-pointer  "
                onClick={handleRestartQuiz}
              >
                Yes
              </p>
              <p className="w-12 h-8 bg-[#cdcdcd]  border border-yellow-600 rounded cursor-pointer">
                No
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
