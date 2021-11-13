import { container } from "tsyringe";
import NumberTriviaEntity from "../../domain/entities/number-trivia-entity";
import { DoGetExactNumberTrivia } from "../../domain/usecases/do-get-exact-number-trivia";
import { DoGetRandomNumberTrivia } from "../../domain/usecases/do-get-random-number-trivia";

let doGetRandomNumberTrivia: DoGetRandomNumberTrivia = container.resolve(
  DoGetRandomNumberTrivia
);
let doGetExactNumberTrivia: DoGetExactNumberTrivia = container.resolve(
  DoGetExactNumberTrivia
);

export const numberTriviaStore = {
  state: (): any => ({
    number: 0,
    trivia: "Press Find Number Trivia Button",
    inputNumber:'',
  }),
  mutations: {
    setTrivia(state: any, trivia: NumberTriviaEntity) {
      state.number = trivia.number;
      state.trivia = trivia.trivia;
    },
  },
  actions: {
    async getRandomNumberTrivia({ commit }: any) {
      let result: NumberTriviaEntity = await doGetRandomNumberTrivia.call();
      commit("setTrivia", result);
    },
    async getExactNumberTrivia({commit,param}:any){
        console.log(param);
        // let result: NumberTriviaEntity = await doGetExactNumberTrivia.call(param);
        // commit("setTrivia", result);
    },
  },
  getters: {
      getTrivia(state:any){
        return state.trivia
      },
      getNumber(state:any){
        return state.number
      }
  }

};
