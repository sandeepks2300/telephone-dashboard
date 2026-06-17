# 📊 Call Analytics Dashboard

A modern SaaS-style analytics dashboard built using React, Vite, Tailwind CSS, shadcn/ui, and Recharts.

This dashboard consumes Call Data Records (CDR) from a REST API and transforms raw call data into meaningful analytics and visualizations.

---

## 🚀 Live Demo

🔗 Deployed Application: https://your-vercel-link.vercel.app

---

## 📂 GitHub Repository

🔗 Repository: https://github.com/your-username/call-dashboard

---

## 📖 Project Overview

Telecommunication systems generate Call Data Records (CDRs) for every phone call made through their network.

This dashboard helps analyze those records by providing:

- Call activity monitoring
- Call success and failure tracking
- Cost analysis
- Duration analysis
- City-wise call distribution
- Call activity trends
- Recent call logs

The application fetches data from an external API and presents it through interactive charts and KPI cards.

---

## 🛠️ Technology Stack

### Frontend

- React
- Vite
- JavaScript (ES6+)

### Styling

- Tailwind CSS
- shadcn/ui

### Data Visualization

- Recharts

### Deployment

- Vercel

### API

MockAPI

API Endpoint:

https://69b30b45e224ec066bdb55a0.mockapi.io/api/v1/cdr

---

## ✨ Features

### KPI Summary Cards

Displays:

- Total Calls
- Successful Calls
- Failed Calls
- Total Call Cost
- Average Call Duration

---

### Call Activity Trend

Interactive area chart showing:

- Successful Calls
- Failed Calls

Grouped by date.

---

### Call Duration Analytics

Visualizes call durations and duration patterns.

---

### Call Cost Analytics

Shows:

- Call cost distribution
- Cost-related insights

---

### Call Timeline

Displays call activity over time.

---

### Calls by City

Visualizes the number of calls generated from each city.

---

### Recent Call Logs Table

Displays detailed records including:

- Caller Name
- Caller Number
- Receiver Number
- City
- Duration
- Cost
- Start Time

---

### City Filter

Allows users to filter the entire dashboard by city.

All KPIs, charts, and tables update automatically.

---

### Loading Skeletons

Professional loading placeholders displayed while API data is being fetched.

---

## 📸 Screenshots

### Dashboard Overview

Add screenshot here:

```text
/screenshots/AnalyticsDashboard.png
```

### Analytics Section

```text
/screenshots/KPI.png
```

### Call Logs Table

```text
/screenshots/CallLogs.png
```

---

## 📁 Project Structure

```text
src
│
├── components
│   └── ui
│       ├── KPIcards.jsx
│       ├── DurationChart.jsx
│       ├── CostChart.jsx
│       ├── TimelineChart.jsx
│       ├── CityChart.jsx
│       ├── CallActivityAreaChart.jsx
│       ├── RecentCallsTable.jsx
│       ├── Skeleton.jsx
│       └── KPISkeleton.jsx
│
├── services
│   └── api.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/telephone-dashboard.git
```

Navigate into the project:

```bash
cd telephone-dashboard
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

## 🏗️ Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## 🎯 Learning Outcomes

Through this project, the following concepts were practiced:

- API Integration
- Data Transformation
- Dashboard Development
- React State Management
- Data Visualization
- Tailwind CSS Styling
- shadcn/ui Components
- Responsive Design
- Deployment with Vercel

---

## 👨‍💻 Author

Developed as part of:

**London Success Academy**
Software Development Internship
Week 2 – Assignment 2

---

## 📄 License

This project is for educational purposes only.