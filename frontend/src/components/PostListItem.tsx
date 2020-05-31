import React from 'react';
import { Item, Label, Icon, Button } from 'semantic-ui-react';
import { IPost } from '../models/posts';
import { Link } from 'react-router-dom';
// @ts-ignore
import Timestamp from 'react-timestamp';

interface PostListItemProps {
  post: IPost;
  editAction: Function;
  deleteAction: Function;
  voteAction: Function;
}

const POST_PREVIEW_LIMIT = 100;

const PostListItem: React.FC<PostListItemProps> = ({ post, editAction, deleteAction, voteAction }) => (
  <Item>
    <Item.Content>
      <Button.Group floated="right" compact size="mini">
        <Button content="Edit" icon="edit" basic color='green'
                onClick={() => editAction(post)} />
        <Button content="Delete" icon="delete" basic color='red'
                onClick={() => deleteAction(post.id)} />
      </Button.Group>
      <Item.Header as={Link} to={`/${post.category}/${post.id}`}>
        {post.title || 'Untitled post'}
      </Item.Header>
      <Item.Description>
        {post.body.length > POST_PREVIEW_LIMIT
          ? `${post.body.substr(0, POST_PREVIEW_LIMIT)}...`
          : post.body}
      </Item.Description>
      <Item.Meta>
        <Label.Group>
          <Button basic size='small' icon='thumbs down outline'
            onClick={() => voteAction(post.id, -1)} />
          {post.voteScore + ' '}
          <Button basic size='small' icon='thumbs up outline' onClick={() => voteAction(post.id, 1)} />
          <Label tag>{post.category}</Label>
          <Label>
            <Icon name='user' /> {post.author}
          </Label>
          <Label>
            <Icon name='clock' />
            <Timestamp time={post.timestamp} format='full' />
          </Label>
          <Label>
            <Icon name="comment" /> {post.commentCount} comment{post.commentCount > 1 ? "s" : ""}
          </Label>
        </Label.Group>
      </Item.Meta>
    </Item.Content>
  </Item>
);

export default PostListItem;
