import React from 'react'
import { Form, Button } from 'semantic-ui-react';

interface CommentFormProps {
  id?: string;
  author?: string;
  body?: string;
  onSubmit: Function;
}

const CommentForm: React.FC<CommentFormProps> = ({ id, author, body, onSubmit }) => {
  const [inputAuthor, setInputAuthor] = React.useState(author);
  const [inputBody, setInputBody] = React.useState(body);

  const onSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ author: inputAuthor, body: inputBody })
    setInputBody('')
  }

  return (
    <Form method='post' onSubmit={onSubmitForm}>
      <Form.Field>
        <label>Author</label>
        <input
          placeholder='Author'
          value={inputAuthor}
          disabled={!!id}
          required
          onChange={(event) => {
            setInputAuthor(event.target.value)
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>Comment</label>
        <textarea
          name='body'
          required
          value={inputBody}
          onChange={(event) => {
            setInputBody(event.target.value)
          }}
        />
      </Form.Field>
      <Button>Save</Button>
    </Form>
  )
}

export default CommentForm;