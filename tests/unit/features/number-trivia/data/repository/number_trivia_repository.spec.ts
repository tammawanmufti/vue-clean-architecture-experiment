import NumberTriviaRepositoryImplementation from '@/features/number-trivia/data/repositories/number-trivia-repository-implementation';
import { expect } from 'chai';

let repository = new NumberTriviaRepositoryImplementation();

describe('Number Trivia Repository', () => {
    it('fetch random number trivia as NumberTriviaModel',async ()=>{
        let result =  await repository.getRandomNumberTrivia();
        expect(result.trivia).to.be.string;
        expect(result.number).to.be.a('number');

    });
    it('fetch exact number trivia as NumberTriviaModel',async ()=>{
        let result =  await repository.getNumberTrivia(1);
        expect(result.trivia).to.be.string;
        expect(result.number).to.be.a('number');
        
        
    });
});