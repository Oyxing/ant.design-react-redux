import { createStore,applyMiddleware,compose } from "redux";
import thunk from 'redux-thunk';
import reducers from '../reduces';

const composedCreayteStroe = compose(
        applyMiddleware(thunk),
        window.devToolsExtension && window.devToolsExtension()
)(createStore)

function configureStore(initialState = {}){
    const store = composedCreayteStroe(reducers,initialState)
    
    // if(process.env.NOOE_ENV === 'development' && module.hot){
    //     module.hot.accept('../reducers',()=>{
    //         const nextRootReducer = require('../reducers').default
    //         store.replaceReducer(nextRootReducer);
    //     })
    // }

    return store
}

let store = configureStore()

export default store