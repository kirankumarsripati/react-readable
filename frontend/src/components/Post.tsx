import React from 'react'
import { Segment, Header, Item, Label, Icon, Modal } from 'semantic-ui-react'
import { IPost } from '../models/posts'
import { getPost } from '../actions/post';
import { getComments } from '../actions/comments';
import Timestamp from 'react-timestamp';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';
import { IComment } from '../models/comment';
import { voteComment, deleteComment, updateComment, addComment } from '../actions/comments';

interface PostProps {
  post: IPost;
  comments: IComment;
  dispatch: Function;
}

const Post = ({ match, post, comments, dispatch }) => {
  const [modelOpen, setModelOpen] = React.useState(false)
  const [commentToEdit, setCommentToEdit] = React.useState<{
    id: number,
    body: string,
  } | null>(null)

  React.useEffect(() => {
    dispatch(getPost(match.params.postId))
    dispatch(getComments(match.params.postId))
  }, [dispatch, match]);

  const onEditComment =(comment) => {
    setModelOpen(true)
    setCommentToEdit(comment)
  }

  const onVoteComment = (commentId, delta) => {
    dispatch(voteComment({ commentId, delta }));
  };

  const onRemoveComment = (commentId) => {
    dispatch(deleteComment(commentId));
  }

  const onCommentUpdate = ({ body }) => {
    if (!body) {
      return;
    }
    dispatch(updateComment({
      commentId: commentToEdit && commentToEdit.id,
      body
    }))
    closeCommentModal();
  };

  const onCommentSubmit = (commentData) => {
    commentData.body &&
      dispatch(addComment({
        postId: match.params.postId,
        ...commentData,
      }))
  }

  const closeCommentModal = () => {
    setModelOpen(false);
    setCommentToEdit(null);
  }


  return (
    <>
      <Segment.Group>
        <Segment>
          <Header>Post</Header>
        </Segment>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Header>
                  {post.title}
                </Item.Header>
                <Item.Description>{post.body}</Item.Description>
                <Item.Meta>
                  <Label.Group>
                    <Icon name='thumbs down outline' />
                    {post.voteScore + ' '}
                    <Icon name='thumbs up outline' />
                    <Label tag>{post.category}</Label>
                    <Label>
                      <Icon name='user' /> {post.author}
                    </Label>
                    <Label>
                      <Icon name='clock' />
                      <Timestamp time={post.timestamp} format='full' />
                    </Label>
                  </Label.Group>
                </Item.Meta>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment.Group>
      <Segment.Group>
        <Segment>
          <h3>Comment{comments.length > 1 && ('s')} ({comments.length})</h3>
        </Segment>
        {comments.length > 0 && <Segment>
          <CommentsList
            comments={comments}
            voteAction={onVoteComment}
            removeAction={onRemoveComment}
            editAction={onEditComment} />
          </Segment>}
          <Segment>
            <CommentForm onSubmit={onCommentSubmit} />
          </Segment>
      </Segment.Group>
      <Modal
        open={modelOpen}
        onClose={closeCommentModal}>
        <Modal.Header>Edit comment</Modal.Header>
        <Modal.Content>
          <CommentForm
            {...commentToEdit}
            onSubmit={onCommentUpdate}
          />
        </Modal.Content>
      </Modal>
    </>
  )
}

export default connect((state: any) => ({
  post: state.post,
  comments: state.comments
}))(Post);