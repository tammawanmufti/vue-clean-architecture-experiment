
export interface NumberTriviaInterface {
    number:number;
    trivia:string;
}

export default class NumberTriviaModel implements NumberTriviaInterface {
    number:number;
    trivia:string;

    constructor(number:number,trivia:string){
        this.number = number;
        this.trivia = trivia;
    }
    
    static fromResponse(response:string):NumberTriviaModel{
        let number = response.split(' ')[0];
        let trivia = response;
        return new NumberTriviaModel(parseInt(number),trivia);
    }
}