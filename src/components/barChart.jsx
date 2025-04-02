"use client";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarChart = () => {
  return (
    <Chart
      options={{
        chart: { type: "bar", height: 350, toolbar: { show: false } }, // Hilangkan toolbar
        plotOptions: {
          bar: { columnWidth: "50%" }, // Lebar kolom 50%
        },
        fill: {
            colors: ["#836FFF", "#F3C623"],
        },
        dataLabels: { enabled: true }, // Tampilkan label data
        xaxis: {
          categories: ["2022", "2023", "2024"], // Tahun
        },
      }}
      series={[
        {
            name: "2023",
            data: [310, 210, 320],
          },
          
      ]}
      type="bar"
      height={350}
    />
  );
};

export default BarChart;
