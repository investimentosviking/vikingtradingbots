import { useState } from 'react';


const LivePerformance = () => {
  const [activeTab, setActiveTab] = useState<'btcusd' | 'dax'>('btcusd');

  return (
    <section id="live-performance" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-primary/10 text-primary font-montserrat text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
            Live Performance
          </span>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground tracking-[-0.02em] mb-4">
            Verified Live Track Record
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-sm">
            Audited public results via MyFxBook — unfiltered, unedited.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveTab('btcusd')}
            className={`font-montserrat font-bold text-sm px-6 py-3 rounded-xl transition-all ${
              activeTab === 'btcusd'
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                : 'bg-card border border-foreground/10 text-muted hover:border-primary/30'
            }`}
          >
            BTC/USD
          </button>
          <div className="flex flex-col items-center">
            <button
              disabled
              className="font-montserrat font-bold text-sm px-6 py-3 rounded-xl bg-card border border-foreground/10 text-muted/50 cursor-not-allowed opacity-50"
            >
              DAX
            </button>
            <span className="text-[10px] font-montserrat text-muted/60 mt-1 uppercase tracking-wider">
              Coming Soon
            </span>
          </div>
        </div>

        {/* Widget */}
        {activeTab === 'btcusd' && (
          <div className="rounded-xl overflow-hidden border border-foreground/10 bg-card">
            <iframe
              src="https://widgets.myfxbook.com/widgets/system-history-chart.html?id=11996360"
              width="100%"
              height="500"
              frameBorder="0"
              className="border-0 w-full"
              title="Viking Alpha BTC/USD - MyFxBook"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default LivePerformance;
