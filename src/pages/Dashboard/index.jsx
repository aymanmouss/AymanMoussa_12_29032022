import React from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import UserDtata from "../UserData";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import BarCharts from "../../components/Charts/BarChart";
import Macros from "../../components/Macros";
import SimpleLineChart from "../../components/Charts/SimpleLineChart";
import SimpleRadarChart from "../../components/Charts/SimpleRadarChart";
import PieChartAngle from "../../components/Charts/PieChartAngle";
import useFetch from "../../utils/hooks/useFetch";

function Dashboard() {
  let { userId } = useParams();
  const { data, loading, error } = useFetch(
    `http://localhost:3000/user/${userId}`
  );

  if (loading) return <div className='loader'>Loading...</div>;
  // Error message display when we have a problem
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
  let displayedScores = data?.data.todayScore
    ? data?.data.todayScore
    : data?.data.score;
  const dataPieChart = [
    { value: data?.data.todayScore * 100 || data?.data.score * 100 },
    {
      value: 100 - data?.data.todayScore * 100 || 100 - data?.data.score * 100,
    },
  ];

  return (
    <div>
      <Header />
      <div className='dashboard'>
        <SideBar />
        <div className='user-datas'>
          <UserDtata userFirstName={data?.data.userInfos.firstName} />
          <div className='chartsMacros'>
            <div className='chartsDatat'>
              <BarCharts className='barchart' />
              <div className='bottomCharts'>
                <span className='MilesWalked'>
                  <p className='simpleLineChart-legend'>
                    Durée moyenne des sessions
                  </p>
                  <SimpleLineChart />
                </span>
                <SimpleRadarChart />
                <div className='pieChartAngle-score'>
                  <PieChartAngle score={dataPieChart} />
                  <p className='pieChartAngle-legend'>
                    <span className='scoreValue'>
                      {`${displayedScores * 100}%`}
                    </span>
                    <br></br> de votre objectif
                  </p>
                  <p className='pieChartAngle-title'>Score</p>
                </div>
              </div>
            </div>
            <Macros macrosData={data?.data.keyData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
