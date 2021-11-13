import { numberTriviaStore } from '@/features/number-trivia/presentation/store/number-trivia-store';
import { createStore } from 'vuex';

export default createStore({
  modules: {
    numberTriviaStore
  }
});