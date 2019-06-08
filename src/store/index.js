import { createStore } from 'redux';

const initialState = {

	count : 3
}

const reducer = (state = initialState  , action) =>{
// all action should have property called type

// always return t

		switch(action.type){

				// we do not mutate the same state we create the new state object
				case 'INCREMENT':
				//Object.assign copies the state object to the new object and do the function
				// like state is copied to  {} and action is done as {count : state.count + 1} 
					return Object.assign({} , state , {count : state.count + 1}) ;


			case 'DECREMENT':
				//Object.assign copies the state object to the new object and do the function
				// like state is copied to  {} and action is done as {count : state.count + 1} 
					return Object.assign({} , state , {count : state.count - 1}) ;
					
				 default :

				    return state ;

		}

}

const store = createStore(reducer);

export default store;
