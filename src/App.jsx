import { useEffect, useMemo, useState } from "react";
import { getCalls } from "./services/api";

import KPIcards from "./components/ui/KPIcards";
import KPISkeleton from "./components/ui/KPISkeleton";

import DurationChart from "./components/ui/DurationChart";
import CostChart from "./components/ui/CostChart";
import CityChart from "./components/ui/CityChart";
import TimelineChart from "./components/ui/TimelineChart";
import RecentCallsTable from "./components/ui/RecentCallsTable";
import CallActivityAreaChart from "./components/ui/CallActivityAreaChart";

function App() {
  const [calls, setCalls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState("All");

  useEffect(() => {
    getCalls()
      .then(setCalls)
      .finally(() => setLoading(false));
  }, []);

  const cities = useMemo(() => {
    const set = new Set(calls.map((c) => c.city));
    return ["All", ...Array.from(set)];
  }, [calls]);

  const filteredCalls = useMemo(() => {
    if (selectedCity === "All") return calls;
    return calls.filter((c) => c.city === selectedCity);
  }, [calls, selectedCity]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200">

      <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">

        {/* HEADER */}
        <div className="rounded-2xl bg-white/70 backdrop-blur border shadow-sm p-8">
          <h1 className="text-4xl font-bold text-black">
            Call Analytics Dashboard
          </h1>

          <p className="text-gray-700 mt-2">
            Telecom insights with filtering, KPIs, and performance analytics
          </p>

          {/* CITY FILTER */}
          <div className="mt-5 flex items-center gap-3">
            <label className="text-sm font-medium text-black">
              Filter by City:
            </label>

            <select
              className="border rounded-lg px-3 py-2 text-sm bg-white text-black"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* KPI TITLE */}
        <SectionTitle
          title="Key Performance Indicators"
          subtitle="Overview of call statistics"
        />

        {/* KPI CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          {loading ? (
            <>
              <KPISkeleton />
              <KPISkeleton />
              <KPISkeleton />
              <KPISkeleton />
              <KPISkeleton />
            </>
          ) : (
            <>
              <KPIcards title="Total Calls" value={filteredCalls.length} />
              <KPIcards title="Successful Calls" value={filteredCalls.filter(c => c.callStatus).length} />
              <KPIcards title="Failed Calls" value={filteredCalls.filter(c => !c.callStatus).length} />
              <KPIcards
                title="Total Cost"
                value={
                  "$" +
                  filteredCalls.reduce((s, c) => s + Number(c.callCost), 0).toFixed(2)
                }
              />
              <KPIcards
                title="Avg Duration"
                value={
                  filteredCalls.length
                    ? Math.round(
                        filteredCalls.reduce((s, c) => s + c.callDuration, 0) /
                          filteredCalls.length
                      ) + "s"
                    : "0s"
                }
              />
            </>
          )}
        </div>

        {/* CALL ACTIVITY */}
        <SectionTitle
          title="Call Activity Trend"
          subtitle="Success vs failure distribution over time"
        />

        <div className="rounded-2xl bg-white border p-6">
          {loading ? (
            <div className="h-[300px] animate-pulse bg-slate-200 rounded-xl" />
          ) : (
            <CallActivityAreaChart calls={filteredCalls} />
          )}
        </div>

        {/* CHARTS */}
        <SectionTitle
          title="Analytics Overview"
          subtitle="Performance breakdown by different metrics"
        />

        <div className="grid md:grid-cols-2 gap-6">

          <div className="rounded-2xl bg-white border p-6">
            {loading ? (
              <div className="h-[250px] animate-pulse bg-slate-200 rounded-xl" />
            ) : (
              <DurationChart calls={filteredCalls} />
            )}
          </div>

          <div className="rounded-2xl bg-white border p-6">
            {loading ? (
              <div className="h-[250px] animate-pulse bg-slate-200 rounded-xl" />
            ) : (
              <CostChart calls={filteredCalls} />
            )}
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="rounded-2xl bg-white border p-6">
            {loading ? (
              <div className="h-[250px] animate-pulse bg-slate-200 rounded-xl" />
            ) : (
              <TimelineChart calls={filteredCalls} />
            )}
          </div>

          <div className="rounded-2xl bg-white border p-6">
            {loading ? (
              <div className="h-[250px] animate-pulse bg-slate-200 rounded-xl" />
            ) : (
              <CityChart calls={filteredCalls} />
            )}
          </div>

        </div>

        {/* TABLE */}
        <SectionTitle
          title="Call Records"
          subtitle="Complete call logs from CDR API"
        />

        <div className="rounded-2xl bg-white border p-6">
          {loading ? (
            <div className="h-[300px] animate-pulse bg-slate-200 rounded-xl" />
          ) : (
            <RecentCallsTable calls={filteredCalls} />
          )}
        </div>

      </div>
    </div>
  );
}

export default App;

/* =========================
   SECTION TITLE COMPONENT
========================= */
function SectionTitle({ title, subtitle }) {
  return (
    <div className="space-y-1">
      <h2 className="text-xl font-semibold text-black">
        {title}
      </h2>
      <p className="text-sm text-gray-600">
        {subtitle}
      </p>
    </div>
  );
}