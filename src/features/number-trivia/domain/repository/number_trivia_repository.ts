import NumberTriviaModel from "../../data/model/number_trivia_model";

export default abstract class NumberTriviaRepository {
    abstract getRandomNumberTrivia():Promise<NumberTriviaModel>;
    abstract getNumberTrivia(number:number):Promise<NumberTriviaModel>;

}