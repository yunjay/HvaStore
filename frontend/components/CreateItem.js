import React, { Component } from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';

import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';


class CreateItem extends Component {
  state = {
    title:'',
    description:'',
    image:'',
    largeImage:'',
    price:0,
  }
  render() {
    return (
      <Form>
        <fieldset>
          <label htmlFor="title">
            이름
            <input type="text" id="title" name="title"
            placeholder="Title" required value={this.state.title}/>
          </label>
        </fieldset>
      </Form>
    )
  }
}

export default CreateItem;