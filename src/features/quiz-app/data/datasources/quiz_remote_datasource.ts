import QuizModel from '../model/quiz_model';

export default abstract class QuizRemoteDataSource {
    abstract getQuiz(): Promise<QuizModel>;
}