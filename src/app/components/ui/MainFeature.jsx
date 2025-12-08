"use client";

import React from "react";
import Link from "next/link";

export default function MainFeature() {
  return (
    <section className="w-full bg-white text-black py-24 px-6 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-[0.9]">
            Main <br /> Features
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-700 leading-relaxed">
            A generative-AI-powered intrusion detection system that combines
            anomaly detection, explainable transformer embeddings, and real-time
            monitoring to detect network and host-level attacks with low
            false-positive rates.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Stat label="Detection Accuracy" value="97.4%" />
            <Stat label="False Positive Rate" value="1.8%" />
            <Stat label="Avg Latency" value="85 ms" />
          </div>

          <p className="mt-6 max-w-2xl text-gray-700 text-base leading-relaxed">
            This system uses a hybrid architecture: a lightweight sequence
            encoder (for flow / syscall sequences) feeds a generative model that
            both reconstructs normal behaviour and highlights anomalous
            patterns. Outputs are ranked, explained, and can trigger automated
            response playbooks.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/mlmodel"
              className="
                        inline-flex items-center gap-2
                        px-6 py-3 rounded-full
                        border-2 border-black
                        bg-[#6cd2c2] text-black font-medium
                        shadow-[6px_8px_0px_#000]
                        transition-all duration-200
                        hover:translate-y-1 hover:translate-x-1 hover:shadow-[3px_4px_0px_#000]
                        active:translate-y-2 active:translate-x-2 active:shadow-[0px_0px_0px_#000]
                        "
              >
              <span>Live Demo</span>
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="border border-[#a1a1a1] border-dashed rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-black/5">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2v6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="sm:col-span-2 border border-[#a1a1a1] border-dashed rounded-xl p-6">
            <h3 className="text-lg font-bold mb-2">Architecture Snapshot</h3>
            <p className="text-gray-700 text-sm mb-4">
              Lightweight feature extractor → embedding transformer → anomaly
              scorer (reconstruction + density) → explanation module (SHAP-like
              attribution) → alert & playbook. Trained on mixed
              labeled/unlabeled flows.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <MiniStat title="Parameters" value="12M" />
              <MiniStat title="Dataset" value="UNSW/Custom Flows" />
              <MiniStat title="Deployment" value="Edge & Cloud" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="flex flex-col">
      <span className="text-xl font-bold">{value}</span>
      <span className="text-sm text-gray-600">{label}</span>
    </div>
  );
}

function MiniStat({ title, value }) {
  return (
    <div className="bg-black/5 rounded-md p-3 text-center">
      <div className="text-sm font-semibold">{value}</div>
      <div className="text-xs text-gray-600 mt-1">{title}</div>
    </div>
  );
}

const features = [
  {
    title: "Anomaly Detection",
    desc: "Detect novel and stealthy attacks using reconstruction + density scoring; works for network flows and host telemetry.",
  },
  {
    title: "Explainable Alerts",
    desc: "Each alert includes feature attributions and suggested root causes so analysts can triage quickly.",
  },
  {
    title: "Real-time Streaming",
    desc: "Processes ingress flows with low latency and supports backpressure for high-throughput environments.",
  },
  {
    title: "Transfer Learning",
    desc: "Fine-tune models on small labelled samples to adapt to new networks or devices.",
  },
  //   {
  //     title: "Automated Playbooks",
  //     desc: "Integrates with orchestration to isolate hosts, block IPs, or escalate incidents automatically.",
  //   },
  //   {
  //     title: "Edge-friendly",
  //     desc: "Small-footprint models and pruning techniques make on-device inference possible for gateways and sensors.",
  //   },
];
