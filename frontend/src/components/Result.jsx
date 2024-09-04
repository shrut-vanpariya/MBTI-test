import { Progress } from "@/components/ui/progress"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { RadarChart, PolarAngleAxis, PolarGrid, Radar } from "recharts"

export default function Component({selectedAnswers : userInputs}) {
    let e, i, s, n, t, f, j, p
    let type
    function resetScores() {
        e = i = s = n = t = f = j = p = 0
        type = ""
    }
    function calculatePercentages() {
        e = Math.floor((e / 4) * 100)
        i = Math.floor((i / 4) * 100)
        s = Math.floor((s / 5) * 100)
        n = Math.floor((n / 5) * 100)
        t = Math.floor((t / 6) * 100)
        f = Math.floor((f / 6) * 100)
        j = Math.floor((j / 5) * 100)
        p = Math.floor((p / 5) * 100)
    }
    function determineType() {
        if (e > i) {
            if (s > n) {
                if (t > f) {
                    if (j > p) {
                        type = "ESTJ"
                    } else {
                        type = "ESTP"
                    }
                } else {
                    if (j > p) {
                        type = "ESFJ"
                    } else {
                        type = "ESFP"
                    }
                }
            } else {
                if (t > f) {
                    if (j > p) {
                        type = "ENTJ"
                    } else {
                        type = "ENTP"
                    }
                } else {
                    if (j > p) {
                        type = "ENFJ"
                    } else {
                        type = "ENFP"
                    }
                }
            }
        } else {
            if (s > n) {
                if (t > f) {
                    if (j > p) {
                        type = "ISTJ"
                    } else {
                        type = "ISTP"
                    }
                } else {
                    if (j > p) {
                        type = "ISFJ"
                    } else {
                        type = "ISFP"
                    }
                }
            } else {
                if (t > f) {
                    if (j > p) {
                        type = "INTJ"
                    } else {
                        type = "INTP"
                    }
                } else {
                    if (j > p) {
                        type = "INFJ"
                    } else {
                        type = "INFP"
                    }
                }
            }
        }
    }
    const types = {
        ISTJ: {
            title: "The Logician",
            percentage: "13.7%",
            description: "Dutiful, Practical, Logical, Methodical",
        },
        ISFJ: {
            title: "The Defender",
            percentage: "12.7%",
            description: "Dutiful, Practical, Supportive, Meticulous",
        },
        INFJ: {
            title: "The Advocate",
            percentage: "1.7%",
            description: "Devoted, Innovative, Idealistic, Compassionate",
        },
        INTJ: {
            title: "The Architect",
            percentage: "1.4%",
            description: "Independent, Innovative, Analytical, Purposeful",
        },
        ISTP: {
            title: "The Problem-Solver",
            percentage: "6.4%",
            description: "Expedient, Practical, Objective, Adaptable",
        },
        ISFP: {
            title: "The Harmonizer",
            percentage: "6.1%",
            description: "Tolerant, Realistic, Harmonious, Adaptable",
        },
        INFP: {
            title: "The Humanist",
            percentage: "3.2%",
            description: "Insightful, Innovative, Idealistic, Adaptable",
        },
        INTP: {
            title: "The Conceptualizer",
            percentage: "2.4%",
            description: "Questioning, Innovative, Objective, Abstract",
        },
        ESTP: {
            title: "The Activist",
            percentage: "5.8%",
            description: "Energetic, Practical, Pragmatic, Spontaneous",
        },
        ESFP: {
            title: "The Fun-Lover",
            percentage: "8.7%",
            description: "Spontaneous, Practical, Friendly, Harmonious",
        },
        ENFP: {
            title: "The Enthusiast",
            percentage: "6.3%",
            description: "Optimistic, Innovative, Compassionate, Versatile",
        },
        ENTP: {
            title: "The Entrepreneur",
            percentage: "2.8%",
            description: "Risk-Taking, Innovative, Outgoing, Adaptable",
        },
        ESTJ: {
            title: "The Coordinator",
            percentage: "10.4%",
            description: "Organized, Practical, Logical, Outgoing",
        },
        ESFJ: {
            title: "The Supporter",
            percentage: "12.6%",
            description: "Friendly, Practical, Loyal, Organized",
        },
        ENFJ: {
            title: "The Developer",
            percentage: "2.8%",
            description: "Friendly, Innovative, Supportive, Idealistic",
        },
        ENTJ: {
            title: "The Reformer",
            percentage: "2.9%",
            description: "Determined, Innovative, Strategic, Outgoing",
        },
    }
    // const userInputs = [
    //     "e",
    //     "n",
    //     "t",
    //     "f",
    //     "j",
    //     "p",
    //     "e",
    //     "n",
    //     "s",
    //     "f",
    //     "t",
    //     "p",
    //     "e",
    //     "n",
    //     "s",
    //     "f",
    //     "t",
    //     "p",
    //     "j",
    //     "i",
    // ]
    resetScores()
    userInputs?.forEach((input) => {
        switch (input) {
            case "e":
                e++
                break
            case "i":
                i++
                break
            case "s":
                s++
                break
            case "n":
                n++
                break
            case "t":
                t++
                break
            case "f":
                f++
                break
            case "j":
                j++
                break
            case "p":
                p++
                break
        }
    })
    calculatePercentages()
    determineType()
    return (
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
            <div className="grid gap-8">
                <div className="grid gap-4">
                    <h1 className="text-3xl font-bold">Your MBTI Personality Type</h1>
                    <div className="bg-muted rounded-lg p-6 grid gap-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center text-primary-foreground font-bold">
                                {type}
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold">{types[type].title}</h2>
                                <p className="text-muted-foreground">{types[type].description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid gap-4">
                    <h2 className="text-2xl font-bold">Your Personality Traits</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-muted rounded-lg p-4 grid gap-2">
                            <div className="flex items-center justify-between">
                                <span>Extraversion</span>
                                <span className="font-bold">{e}%</span>
                            </div>
                            <Progress value={e} />
                        </div>
                        <div className="bg-muted rounded-lg p-4 grid gap-2">
                            <div className="flex items-center justify-between">
                                <span>Intuition</span>
                                <span className="font-bold">{n}%</span>
                            </div>
                            <Progress value={n} />
                        </div>
                        <div className="bg-muted rounded-lg p-4 grid gap-2">
                            <div className="flex items-center justify-between">
                                <span>Feeling</span>
                                <span className="font-bold">{f}%</span>
                            </div>
                            <Progress value={f} />
                        </div>
                        <div className="bg-muted rounded-lg p-4 grid gap-2">
                            <div className="flex items-center justify-between">
                                <span>Judging</span>
                                <span className="font-bold">{j}%</span>
                            </div>
                            <Progress value={j} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid gap-6">
                <ChartContainer
                    config={{
                        extraversion: { label: "Extraversion", color: "hsl(var(--chart-1))" },
                        intuition: { label: "Intuition", color: "hsl(var(--chart-2))" },
                        thinking: { label: "Thinking", color: "hsl(var(--chart-3))" },
                        judging: { label: "Judging", color: "hsl(var(--chart-4))" },
                    }}
                    className="aspect-square min-h-[300px]"
                >
                    <RadarChart
                        data={[
                            { dimension: "Extraversion", score: e },
                            { dimension: "Intuition", score: n },
                            { dimension: "Thinking", score: t },
                            { dimension: "Judging", score: j },
                        ]}
                    >
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <PolarAngleAxis dataKey="dimension" />
                        <PolarGrid />
                        <Radar dataKey="score" fill="var(--color-extraversion)" fillOpacity={0.6} dot={{ r: 4, fillOpacity: 1 }} />
                    </RadarChart>
                </ChartContainer>
            </div>
        </div>
    )
}
