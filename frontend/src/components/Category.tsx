import React from 'react'
import { Segment, Header } from 'semantic-ui-react';
import PostsList from './PostsList';
import SortControls from './SortControls';

const Category = ({ match }) => {
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

export default Category