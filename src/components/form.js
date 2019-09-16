import React from 'react';
import { connect } from 'react-redux'
import {addbook, getBooks} from '../actions/actions';


class Form extends React.Component {
    constructor(props){
        super (props);

        this.onTitleChange = this.onTitleChange.bind(this);

        this.state = {
            id: props.book? props.book.id:'',
            title: props.book ? props.book.title : '',
        };
    }

    addbook(e){
        e.preventDefault();
        this.props.onAddBook(
            {
                id: this.state.id,
                title: this.Input.value,
            },
        );
        this.props.onGetBook();
        this.Input.value ='';
    };
    onTitleChange(e) {
        const title = e.target.value;
        this.setState(() => ({ title: title }));
    }
    render() {


        return <div style={{background:"gray"}}>
                    <h1> list</h1>
                    <input type="text"
                           value={this.state.title}
                           onChange={this.onTitleChange}
                           ref={(input) => { this.Input = input; }} />
                    <button onClick={this.addbook.bind(this)}
                            style={{background:"pink"}}>
                        ADD
                    </button>

               </div>

    }
}
let mapStateToProps=(state,props) => {
    return {
        books: state,


    } };
let mapDispatchToProps=(dispatch)=>{
    return {
        onAddBook: (item) => {dispatch(addbook(item))},
        onGetBook: () => {dispatch(getBooks())}
    }
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Form);