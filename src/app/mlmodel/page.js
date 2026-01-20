/*"use client";

import { useState } from "react";
import { ScatterChart } from "@mui/x-charts";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FiUpload } from "react-icons/fi";

import Nav from "../components/ui/Nav";

import PageTransition from "../components/transition/PageTransition";

export default function MlModelPage() {
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState("");

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    setError("");
    setSummary(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Server error");

      const data = await res.json();
      setSummary(data.summary);
    } catch (err) {
      setError("Something went wrong. Check if backend is running.");
    }

    setLoading(false);
  };

  const colors = ["#2563eb", "#16a34a", "#f97316", "#dc2626", "#7c3aed"];

  const seriesData =
    summary &&
    Object.entries(summary).map(([label, count], i) => ({
      id: label,
      label,
      color: colors[i],
      data: [{ x: i + 1, y: count }],
      markerSize: Math.max(12, Math.sqrt(count) / 30),
    }));

  const attackNames = summary ? Object.keys(summary) : [];

  const xTicks = attackNames.map((_, i) => i + 1);

  return (
      <PageTransition>
         <main>
      <Nav />
      <div className="p-10 mt-30 max-w-4xl mx-auto bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">ML Model Prediction</h1>
        </div>

        <div className="mt-6 flex flex-col items-center">
          <label
            htmlFor="csv-upload"
            className="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
          >
            <FiUpload className="h-5 w-5" />
            Upload CSV
          </label>
          <input
            id="csv-upload"
            type="file"
            accept=".csv"
            onChange={handleUpload}
            className="hidden"
          />
          <p className="text-gray-500 mt-2 text-sm">
            Only CSV files are allowed
          </p>
        </div>

        <div className="text-center mt-6">
          {loading && (
            <div className="flex justify-center">
              <DotLottieReact
                src="https://lottie.host/d2641063-2139-47ea-a90b-c62cc1fce508/0Mk3maWsSA.lottie"
                loop
                autoplay
                className="w-32 h-32"
              />
            </div>
          )}
          {error && <p className="mt-2 text-red-600 font-medium">{error}</p>}
        </div>

        {summary && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold">Prediction Summary</h2>

            <pre className="bg-gray-100 p-4 mt-3 rounded text-sm whitespace-pre-wrap">
              {Object.entries(summary)
                .map(([label, count]) => `${label}: ${count}`)
                .join("\n")}
            </pre>
          </div>
        )}

        {summary && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Prediction Chart</h2>

            <ScatterChart
              width={800}
              height={450}
              series={seriesData}
              xAxis={[
                {
                  label: "Attack Types",
                  data: xTicks,
                  valueFormatter: (x) => attackNames[x - 1],
                  min: 0.5,
                  max: xTicks.length + 0.5,
                },
              ]}
              yAxis={[
                {
                  label: "Count",
                  valueFormatter: (v) => v.toLocaleString(),
                },
              ]}
              grid={{ vertical: true, horizontal: true }}
              tooltip={{
                trigger: "item",
                formatter: (params) => {
                  return `${params.seriesId}: ${params.data.y}`;
                },
              }}
            />
          </div>
        )}
      </div>
    </main>
      </PageTransition>
  );
}

// import NotFoundPage from "../components/pagenotfound/NotFoundPage";
// export default function Page() {
//   return (
//     <>
//       <NotFoundPage/>
//     </>
//   );
// }*/
"use client";

import { useState } from "react";
import { ScatterChart } from "@mui/x-charts";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FiUpload, FiBarChart2, FiPieChart, FiDownload, FiTrendingUp } from "react-icons/fi";
import { TbChartBar, TbChartPie } from "react-icons/tb";

import Nav from "../components/ui/Nav";
import PageTransition from "../components/transition/PageTransition";

export default function MlModelPage() {
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);
    setLoading(true);
    setError("");
    setSummary(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Server error");

      const data = await res.json();
      setSummary(data.summary);
    } catch (err) {
      setError("Something went wrong. Check if backend is running.");
    }

    setLoading(false);
  };

  // Blue gradient colors
  const blueGradient = [
    "linear-gradient(135deg, #0ea5e9, #3b82f6)",
    "linear-gradient(135deg, #3b82f6, #1d4ed8)",
    "linear-gradient(135deg, #1d4ed8, #1e40af)",
    "linear-gradient(135deg, #1e40af, #1e3a8a)",
    "linear-gradient(135deg, #0ea5e9, #1d4ed8)",
    "linear-gradient(135deg, #60a5fa, #3b82f6)",
  ];

  const colors = ["#0ea5e9", "#3b82f6", "#1d4ed8", "#1e40af", "#1e3a8a", "#60a5fa"];

  const seriesData =
    summary &&
    Object.entries(summary).map(([label, count], i) => ({
      id: label,
      label,
      color: colors[i % colors.length],
      data: [{ x: i + 1, y: count }],
      markerSize: Math.max(16, Math.sqrt(count) / 20),
    }));

  const attackNames = summary ? Object.keys(summary) : [];
  const xTicks = attackNames.map((_, i) => i + 1);
  const totalAttacks = summary ? Object.values(summary).reduce((a, b) => a + b, 0) : 0;

  const downloadReport = () => {
    if (!summary) return;
    
    const content = `ML Model Prediction Report\n\n${Object.entries(summary)
      .map(([label, count]) => `${label}: ${count} (${((count / totalAttacks) * 100).toFixed(1)}%)`)
      .join("\n")}\n\nTotal Attacks: ${totalAttacks}\nGenerated: ${new Date().toLocaleDateString()}`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ml-prediction-report-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
  };

  return (
    <PageTransition>
      <main className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
        <Nav />
        
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl"></div>
          
          <div className="relative px-4 py-20 md:py-28 max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FiTrendingUp className="h-4 w-4" />
              AI-Powered Network Analysis
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-6">
              ML Model Prediction
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Upload your network data CSV file for AI-driven attack prediction and visualization
            </p>

            {/* Upload Card */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-blue-100">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mb-6">
                    <FiUpload className="h-10 w-10 text-white" />
                  </div>
                  
                  <label
                    htmlFor="csv-upload"
                    className="cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3 text-lg font-semibold"
                  >
                    <FiUpload className="h-6 w-6" />
                    Upload CSV File
                  </label>
                  <input
                    id="csv-upload"
                    type="file"
                    accept=".csv"
                    onChange={handleUpload}
                    className="hidden"
                  />
                  
                  {fileName && (
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-blue-700 font-medium">
                        Selected: <span className="font-normal">{fileName}</span>
                      </p>
                    </div>
                  )}
                  
                  <p className="text-gray-500 mt-4 text-sm">
                    Supported format: CSV files only
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <DotLottieReact
                src="https://lottie.host/d2641063-2139-47ea-a90b-c62cc1fce508/0Mk3maWsSA.lottie"
                loop
                autoplay
                className="w-48 h-48 relative z-10"
              />
            </div>
            <p className="text-lg text-blue-600 font-medium mt-6">
              Analyzing your data with AI...
            </p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="max-w-2xl mx-auto px-4">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
              <p className="text-red-700 font-medium">{error}</p>
            </div>
          </div>
        )}

        {/* Results Section */}
        {summary && (
          <div className="px-4 py-12 max-w-7xl mx-auto">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-400 text-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <TbChartBar className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-sm opacity-90">Total Predictions</p>
                    <p className="text-3xl font-bold">{totalAttacks.toLocaleString()}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <FiPieChart className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-sm opacity-90">Attack Types</p>
                    <p className="text-3xl font-bold">{attackNames.length}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-700 to-blue-500 text-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <FiDownload className="h-8 w-8" />
                    </div>
                    <div>
                      <p className="text-sm opacity-90">Export Report</p>
                      <button
                        onClick={downloadReport}
                        className="text-lg font-bold hover:opacity-90 transition-opacity"
                      >
                        Download →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Summary Panel */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-2 rounded-lg">
                    <FiBarChart2 className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Prediction Summary</h2>
                </div>
                
                <div className="space-y-4">
                  {Object.entries(summary).map(([label, count], index) => {
                    const percentage = totalAttacks > 0 ? ((count / totalAttacks) * 100).toFixed(1) : 0;
                    return (
                      <div key={label} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-3">
                            <div 
                              className="w-3 h-3 rounded-full"
                              style={{ background: blueGradient[index % blueGradient.length] }}
                            ></div>
                            <span className="font-medium text-gray-700">{label}</span>
                          </div>
                          <div className="text-right">
                            <span className="font-bold text-lg text-blue-600">{count.toLocaleString()}</span>
                            <span className="text-sm text-gray-500 ml-2">({percentage}%)</span>
                          </div>
                        </div>
                        <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-500 group-hover:opacity-90"
                            style={{ 
                              width: `${percentage}%`,
                              background: blueGradient[index % blueGradient.length]
                            }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Chart Panel */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-2 rounded-lg">
                    <TbChartPie className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Prediction Visualization</h2>
                </div>
                
                <div className="h-[450px] flex items-center justify-center">
                  <ScatterChart
                    width={600}
                    height={400}
                    series={seriesData}
                    xAxis={[
                      {
                        label: "Attack Types",
                        data: xTicks,
                        valueFormatter: (x) => attackNames[x - 1],
                        min: 0.5,
                        max: xTicks.length + 0.5,
                        tickLabelStyle: {
                          fontSize: 12,
                          fontWeight: 600,
                          fill: '#1e40af'
                        }
                      },
                    ]}
                    yAxis={[
                      {
                        label: "Count",
                        valueFormatter: (v) => v.toLocaleString(),
                        tickLabelStyle: {
                          fontSize: 12,
                          fontWeight: 600,
                          fill: '#1e40af'
                        }
                      },
                    ]}
                    grid={{ vertical: true, horizontal: true }}
                    tooltip={{
                      trigger: "item",
                      formatter: (params) => {
                        return `<strong>${params.seriesId}</strong><br/>Count: ${params.data.y.toLocaleString()}`;
                      },
                    }}
                    sx={{
                      '& .MuiChartsAxis-root': {
                        stroke: '#3b82f6',
                      },
                      '& .MuiChartsGrid-root': {
                        stroke: '#dbeafe',
                      },
                    }}
                  />
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <p className="text-sm text-blue-700">
                    <span className="font-semibold">Insight:</span> Each point represents a different attack type prediction count from your uploaded data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && !summary && !error && (
          <div className="px-4 py-16 max-w-4xl mx-auto text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-12 border border-blue-100">
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center">
                <FiUpload className="h-16 w-16 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Ready to Analyze
              </h3>
              <p className="text-gray-600 mb-8">
                Upload a CSV file containing network data to see AI-powered predictions and visualizations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-left p-4 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-700 mb-2">What to expect:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• AI-powered attack prediction</li>
                    <li>• Interactive visualizations</li>
                    <li>• Detailed statistical analysis</li>
                    <li>• Exportable reports</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </PageTransition>
  );
}
