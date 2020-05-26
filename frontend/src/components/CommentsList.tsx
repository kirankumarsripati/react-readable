import React from 'react';
import { Comment, Icon } from 'semantic-ui-react';
import Moment from 'react-moment';
import { IComment } from '../models/comment';

interface CommentsListProps {
  comments: IComment[];
  voteAction: Function;
  removeAction: Function;
  editAction: Function;
}

const CommentsList: React.FC<CommentsListProps> = ({ comments = [], voteAction, removeAction, editAction }) => {
  if (!comments.length) {
    return null;
  }
  return (
    <Comment.Group>
      {comments.map(comment => (
        <Comment key={comment.id}>
          <Comment.Content>
            <Comment.Author as='span'>{comment.author}</Comment.Author>
            <Comment.Metadata>
              <Moment fromNow>{comment.timestamp}</Moment>
              | <Icon name='thumbs down outline'
                onClick={() => voteAction(comment.id, -1)} />
              {comment.voteScore} <Icon name='thumbs up outline'
                onClick={() => voteAction(comment.id, 1)} />
            </Comment.Metadata>
            <Comment.Text>{comment.body}</Comment.Text>
            <Comment.Actions>
              <Comment.Action onClick={() => removeAction(comment.id)}>
                <Icon name='delete' />
                Delete
              </Comment.Action>
              <Comment.Action onClick={() => editAction(comment)}>
                <Icon name='edit' />
                Edit
              </Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      ))}
    </Comment.Group>
  );
};

export default CommentsList;
