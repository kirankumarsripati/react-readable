import React from 'react'
import { Segment, Header, Item, Label, Icon } from 'semantic-ui-react'
import { IPost } from '../models/posts'
import { getPost } from '../actions/post';
import Timestamp from 'react-timestamp';
import { connect } from 'react-redux';

interface PostProps {
  post: IPost;
  dispatch: Function;
}

const Post = ({ match, post, dispatch }) => {
  React.useEffect(() => {
    dispatch(getPost(match.params.postId))
  }, [dispatch, match]);

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
    </>
  )
}

export default connect((state: any) => ({
  post: state.post
}))(Post);