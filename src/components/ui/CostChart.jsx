import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function CostChart({ calls }) {
  if (!calls.length) return null;

  const map = {};

  calls.forEach(call => {
    map[call.city] =
      (map[call.city] || 0) +
      Number(call.callCost);
  });

  const data = Object.entries(map).map(
    ([city, cost]) => ({
      city,
      cost,
    })
  );

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">
        Cost by City
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="city" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="cost" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CostChart;