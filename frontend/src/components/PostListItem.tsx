import React from 'react';
import { Item, Label, Icon } from 'semantic-ui-react';
import { IPost } from '../models/posts';
import { Link } from 'react-router-dom';
import Timestamp from 'react-timestamp';

interface PostListItemProps {
  post: IPost,
}

const POST_PREVIEW_LIMIT = 100;

const PostListItem: React.FC<PostListItemProps> = ({ post }) => (
  <Item>
    <Item.Content>
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
);

export default PostListItem;
