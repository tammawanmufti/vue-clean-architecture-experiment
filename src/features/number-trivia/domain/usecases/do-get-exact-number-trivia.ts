import { Params, UseCase } from "@/core/model/usecase/usecase";
import { singleton } from "tsyringe";
import NumberTriviaRepositoryImplementation from "../../data/repositories/number-trivia-repository-implementation";
import NumberTriviaEntity from "../entities/number-trivia-entity";
import NumberTriviaRepository from "../repository/number-trivia-repository";

@singleton()
export class DoGetExactNumberTrivia extends UseCase<NumberTriviaEntity,NumberTriviaParams>{
    repository: NumberTriviaRepository;
    
    constructor(repository:NumberTriviaRepositoryImplementation){
        super();
        this.repository = repository
    }

    async call(params:NumberTriviaParams):Promise<NumberTriviaEntity>{
        let result= await this.repository.getNumberTrivia(params.number);
        return NumberTriviaEntity.fromModel(result);
    }
}

@singleton()
export class NumberTriviaParams extends Params{
    number:number;
    constructor(
        number:number
    ){
        super();
        this.number = number
    }
}