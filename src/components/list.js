import React from 'react';
import {connect} from "react-redux";
import {editBook} from '../actions/actions';
import Modelbook from './modelbook';
import Form from "./form";


class List extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return <div style={{background: "white", color: 'brown', fontWeith: 'bolder', fontSize: '20px' }}>
            Book List:
            <ul>{this.props.books.map(book => {

                return (<li key={book.id}>
                        <Modelbook {...book} />
                        {/*<button onClick={<Form book={this.props.book}*/}
                        {/*    onEditBook={this.props.onEditBook(book)}/>}>EDIT</button>*/}

                    </li>
                )
            })}
            </ul>
        </div>
    }
}
let mapStateToProps=(state,props) => {
    return {
        books: state.getbook,
        // book: state.getbook.find((book) =>
        //     book.id === props.match.params.id)

    }
};
let mapDispatchToProps=(dispatch)=> {
    return {
        // onEditBook: (book) => {
        //     dispatch(editBook(book.id, book))
        // }
    };
};
export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(List);


