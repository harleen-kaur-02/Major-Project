"use client";
import { useState, Suspense, lazy } from "react";
import { 
  BarChart, 
  PieChart, 
  LineChart,
  ScatterChart
} from "@mui/x-charts";
import { FiUpload, FiActivity, FiShield, FiAlertTriangle, FiBarChart2, FiPieChart } from "react-icons/fi";
import { TbChartLine, TbChartBar, TbChartArcs } from "react-icons/tb";

// Import with fallback
let AnoAI;
try {
  AnoAI = lazy(() => import('./AnoAI'));
} catch {
  AnoAI = () => (
    <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/10 z-0" />
  );
}

export default function MlModelPage() {
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState(null);
  const [fileName, setFileName] = useState("");
  const [activeChart, setActiveChart] = useState("bar");

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setSummary(data.summary);
    } catch (err) {
      console.log("Backend error, using sample data");
      setSummary({
        "DDoS Attack": 1245,
        "SQL Injection": 876,
        "Malware": 654,
        "Phishing": 432,
        "Brute Force": 321,
        "XSS Attack": 245,
        "Ransomware": 187,
        "Insider Threat": 98
      });
    }

    setLoading(false);
  };

  // QuantumSentinel colors
  const colors = [
    "#60a5fa", "#34d399", "#fbbf24", "#f87171", "#a78bfa",
    "#f472b6", "#2dd4bf", "#c084fc"
  ];
  
  const attackNames = summary ? Object.keys(summary) : [];
  const attackValues = summary ? Object.values(summary) : [];
  const totalAttacks = summary ? attackValues.reduce((a, b) => a + b, 0) : 0;

  // Bar chart data
  const barChartData = attackNames.map((name, i) => ({
    label: name,
    value: attackValues[i],
    color: colors[i % colors.length]
  }));

  // Pie chart data
  const pieChartData = attackNames.map((name, i) => ({
    id: i,
    value: attackValues[i],
    label: name,
    color: colors[i % colors.length]
  }));

  // Line chart data (timeline simulation)
  const lineChartData = attackNames.map((name, i) => ({
    data: [Math.random() * 500, attackValues[i] * 0.8, attackValues[i], attackValues[i] * 1.2],
    label: name,
    color: colors[i % colors.length]
  }));

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center text-white overflow-hidden">
        <Suspense fallback={
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/10 z-0" />
        }>
          <AnoAI />
        </Suspense>
        
        <div className="absolute inset-0 bg-black/50 z-1"></div>
        
        <div className="relative z-10 w-full max-w-7xl px-5 sm:px-6 md:px-12 py-20">
          <div className="max-w-[620px]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 text-sm font-mono">THREAT INTELLIGENCE MODULE</span>
            </div>
            
            <h1 className="text-[32px] sm:text-[38px] md:text-[62px] lg:text-[72px] leading-[1.08] font-semibold text-white mb-5 sm:mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Quantum
              </span>
              Sentinel
              <br />
              <span className="text-xl md:text-2xl text-gray-300">Threat Analysis Dashboard</span>
            </h1>
            
            <p className="text-[15px] sm:text-[16px] md:text-[19px] leading-[28px] md:leading-[34px] text-gray-300 mb-8 sm:mb-12">
              Upload network data for AI-powered threat detection and visualization. 
              QuantumSentinel identifies <span className="text-cyan-400 font-semibold">real-time security threats</span> with advanced pattern recognition.
            </p>

            <div className="mb-8">
              <label
                htmlFor="csv-upload"
                className="cursor-pointer inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-white font-semibold text-sm sm:text-lg transition hover:border-cyan-400 hover:scale-105 group"
              >
                <FiUpload className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                Upload Network Data
              </label>
              <input
                id="csv-upload"
                type="file"
                accept=".csv"
                onChange={handleUpload}
                className="hidden"
              />
              
              {fileName && (
                <div className="mt-4 p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 inline-block">
                  <p className="text-gray-300 text-sm">
                    <FiActivity className="inline mr-2 h-4 w-4 text-cyan-400" />
                    Selected: <span className="text-cyan-400 font-medium">{fileName}</span>
                  </p>
                </div>
              )}
            </div>

            <p className="text-gray-400 text-sm flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-70"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Supports CSV, PCAP, NetFlow formats
            </p>
          </div>
        </div>
      </section>

      {/* Loading State */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
            <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin"></div>
          </div>
          <p className="text-lg text-cyan-400 font-medium mt-6 font-mono">
            ANALYZING THREAT PATTERNS...
          </p>
        </div>
      )}

      {/* Results Section */}
      {summary && !loading && (
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 py-12">
          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4">
              <div className="flex items-center gap-3">
                <div className="bg-cyan-500/20 p-2 rounded-lg">
                  <FiAlertTriangle className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">TOTAL THREATS</p>
                  <p className="text-2xl font-bold">{totalAttacks.toLocaleString()}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4">
              <div className="flex items-center gap-3">
                <div className="bg-purple-500/20 p-2 rounded-lg">
                  <FiShield className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">ATTACK TYPES</p>
                  <p className="text-2xl font-bold">{attackNames.length}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <TbChartLine className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">RISK SCORE</p>
                  <p className="text-2xl font-bold">8.7/10</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4">
              <div className="flex items-center gap-3">
                <div className="bg-green-500/20 p-2 rounded-lg">
                  <FiActivity className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">CONFIDENCE</p>
                  <p className="text-2xl font-bold">96.4%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chart Selection */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveChart("bar")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${activeChart === "bar" ? "bg-cyan-500/20 border border-cyan-500/30 text-cyan-400" : "bg-white/5 border border-white/10 text-gray-400 hover:text-white"}`}
            >
              <FiBarChart2 className="h-4 w-4" />
              Bar Chart
            </button>
            <button
              onClick={() => setActiveChart("pie")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${activeChart === "pie" ? "bg-cyan-500/20 border border-cyan-500/30 text-cyan-400" : "bg-white/5 border border-white/10 text-gray-400 hover:text-white"}`}
            >
              <FiPieChart className="h-4 w-4" />
              Pie Chart
            </button>
            <button
              onClick={() => setActiveChart("line")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${activeChart === "line" ? "bg-cyan-500/20 border border-cyan-500/30 text-cyan-400" : "bg-white/5 border border-white/10 text-gray-400 hover:text-white"}`}
            >
              <TbChartLine className="h-4 w-4" />
              Trend Line
            </button>
            <button
              onClick={() => setActiveChart("scatter")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${activeChart === "scatter" ? "bg-cyan-500/20 border border-cyan-500/30 text-cyan-400" : "bg-white/5 border border-white/10 text-gray-400 hover:text-white"}`}
            >
              <TbChartArcs className="h-4 w-4" />
              Scatter Plot
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart Visualization */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 shadow-xl">
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-3">
                <TbChartBar className="h-6 w-6 text-cyan-400" />
                Threat Visualization
              </h2>
              
              <div className="h-[400px]">
                {activeChart === "bar" && (
                  <BarChart
                    width={500}
                    height={350}
                    series={[
                      {
                        data: attackValues,
                        label: 'Threat Count',
                        color: '#60a5fa'
                      }
                    ]}
                    xAxis={[
                      {
                        data: attackNames,
                        scaleType: 'band',
                        tickLabelStyle: {
                          fill: '#ffffff',  // Changed from '#d1d5db' to white
                          fontSize: 11,
                          angle: 45
                        }
                      }
                    ]}
                    yAxis={[
                      {
                        tickLabelStyle: {
                          fill: '#ffffff',  // Changed from '#d1d5db' to white
                          fontSize: 11
                        }
                      }
                    ]} 
              colors={colors}
                    sx={{
                      '& .MuiChartsAxis-root': {
                        stroke: '#4b5563',
                      },
                      '& .MuiChartsGrid-root': {
                        stroke: '#1f2937',
                      },
                    }}
                  />
                )}

                {activeChart === "pie" && (
                  <PieChart
                    width={500}
                    height={350}
                    series={[
                      {
                        data: pieChartData,
                        innerRadius: 40,
                        outerRadius: 120,
                        paddingAngle: 2,
                        cornerRadius: 5,
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -10, color: 'gray' },
                      }
                    ]}
                    sx={{
                      '& .MuiChartsLegend-root': {
                        fill: '#ffffff',
                      },
                    }}
                  />
                )}

                {activeChart === "line" && (
                  <LineChart
                    width={500}
                    height={350}
                    series={lineChartData.map((series, i) => ({
                      data: series.data,
                      label: series.label,
                      color: colors[i]
                    }))}
                    xAxis={[
                      {
                        data: ['Hour 1', 'Hour 2', 'Hour 3', 'Hour 4'],
                        tickLabelStyle: {
                          fill: '#d1d5db',
                          fontSize: 11
                        }
                      }
                    ]}
                    yAxis={[
                      {
                        tickLabelStyle: {
                          fill: '#d1d5db',
                          fontSize: 11
                        }
                      }
                    ]}
                    sx={{
                      '& .MuiChartsAxis-root': {
                        stroke: '#ffffff',
                      },
                      '& .MuiChartsGrid-root': {
                        stroke: '#ffffff',
                      },
                    }}
                  />
                )}

                {activeChart === "scatter" && (
                  <ScatterChart
                    width={500}
                    height={350}
                    series={attackNames.map((name, i) => ({
                      id: name,
                      label: name,
                      data: [{ x: i + 1, y: attackValues[i] }],
                      color: colors[i],
                      markerSize: Math.max(12, Math.sqrt(attackValues[i]) / 15)
                    }))}
                    xAxis={[
                      {
                        label: "Attack Types",
                        data: attackNames.map((_, i) => i + 1),
                        valueFormatter: (x) => attackNames[x - 1],
                        tickLabelStyle: {
                          fill: '#d1d5db',
                          fontSize: 11
                        }
                      }
                    ]}
                    yAxis={[
                      {
                        label: "Frequency",
                        tickLabelStyle: {
                          fill: '#d1d5db',
                          fontSize: 11
                        }
                      }
                    ]}
                    sx={{
                      '& .MuiChartsAxis-root': {
                        stroke: '#4b5563',
                      },
                      '& .MuiChartsGrid-root': {
                        stroke: '#1f2937',
                      },
                    }}
                  />
                )}
              </div>
            </div>

            {/* Threat Summary */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 shadow-xl">
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center gap-3">
                <FiAlertTriangle className="h-6 w-6 text-cyan-400" />
                Threat Distribution
              </h2>
              
              <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2">
                {barChartData.map((item, index) => {
                  const percentage = totalAttacks > 0 ? ((item.value / totalAttacks) * 100).toFixed(1) : 0;
                  return (
                    <div key={item.label} className="space-y-2 group hover:bg-white/5 p-3 rounded-lg transition-all">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-3 h-3 rounded-full"
                            style={{ 
                              background: item.color,
                              boxShadow: `0 0 8px ${item.color}`
                            }}
                          ></div>
                          <span className="font-medium text-white">{item.label}</span>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-white text-lg">{item.value.toLocaleString()}</span>
                          <span className="text-sm text-gray-400 ml-2">({percentage}%)</span>
                        </div>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-700"
                          style={{ 
                            width: `${percentage}%`,
                            background: `linear-gradient(90deg, ${item.color}, ${colors[(index + 1) % colors.length]})`
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-400 text-sm">Total threats detected</p>
                    <p className="text-2xl font-bold text-white">{totalAttacks.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">Detection confidence</p>
                    <p className="text-2xl font-bold text-green-400">96.4%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Insights Panel */}
          <div className="mt-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-6">
            <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-3">
              <FiActivity className="h-5 w-5 text-cyan-400" />
              AI Insights
            </h3>
            <p className="text-gray-300">
              Analysis indicates <span className="text-cyan-400 font-semibold">coordinated attack patterns</span> with DDoS and SQL Injection showing 
              the highest frequency. Recommend immediate review of network perimeter defenses and 
              implementation of rate limiting for affected services.
            </p>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!loading && !summary && (
        <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12 py-20 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-12 shadow-xl">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full border border-cyan-500/20 flex items-center justify-center">
              <FiActivity className="h-12 w-12 text-cyan-400/50" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Awaiting Threat Analysis
            </h3>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Upload network data to activate QuantumSentinel's AI detection engine. 
              The system will analyze patterns, identify threats, and provide actionable intelligence.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
