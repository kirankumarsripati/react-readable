import React from 'react'
import { Segment, Item } from 'semantic-ui-react';
import { IPost } from '../models/posts';
import { connect } from 'react-redux';
import PostListItem from './PostListItem';
import { getPosts } from '../actions/posts';
import sortBy from '../services/sortBy'
import { votePost, deletePost } from '../actions/post';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface PostsListProps {
  category?: string;
  posts: IPost[],
  dispatch: Function;
}

// https://stackoverflow.com/questions/56979012/issue-with-types-when-using-withrouter-and-typescript
const PostsList: React.FC<PostsListProps & RouteComponentProps> = ({ category, posts, dispatch, history }) => {
  React.useEffect(() => {
    dispatch(getPosts(category))
  }, [dispatch, category]);

  const onVoteClick = (id: string, delta: number) => {
    dispatch(votePost(id, delta));
  };

  const onEditClick = (post: IPost) => {
    history.push(`/${post.category}/${post.id}/edit`);
  };

  const onDeleteClick = (id: string) => {
    dispatch(deletePost(id));
  };

  return (
    <Segment>
      <Item.Group divided relaxed>
        {posts.map( post => (
          <PostListItem
            key={post.id}
            post={post}
            voteAction={onVoteClick}
            editAction={onEditClick}
            deleteAction={onDeleteClick}
          />
        ))}
        {posts.length === 0 && <h3>There are no posts yet.</h3>}
      </Item.Group>
    </Segment>
  )
}

export default connect((state: any) => ({
  posts: sortBy(state.posts, state.sortOrder)
}))(withRouter(PostsList))