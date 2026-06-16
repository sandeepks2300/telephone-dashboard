import { PieChart, Pie, Cell } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function CityChart({ calls }) {
  const map = {};

  calls.forEach((c) => {
    map[c.city] = (map[c.city] || 0) + 1;
  });

  const data = Object.keys(map).map((city) => ({
    name: city,
    value: map[city],
  }));

  const COLORS = ["#000", "#333", "#555", "#777", "#999"];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-black font-semibold">
          Calls by City
        </CardTitle>
        <CardDescription className="text-gray-600">
          Distribution across locations
        </CardDescription>
      </CardHeader>

      <CardContent>
        <PieChart width={300} height={250}>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={80}>
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </CardContent>
    </Card>
  );
}