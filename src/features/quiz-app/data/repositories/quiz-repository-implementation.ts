import { singleton } from 'tsyringe';
import QuizRepository from '../../domain/repositories/quiz-repository';
import QuizRemoteDataSourceImplementation from '../datasources/quiz_remote_datasource_implementation';
import QuizModel from '../model/quiz_model';

@singleton()
export default class QuizRepositoryImplementation extends QuizRepository {
  datasource: QuizRemoteDataSourceImplementation;

  constructor(datasource: QuizRemoteDataSourceImplementation) {
    super();
    this.datasource = datasource;
  }

  async getQuiz(): Promise<QuizModel> {
    let result = await this.datasource.getQuiz();
    return QuizModel.fromResponse(result);
  }

}