import React from 'react'
import { Segment, Header } from 'semantic-ui-react'
import PostForm from './PostForm'
import { connect } from 'react-redux'
import { IPost } from '../models/posts'
import { getPost, updatePost } from '../actions/post'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface PostEditProps {
  post: IPost;
  match: any;
  dispatch: Function;
  history: Function;
}

const PostEdit: React.FC<PostEditProps & RouteComponentProps> = ({ post, match, dispatch, history }) => {

  React.useEffect(() => {
    dispatch(getPost(match.params.postId))
  }, [dispatch, match])


  const onPostSubmit = (title: string, body: string) => {
    const { postId:id } = match.params;

    dispatch(updatePost({ id, title, body }));

    history.push('/')
  }

  return (
    <Segment.Group>
      <Segment>
        <Header>Edit Post</Header>
      </Segment>
      <Segment>
        <PostForm
          {...post}
          onSubmit={onPostSubmit} />
      </Segment>
    </Segment.Group>
  )
}

export default connect((state: any) => ({
  post: state.post
}))(withRouter(PostEdit));