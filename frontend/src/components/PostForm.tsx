import React, { Component } from 'react'
import { Form, Button, Select } from 'semantic-ui-react'
import { ICategory } from '../models/category';
import { connect } from 'react-redux';

interface PostFormProps {
  id?: string;
  author?: string,
  body?: string;
  title?: string;
  categories: ICategory[];
  onSubmit: Function;
}

export class PostForm extends Component<PostFormProps> {
  state = {
    categories: []
  }

  onSubmit = event => {
    event.preventDefault();

    const { category = this.getDefaultCategory(), author, body, title } = {
      ...this.props,
      ...this.state
    };

    this.props.onSubmit({ category, author, body, title });
  };

  getDefaultCategory() {
    if (this.props.categories.length) {
      return this.props.categories[0].name;
    }
    return '';
  }

  onChange = field => (event) => {
    const value = event.target.value;
    this.setState({ [field]: value });
  };

  onChangeSelect = field => (event, data) => {
    const value = event.target.value || data.value;
    this.setState({ [field]: value });
  };

  render() {
    const categories = this.props.categories.map(({ name }) => ({
      key: name,
      value: name,
      text: name
    }));

    const isEditMode = !!this.props.id;

    let { author = '', title = '', body = '', category = '' } = {
      ...this.props,
      ...this.state
    };

    category = category || this.getDefaultCategory();

    return (
      <Form method='post' onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Author</label>
          <input
            placeholder='Author'
            disabled={isEditMode}
            value={author}
            required
            minLength={3}
            onChange={this.onChange('author')}
          />
        </Form.Field>
        <Form.Field>
          <label>Category</label>
          <Select
            disabled={isEditMode}
            placeholder='Select category'
            value={category}
            options={categories}
            required
            onChange={this.onChangeSelect('category')}
          />
        </Form.Field>
        <Form.Field>
          <label>Title</label>
          <input
            placeholder='Title'
            value={title}
            required
            minLength={3}
            onChange={this.onChange('title')}
          />
        </Form.Field>
        <Form.Field>
          <label>Post</label>
          <textarea
            name='body'
            required
            value={body}
            onChange={this.onChange('body')}
          />
        </Form.Field>
        <Button>{isEditMode ? 'Save' : 'Post'}</Button>
      </Form>
    );
  }
}

export default connect((state: any) => ({
  categories: state.categories
}))(PostForm);
