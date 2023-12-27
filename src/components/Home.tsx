import '../App.css'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale, //X-axis
  LinearScale, //Y-axis
  Tooltip,
  Legend,
  PointElement,
  LineElement
  
} from 'chart.js'

import { ChartsData } from './ChartsData';
import { useState } from 'react';
import { Bar,Line } from 'react-chartjs-2'

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
  LineElement
)

function Home() {

  const [data, setData] = useState({
    labels: ChartsData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: ChartsData.map((data) => data.userGain),
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  });


  return(
    <div style={{width:500,display:"flex",marginLeft:20}}>
      <Bar data={data}></Bar>
      <Line data={data}></Line>
    </div>
  )
  
}

export default Home


