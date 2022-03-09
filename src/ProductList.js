import React, { Component } from "react";
import { Table,Button } from "reactstrap";

export default class ProductList extends Component {

  render() {
    return (
      <div>
        <h3>
          {this.props.info.title}-{this.props.currentCategory}
        </h3>
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Ürün İsmi</th>
              <th> Fiyat</th>
              <th>Miktar</th>
              <th>Stok Adet</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <div>
                    <Button onClick={() => this.props.addToCart(product)} color="success" size="">
                      Ekle
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
