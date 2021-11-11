import NumberTriviaDatasourceImplementation from '@/features/number-trivia/data/datasources/number_trivia_datasource_implementation';
import { expect } from 'chai';

let datasource = new NumberTriviaDatasourceImplementation()

describe('Number Trivia DataSource', () => {
    it('fetch random number trivia',async ()=>{
        let result =  await datasource.getRandomNumberTrivia();
        expect(result).to.be.string;
    });
    it('fetch exact number trivia',async ()=>{
        let result =  await datasource.getNumberTrivia(1);
        expect(result).to.be.string;
    });
});