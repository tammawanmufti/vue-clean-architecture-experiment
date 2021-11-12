import UseCase from "@/core/model/usecase/usecase";
import NumberTriviaEntity from "../entities/number-trivia-entity";
import NumberTriviaRepository from "../repository/number-trivia-repository";

export default class DoGetRandomNumberTrivia extends UseCase<NumberTriviaEntity,NoParams>{
    repository: NumberTriviaRepository;
    
    constructor(repository:NumberTriviaRepository){
        super();
        this.repository = repository;
    }

    async call(noParams:NoParams):Promise<NumberTriviaEntity>{
        return await this.repository.getRandomNumberTrivia();
    }
}

class NoParams {}