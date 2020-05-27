import React from 'react'
import { Segment, Header } from 'semantic-ui-react'
import { addPost } from '../actions/post'
import PostForm from './PostForm';
import { connect } from 'react-redux';

interface PostAddProps {
  history: any;
  dispatch: Function;
}

const PostAdd: React.FC<PostAddProps> = ({ history, dispatch }) => {
  const onPostSubmit = ({ author, title, category, body }) => {
    dispatch(addPost({ author, title, category, body }));
    history.push("/");
  };

  return (
    <Segment.Group>
      <Segment>
        <Header>Add New Post</Header>
      </Segment>
      <Segment>
        <PostForm onSubmit={onPostSubmit} />
      </Segment>
    </Segment.Group>
  )
}

export default connect()(PostAdd);