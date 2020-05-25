import React from 'react'
import PostsList from './PostsList'
import { Segment, Header } from 'semantic-ui-react'

const Home = () => {
  return (
    <Segment.Group>
      <Segment>
        <Header>Welcome to Readable!</Header>
      </Segment>
      <PostsList />
    </Segment.Group>
  )
}

export default Home