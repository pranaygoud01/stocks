import React, { Component } from "react";
import Plot from "react-plotly.js";
class Tesla extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stockXValues: [],
      stockYValues: [],
    };
  }
  componentDidMount() {
    this.fetchStock();
  }
  fetchStock() {
    const pointerThis = this;
    const API_KEY = "JIY998KBYRSAIGC6";
    let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSLA&outputsize=compact&apikey=${API_KEY}`;
    let stockXfunction = [];
    let stockYfunction = [];
    fetch(API_CALL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        for (var key in data["Time Series (Daily)"]) {
          stockXfunction.push(key);
          stockYfunction.push(data["Time Series (Daily)"][key]["1. open"]);
        }
        console.log(stockYfunction);
        pointerThis.setState({
          stockXValues: stockXfunction,
          stockYValues: stockYfunction,
        });
      });
  }
  render() {
    return (
      <div>
        <div>
          <Plot
            data={[
              {
                x: this.state.stockXValues,
                y: this.state.stockYValues,
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "red" },
              },
            ]}
            layout={{ width: 500, height: 500, title: "TSLA Stocks" }}
          />
        </div>
      </div>
    );
  }
}

export default Tesla;
