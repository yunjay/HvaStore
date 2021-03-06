import React, { Component } from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';
//데이터를 그래프큐엘로 보낼땐 Query to submit data -> expose query to mutation

//query into mutation to use data (prob should study react basics first)
//make gql mutation. passed in title -> goes to $title
//think of like function declaration or some shit
//...fuck you
//MUTATION QUERY
const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
      $title: String!
      $description: String!
      $price: Int!
      $image: String
      $largeimage: String){
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeimage: $largeimage
    ){
      id
    }
  }
`;

class CreateItem extends Component {
  state = { //uses state to save local data
    title:'',
    description:'',
    image:'',
    largeimage:'',
    price:0,
  }
  //instance property through arrow function
  handleChange=(event)=>{
    //name , type, value needed
    const {name,type,value }=event.target;
    //console.log({name,type,value});
    const val = (type == 'number' ? parseFloat(value):value);
    this.setState({[name]: val})
  }
  
  uploadFile = async (e)=>{
    console.log("uploading file...");
    const files = e.target.files;
    const data = new FormData();
    data.append('file',files[0]);
    data.append('upload_preset','HvaStore');
//uploads image to cloudindary
    const res = await fetch ('https://api.cloudinary.com/v1_1/yunjay/image/upload',
    {
      method: 'POST',
      body:data
    });
    const file = await res.json();
    console.log(file);
    this.setState({
      image: file.secure_url,
      largeimage:file.eager[0].secure_url,
    })
    
  }

  render() {
    return (
    <Mutation mutation={CREATE_ITEM_MUTATION }
      variables={this.state}>
      { //load,err,call from payload
        //implicit return is returning everthing inside the parantheses without using return keyword
        (createItem,{loading,error,called,data})=>(
          //you can console log these to see what the fuck they are (hint: error is boolean)
      <Form onSubmit={async (event)=>{
        event.preventDefault(); //stops from submitting
        console.log(this.state);
        const res = await createItem(); //call mutation, change to single item page
        console.log(res); 
        Router.push({
          pathname: '/item',
          query: {id: res.data.createItem.id},
        })
      }}>
      <Error error={error}/>
        <fieldset disabled={loading} aria-busy={loading}>
          <label htmlFor="file">
            이미지 파일
            <input type="file" id="file" name="file"
            placeholder="이미지를 업로드해주세요" required 
            onChange={this.uploadFile}/>
              {this.state.image && 
              <img width="200" src={this.state.image} alt="미리보기"/>}
          </label>
          <label htmlFor="title">
            이름
            <input type="text" id="title" name="title"
            placeholder="상품 이름" required value={this.state.title}
            onChange={this.handleChange}/>

          </label>
          <label htmlFor="title">
            가격
            <input type="number" id="price" name="price"
            placeholder="가격" required value={this.state.price}
            onChange={this.handleChange}/>

          </label>
          <label htmlFor="title">
            설명
            <input type="text" id="description" name="description"
            placeholder="상품 설명" required value={this.state.description}
            onChange={this.handleChange}/>

          </label>
          <button type="submit">상품 등록</button>
        </fieldset>
      </Form>
            
      )} 
    </Mutation>
    )
  }
}

export default CreateItem;
export {CREATE_ITEM_MUTATION};
