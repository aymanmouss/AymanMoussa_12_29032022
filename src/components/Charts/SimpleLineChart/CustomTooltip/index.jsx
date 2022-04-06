import React from "react";
import PropTypes from "prop-types";
import "./style.css";
function LineChartTooltip({ payload, active }) {
  const tool2 = (payload, active) => {
    if (active && payload) {
      return (
        <div className='tooltipChart'>
          <p className='tooltipLineChart '>{`${payload[0].value} min`}</p>
        </div>
      );
    }
  };
  return <div>{tool2(payload, active)}</div>;
}
LineChartTooltip.propTypes = {
  payload: PropTypes.array,
  active: PropTypes.bool.isRequired,
};

LineChartTooltip.defaultProps = {
  payload: [],
  active: false,
};
export default LineChartTooltip;
