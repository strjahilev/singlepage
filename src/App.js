import React from 'react';
import {connect} from "react-redux";
import Header from './components/header';
import List from './components/list';

import './App.css';

class App extends React.Component {



  render() {
    return (
        <div className="App">
          <Header/>
          <List />
        </div>
    );
  }
}



// let dispatchMapToProps=(dispatch,props)=>{
//   return {
//
//     onGetItem: () => {dispatch(getBooks())},
//
//     // onEditBook: (item) => {dispatch(editBook(item.id, item))}
//
//   }
// }
export default connect()(App);
