"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

const chartConfig = {
  success: {
    label: "Successful Calls",
    color: "hsl(var(--chart-1))",
  },
  failed: {
    label: "Failed Calls",
    color: "hsl(var(--chart-2))",
  },
};

export default function CallActivityAreaChart({ calls }) {
  if (!calls.length) return null;

  const groupedData = {};

  calls.forEach((call) => {
    const date = new Date(call.callStartTime).toISOString().split("T")[0];

    if (!groupedData[date]) {
      groupedData[date] = { success: 0, failed: 0 };
    }

    if (call.callStatus) groupedData[date].success++;
    else groupedData[date].failed++;
  });

  const chartData = Object.entries(groupedData)
    .map(([date, values]) => ({
      date,
      success: values.success,
      failed: values.failed,
    }))
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-black font-semibold">
          Call Activity Trend
        </CardTitle>

        <CardDescription className="text-gray-600">
          Successful vs Failed Calls Over Time
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-[350px] w-full">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="fillSuccess" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-success)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-success)" stopOpacity={0.1} />
              </linearGradient>

              <linearGradient id="fillFailed" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-failed)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-failed)" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} />

            <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />

            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <Area
              dataKey="failed"
              type="natural"
              fill="url(#fillFailed)"
              stroke="var(--color-failed)"
              stackId="a"
            />

            <Area
              dataKey="success"
              type="natural"
              fill="url(#fillSuccess)"
              stroke="var(--color-success)"
              stackId="a"
            />

            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}