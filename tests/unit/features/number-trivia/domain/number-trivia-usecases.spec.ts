import { NoParams } from '@/core/model/usecase/usecase';
import NumberTriviaRepositoryImplementation from '@/features/number-trivia/data/repositories/number-trivia-repository-implementation';
import { DoGetExactNumberTrivia, NumberTriviaParams } from '@/features/number-trivia/domain/usecases/do-get-exact-number-trivia';
import { DoGetRandomNumberTrivia } from '@/features/number-trivia/domain/usecases/do-get-random-number-trivia';
import { expect } from 'chai';

let repository = new NumberTriviaRepositoryImplementation();
let doGetRandomNumberTrivia = new DoGetRandomNumberTrivia(repository);
let doGetExactNumberTrivia = new DoGetExactNumberTrivia(repository);

describe('Number Trivia UseCases', () => {
    it('get random number trivia entity',async ()=>{
        let result =  await doGetRandomNumberTrivia.call(new NoParams());
        expect(result.trivia).to.be.string;
        expect(result.number).to.be.a('number');
    });
    it('get exact number trivia entity',async ()=>{
        let result =  await doGetExactNumberTrivia.call(new NumberTriviaParams(1));
        expect(result.trivia).to.be.string;
        expect(result.number).to.be.a('number');
    });
});