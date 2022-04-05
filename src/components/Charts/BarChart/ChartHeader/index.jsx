import "./style.css";
function ChartHeader() {
  return (
    <div className='chartHeader'>
      <p className='barChat-title'>Activité quotidienne</p>
      <div className='chartBar-legend'>
        <p className='l1'>
          <i className='fa-solid fa-circle'></i> Poids (kg)
        </p>
        <p className='l2'>
          <i className='fa-solid fa-circle'></i> Calories brûlées (kCal)
        </p>
      </div>
    </div>
  );
}
export default ChartHeader;
