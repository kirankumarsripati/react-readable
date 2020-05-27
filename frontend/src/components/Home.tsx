import React from 'react'
import PostsList from './PostsList'
import { Segment, Header } from 'semantic-ui-react'
import SortControls from './SortControls'

const Home = () => {
  return (
    <Segment.Group>
      <Segment>
        <Header>Welcome to Readable!</Header>
        <SortControls />
      </Segment>
      <PostsList />
    </Segment.Group>
  )
}

export default Home