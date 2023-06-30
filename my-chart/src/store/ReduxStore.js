import {
    legacy_createSore as createStore,
    applyMiddleware,
    compose,
}from 'redux'
import thunk from 'react-redux'
import { reducers } from '../reducers'
function saveToLocalStorage(store){
    try {
      const serializedStore =JSON.stringify(store);
      window.localStorage.setItem('store',serializedStore) 
    } catch (error) {
        console.log(error);
    }
}


function loadFromLocalStorage() {
    try {
      const serializedStore=window.localStorage.getItem('store');
      if (serializedStore===null) {
        return undefined;   
      }  
      else{
        return JSON.parse(serializedStore)
      }
    } catch (error) {
        console.log(error);
        return undefined
    }
}
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const persistedState = loadFromLocalStorage();
const store = createStore(reducers,persistedState,composeEnchancers(applyMiddleware(thunk)));
store.subscribe(()=>saveToLocalStorage(store.getItem()));

export default store;