import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function TimelineChart({ calls }) {
  if (!calls.length) return null;

  const map = {};

  calls.forEach(call => {
    const date = new Date(call.callStartTime)
      .toISOString()
      .split("T")[0];

    map[date] = (map[date] || 0) + 1;
  });

  const data = Object.entries(map).map(
    ([date, count]) => ({
      date,
      count,
    })
  );

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">
        Call Timeline
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#8884d8"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TimelineChart;