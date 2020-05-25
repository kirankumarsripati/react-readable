import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home';
import Category from './Category';
import Post from './Post';
import PostEdit from './PostEdit';
import PostAdd from './PostAdd';
import NotFound from './NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/404' component={NotFound} />
        <Route path='/post/new' component={PostAdd} />
        <Route path='/:category/:postId/edit' component={PostEdit} />
        <Route path='/:category/:postId' component={Post} />
        <Route path='/:category' component={Category} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
