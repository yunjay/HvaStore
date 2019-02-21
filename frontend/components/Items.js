import React, { Component } from 'react'
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Item from './Item';

//as if in graphql playground
const ALL_ITEMS_QUERY= gql`
    query ALL_ITEMS_QUERY{
        items{
            id
            title
            price
            description
            image
            largeimage
        }
    }`;
    //child of Query must be a function

const Center = styled.div`
    text-align:center;
`;
const ItemsList = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
    max-width:${(props)=> props.theme.maxWidth};
    margin: 0 auto;
`;

class Items extends Component {
  render() {
    return (
      <Center>
        <Query query={ALL_ITEMS_QUERY}>
            {({data, error, loading})=>{
                if (loading) return <p>로딩중...</p>
                if (error) return <p>에러: {error.message}</p>
                return <ItemsList>
                    {data.items.map(item=>
                    <Item item={item} key={item.id}/>
                    )}
                </ItemsList>
            }}
        </Query>
      </Center>
    )
  }
} 
//render props instead of high order component
export default Items;