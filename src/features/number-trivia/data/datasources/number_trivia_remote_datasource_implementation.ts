import axios from 'axios';
import { singleton } from 'tsyringe';
import NumberTriviaDatasource from './number_trivia_remote_datasource';

@singleton()
export default class NumberTriviaDatasourceImplementation extends NumberTriviaDatasource{
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