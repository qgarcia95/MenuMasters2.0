import { createStore,initialState } from "redux";
import reducer from "./reducers/index";

// export default function configureStore(initialState){
//     const store = createStore(reducer, initialState);
//     return store;
// }
const store = createStore(
    reducer,
    initialState
)

export default store
