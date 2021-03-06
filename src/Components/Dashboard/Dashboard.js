import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  AreaChart,
  Area,
} from "recharts";
import "./Dashboard.css";

const Dashboard = () => {
  const data = [
    {
      month: "Jan",
      investment: 110000,
      sell: 341,
      revenue: 114001,
    },
    {
      month: "Feb",
      investment: 101100,
      sell: 251,
      revenue: 124001,
    },
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 100401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 245000,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 670010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 400405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 509000,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 610000,
    },
  ];

  return (
    <div className="container graph">
      <div className="row">
        <div className="col-6">
          <h2>Month Wise Sell</h2>
          <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="month" />
            <YAxis />
          </LineChart>
        </div>
        <div className="col-6">
          <h2>Investment VS Revenue</h2>
          <AreaChart
            width={650}
            height={300}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Area
              type="monotone"
              dataKey="investment"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
