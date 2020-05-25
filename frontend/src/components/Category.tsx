import React from 'react'
import { Segment, Header } from 'semantic-ui-react';
import PostsList from './PostsList';

const Category = ({ match }) => {
  const { category } = match.params;
  return (
    <Segment.Group>
      <Segment>
        <Header>{category}</Header>
      </Segment>
      <PostsList category={category} />
    </Segment.Group>
  )
}

export default Category