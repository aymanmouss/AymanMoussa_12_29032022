import { useParams } from "react-router-dom";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import useFetch from "../../../utils/hooks/useFetch";
import "./style.css";

export default function SimpleRadarChart() {
  let { userId } = useParams();
  const { data: PerformanceData, error } = useFetch(
    `http://localhost:3000/user/${userId}/performance`
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
    <RadarChart
      cx='50%'
      cy='50%'
      outerRadius='70%'
      width={285}
      height={263}
      data={PerformanceData?.data.data}
      className='simpleRadarChart'
    >
      <PolarGrid />
      <PolarAngleAxis
        dataKey='kind'
        stroke='#FFFFFF'
        tickLine={false}
        tick={{
          fontSize: 10,
          fontWeight: 500,
        }}
        dy={3}
      />
      <Radar
        dataKey='kind'
        stroke='rgba(255, 1, 1, 0.7)'
        fill='rgba(255, 1, 1, 0.7)'
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}
