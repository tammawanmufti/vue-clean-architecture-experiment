// This model file contain representation 1:1 of the Quiz Response object from the API.
// Response From : https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple
interface QuizInterface {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface QuizResponseInterface {
  response_code: number;
  results: QuizInterface[];
}

export default class QuizModel implements QuizResponseInterface {
  response_code: number;
  results: QuizInterface[];

  constructor(response: QuizResponseInterface) {
    this.response_code = response.response_code;
    this.results = response.results;
  }

  static fromResponse(quiz: QuizResponseInterface): QuizModel {
    return new QuizModel(quiz);
  }
}