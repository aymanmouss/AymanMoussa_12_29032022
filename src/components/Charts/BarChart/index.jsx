import React from "react";
import Chart from "./Chart";
import ChartHeader from "./ChartHeader";
import "./style.css";

function BarCharts() {
  return (
    <div className='barCharts'>
      <ChartHeader />
      <Chart />
    </div>
  );
}
export default BarCharts;
