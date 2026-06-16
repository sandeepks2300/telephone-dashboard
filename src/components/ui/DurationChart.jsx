import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function DurationChart({ calls }) {
  const data = calls.map((c) => ({
    name: c.callerName,
    duration: c.callDuration,
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-black font-semibold">
          Call Duration Analytics
        </CardTitle>
        <CardDescription className="text-gray-600">
          Call duration per user
        </CardDescription>
      </CardHeader>

      <CardContent>
        <BarChart width={400} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" hide />
          <YAxis />
          <Bar dataKey="duration" fill="#000" />
        </BarChart>
      </CardContent>
    </Card>
  );
}