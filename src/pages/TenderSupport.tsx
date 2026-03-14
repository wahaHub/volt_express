import { motion } from 'motion/react';
import { 
  FileText, CheckCircle2, AlertCircle, FileCheck, Anchor, Shield, 
  Download, ArrowRight, Clock, Users, HardHat, Building2, 
  CheckSquare, FileSpreadsheet, List, Search, AlertTriangle, Zap,
  UploadCloud
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TenderSupport() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900/90"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8"
          >
            <FileCheck className="w-4 h-4" />
            <span>Bid-Ready Documentation</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1] max-w-4xl mx-auto"
          >
            Submittals engineers can approve — <br className="hidden md:block"/>
            <span className="text-slate-400">even when substituting long-lead gear.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            The Tender Support Pack turns a proposed alternative into a bid-ready, review-ready submittal: spec alignment, exceptions, tests, lead time, and QC plan—organized in the format your EOR expects.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/upload-rfq"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-lg transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] flex items-center justify-center gap-2"
            >
              Request Tender Support <ArrowRight className="w-5 h-5" />
            </Link>
            <button
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" /> Download Sample Pack <span className="text-xs text-slate-400 font-normal ml-1">(Redacted)</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Who this is for */}
      <section className="py-16 bg-slate-900/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400"><HardHat className="w-6 h-6" /></div>
              <span className="text-sm font-medium text-slate-300">Electrical contractors bidding design-build / plan-spec jobs</span>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
              <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400"><Building2 className="w-6 h-6" /></div>
              <span className="text-sm font-medium text-slate-300">EPCs & system integrators responding to tender packages</span>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
              <div className="p-3 bg-amber-500/10 rounded-lg text-amber-400"><Search className="w-6 h-6" /></div>
              <span className="text-sm font-medium text-slate-300">Procurement teams needing alternates to meet schedule</span>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400"><Users className="w-6 h-6" /></div>
              <span className="text-sm font-medium text-slate-300">Project managers closing submittals before mobilization</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. When you need this pack */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">When you need this pack</h2>
            <p className="text-slate-400">Overcoming the most common hurdles in alternative approvals.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { pain: "OEM lead times blow the schedule", result: "Provide alternates that can be approved fast.", icon: <Clock className="w-6 h-6 text-red-400" /> },
              { pain: "Engineer rejects vague substitutes", result: "Spec-diff table + compliance matrix + exception notes.", icon: <AlertTriangle className="w-6 h-6 text-amber-400" /> },
              { pain: "Submittals get stuck in review cycles", result: "Provide a review-ready, standardized submittal bundle.", icon: <FileText className="w-6 h-6 text-blue-400" /> },
              { pain: "No one owns technical Q&A", result: "48h technical response SLA + escalation path.", icon: <Zap className="w-6 h-6 text-emerald-400" /> }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-xl flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg shrink-0">{item.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{item.pain}</h4>
                  <p className="text-slate-400 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-emerald-500 shrink-0" /> {item.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pack Deliverables */}
      <section className="py-24 bg-slate-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Pack Deliverables</h2>
            <p className="text-slate-400">Everything required to get your alternative approved.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Core Deliverables */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-emerald-500" /> Core Deliverables <span className="text-sm font-normal text-slate-400">(Included by default)</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="glass-card p-6 rounded-xl">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2"><CheckSquare className="w-5 h-5 text-blue-400" /> Compliance Matrix</h4>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li>• Line-by-line spec evaluation</li>
                    <li>• Comply / Clarification / Deviation</li>
                    <li>• Notes for EOR review</li>
                  </ul>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2"><FileSpreadsheet className="w-5 h-5 text-amber-400" /> Spec-Diff Table</h4>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li>• Original vs Proposed alternative</li>
                    <li>• Highlighted differences (dims, ratings, AIC)</li>
                    <li>• Engineer validation status</li>
                  </ul>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2"><FileText className="w-5 h-5 text-emerald-400" /> Datasheets & Drawings</h4>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li>• PDF Datasheets</li>
                    <li>• Dimensional drawings / mounting</li>
                    <li>• Nameplate/label format</li>
                  </ul>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2"><List className="w-5 h-5 text-purple-400" /> Test-Pack Index</h4>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li>• Available routine tests</li>
                    <li>• FAT options (on request)</li>
                    <li>• Existing reports / certificates</li>
                  </ul>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2"><Clock className="w-5 h-5 text-rose-400" /> Lead-Time Statement</h4>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li>• Mfg lead time range + assumptions</li>
                    <li>• Dispatch options</li>
                    <li>• Delivery plan outline</li>
                  </ul>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2"><Shield className="w-5 h-5 text-indigo-400" /> QC Plan & SLA</h4>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li>• Pre-shipment inspection checkpoints</li>
                    <li>• 48h response for technical questions</li>
                    <li>• Defined resolution path</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Add-Ons */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <Zap className="w-6 h-6 text-amber-500" /> Add-Ons <span className="text-sm font-normal text-slate-400">(Optional)</span>
              </h3>
              
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-bold text-white mb-1">Alternates Justification Letter</h4>
                  <p className="text-xs text-slate-400">A 1-page executive summary for the EOR explaining equivalency and why differences don't impact function.</p>
                </div>
                <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-bold text-white mb-1">Submittal Formatting</h4>
                  <p className="text-xs text-slate-400">We format and bind the pack exactly to the owner's required template, naming, and indexing rules.</p>
                </div>
                <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-bold text-white mb-1">FAT Coordination</h4>
                  <p className="text-xs text-slate-400">Video witness testing with checklist, or on-site witness coordination.</p>
                </div>
                <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-bold text-white mb-1">Local Service Partner Notes</h4>
                  <p className="text-xs text-slate-400">Clear documentation on what requires local partners (e.g., bid bonds, local commissioning).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Proof Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">See the Proof</h2>
            <p className="text-slate-400">What a review-ready submittal actually looks like.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Spec-Diff */}
            <div className="glass-card p-6 rounded-xl flex flex-col">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-4">1. Spec-Diff Table</h3>
              <div className="flex-grow bg-slate-950/50 rounded-lg p-4 border border-white/5 font-mono text-xs space-y-3">
                <div className="flex justify-between text-slate-500 border-b border-white/5 pb-2">
                  <span>Spec</span><span>Proposed</span><span>Status</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>1200A Cu Bus</span><span>1200A Cu Bus</span><span className="text-emerald-400">Match</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>NEMA 1</span><span>NEMA 3R</span><span className="text-blue-400">Exceeds</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>65kAIC</span><span>65kAIC</span><span className="text-emerald-400">Match</span>
                </div>
              </div>
            </div>

            {/* Compliance Matrix */}
            <div className="glass-card p-6 rounded-xl flex flex-col">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-4">2. Compliance Matrix</h3>
              <div className="flex-grow bg-slate-950/50 rounded-lg p-4 border border-white/5 font-mono text-xs space-y-3">
                <div className="flex justify-between text-slate-500 border-b border-white/5 pb-2">
                  <span>Section</span><span>Status</span><span>Notes</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>2.01.A</span><span className="text-emerald-400">Comply</span><span className="text-slate-500">Standard</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>2.02.B</span><span className="text-amber-400">Deviate</span><span className="text-slate-500">See Note 1</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>2.03.C</span><span className="text-emerald-400">Comply</span><span className="text-slate-500">Included</span>
                </div>
              </div>
            </div>

            {/* Submittal TOC */}
            <div className="glass-card p-6 rounded-xl flex flex-col">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-4">3. Submittal Pack TOC</h3>
              <div className="flex-grow bg-slate-950/50 rounded-lg p-4 border border-white/5 font-mono text-xs space-y-2 text-slate-300">
                <p>1.0 Executive Summary</p>
                <p>2.0 Compliance Matrix</p>
                <p>3.0 Spec-Diff Table</p>
                <p className="pl-4 text-slate-500">3.1 Mechanical</p>
                <p className="pl-4 text-slate-500">3.2 Electrical</p>
                <p>4.0 Datasheets</p>
                <p>5.0 Dimensional Drawings</p>
                <p>6.0 Test & QC Index</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 & 7. Turnaround, Inputs, Boundaries */}
      <section className="py-24 bg-slate-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Turnaround & Inputs */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Turnaround & Inputs</h3>
              
              <div className="mb-8 p-5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <h4 className="font-bold text-amber-500 mb-2 flex items-center gap-2"><Clock className="w-5 h-5" /> Typical Turnaround</h4>
                <p className="text-slate-300 text-sm mb-2"><strong>48–72 hours</strong> for standard packs after receiving complete specs.</p>
                <p className="text-slate-400 text-xs">Complex switchgear / transformer cases: timeline confirmed after intake.</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider text-slate-400">Required from you</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> Tender spec or key requirement list (PDF)</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> Target model(s) / schedule of equipment (if available)</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> Needed-by date + project location</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider text-slate-400">Helpful (Optional)</h4>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li>• "Must-match brand" constraints</li>
                    <li>• Any EOR preferences on alternates</li>
                    <li>• Submittal format requirements (naming/indexing)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Coverage & Boundaries */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Coverage & Boundaries</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-white mb-4 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> We support</h4>
                  <ul className="space-y-3 text-sm text-slate-300">
                    <li>Panelboards / Switchboards</li>
                    <li>LV switchgear (MV case-by-case)</li>
                    <li>MCC / ATS</li>
                    <li>Critical breakers & accessories</li>
                    <li>Dry-type transformers / UPS</li>
                    <li>Metering packages (where specs provided)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-4 flex items-center gap-2"><AlertCircle className="w-5 h-5 text-red-400" /> We don't claim</h4>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li>UL listing <span className="italic text-slate-500">(unless provided per order)</span></li>
                    <li>Engineering stamp / PE sign-off <span className="italic text-slate-500">(unless you have it)</span></li>
                    <li>Guaranteed approval by EOR <span className="italic text-slate-500">(we provide "review-ready" proof)</span></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8 & 9. Pricing & CTA Form */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-500/5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Pricing & Request</h2>
            <p className="text-slate-400">Priced per RFQ complexity. Basic / Standard / Full options available based on deliverables. Trial pack available.</p>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Equipment Category</label>
                  <select className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors">
                    <option>Panelboards & Switchboards</option>
                    <option>LV Switchgear</option>
                    <option>MCC / ATS</option>
                    <option>Transformers / UPS</option>
                    <option>Breakers & Components</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Needed-by Date</label>
                  <input type="date" className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Email / Phone</label>
                  <input type="text" placeholder="Contact info" className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Shipping ZIP / Project Country</label>
                  <input type="text" placeholder="Location" className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Notes (Must-match brand / special constraints)</label>
                <textarea rows={3} className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-600" placeholder="Any specific requirements..."></textarea>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Upload Tender Spec (PDF)</label>
                <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-amber-500/50 transition-colors cursor-pointer bg-slate-900/30">
                  <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                  <p className="text-sm text-slate-300 font-medium mb-1">Click to upload or drag and drop</p>
                  <p className="text-xs text-slate-500">PDF, DOCX up to 50MB</p>
                </div>
              </div>

              <button type="button" className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-lg transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
