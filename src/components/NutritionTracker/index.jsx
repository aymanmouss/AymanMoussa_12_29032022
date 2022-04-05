import { ReactComponent as CaloriesIcon } from "../../assets/Calories-icon.svg";
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
export default NutritionTracker;
