import { singleton } from "tsyringe";
import NumberTriviaRepository from "../../domain/repository/number-trivia-repository";
import NumberTriviaDatasourceImplementation from "../datasources/number_trivia_remote_datasource_implementation";
import NumberTriviaModel from "../model/number_trivia_model";

@singleton()
export default class NumberTriviaRepositoryImplementation extends NumberTriviaRepository {
  datasource: NumberTriviaDatasourceImplementation;

  constructor(datasource: NumberTriviaDatasourceImplementation) {
    super();
    this.datasource = datasource;
  }
  async getRandomNumberTrivia(): Promise<NumberTriviaModel> {
    let result = await this.datasource.getRandomNumberTrivia();
    return NumberTriviaModel.fromResponse(result);
  }
  async getNumberTrivia(number: number): Promise<NumberTriviaModel> {
    let result = await this.datasource.getNumberTrivia(number);
    return NumberTriviaModel.fromResponse(result);
  }
}
