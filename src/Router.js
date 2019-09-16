import React from 'react';

import App from './App';

import Header from './components/header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const AppRoute = () => (
    <BrowserRouter >
        <div className='container'>
            <Header />
            <Switch >
                <Route  path="/" component={App} exact={true} />

                <Route path="/book/:id" component={App} />

                {/*<Route path="/book/:id" component={EditBook} />*/}
                {/*<Route component={NotFound} />*/}
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRoute;