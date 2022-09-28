import React, { Component } from 'react'
import ProductItem from './ProductItem'
import shoesData from './data.json'
import Modal from './Modal'

export default class ProductList extends Component {
  render() {
    let { stateShoeProps, setStateModal, addItem } = this.props;
    return (
      <div className='row card-deck mt-4'>
        {
          shoesData.map((product, index) => {
            return <div key={index}>
              <ProductItem item={product} setStateModal={setStateModal}/>
            </div>
          })
        }
        <Modal content={stateShoeProps}/>
      </div>
    )
  }
}
