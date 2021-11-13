import { NoParams, UseCase } from "@/core/model/usecase/usecase";
import { singleton } from "tsyringe";
import NumberTriviaRepositoryImplementation from "../../data/repositories/number-trivia-repository-implementation";
import NumberTriviaEntity from "../entities/number-trivia-entity";
import NumberTriviaRepository from "../repository/number-trivia-repository";

@singleton()
export class DoGetRandomNumberTrivia extends UseCase<NumberTriviaEntity,NoParams>{
    
    repository: NumberTriviaRepository;
    constructor(repository:NumberTriviaRepositoryImplementation){
        super();
        this.repository = repository;
    }

    async call(noParams:NoParams):Promise<NumberTriviaEntity>{
        let result = await this.repository.getRandomNumberTrivia();
        return NumberTriviaEntity.fromModel(result);
    }
}
