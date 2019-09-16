import React from 'react';
import {connect} from "react-redux";
import Header from './components/header';
import List from './components/list';
// import { Router, Route, history, hashHistory } from 'react-router';

import Form from './components/form'
import './App.css';



class App extends React.Component {



  render() {
    return (
        <div className="App">
            <Header/>

            {/*<Router history={history}>*/}
            {/*    <Route path="/" component={Form}/>*/}
            {/*    <Router path="/:id" component={Form}/>*/}
            {/*</Router>*/}
            <List/>

        </div>
    );
  }
}

export default connect()(App);
