import { useState } from "react";
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
  let performanceAverageData = [];

  PerformanceData?.data.data.map((data, index) => {
    return performanceAverageData.push({
      value: data.value,
      subject: PerformanceData?.data.kind[index + 1],
    });
  });

  return (
    <RadarChart
      cx='50%'
      cy='50%'
      outerRadius='70%'
      width={285}
      height={263}
      data={performanceAverageData}
      className='simpleRadarChart'
    >
      <PolarGrid />
      <PolarAngleAxis
        dataKey='subject'
        stroke='#FFFFFF'
        tickLine={false}
        tick={{
          fontSize: 10,
          fontWeight: 500,
        }}
        dy={3}
      />
      <Radar
        dataKey='value'
        stroke='rgba(255, 1, 1, 0.7)'
        fill='rgba(255, 1, 1, 0.7)'
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}
