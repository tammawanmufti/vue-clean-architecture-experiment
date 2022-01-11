// Contract repository between domain layer and data layer.
// Implement this abstract class to repository-implementation in data layer.

import QuizModel from '../../data/model/quiz_model';

export default abstract class QuizRepository {
  abstract getQuiz(): Promise<QuizModel>;
}