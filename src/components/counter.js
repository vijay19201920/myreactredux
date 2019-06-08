
import React from 'react';
import {connect} from 'react-redux';

function Counter(props){
    return (
        <div>
            <h1> this is counter redux counter </h1>
            <p>Count : {props.count}</p>
            <button onClick = {props.onIncrementClick}> increment</button>
            <button onClick = {props.onDecrementClick}> decrement</button>

           
        </div>
        )
}

// mapStateToProps takes the store and pass it to the component using connect function 
//name count from here is going to be used to get the props in component above.

function mapStateToProps(state){
	console.log('mapStateToProps');

		return{
		    count: state.count
		};
}

function mapDispatchToProps(dispatch){

console.log('mapDispatchToProps');
return{
	onIncrementClick: () => {
	const action = {type :'INCREMENT' };
		dispatch(action);
	},

	onDecrementClick: () => {
	const action = {type :'DECREMENT' };
		dispatch(action);
	}
}


}

// connect function connect the mapStateToProps component to the counter component
//here we are not exporting our component we are exporting connect function 
 export default connect(mapStateToProps , mapDispatchToProps)(Counter);
//export default Counter;