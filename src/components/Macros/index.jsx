import PropTypes from "prop-types";
import NutritionTracker from "../NutritionTracker";
import { ReactComponent as CaloriesIcon } from "../../assets/Calories-icon.svg";
import { ReactComponent as ProteinesIcon } from "../../assets/Proteines-icon.svg";
import { ReactComponent as GlucidesIcon } from "../../assets/Glucides-icon.svg";
import { ReactComponent as LipidesIcon } from "../../assets/Lipides-icon.svg";
import "./style.css";
function Macros({ macrosData }) {
  return (
    <div className='macros'>
      <NutritionTracker
        trackerIcon={<CaloriesIcon />}
        iconBackground={{ backgroundColor: "rgba(255, 0, 0, 0.07)" }}
        title='Calories'
        value={macrosData?.calorieCount}
      />
      <NutritionTracker
        trackerIcon={<ProteinesIcon />}
        iconBackground={{ backgroundColor: "rgba(74, 184, 255, 0.1)" }}
        title='Proteines'
        value={macrosData?.proteinCount}
      />
      <NutritionTracker
        trackerIcon={<GlucidesIcon />}
        iconBackground={{
          backgroundColor: " rgba(249, 206, 35, 0.1)",
        }}
        title='Glucides'
        value={macrosData?.carbohydrateCount}
      />
      <NutritionTracker
        trackerIcon={<LipidesIcon />}
        iconBackground={{ backgroundColor: "rgba(253, 81, 129, 0.1)" }}
        title='Lipides'
        value={macrosData?.lipidCount}
      />
    </div>
  );
}
Macros.propTypes = {
  macrosData: PropTypes.object.isRequired,
};

Macros.defaultProps = {
  macrosData: {},
};
export default Macros;
