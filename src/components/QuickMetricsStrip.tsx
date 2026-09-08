import React from 'react';
import { QUICK_METRICS } from '../data/portfolioData';

export const QuickMetricsStrip: React.FC = () => {
  return (
    <div
      id="quick-metrics-strip"
      className="border-b border-[#494552]/30 bg-[#0d0e14]/90 py-5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#494552]/30 font-mono text-center">
          {QUICK_METRICS.map((metric, idx) => (
            <div
              key={metric.label}
              id={`metric-item-${idx}`}
              className={`pt-3 sm:pt-0 sm:px-4 ${
                idx === QUICK_METRICS.length - 1 ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              <span className="text-[#cac4d4] block text-[11px] uppercase tracking-wider mb-1 font-mono">
                {metric.label}
              </span>
              <span
                className={`font-semibold text-sm sm:text-base ${
                  metric.isPrimary ? 'text-[#cebdff] font-bold text-base' : 'text-[#e3e1ea]'
                }`}
              >
                {metric.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
