import UseCase from "@/core/model/usecase/usecase";
import NumberTriviaEntity from "../entities/number-trivia-entity";
import NumberTriviaRepository from "../repository/number-trivia-repository";

export default class DoGetRandomNumberTrivia extends UseCase<NumberTriviaEntity,Params>{
    repository: NumberTriviaRepository;
    
    constructor(repository:NumberTriviaRepository){
        super();
        this.repository = repository;
    }

    async call(params:Params):Promise<NumberTriviaEntity>{
        return await this.repository.getNumberTrivia(params.number);
    }
}

class Params {
    number:number;
    constructor(
        number:number
    ){
        this.number = number
    }
}