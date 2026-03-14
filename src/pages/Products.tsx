import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, Clock, FileCheck, Truck, ArrowRight, Zap, 
  CheckCircle2, AlertTriangle, Search, Settings, 
  Battery, Server, Cpu, Box, XCircle, Check,
  FileText, UploadCloud, ChevronRight, AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  "Panelboards & Switchboards",
  "LV Switchgear",
  "MCC",
  "ATS",
  "Breakers & Accessories",
  "UPS Systems",
  "Power Transformers",
  "Dry-Type Transformers",
  "Meter Sockets & Banks"
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="pt-24 pb-32 flex flex-col md:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-8">
      {/* Sidebar */}
      <div className="w-64 shrink-0 hidden md:block">
        <div className="sticky top-32 space-y-1">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-3">Categories</h3>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors flex items-center justify-between ${
                activeCategory === cat 
                  ? 'bg-amber-500/10 text-amber-500 font-medium' 
                  : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
              }`}
            >
              {cat}
              {activeCategory === cat && <ChevronRight className="w-4 h-4" />}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Category Select */}
      <div className="md:hidden w-full mb-8">
        <select 
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)}
          className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Content Area */}
      <div className="flex-1 min-w-0">
        {activeCategory === "Panelboards & Switchboards" ? (
          <PanelboardsContent />
        ) : (
          <div className="glass-card p-12 text-center rounded-2xl border border-white/5">
            <Box className="w-12 h-12 text-slate-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">{activeCategory}</h2>
            <p className="text-slate-400">Detailed category information is being updated. Please contact us for immediate RFQ support.</p>
            <Link to="/upload-rfq" className="inline-block mt-6 px-6 py-3 rounded-lg bg-amber-500 text-slate-950 font-bold hover:bg-amber-600 transition-colors">
              Request a Quote
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

function PanelboardsContent() {
  return (
    <div className="space-y-16">
      {/* 1) Hero */}
      <section className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900/50 p-8 md:p-12">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580982327559-c1202864eb05?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
        
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Panelboards & Switchboards — <br/>
            <span className="text-amber-500">Bid-Ready, Install-Ready</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Nationwide China sourcing + engineer-validated equivalents + QC pack before ship + transparent landed cost.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <Link to="/upload-rfq" className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)]">
              Build a Quote
            </Link>
            <Link to="/upload-rfq" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all border border-white/10">
              Upload Panel Schedule
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { icon: <Clock className="w-3 h-3"/>, text: "24h quote" },
              { icon: <FileCheck className="w-3 h-3"/>, text: "Spec-diff tables" },
              { icon: <ShieldCheck className="w-3 h-3"/>, text: "QC pack + approve-to-ship" },
              { icon: <FileText className="w-3 h-3"/>, text: "Landed cost breakdown" },
              { icon: <Truck className="w-3 h-3"/>, text: "Door-to-door options" },
              { icon: <Zap className="w-3 h-3"/>, text: "48h issue response SLA" }
            ].map((badge, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-white/5 text-xs text-slate-300 font-medium">
                <span className="text-amber-500">{badge.icon}</span> {badge.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2) Product Scope */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Product Scope & Capabilities</h2>
        <div className="glass-card rounded-2xl border border-white/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-400 uppercase bg-white/5 border-b border-white/5">
                <tr>
                  <th className="px-6 py-4 font-medium">Specification</th>
                  <th className="px-6 py-4 font-medium">Panelboards</th>
                  <th className="px-6 py-4 font-medium">Switchboards</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Typical Current</td>
                  <td className="px-6 py-4">100A – 1200A</td>
                  <td className="px-6 py-4">1200A – 5000A+</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Voltage Classes</td>
                  <td className="px-6 py-4">120/240V, 208Y/120V, 480Y/277V</td>
                  <td className="px-6 py-4">Up to 600V AC</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Enclosure Types</td>
                  <td className="px-6 py-4">NEMA 1 (Indoor), NEMA 3R (Outdoor)</td>
                  <td className="px-6 py-4">NEMA 1, NEMA 3R, NEMA 4X (Custom)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Bus Materials</td>
                  <td className="px-6 py-4">Copper (Cu) / Aluminum (Al)</td>
                  <td className="px-6 py-4">Copper (Cu) / Aluminum (Al)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Main Device</td>
                  <td className="px-6 py-4">MLO, MCB, MCCB</td>
                  <td className="px-6 py-4">MCCB, Insulated Case, ACB</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Section Types</td>
                  <td className="px-6 py-4">Lighting, Distribution</td>
                  <td className="px-6 py-4">Main, Pull Section, Distribution</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3) Representative Configurations */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-2">Representative Configurations</h2>
        <p className="text-slate-400 mb-6 text-sm">Illustrative only. Final quote depends on RFQ and delivery ZIP.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "1200A Outdoor Switchboard Lineup",
              specs: "1200A, 480Y/277V, 3Ph 4W, 65kAIC, NEMA 3R, 3 Sections, MCCB Main",
              useCase: "Industrial facility / Warehouse",
              leadTime: "6-8 weeks (Confirmed per RFQ)",
              factory: "$12,000 - $15,000",
              freight: "$2,500 - $4,000 (Sea)",
              customs: "$800 - $1,200",
              fee: "15% - 20%",
              total: "$17,500 - $23,000"
            },
            {
              name: "400A Lighting Panelboard",
              specs: "400A, 208Y/120V, 3Ph 4W, 22kAIC, NEMA 1, 42 Circuits, MLO",
              useCase: "Commercial building / Retail",
              leadTime: "3-5 weeks (Confirmed per RFQ)",
              factory: "$1,200 - $1,800",
              freight: "$800 - $1,500 (Air/Sea)",
              customs: "$200 - $400",
              fee: "15% - 20%",
              total: "$2,500 - $4,000"
            },
            {
              name: "3000A Main Tie Main Switchboard",
              specs: "3000A, 480V, 3Ph 3W, 100kAIC, NEMA 1, 5 Sections, ACB Mains",
              useCase: "Data hall / Critical infrastructure",
              leadTime: "10-14 weeks (Confirmed per RFQ)",
              factory: "$45,000 - $60,000",
              freight: "$5,000 - $8,000 (Sea)",
              customs: "$2,500 - $4,000",
              fee: "12% - 18%",
              total: "$58,000 - $82,000"
            },
            {
              name: "800A Distribution Panel",
              specs: "800A, 480Y/277V, 3Ph 4W, 65kAIC, NEMA 1, MCCB Main",
              useCase: "Hospital / Institutional",
              leadTime: "4-6 weeks (Confirmed per RFQ)",
              factory: "$3,500 - $5,000",
              freight: "$1,200 - $2,000 (Sea)",
              customs: "$400 - $600",
              fee: "15% - 20%",
              total: "$5,800 - $9,000"
            }
          ].map((config, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col">
              <h3 className="text-lg font-bold text-white mb-3">{config.name}</h3>
              <div className="space-y-2 mb-6 flex-grow">
                <p className="text-sm text-slate-300"><span className="text-slate-500">Specs:</span> {config.specs}</p>
                <p className="text-sm text-slate-300"><span className="text-slate-500">Use Case:</span> {config.useCase}</p>
                <p className="text-sm text-amber-400"><span className="text-slate-500">Lead Time:</span> {config.leadTime}</p>
              </div>
              <div className="bg-slate-950/50 rounded-xl p-4 border border-white/5 space-y-2 text-xs font-mono">
                <div className="flex justify-between text-slate-400"><span>Factory Price (China)</span> <span>{config.factory}</span></div>
                <div className="flex justify-between text-slate-400"><span>Freight</span> <span>{config.freight}</span></div>
                <div className="flex justify-between text-slate-400"><span>Customs/Brokerage</span> <span>{config.customs}</span></div>
                <div className="flex justify-between text-slate-400"><span>VoltSource Fee</span> <span>{config.fee}</span></div>
                <div className="pt-2 mt-2 border-t border-white/10 flex justify-between text-emerald-400 font-bold text-sm">
                  <span>Est. Landed Cost</span> <span>{config.total}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4) Sample Landed Cost Breakdown */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Sample Landed Cost Breakdown</h2>
        <div className="glass-card rounded-2xl border border-white/5 p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left font-mono">
                  <thead className="text-xs text-slate-500 uppercase border-b border-white/10">
                    <tr>
                      <th className="py-3 font-medium">Line Item</th>
                      <th className="py-3 font-medium text-right">Amount (USD)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-300">
                    <tr><td className="py-3">Factory Price (FOB)</td><td className="py-3 text-right">$14,500.00</td></tr>
                    <tr><td className="py-3">Inland CN Logistics</td><td className="py-3 text-right">$350.00</td></tr>
                    <tr><td className="py-3">Export Docs & Handling</td><td className="py-3 text-right">$150.00</td></tr>
                    <tr><td className="py-3">Ocean Freight (LCL)</td><td className="py-3 text-right">$1,850.00</td></tr>
                    <tr><td className="py-3">Insurance (Optional)</td><td className="py-3 text-right">$120.00</td></tr>
                    <tr><td className="py-3">Customs Brokerage</td><td className="py-3 text-right">$250.00</td></tr>
                    <tr><td className="py-3">Duties/Taxes (Est. 2.5%)</td><td className="py-3 text-right">$362.50</td></tr>
                    <tr><td className="py-3">Local Delivery (Final Mile)</td><td className="py-3 text-right">$850.00</td></tr>
                    <tr><td className="py-3 text-amber-400">VoltSource Service Fee (15%)</td><td className="py-3 text-right text-amber-400">$2,175.00</td></tr>
                    <tr className="text-base font-bold text-white"><td className="py-4">Total Estimated Landed Cost</td><td className="py-4 text-right">$20,607.50</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border border-white/5 h-fit">
              <h4 className="font-bold text-white mb-3 flex items-center gap-2"><AlertCircle className="w-4 h-4 text-amber-500"/> What can vary?</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>• <strong>Freight:</strong> Sea vs Air drastically changes cost and timeline.</li>
                <li>• <strong>Duties:</strong> Depends on final HTS classification of the specific gear.</li>
                <li>• <strong>Local Delivery:</strong> Varies by jobsite ZIP and liftgate requirements.</li>
              </ul>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-emerald-400 font-medium">We confirm firm factory pricing and estimated logistics within 24 hours of a complete RFQ.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 & 6) Blockers & Deliverables */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card p-8 rounded-2xl border border-white/5">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><XCircle className="w-6 h-6 text-red-400"/> Common Blockers We Solve</h3>
          <ul className="space-y-4">
            {[
              "OEM backorders blowing the project schedule",
              "Submittal rejection risk due to poor documentation",
              "Enclosure dimension mismatches for existing pads",
              "AIC/SCCR rating confusion on alternates",
              "Accessory omissions (lugs, ground bars, meters)",
              "Commissioning delays due to missing test reports"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400/50 shrink-0"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="glass-card p-8 rounded-2xl border border-white/5">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><CheckCircle2 className="w-6 h-6 text-emerald-400"/> What We Deliver</h3>
          <ul className="space-y-4">
            {[
              "Spec-diff table for easy engineer review",
              "Tender/submittal pack (compliance matrix, datasheets, drawings, test index, lead-time statement, QC plan)",
              "QC pack + approve-to-ship checkpoint",
              "Tracking + landed cost transparency",
              "48h issue response SLA"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400/50 shrink-0"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7) Tender Support Pack Teaser */}
      <section className="relative rounded-2xl overflow-hidden border border-emerald-500/20 bg-emerald-950/20 p-8">
        <div className="absolute top-0 right-0 p-8 opacity-10"><FileText className="w-32 h-32 text-emerald-500" /></div>
        <div className="relative z-10 max-w-2xl">
          <h3 className="text-2xl font-bold text-white mb-3">Tender Support Pack</h3>
          <p className="text-emerald-400 font-medium mb-4">Supplier submittals for bidders (Not bid writing)</p>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Get the engineering proof you need to substitute long-lead items without risking rejection. We provide a review-ready submittal bundle including compliance matrices, spec-diff tables, and drawings.
          </p>
          <Link to="/tender-support" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold transition-colors">
            View Deliverables <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 8) QC Pack Checklist */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">QC Pack Checklist (Panelboards & Switchboards)</h2>
        <div className="glass-card p-8 rounded-2xl border border-white/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Nameplate verification",
              "Breaker/accessory presence",
              "Bus material confirmation",
              "Section labeling",
              "Enclosure markings (NEMA)",
              "Dimensional spot-check",
              "Packaging/shock protection",
              "Optional functional checks"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-indigo-400" />
                </div>
                <span className="text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10) Mini Case Study */}
      <section className="glass-card rounded-2xl border border-white/5 overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 h-48 md:h-auto relative">
          <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop" alt="Switchgear Case Study" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent md:bg-gradient-to-t md:from-slate-950 md:to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <span className="px-2 py-1 rounded bg-amber-500/20 text-amber-500 text-xs font-bold border border-amber-500/20 uppercase tracking-wider">Case Study</span>
          </div>
        </div>
        <div className="p-8 md:w-2/3 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-white mb-4">Hospital Expansion: 4000A Switchboard Rescue</h3>
          <div className="space-y-3 mb-6">
            <p className="text-sm text-slate-300"><strong className="text-slate-400">Blocker:</strong> OEM quoted 52 weeks for main switchboard, halting mobilization.</p>
            <p className="text-sm text-slate-300"><strong className="text-slate-400">Timeline:</strong> Sourced, approved, and delivered in 14 weeks.</p>
            <p className="text-sm text-emerald-400"><strong className="text-slate-400">Outcome:</strong> Contractor met schedule, saved $45k vs expedited domestic options.</p>
          </div>
          <p className="text-xs text-slate-500 italic">Proof artifacts: Spec-diff table approved by EOR on first submittal.</p>
        </div>
      </section>

      {/* 9 & 11) RFQ Fields & Quote Form */}
      <section className="py-12 border-t border-white/10 mt-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Request a Quote</h2>
            <p className="text-slate-400 text-sm">
              <strong>Required:</strong> Voltage/phase, main rating, AIC/SCCR, enclosure type, section count, main type, needed-by date, shipping ZIP.<br/>
              <span className="text-amber-500">Unknown specs? Upload photos of existing nameplates — we extract and confirm.</span>
            </p>
          </div>

          <form className="glass-card p-8 rounded-2xl border border-white/5 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white border-b border-white/10 pb-2">Step 1: Core Requirements</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="email" placeholder="Email Address *" className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-amber-500 outline-none" required />
                <input type="tel" placeholder="Phone Number *" className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-amber-500 outline-none" required />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="date" className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-slate-400 focus:border-amber-500 outline-none" required title="Needed-by Date" />
                <input type="text" placeholder="Shipping ZIP / Country *" className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-amber-500 outline-none" required />
              </div>

              <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-amber-500/50 transition-colors cursor-pointer bg-slate-900/30">
                <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                <p className="text-sm text-slate-300 font-medium mb-1">Upload BOM / Panel Schedule / Drawings / Photos</p>
                <p className="text-xs text-slate-500">PDF, Excel, JPG up to 50MB</p>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-bold text-white border-b border-white/10 pb-2">Step 2: Additional Details (Optional)</h3>
              <textarea rows={3} placeholder="Brand constraints, specific breaker types, or other notes..." className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-amber-500 outline-none"></textarea>
            </div>

            <button type="button" className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-lg transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              Submit RFQ
            </button>
          </form>
        </div>
      </section>

      {/* 12) Compliance Footer */}
      <div className="mt-12 pt-8 border-t border-white/5 text-center space-y-2">
        <p className="text-xs text-slate-500">Availability confirmed per RFQ; not all items in stock.</p>
        <p className="text-xs text-slate-500">We do not claim UL listing unless provided per order.</p>
        <p className="text-xs text-slate-500">Door-to-door shipping options; DDP available on request.</p>
        <p className="text-xs text-slate-500">48h issue response SLA = response, not guaranteed resolution.</p>
      </div>
    </div>
  );
}
