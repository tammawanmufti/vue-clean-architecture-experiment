import { container } from "tsyringe";
import NumberTriviaEntity from "../../domain/entities/number-trivia-entity";
import { DoGetRandomNumberTrivia } from "../../domain/usecases/do-get-random-number-trivia";

let doGetRandomNumberTrivia: DoGetRandomNumberTrivia = container.resolve(
  DoGetRandomNumberTrivia
);

export const numberTriviaStore = {
  state: (): any => ({
    number: 0,
    trivia: "Press Find Number Trivia Button",
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
  },

};
