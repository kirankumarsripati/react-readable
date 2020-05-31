import React from 'react'
import { Segment, Header } from 'semantic-ui-react';
import PostsList from './PostsList';
import SortControls from './SortControls';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface RouteParams {
  category: string;
}

const Category: React.FC<RouteComponentProps<RouteParams>> = ({ match }) => {
  const { category } = match.params;

  return (
    <Segment.Group>
      <Segment>
        <Header>{category}</Header>
        <SortControls />
      </Segment>
      <PostsList category={category} />
    </Segment.Group>
  )
}

export default withRouter(Category)