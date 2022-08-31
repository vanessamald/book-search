import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';

// create ApolloClient instance
const client = new ApolloClient({
    request: operation => {
        operation.setContext({
            headers: {
                authorization: localStorage.getItem('token')
            }
        });
    },
    uri: '/graphql',
});


function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={SearchBooks} />
          <Route exact path='/saved' component={SavedBooks} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
