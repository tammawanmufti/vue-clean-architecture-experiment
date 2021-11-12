export abstract class UseCase<Type,Params>{
    abstract call(params:Params):Promise<Type>;
}
export abstract class UseCaseNoReturn<Params>{
    abstract call(params:Params):void;
}

export class Params{}

export class NoParams extends Params{}


