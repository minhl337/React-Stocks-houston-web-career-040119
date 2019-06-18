import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {
  constructor(){
    super()
    this.state={
      allStocks:[],
      myStocks:[]
    }
  }

  componentWillMount(){
    fetch("http://localhost:3000/stocks").then(res=>res.json()).then(data=>{
      this.setState({
        allStocks:data,
        completeStocks:data
      })
    })
  }

  removeStock=(stock)=>{
    let myArr=this.state.myStocks.filter(x=>x!==stock)
    let newArr=[...this.state.allStocks,stock]
    this.setState({
      allStocks:newArr,
      myStocks:myArr
    })
  }

  addStock=(stock)=>{
    console.log(stock)
    let newArrMine=[...this.state.myStocks,stock]
    let newArr =this.state.allStocks.filter(x=>x!==stock)
    this.setState({
      allStocks:newArr,
      myStocks:newArrMine
    })
  }

  sortName=()=>{
    let newArr=this.state.allStocks.sort(function(a, b) { 

      var keyA = (a.name), 

          keyB = (b.name); 

      // Compare the 2 dates 

      if (keyA < keyB) return -1; 

      if (keyA > keyB) return 1; 

      return 0; 

  })

  this.setState({
    allStocks:newArr
  })
  }

  sortPrice=()=>{
    let newArr=this.state.allStocks.sort(function(a,b){
      let keyA=a.price,
      keyB=b.price;
      if (keyA>keyB)return -1;
      if (keyA<keyB)return 1;
      return 0
    })

    this.setState({
      allStocks:newArr
    })
  }

  filterStocks=(e)=>{
    
    let newArr=this.state.completeStocks.filter(stock=>stock.type===e.target.value)
    this.setState({
      allStocks:newArr
    })
  }

  render() {
    return (
      <div>
        <Header />
        <MainContainer filterStocks={this.filterStocks} sortPrice={this.sortPrice} sortName={this.sortName} myStocks={this.state.myStocks} stocks={this.state.allStocks} addStock={this.addStock} removeStock={this.removeStock}/>
      </div>
    );
  }
}

export default App;
