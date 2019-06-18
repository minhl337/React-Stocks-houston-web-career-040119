import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map(stock=>{
            return <Stock stock={stock} removeStock={this.props.removeStock} addStock={this.props.addStock}/>
          })
        }
      </div>
    );
  }

}

export default StockContainer;
