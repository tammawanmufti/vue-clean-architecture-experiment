import axios from 'axios';
import NumberTriviaDatasource from './number_trivia_datasource';

export default class NumberTriviaDatasourceImplementation implements NumberTriviaDatasource{
    numbersApi:string ='http://numbersapi.com';

    async getRandomNumberTrivia(): Promise<string> {
        let url = `${this.numbersApi}/random/trivia`;
        let response = await axios.get(url);
        return response.data;
        
    }
    async getNumberTrivia(number: number): Promise<string> {
        let url = `${this.numbersApi}/${number}`;
        let response = await axios.get(url);
        return response.data;
    }
    
}