import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';

class CreateItem extends Component {
  state = {
    title: '',
    description: '',
    image: '',
    largeImage: '',
    price: 0
  };

  onChangeHandler = event => {
    const { name, type, value } = event.currentTarget;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState(prevState => ({
      ...prevState,
      [name]: val
    }));
  };

  render() {
    return (
      <Form>
        <fieldset>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              required
              onChange={this.onChangeHandler}
              value={this.state.title}
            />
          </label>

          <label htmlFor="price">
            Price
            <input
              type="number"
              id="price"
              name="price"
              placeholder="price"
              required
              onChange={this.onChangeHandler}
              value={this.state.price}
            />
          </label>

          <label htmlFor="description">
            Description
            <textarea
              id="description"
              name="description"
              placeholder="description"
              required
              onChange={this.onChangeHandler}
              value={this.state.description}
            />
          </label>
        </fieldset>
      </Form>
    );
  }
}

export default CreateItem;
