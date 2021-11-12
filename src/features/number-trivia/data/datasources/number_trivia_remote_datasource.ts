export default abstract class NumberTriviaDatasource {
    abstract getRandomNumberTrivia():Promise<string>;   
    abstract getNumberTrivia(number:number):Promise<string>;   
}

