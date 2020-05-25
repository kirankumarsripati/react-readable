import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Category from './Category';
import Post from './Post';
import PostEdit from './PostEdit';
import PostAdd from './PostAdd';
import NotFound from './NotFound';
import Header from './Header';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getCategories } from '../actions/categories';

interface AppProps {
  dispatch: Function;
}

const App: React.FC<AppProps> = ({ dispatch }) => {
  React.useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Switch>
          <Route path='/404' component={NotFound} />
          <Route path='/post/new' component={PostAdd} />
          <Route path='/:category/:postId/edit' component={PostEdit} />
          <Route path='/:category/:postId' component={Post} />
          <Route path='/:category' component={Category} />
          <Route path='/' component={Home} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default connect((state: any) => ({
  categories: state.categories
}))(App);
