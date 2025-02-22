
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { questions } from "@/data/questions";
import { Heart, Rocket } from "lucide-react";

const Index = () => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isStarted, setIsStarted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const progress = (Object.keys(answers).length / questions.length) * 100;

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const calculateResults = () => {
    let economicScore = 0;
    let socialScore = 0;

    // Economic questions (1, 2, 3, 10)
    economicScore += (answers[1] || 0) * -1; // Inverted for right-wing alignment
    economicScore += (answers[2] || 0);
    economicScore += (answers[3] || 0) * -1;
    economicScore += (answers[10] || 0) * -1;

    // Social questions (4, 5, 6, 7, 8, 9)
    socialScore += (answers[4] || 0);
    socialScore += (answers[5] || 0);
    socialScore += (answers[6] || 0);
    socialScore += (answers[7] || 0);
    socialScore += (answers[8] || 0);
    socialScore += (answers[9] || 0) * -1;

    // Normalize scores to -10 to 10 scale
    economicScore = (economicScore / 8) * 10;
    socialScore = (socialScore / 12) * 10;

    return { economicScore, socialScore };
  };

  const getIdeology = (economicScore: number, socialScore: number) => {
    if (economicScore >= 0) {
      if (socialScore >= 0) {
        return "Liberal Progresista";
      } else {
        return "Liberal Conservador";
      }
    } else {
      if (socialScore >= 0) {
        return "Socialdemócrata";
      } else {
        return "Socialista Conservador";
      }
    }
  };

  if (!isStarted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
        <Card className="max-w-2xl w-full p-8 space-y-6 animate-fade-in">
          <h1 className="text-4xl font-title font-extrabold text-center text-gray-900">Test Político 2024</h1>
          <p className="text-center text-gray-600 font-body">
            Descubre tu tendencia política respondiendo 10 preguntas sobre diferentes aspectos sociales, políticos y económicos.
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

  if (showResults) {
    const { economicScore, socialScore } = calculateResults();
    const ideology = getIdeology(economicScore, socialScore);

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 space-y-6 animate-fade-in">
            <h2 className="text-3xl font-title font-extrabold text-center text-gray-900">Tus Resultados</h2>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-title font-bold text-gray-800">Tu Ideología: {ideology}</h3>
                <p className="text-gray-600 font-body">
                  Basado en tus respuestas, tus tendencias políticas se alinean con una perspectiva {ideology.toLowerCase()}.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="font-body text-sm text-gray-600">Eje Económico: {economicScore.toFixed(1)}</p>
                  <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 transition-all duration-500"
                      style={{ 
                        width: `${((economicScore + 10) / 20) * 100}%`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 font-body">
                    <span>Izquierda</span>
                    <span>Derecha</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="font-body text-sm text-gray-600">Eje Social: {socialScore.toFixed(1)}</p>
                  <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500 transition-all duration-500"
                      style={{ 
                        width: `${((socialScore + 10) / 20) * 100}%`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 font-body">
                    <span>Conservador</span>
                    <span>Progresista</span>
                  </div>
                </div>
              </div>

              <Button 
                onClick={() => {
                  setAnswers({});
                  setShowResults(false);
                  setIsStarted(false);
                }}
                className="w-full font-body"
              >
                Realizar el Test Nuevamente
              </Button>
            </div>
          </Card>

          <footer className="text-center text-gray-600 py-4 space-x-2 font-body">
            <span>Desarrollado con</span>
            <Heart className="inline-block w-4 h-4 text-red-500" />
            <span>por Jesús David Silva Rangel</span>
            <Rocket className="inline-block w-4 h-4 text-blue-500" />
          </footer>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="space-y-4">
          <Progress value={progress} className="w-full h-2" />
          <p className="text-center text-sm text-gray-600 font-body">
            Pregunta {Object.keys(answers).length} de {questions.length}
          </p>
        </div>

        <div className="space-y-6">
          {questions.map((question) => (
            <Card key={question.id} className="p-6 space-y-4 animate-fade-in">
              <h2 className="text-xl font-title font-extrabold text-gray-900">{question.text}</h2>
              <div className="grid gap-3">
                {question.options.map((option) => (
                  <Button
                    key={option.text}
                    variant={answers[question.id] === option.value ? "default" : "outline"}
                    className="w-full justify-start text-left h-auto p-4 transition-all hover:scale-[1.02] font-body"
                    onClick={() => handleAnswer(question.id, option.value)}
                  >
                    {option.text}
                  </Button>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {Object.keys(answers).length === questions.length && (
          <Button
            onClick={() => setShowResults(true)}
            className="w-full py-4 text-lg font-body"
          >
            Ver Resultados
          </Button>
        )}

        <footer className="text-center text-gray-600 py-4 space-x-2 font-body">
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
