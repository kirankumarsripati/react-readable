import React from 'react'
import { Segment, Item } from 'semantic-ui-react';
import { IPost } from '../models/posts';
import { connect } from 'react-redux';
import PostListItem from './PostListItem';
import { getPosts } from '../actions/posts';

interface PostsListProps {
  category?: string;
  posts: IPost[],
  dispatch: Function;
}

const PostsList: React.FC<PostsListProps> = ({ category, posts, dispatch }) => {
  React.useEffect(() => {
    dispatch(getPosts(category))
  }, [dispatch, category]);

  return (
    <Segment>
      <Item.Group divided relaxed>
        {posts.map( post => (
          <PostListItem
            key={post.id}
            post={post}
          />
        ))}
        {posts.length === 0 && <h3>There are no posts yet.</h3>}
      </Item.Group>
    </Segment>
  )
}

export default connect((state: any) => ({
  posts: state.posts
}))(PostsList)