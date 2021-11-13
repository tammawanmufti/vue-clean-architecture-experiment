import NumberTriviaRepositoryImplementation from '@/features/number-trivia/data/repositories/number-trivia-repository-implementation';
import { container } from 'tsyringe';

let repository = container.resolve(NumberTriviaRepositoryImplementation);

describe('Number Trivia Repository', () => {
    it('fetch random number trivia as NumberTriviaModel',async ()=>{
        let result =  await repository.getRandomNumberTrivia();
        expect(result!=null).toBe(true);
        expect(result!=undefined).toBe(true);

    });
    it('fetch exact number trivia as NumberTriviaModel',async ()=>{
        let result =  await repository.getNumberTrivia(1);
        expect(result!=null).toBe(true);
        expect(result!=undefined).toBe(true);``
    });
});