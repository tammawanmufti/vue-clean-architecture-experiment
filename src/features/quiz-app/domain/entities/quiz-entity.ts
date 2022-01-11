import QuizModel from '../../data/model/quiz_model';

// This model is used to map the response from the API to the QuizResponse model.
interface Quiz {
  question: string;
  answers: string[];
  correct_answer: string;
}

interface Quizzes {
  total_item: number;
  results: Quiz[];
}

export default class QuizEntity implements Quizzes {
  total_item: number;
  results: Quiz[];
  
  constructor(quizzes: Quizzes) {
    this.total_item = quizzes.total_item;
    this.results = quizzes.results;
  }

  static fromModel(data: QuizModel) {
    return new QuizEntity({
      total_item: data.results.length,
      results: data.results.map(quiz => ({
        question: quiz.question,
        answers: quiz.incorrect_answers.concat(quiz.correct_answer),
        correct_answer: quiz.correct_answer,
      }))
    });
  }
}