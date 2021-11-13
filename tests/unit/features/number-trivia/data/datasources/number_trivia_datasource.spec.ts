import NumberTriviaDatasourceImplementation from '@/features/number-trivia/data/datasources/number_trivia_remote_datasource_implementation';

let datasource = new NumberTriviaDatasourceImplementation()

describe('Number Trivia DataSource', () => {
    it('fetch random number trivia',async ()=>{
        let result =  await datasource.getRandomNumberTrivia();
        expect(result!=null).toBe(true);
        expect(result!=undefined).toBe(true);
    });
    it('fetch exact number trivia',async ()=>{
        let result =  await datasource.getNumberTrivia(1);
        expect(result!=null).toBe(true);
        expect(result!=undefined).toBe(true);
        expect(result[0]).toBe('1');
    });
});