import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    let { item, setStateModal} = this.props;
    return (
        <div className="col-lg-4">
          <div className="card mt-4" style={{width: '20rem'}}>
            <img src={item.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.price} $</p>
              <button onClick={() => setStateModal(item)} style={{cursor: "pointer"}} data-toggle="modal" data-target="#exampleModal" className="btn btn-dark text-white">
                <span>add to cart</span>
                <i className="fa fa-shopping-cart ml-2"></i>
              </button>
            </div>
          </div>
        </div>
    )
  }
}
