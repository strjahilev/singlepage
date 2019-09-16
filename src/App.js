import React from 'react';
import {connect} from "react-redux";
import {editBook} from "./actions/actions";
import List from './components/list';
// import { Router, Route, history, hashHistory } from 'react-router';

import Form from './components/form'
import './App.css';



const App = (props) => (


        <div className="App">
            <Form
                book={props.book}
                onEditBook={props.onEditBook}/>

            {/*<Router history={history}>*/}
            {/*    <Route path="/" component={Form}/>*/}
            {/*    <Router path="/:id" component={Form}/>*/}
            {/*</Router>*/}
            <List/>

        </div>
    );

const mapStateToProps = (state, props) => {
    return {
        book: state.getbook.find((book) =>
            book.id === props.match.params.id)
    };
};
const dispatchMapToProps = (dispatch)=> {
    return {
        onEditBook: (book) => {
            dispatch(editBook(book.id, book))
        }
    }
};

export default connect(
    mapStateToProps,
    dispatchMapToProps
) (App);
