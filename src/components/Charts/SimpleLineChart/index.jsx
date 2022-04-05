import { useParams } from "react-router-dom";
import "./style.css";
import LineChartTooltip from "./CustomTooltip";
import useFetch from "../../../utils/hooks/useFetch";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

function SimpleLineChart() {
  let { userId } = useParams();
  const { data, error } = useFetch(
    `http://localhost:3000/user/${userId}/average-sessions`
  );
  // if (loading) return <h1>LOADING...</h1>;
  if (error)
    return (
      <p>
        <i
          className='fa-solid fa-triangle-exclamation'
          style={{ fontSize: "20px" }}
        ></i>
        On a pas pu télécharger les donner essayer ultérieurement
      </p>
    );

  return (
    <LineChart
      width={285}
      height={200}
      data={data?.data.sessions}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      className='simpleLineChart'
    >
      <XAxis
        dataKey={() => ["L", "M", "M", "J", "V", "s", "d"]}
        axisLine={false}
        tickLine={false}
        stroke='rgba(255, 255, 255, 0.5)'
      />
      <YAxis hide={true} />
      <Tooltip
        content={<LineChartTooltip />}
        cursor={{
          stroke: "rgba(0, 0, 0, 0.1)",
          strokeWidth: 32,
        }}
      />
      <Line
        type='monotone'
        dataKey='sessionLength'
        stroke='rgba(255, 255, 255, 0.5)'
        dot={false}
      />
    </LineChart>
  );
}
export default SimpleLineChart;
