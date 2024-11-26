import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { COUNTRIES, QUESTIONS } from "./lib/constants";
import { Header } from "./components/Header";

const LocationSelection = ({ onLocationSelected }) => (
  <Card className="w-full max-w-2xl mx-auto">
    <CardHeader>
      <CardTitle>Welcome to Kasysy</CardTitle>
      <p className="text-sm text-gray-600">
        Let's start by selecting your location
      </p>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <Label htmlFor="location">Select your country</Label>
        <Select onValueChange={onLocationSelected}>
          <SelectTrigger>
            <SelectValue placeholder="Choose your country" />
          </SelectTrigger>
          <SelectContent>
            {COUNTRIES.map((country) => (
              <SelectItem key={country.id} value={country.id}>
                {country.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </CardContent>
  </Card>
);

const App = () => {
  const [location, setLocation] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(false);
  const [matchedJobs, setMatchedJobs] = useState(null);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);

  const handleLocationSelected = (value) => {
    setLocation(value);
    setShowQuestionnaire(true);
  };

  const handleNext = () => {
    if (!selectedOption) return;

    const newAnswers = [
      ...answers,
      {
        question: QUESTIONS[currentQuestion].question,
        answerSelected: selectedOption,
      },
    ];

    setAnswers(newAnswers);

    if (currentQuestion === QUESTIONS.length - 1) {
      submitAnswers(newAnswers);
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
      const previousAnswer = answers[currentQuestion - 1];
      setSelectedOption(previousAnswer?.answerSelected || null);
      setAnswers((prev) => prev.slice(0, -1));
    }
  };

  const submitAnswers = async (finalAnswers) => {
    setLoading(true);
    try {
      const requestBody = {
        location: location,
        questions: finalAnswers,
      };

      const response = await fetch(
        "https://server.suryavirkapur.workers.dev/analyze",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await response.json();
      setMatchedJobs(data);
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
    setLoading(false);
  };

  const MainContent = () => {
    if (!showQuestionnaire) {
      return <LocationSelection onLocationSelected={handleLocationSelected} />;
    }

    if (matchedJobs) {
      return (
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Your Matched Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-medium">Recommended Career Paths</h3>
                <p className="text-sm text-gray-600">
                  {matchedJobs.careerRecommendation}
                </p>
              </div>
              <h3 className="font-medium mt-6">Available Positions</h3>
              {matchedJobs.jobs.map((job, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <h3 className="font-medium">{job.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{job.company}</p>
                  <p className="text-sm text-gray-600 mt-1">{job.location}</p>
                  <p className="text-sm mt-2">{job.description}</p>
                  <div className="mt-2 flex gap-2">
                    {job.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      );
    }

    const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;

    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Skills Assessment</CardTitle>
          <Progress value={progress} className="w-full" />
          <p className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {QUESTIONS.length}
          </p>
        </CardHeader>

        <CardContent>
          <div className="space-y-6">
            <h2 className="text-lg font-medium">
              {QUESTIONS[currentQuestion].question}
            </h2>

            <RadioGroup
              value={selectedOption}
              onValueChange={setSelectedOption}
              className="space-y-3"
            >
              {QUESTIONS[currentQuestion].options.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.id} id={option.id} />
                  <Label htmlFor={option.id}>{option.text}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between space-x-4">
          <Button
            onClick={handleBack}
            disabled={currentQuestion === 0 || loading}
            variant="outline"
            className="w-full"
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={!selectedOption || loading}
            className="w-full"
          >
            {loading
              ? "Processing..."
              : currentQuestion === QUESTIONS.length - 1
              ? "Submit"
              : "Next"}
          </Button>
        </CardFooter>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <MainContent />
      </div>
    </div>
  );
};

export default App;
