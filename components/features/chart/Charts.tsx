// charts.tsx/jsx

'use client' // if you use app dir, don't forget this line

import { cn } from "@/lib/utils";
import { IDashboard } from "@/types/dashboard.type";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ChartProps {
  type: | "line"
    | "area"
    | "bar"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "candlestick"
    | "boxPlot"
    | "radar"
    | "polarArea"
    | "rangeBar"
    | "rangeArea"
    | "treemap";
  datasource?: IDashboard[],
  options?: ApexOptions,
  series?: ApexOptions["series"],
  className?: string;
}
export function Chart({
  type = 'line',
  options = {
    chart: {
      id: 'apexchart'
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  },
  series = [{
    name: 'series-1',
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
  }],
  className,
}: ChartProps) {

  const getWidth = () => {
    if (type === 'donut') {
      return 300;
    }
    return 1200;
  };

  return (
    <div className={cn(
      'border-2 rounded-lg p-2 bg-white',
      className
    )}>
      <ApexChart type={type} options={options} series={series} height={315} width={getWidth()} />
    </div>
  )

}