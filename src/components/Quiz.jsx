import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sampleQuizzes = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris",
    },
    {
        question: "What is the smallest prime number?",
        options: ["1", "2", "3", "5"],
        correctAnswer: "2",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars",
    },
];

const Quiz = () => {
    const [quizStates, setQuizStates] = useState(
        sampleQuizzes.map(() => ({ selectedAnswer: null, isCorrect: null }))
    );

    const handleAnswer = (quizIndex, selectedOption) => {
        setQuizStates((prevStates) => {
            const newStates = [...prevStates];
            const isCorrect = selectedOption === sampleQuizzes[quizIndex].correctAnswer;
            newStates[quizIndex] = { selectedAnswer: selectedOption, isCorrect };
            return newStates;
        });
    };

    return (
        <div className="space-y-3">
            <div className="space-y-3">
                {sampleQuizzes.map((quiz, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <h2 className="text-lg font-semibold">Question {index + 1}</h2>
                            <p>{quiz.question}</p>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                {quiz.options.map((option, optIndex) => (
                                    <Button
                                        key={optIndex}
                                        variant="outline"
                                        className={`w-full justify-start ${quizStates[index].selectedAnswer === option ? "bg-blue-100" : ""
                                            }`}
                                        onClick={() => handleAnswer(index, option)}
                                    >
                                        {option}
                                    </Button>
                                ))}
                            </div>
                            {quizStates[index].selectedAnswer && (
                                <div
                                    className={`mt-4 p-3 rounded-md text-white ${quizStates[index].isCorrect ? "bg-green-500" : "bg-red-500"
                                        }`}
                                >
                                    {quizStates[index].isCorrect
                                        ? "Correct Answer! Well done."
                                        : `Wrong Answer. The correct answer is ${quiz.correctAnswer}.`}
                                </div>
                            )}
                        </CardContent>
                        <CardFooter>
                            <p className="text-sm text-muted-foreground">
                                Select the correct answer from the options above.
                            </p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Quiz;
