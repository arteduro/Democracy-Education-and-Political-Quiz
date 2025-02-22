
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { questions } from "@/data/questions";
import { Heart, Rocket } from "lucide-react";

const Index = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isStarted, setIsStarted] = useState(false);

  const currentQuestions = questions.slice(currentSet * 5, (currentSet + 1) * 5);
  const progress = (Object.keys(answers).length / questions.length) * 100;

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleNextSet = () => {
    if (currentSet < Math.floor(questions.length / 5) - 1) {
      setCurrentSet((prev) => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  if (!isStarted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
        <Card className="max-w-2xl w-full p-8 space-y-6 animate-fade-in">
          <h1 className="text-4xl font-bold text-center text-gray-900">Test Político 2024</h1>
          <p className="text-center text-gray-600">
            Descubre tu tendencia política respondiendo 30 preguntas sobre diferentes aspectos sociales, políticos y económicos.
          </p>
          <div className="flex justify-center">
            <Button
              onClick={() => setIsStarted(true)}
              className="px-8 py-4 text-lg transition-all hover:scale-105"
            >
              Comenzar Test
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="space-y-4">
          <Progress value={progress} className="w-full h-2" />
          <p className="text-center text-sm text-gray-600">
            Pregunta {Object.keys(answers).length} de {questions.length}
          </p>
        </div>

        <div className="space-y-6">
          {currentQuestions.map((question) => (
            <Card key={question.id} className="p-6 space-y-4 animate-fade-in">
              <h2 className="text-xl font-semibold text-gray-900">{question.text}</h2>
              <div className="grid gap-3">
                {question.options.map((option) => (
                  <Button
                    key={option.text}
                    variant={answers[question.id] === option.value ? "default" : "outline"}
                    className="w-full justify-start text-left h-auto p-4 transition-all hover:scale-[1.02]"
                    onClick={() => handleAnswer(question.id, option.value)}
                  >
                    {option.text}
                  </Button>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={() => setCurrentSet((prev) => Math.max(0, prev - 1))}
            disabled={currentSet === 0}
          >
            Anterior
          </Button>
          <Button
            onClick={handleNextSet}
            disabled={
              currentQuestions.some(
                (q) => typeof answers[q.id] === "undefined"
              )
            }
          >
            Siguiente
          </Button>
        </div>

        <footer className="text-center text-gray-600 py-4 space-x-2">
          <span>Desarrollado con</span>
          <Heart className="inline-block w-4 h-4 text-red-500" />
          <span>por Jesús David Silva Rangel</span>
          <Rocket className="inline-block w-4 h-4 text-blue-500" />
        </footer>
      </div>
    </div>
  );
};

export default Index;
