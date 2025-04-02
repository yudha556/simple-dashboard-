"use client";

import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SplineAreaChart = () => {
  const options = {
    chart: {
      type: "area",
      height: 350,
      toolbar: false,
      background: "transparent",
    },
    fill: {
      opacity: 0.2,
      height: 50,
      type: "area",
      colors: ["#836FFF", "#F3C623"],
      dropShadow: {
        enabled: true,
        top: 5,
        left: 0,
        blur: 8,
        opacity: 0.7,
        color: "#000000"
      }
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "monotoneCubic", // Spline area
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  const series = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  return <Chart options={options} series={series} type="area" height={350} />;
};

export default SplineAreaChart;
