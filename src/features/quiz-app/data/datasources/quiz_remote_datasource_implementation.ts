import axios from 'axios';
import { singleton } from 'tsyringe';
import QuizModel from '../model/quiz_model';
import QuizRemoteDataSource from './quiz_remote_datasource';
// https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple
@singleton()
export default class QuizRemoteDataSourceImplementation extends QuizRemoteDataSource {
  private _API_URL: string = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple';
  async getQuiz(): Promise<QuizModel> {
    const response = await axios.get(this._API_URL);
    const json = response.data;
    return new QuizModel(json);
  }
}