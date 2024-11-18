import Chart from "react-apexcharts"
import { DarkModeProps } from "../../types/darkMode";


const DonutChart = ({darkMode}: DarkModeProps) => {
  
  const options = {
    series: [44, 55, 41],
    options: {
      chart: {
        type: "donut" as "donut",
        height: 350,
      },
      labels: ["Cancelados", "Concluídos", "Em Andamento"],
      colors: ["#FF5733", "#33FF57", "#3357FF"],
      legend: {
        position: "bottom" as "bottom",
        labels: {
          colors: darkMode ? "#dddddd" : "#000000",
        },
      },
      dataLabels: {
        style: {
          colors: ["#dddddd"],
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  
  return (
    <div
      className="py-6 bg-white rounded-lg flex dark:bg-gray-600 justify-center"
    >
      <Chart 
        options={options.options} 
        series={options.series} 
        type="donut"
        height={250}
      />
    </div>
  )
}

export default DonutChart
