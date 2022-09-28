import React, { Component } from 'react'
import ProductList from './ProductList'

export default class ShoesStore extends Component {
  state = {
    stateShoe: {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png"
    }
  }

  setStateModal = (item) => {
    this.setState({
      stateShoe: item
    })
  }

  render() {
    let { stateShoe } = this.state;
    return (
      <div className="container">
        <header>
          <div>
            <h1 className='text-center'>Shoes shop</h1>
          </div>
        </header>
        <ProductList stateShoeProps={stateShoe} setStateModal={this.setStateModal}/>
      </div>
    )
  }
}
