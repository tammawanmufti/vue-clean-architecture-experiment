// import number_trivia_store from '@/features/number-trivia/presentation/store/number_trivia_store';
import { createStore } from 'vuex';

export default createStore({
  state:()=>({
    number:73,
    trivia:'Alex Lucky Number'
  }),
  // modules: {
  //   numberTrivia:number_trivia_store
  // }
});