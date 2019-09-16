import React from 'react';
import { removeBook } from '../actions/actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function f(id,title) {
    console.log(id,title)
}
const Modelbook = ({ id, title, dispatch}) => (

    <div >
        <Link to={`/book/${id}`} activestyle={{color:"red"}} >
         <p key={id} >
             {title}
         </p>
        </Link>
        <button onClick={() => {
            dispatch(removeBook({ id }));
        }}>Delete</button>


    </div>
);
export default connect()(Modelbook);