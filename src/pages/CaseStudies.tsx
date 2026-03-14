import { motion } from 'motion/react';
import { ArrowRight, Clock, DollarSign, ShieldCheck, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  const cases = [
    {
      id: "data-center-ups",
      client: "Tier 3 Data Center",
      location: "Ashburn, VA",
      challenge: "Original supplier pushed 2MW UPS delivery from 24 weeks to 52 weeks, threatening a $50k/day penalty.",
      solution: "Sourced equivalent 2MW UPS from a vetted European manufacturer. Provided full Spec-Diff table and FAT documentation.",
      result: "Delivered in 18 weeks. Saved $1.5M in potential penalties.",
      tags: ["UPS", "Emergency Replacement", "Data Center"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "hospital-switchgear",
      client: "Regional Hospital Expansion",
      location: "Dallas, TX",
      challenge: "Custom LV Switchgear required for critical life-safety systems. Lead time was 60+ weeks.",
      solution: "Engineered a modular switchgear solution using available components. Full Tender Support Pack approved by EOR.",
      result: "Approved and delivered in 22 weeks. Passed all commissioning tests.",
      tags: ["LV Switchgear", "Tender Support", "Healthcare"],
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "manufacturing-mcc",
      client: "Automotive Plant",
      location: "Detroit, MI",
      challenge: "Catastrophic failure of a legacy MCC lineup halted production.",
      solution: "Identified and sourced a drop-in replacement MCC with matching footprint and intelligent controls.",
      result: "Air-freighted and installed within 14 days. Production resumed.",
      tags: ["MCC", "Emergency Replacement", "Industrial"],
      image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "commercial-panelboards",
      client: "High-Rise Office Tower",
      location: "New York, NY",
      challenge: "Jobsite shortage of 15 custom lighting panelboards holding up final inspection.",
      solution: "Consolidated order from three different regional distributors into a single Punch-List Closeout Kit.",
      result: "Delivered to site in 5 days. Passed final inspection.",
      tags: ["Panelboards", "Closeout Kit", "Commercial"],
      image: "https://images.unsplash.com/photo-1580982327559-c1202864eb05?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Case Studies</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Real-world examples of how we've helped contractors and EPCs overcome critical-path procurement challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {cases.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden flex flex-col"
            >
              <div className="aspect-video overflow-hidden relative">
                <img src={study.image} alt={study.client} className="w-full h-full object-cover opacity-60 mix-blend-luminosity transition-transform duration-700 hover:scale-105 hover:opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {study.tags.map((tag, j) => (
                    <span key={j} className="px-2 py-1 rounded bg-slate-900/80 backdrop-blur-sm border border-white/10 text-xs font-medium text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{study.client}</h3>
                    <p className="text-sm text-slate-400 font-mono">{study.location}</p>
                  </div>
                </div>
                
                <div className="space-y-6 mb-8 flex-grow">
                  <div>
                    <h4 className="text-sm font-semibold text-amber-500 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" /> The Challenge
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-2 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4" /> Our Solution
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-emerald-400 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> The Result
                    </h4>
                    <p className="text-white font-medium text-sm leading-relaxed">{study.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            to="/upload-rfq"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-lg transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]"
          >
            Solve Your Procurement Challenge
          </Link>
        </div>
      </div>
    </div>
  );
}
