"use client"

import { useStore } from "@/lib/GlobalStore"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Confetti from "@/components/Confetti"
import { Badge } from "@/components/ui/badge"
import Result from "@/components/Result"


const testData = {
    "title": "MBTI Personality Test",
    "questions": [
        {
            "id": "q1",
            "question": "At a party do you:",
            "options": [
                {
                    "value": "e",
                    "text": "Interact with many, including strangers"
                },
                {
                    "value": "i",
                    "text": "Interact with a few, known to you"
                }
            ]
        },
        {
            "id": "q2",
            "question": "Are you more:",
            "options": [
                {
                    "value": "s",
                    "text": "Realistic than speculative"
                },
                {
                    "value": "n",
                    "text": "Speculative than realistic"
                }
            ]
        },
        {
            "id": "q4",
            "question": "Are you more impressed by:",
            "options": [
                {
                    "value": "t",
                    "text": "Principles"
                },
                {
                    "value": "f",
                    "text": "Emotions"
                }
            ]
        },
        {
            "id": "q5",
            "question": "Are more drawn toward the:",
            "options": [
                {
                    "value": "t",
                    "text": "Convincing"
                },
                {
                    "value": "f",
                    "text": "Touching"
                }
            ]
        },
        {
            "id": "q6",
            "question": "Do you prefer to work:",
            "options": [
                {
                    "value": "j",
                    "text": "To deadlines"
                },
                {
                    "value": "p",
                    "text": "Just 'whenever'"
                }
            ]
        },
        {
            "id": "q7",
            "question": "Do you tend to choose:",
            "options": [
                {
                    "value": "j",
                    "text": "Rather carefully"
                },
                {
                    "value": "p",
                    "text": "Somewhat impulsively"
                }
            ]
        },
        {
            "id": "q8",
            "question": "At parties do you:",
            "options": [
                {
                    "value": "e",
                    "text": "Stay late, with increasing energy"
                },
                {
                    "value": "i",
                    "text": "Leave early with decreased energy"
                }
            ]
        },
        {
            "id": "q9",
            "question": "Are you more attracted to:",
            "options": [
                {
                    "value": "s",
                    "text": "Sensible people"
                },
                {
                    "value": "n",
                    "text": "Imaginative people"
                }
            ]
        },
        {
            "id": "q10",
            "question": "Are you more interested in:",
            "options": [
                {
                    "value": "s",
                    "text": "What is actual"
                },
                {
                    "value": "n",
                    "text": "What is possible"
                }
            ]
        },
        {
            "id": "q11",
            "question": "In judging others are you more swayed by:",
            "options": [
                {
                    "value": "t",
                    "text": "Laws than circumstances"
                },
                {
                    "value": "f",
                    "text": "Circumstances than laws"
                }
            ]
        },
        {
            "id": "q12",
            "question": "In approaching others is your inclination to be somewhat:",
            "options": [
                {
                    "value": "t",
                    "text": "Objective"
                },
                {
                    "value": "f",
                    "text": "Personal"
                }
            ]
        },
        {
            "id": "q13",
            "question": "Are you more:",
            "options": [
                {
                    "value": "j",
                    "text": "Punctual"
                },
                {
                    "value": "p",
                    "text": "Leisurely"
                }
            ]
        },
        {
            "id": "q22",
            "question": "In phoning do you:",
            "options": [
                {
                    "value": "e",
                    "text": "Rarely question that it will all be said"
                },
                {
                    "value": "i",
                    "text": "Rehearse what you’ll say"
                }
            ]
        },
        {
            "id": "q23",
            "question": "Facts:",
            "options": [
                {
                    "value": "s",
                    "text": "Speak for themselves"
                },
                {
                    "value": "n",
                    "text": "Illustrate principles"
                }
            ]
        },
        {
            "id": "q24",
            "question": "Are visionaries:",
            "options": [
                {
                    "value": "s",
                    "text": "Somewhat annoying"
                },
                {
                    "value": "n",
                    "text": "Rather fascinating"
                }
            ]
        },
        {
            "id": "q25",
            "question": "Are you more often:",
            "options": [
                {
                    "value": "t",
                    "text": "A cool-headed person"
                },
                {
                    "value": "f",
                    "text": "A warm-hearted person"
                }
            ]
        },
        {
            "id": "q26",
            "question": "Is it worse to be:",
            "options": [
                {
                    "value": "t",
                    "text": "Unjust"
                },
                {
                    "value": "f",
                    "text": "Merciless"
                }
            ]
        },
        {
            "id": "q27",
            "question": "Should one usually let events occur:",
            "options": [
                {
                    "value": "j",
                    "text": "By careful selection and choice"
                },
                {
                    "value": "p",
                    "text": "Randomly and by chance"
                }
            ]
        },
        {
            "id": "q28",
            "question": "Do you feel better about:",
            "options": [
                {
                    "value": "j",
                    "text": "Having purchased"
                },
                {
                    "value": "p",
                    "text": "Having the option to buy"
                }
            ]
        },
        {
            "id": "q29",
            "question": "In company do you:",
            "options": [
                {
                    "value": "e",
                    "text": "Initiate conversation"
                },
                {
                    "value": "i",
                    "text": "Wait to be approached"
                }
            ]
        }
    ]
}

export default function Component() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectedAnswers, setSelectedAnswers] = useState([])
    const [showResults, setShowResults] = useState(false)
    const questions = testData.questions


    const {userData} = useStore();
    const router = useRouter();

    const handleAnswerSelect = (answer) => {
        setSelectedAnswers((prevAnswers) => [...prevAnswers, answer])
    }
    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowResults(true)            
        }
    }
    const handlePreviousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
        }
    }


    useEffect(() => {
        const id = setTimeout(() => {
            console.log(userData);
            if(!userData) {
                router.push("/login")
            }
        }, 500);
        return () => {
            clearTimeout(id)
        }
    }, [router, userData])

    if(showResults)
        return (
            <div className="flex flex-col items-center justify-center min-h-screen w-full bg-background text-foreground">
                <Result selectedAnswers={selectedAnswers}/>
            </div>
        )

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
            <div className="max-w-md w-full px-6 py-8 rounded-lg shadow-lg bg-card">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold mb-4">Personality Quiz</h1>
                    <Badge variant="secondary">{currentQuestion + 1} / {questions.length}</Badge>
                </div>
                <p className="text-muted-foreground mb-8">Answer the following questions to discover more about yourself!</p>
                {!showResults && (
                    <>
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-2">{questions[currentQuestion].question}</h2>
                            <div className="grid gap-2">
                                {questions[currentQuestion].options.map((option, index) => (
                                    <button
                                        key={index}
                                        className={`px-4 py-2 rounded-md transition-colors border-[1px] ${selectedAnswers[currentQuestion] === option.value
                                                ? "bg-primary text-primary-foreground"
                                                : "bg-card hover:bg-accent hover:text-accent-foreground"
                                            }`}
                                        onClick={() => handleAnswerSelect(option.value)}
                                    >
                                        {option.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <button
                                className="px-4 py-2 rounded-md border-[1px] bg-card hover:bg-accent hover:text-accent-foreground"
                                onClick={handlePreviousQuestion}
                                disabled={currentQuestion === 0}
                            >
                                Previous
                            </button>
                            <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground" onClick={handleNextQuestion}>
                                {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}