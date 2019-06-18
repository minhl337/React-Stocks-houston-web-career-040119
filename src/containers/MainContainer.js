import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <SearchBar filterStocks={this.props.filterStocks} sortPrice={this.props.sortPrice} sortName={this.props.sortName}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.props.stocks} addStock={this.props.addStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer removeStock={this.props.removeStock} myStocks={this.props.myStocks}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
