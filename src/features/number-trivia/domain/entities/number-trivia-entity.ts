import NumberTriviaModel from '../../data/model/number_trivia_model';

export interface NumberTriviaEntityInterface {
    number:number;
    trivia:string;
}

export default class NumberTriviaEntity implements NumberTriviaEntityInterface {
    number:number;
    trivia:string;

    constructor(number:number,trivia:string){
        this.number = number;
        this.trivia = trivia;
    }
    static fromModel(data:NumberTriviaModel){
        return new NumberTriviaEntity(
            data.number,data.trivia
        );
    }
}