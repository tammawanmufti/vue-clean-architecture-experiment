import { container } from 'tsyringe';
import QuizRemoteDataSource from '@/features/quiz-app/data/datasources/quiz_remote_datasource';
import QuizRemoteDataSourceImplementation from '@/features/quiz-app/data/datasources/quiz_remote_datasource_implementation';

let datasource: QuizRemoteDataSource = container.resolve(QuizRemoteDataSourceImplementation);

describe('Get Quiz From API', () => {
  it('should return a quiz (only required data)', async () => {
    const quiz = await datasource.getQuiz();
    expect(quiz).toBeDefined();
    expect(quiz.response_code).toBeDefined();
    expect(quiz.results.length).toBeGreaterThan(0);
    expect(quiz.results[0].question).toBeDefined();
    expect(quiz.results[0].correct_answer).toBeDefined();
    expect(quiz.results[0].incorrect_answers).toBeDefined();
  });
});