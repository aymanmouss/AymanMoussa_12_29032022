import { useParams } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import useFetch from "../../../../utils/hooks/useFetch";
import CustomTooltip from "../CustomTooltip/CustomTooltip";
import "./style.css";

export default function Chart() {
  let { userId } = useParams();
  const { data, error } = useFetch(
    `http://localhost:3000/user/${userId}/activity`
  );
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
    <BarChart
      width={835}
      height={220}
      data={data?.data.sessions}
      margin={{
        top: 5,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' vertical={false} />
      <XAxis
        dataKey={() => [1, 2, 3, 4, 5, 6, 7]}
        tickLine={false}
        tick={{ fontSize: 14, fill: "#74798c" }}
        dy={15}
      />
      <YAxis
        dataKey='kilogram'
        yAxisId='left'
        orientation='right'
        stroke='#8884d8'
        interval='number'
        allowDecimals={false}
        tickLine={false}
        axisLine={false}
        tick={{ fontSize: 14, fill: "#74798c" }}
        tickCount={5}
      />
      <YAxis
        dataKey='calories'
        yAxisId='right'
        orientation='right'
        stroke='#82ca9d'
        hide={true}
      />
      <Tooltip content={<CustomTooltip />} />
      <Bar
        yAxisId='left'
        dataKey='kilogram'
        fill='#000'
        radius={[50, 50, 0, 0]}
        barSize={13}
      />
      <Bar
        yAxisId='right'
        dataKey='calories'
        fill='#e60000'
        radius={[50, 50, 0, 0]}
        barSize={13}
      />
    </BarChart>
  );
}
