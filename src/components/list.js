import React from 'react';
import {connect} from "react-redux";
// import {getBooks} from '../actions/actions';
import Modelbook from './modelbook';



const List = props => {

// this.props.onGetItem();
    return <div style={{color: 'brown', fontWeith: 'bolder', fontSize: '20px' }}>
        Book List:

        <ul>{props.books.map(book => {
            console.log(book.title);
            return (<li key={book.id}>
                    <Modelbook {...book} /></li>
            )
        })}
        </ul>
    </div>

};
let mapStateToProps=(state) => {
    return {
        books: state.getbook
    }
};
// let dispatchMapToProps=(dispatch)=>{
//     return {
//
//         onGetItem: () => {dispatch(getBooks())}
//
//     }
// };
export default connect(
    mapStateToProps,
    // dispatchMapToProps
) (List);

