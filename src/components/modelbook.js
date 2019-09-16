import React from 'react';
import { removeBook } from '../actions/actions';

import { connect } from 'react-redux';

function f(id,title) {
    console.log(id,title)
}
const Modelbook = ({ id, title, dispatch}) => (

    <div >
         <p key={id} onClick={
             ()=>f(id, title)
         }>
             {title}
         </p>
        <button onClick={() => {
            dispatch(removeBook({ id }));
        }}>Delete</button>


    </div>
);
export default connect()(Modelbook);