import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    let { content } = this.props;
    return (
      <div>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Shoe information
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                {/* nội dung giỏ hàng */}
                <table className='table'>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Alias</th>
                      <th>Price</th>
                      <th>Description</th>
                      <th>Short description</th>
                      <th>Quantity</th>
                      <th>Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                        <tr>
                          <td>{content.id}</td>
                          <td>{content.name}</td>
                          <td>{content.alias}</td>
                          <td>{content.price} $</td>
                          <td>{content.description}</td>
                          <td>{content.shortDescription}</td>
                          <td>{content.quantity}</td>
                          <td><img className='img-fluid' style={{ height: "50%" }} src={content.image} /></td>
                        </tr>
                    }

                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
