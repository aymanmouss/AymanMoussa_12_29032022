import PropTypes from "prop-types";
import { PieChart, Pie, Cell } from "recharts";
import "./style.css";

const COLORS = ["#E60000", "#fbfbfb"];

function PieChartAngle({ score }) {
  return (
    <PieChart width={285} height={263} className='pieChartAngle'>
      <Pie
        data={score}
        cx='50%'
        cy='50%'
        innerRadius={70}
        outerRadius={80}
        fill='#8884d8'
        paddingAngle={5}
        dataKey='value'
        startAngle={90}
        endAngle={360}
      >
        {score.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
PieChartAngle.propTypes = {
  score: PropTypes.array.isRequired,
};

PieChartAngle.defaultProps = {
  score: [],
};
export default PieChartAngle;
