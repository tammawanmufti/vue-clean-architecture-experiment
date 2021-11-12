import { Params, UseCase } from "@/core/model/usecase/usecase";
import NumberTriviaEntity from "../entities/number-trivia-entity";
import NumberTriviaRepository from "../repository/number-trivia-repository";

export class DoGetExactNumberTrivia extends UseCase<NumberTriviaEntity,NumberTriviaParams>{
    repository: NumberTriviaRepository;
    
    constructor(repository:NumberTriviaRepository){
        super();
        this.repository = repository;
    }

    async call(params:NumberTriviaParams):Promise<NumberTriviaEntity>{
        return await this.repository.getNumberTrivia(params.number);
    }
}

export class NumberTriviaParams extends Params{
    number:number;
    constructor(
        number:number
    ){
        super();
        this.number = number
    }
}