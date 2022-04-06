import { ReactComponent as CaloriesIcon } from "../../assets/Calories-icon.svg";
import PropTypes from "prop-types";
import "./style.css";
function NutritionTracker({ trackerIcon, iconBackground, value, title }) {
  return (
    <div className='nutritionTracker'>
      <span className='trackerIcon' style={iconBackground}>
        {trackerIcon}
      </span>
      <div className='tracker-nav'>
        <p className='tracker-data'>{value}</p>
        <p className='tracker-title'>{title}</p>
      </div>
    </div>
  );
}
NutritionTracker.propTypes = {
  trackerIcon: PropTypes.object.isRequired,
  iconBackground: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

NutritionTracker.defaultProps = {
  trackerIcon: {},
  iconBackground: {},
  value: 0,
  title: "",
};
export default NutritionTracker;
