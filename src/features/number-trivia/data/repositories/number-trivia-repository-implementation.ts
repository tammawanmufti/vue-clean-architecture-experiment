import NumberTriviaRepository from "../../domain/repository/number_trivia_repository";
import NumberTriviaDatasourceImplementation from "../datasources/number_trivia_datasource_implementation";
import NumberTriviaModel from "../model/number_trivia_model";

// @singleton()
export default class NumberTriviaRepositoryImplementation extends NumberTriviaRepository {

    datasource = new NumberTriviaDatasourceImplementation();

    async getRandomNumberTrivia(): Promise<NumberTriviaModel> {
        let result = await this.datasource.getRandomNumberTrivia(); 
        return NumberTriviaModel.fromResponse(result);
    }
    async getNumberTrivia(number: number): Promise<NumberTriviaModel> {
        let result = await this.datasource.getNumberTrivia(number);
        return NumberTriviaModel.fromResponse(result);
    }

}