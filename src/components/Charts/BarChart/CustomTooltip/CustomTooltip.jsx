import "./style.css";
const tool = (payload, active) => {
  if (active && payload) {
    return (
      <div className='tooltipContainer'>
        <p className='tooltipLine '>{`${payload[0].value} kg`}</p>
        <p className='tooltipLine'>{`${payload[1].value} kCal`}</p>
      </div>
    );
  }
};
function CustomTooltip({ payload, active }) {
  return tool(payload, active);
}
export default CustomTooltip;
