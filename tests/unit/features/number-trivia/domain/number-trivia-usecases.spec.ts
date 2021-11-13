import { NoParams } from '@/core/model/usecase/usecase';
import { DoGetExactNumberTrivia, NumberTriviaParams } from '@/features/number-trivia/domain/usecases/do-get-exact-number-trivia';
import { DoGetRandomNumberTrivia } from '@/features/number-trivia/domain/usecases/do-get-random-number-trivia';
import { container } from 'tsyringe';


let doGetRandomNumberTrivia = container.resolve(DoGetRandomNumberTrivia)
let doGetExactNumberTrivia = container.resolve(DoGetExactNumberTrivia)

describe('Number Trivia UseCases', () => {
    it('get random number trivia entity',async ()=>{
        let result =  await doGetRandomNumberTrivia.call(new NoParams());
        expect(result!=null).toBe(true);
        expect(result!=undefined).toBe(true);
    });
    it('get exact number trivia entity',async ()=>{
        let result =  await doGetExactNumberTrivia.call(new NumberTriviaParams(1));
        expect(result!=null).toBe(true);
        expect(result!=undefined).toBe(true);
    });
});