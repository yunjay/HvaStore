import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link';

import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';

export default class Item extends Component {
  static propTypes = {
      item: PropTypes.object.isRequired,
    // item: PropTypes.shape({
    //     title:PropTypes.string.isRequired,
    //     price:PropTypes.number.isRequired, 
    // })
  }

  render() {
      const item = this.props.item;
            
      return( 
        <ItemStyles>
            {item.image ? <img src={item.image} alt={item.title}/>:null}
            <Title>
                <Link href={{
                    pathname:'/item',
                    query: {id: item.id},
                }}>
                <a>{item.title}</a>
                </Link>
            </Title>
            <PriceTag>
                {formatMoney(item.price)}
            </PriceTag>
            <p>{item.description}</p>

            <div className="buttonList">
                <Link href={{pathname:"update",query:{id:item.id}}}>
                    <a>편집🖋️</a>
                </Link>
                <button>장바구니에 넣기</button>
                <button>삭제</button>
            </div>

        </ItemStyles>
        );
    }
}
