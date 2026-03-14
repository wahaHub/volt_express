import { motion } from 'motion/react';
import { 
  ShieldCheck, Truck, FileCheck, ArrowRight, 
  FileText, Search, CheckCircle2, Check
} from 'lucide-react';

export default function HowItWorks() {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">How It Works</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A transparent, proof-driven process designed to eliminate risk and keep your project on schedule.
          </p>
        </div>

        <div className="space-y-24 relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block"></div>

          {/* Step 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row items-center gap-12 relative"
          >
            <div className="md:w-1/2 flex justify-end text-left md:text-right md:pr-12 relative">
              {/* Timeline Dot */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-amber-500 border-4 border-slate-950 hidden md:block z-10"></div>
              
              <div className="w-full max-w-md">
                <div className="text-amber-500 font-mono text-sm font-bold tracking-wider mb-2">STEP 1</div>
                <h3 className="text-2xl font-bold text-white mb-4">RFQ Intake</h3>
                <div className="space-y-4 text-slate-300">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <p className="text-sm font-semibold text-white mb-1">You Provide:</p>
                    <p className="text-sm">BOM, photos, nameplates, or required dates.</p>
                  </div>
                  <div className="bg-amber-500/10 p-4 rounded-xl border border-amber-500/20">
                    <p className="text-sm font-semibold text-amber-400 mb-1">We Output:</p>
                    <p className="text-sm text-amber-100/70">Structured list (model, qty, parameters extracted).</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12 w-full">
              {/* Proof Card 1 */}
              <div className="glass-panel p-6 rounded-2xl border-white/10 shadow-2xl relative overflow-hidden w-full max-w-md">
                <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 text-[10px] font-bold px-3 py-1 rounded-bl-lg">PROOF</div>
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
                  <FileText className="w-5 h-5 text-amber-400" />
                  <span className="font-mono text-sm text-white">BOM → Structured RFQ</span>
                </div>
                <div className="space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between p-2 bg-slate-900/50 rounded border border-white/5">
                    <span className="text-slate-400 line-through">"Need 5x 100A breakers"</span>
                    <ArrowRight className="w-3 h-3 text-slate-500 shrink-0 mx-2" />
                    <span className="text-emerald-400 text-right">5x 100A, 3P, 480V, 65kAIC</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-slate-900/50 rounded border border-white/5">
                    <span className="text-slate-400 line-through">"Panelboard for 200A"</span>
                    <ArrowRight className="w-3 h-3 text-slate-500 shrink-0 mx-2" />
                    <span className="text-emerald-400 text-right">200A MLO, 42-Circuit, N1</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row-reverse items-center gap-12 relative"
          >
            <div className="md:w-1/2 flex justify-start text-left md:pl-12 relative">
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950 hidden md:block z-10"></div>
              
              <div className="w-full max-w-md">
                <div className="text-blue-500 font-mono text-sm font-bold tracking-wider mb-2">STEP 2</div>
                <h3 className="text-2xl font-bold text-white mb-4">Quote, Lead Time & Equivalency</h3>
                <div className="space-y-4 text-slate-300">
                  <div className="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
                    <p className="text-sm font-semibold text-blue-400 mb-1">We Output:</p>
                    <ul className="text-sm text-blue-100/70 space-y-2 list-disc list-inside">
                      <li>Quote (factory / logistics / service fee breakdown)</li>
                      <li>Lead time (range + conditions)</li>
                      <li>Spec-diff table (if alternative proposed)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pr-12 w-full flex justify-end">
              {/* Proof Card 2 */}
              <div className="glass-panel p-6 rounded-2xl border-white/10 shadow-2xl relative overflow-hidden w-full max-w-md">
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">PROOF</div>
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
                  <FileCheck className="w-5 h-5 text-blue-400" />
                  <span className="font-mono text-sm text-white">Spec-Diff Table</span>
                </div>
                <div className="space-y-2">
                  <div className="grid grid-cols-3 gap-2 text-[10px] text-slate-500 font-mono uppercase tracking-wider pb-1 border-b border-white/5">
                    <span>Parameter</span>
                    <span>Requested</span>
                    <span>Proposed</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs text-white items-center py-1">
                    <span className="text-slate-400">Enclosure</span>
                    <span>NEMA 1</span>
                    <span className="text-emerald-400 flex items-center gap-1"><Check className="w-3 h-3"/> NEMA 3R</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs text-white items-center py-1">
                    <span className="text-slate-400">Interrupt</span>
                    <span>65kAIC</span>
                    <span className="text-blue-400 flex items-center gap-1"><Check className="w-3 h-3"/> 65kAIC</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs text-white items-center py-1">
                    <span className="text-slate-400">Busbar</span>
                    <span>Copper</span>
                    <span className="text-blue-400 flex items-center gap-1"><Check className="w-3 h-3"/> Copper</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row items-center gap-12 relative"
          >
            <div className="md:w-1/2 flex justify-end text-left md:text-right md:pr-12 relative">
              {/* Timeline Dot */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-950 hidden md:block z-10"></div>
              
              <div className="w-full max-w-md">
                <div className="text-emerald-500 font-mono text-sm font-bold tracking-wider mb-2">STEP 3</div>
                <h3 className="text-2xl font-bold text-white mb-4">QC Pack & Approve-to-Ship</h3>
                <div className="space-y-4 text-slate-300">
                  <div className="bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20">
                    <p className="text-sm font-semibold text-emerald-400 mb-1">We Output:</p>
                    <p className="text-sm text-emerald-100/70">High-res photos + inspection items + test items (if any).</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <p className="text-sm font-semibold text-white mb-1">Client Action:</p>
                    <p className="text-sm">Click to approve before shipping (avoids wrong items).</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12 w-full">
              {/* Proof Card 3 */}
              <div className="glass-panel p-6 rounded-2xl border-white/10 shadow-2xl relative overflow-hidden w-full max-w-md">
                <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 text-[10px] font-bold px-3 py-1 rounded-bl-lg">PROOF</div>
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="font-mono text-sm text-white">QC Pack</span>
                </div>
                <div className="flex gap-4">
                  <div className="w-1/2 h-24 bg-slate-800 rounded-lg overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1580982327559-c1202864eb05?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover opacity-60" alt="QC" />
                    <div className="absolute inset-0 border-2 border-emerald-500/50 rounded-lg"></div>
                    <div className="absolute bottom-1 right-1 bg-slate-900/80 px-1.5 py-0.5 rounded text-[8px] text-emerald-400 font-mono">IMG_8492.JPG</div>
                  </div>
                  <div className="w-1/2 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Dimensions OK
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Nameplate Match
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Hi-Pot Test Pass
                    </div>
                    <button className="w-full mt-2 py-1.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/30 rounded text-xs font-bold transition-colors">
                      Approve to Ship
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row-reverse items-center gap-12 relative"
          >
            <div className="md:w-1/2 flex justify-start text-left md:pl-12 relative">
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-950 hidden md:block z-10"></div>
              
              <div className="w-full max-w-md">
                <div className="text-purple-500 font-mono text-sm font-bold tracking-wider mb-2">STEP 4</div>
                <h3 className="text-2xl font-bold text-white mb-4">Delivery & Issue Response</h3>
                <div className="space-y-4 text-slate-300">
                  <div className="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20">
                    <p className="text-sm font-semibold text-purple-400 mb-1">We Output:</p>
                    <p className="text-sm text-purple-100/70">Landed cost breakdown + tracking number + document pack.</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <p className="text-sm font-semibold text-white mb-1">Commitment:</p>
                    <p className="text-sm">48h issue response SLA.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pr-12 w-full flex justify-end">
              {/* Proof Card 4 */}
              <div className="glass-panel p-6 rounded-2xl border-white/10 shadow-2xl relative overflow-hidden w-full max-w-md">
                <div className="absolute top-0 right-0 bg-purple-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">PROOF</div>
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
                  <Truck className="w-5 h-5 text-purple-400" />
                  <span className="font-mono text-sm text-white">Landed Cost & Tracking</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-slate-900/50 p-3 rounded-lg border border-white/5">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">EXW Factory</span>
                      <span className="text-white font-mono">$12,450.00</span>
                    </div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">Ocean Freight (DDP)</span>
                      <span className="text-white font-mono">$1,850.00</span>
                    </div>
                    <div className="flex justify-between text-xs mb-2 pb-2 border-b border-white/10">
                      <span className="text-slate-400">Service Fee (8%)</span>
                      <span className="text-white font-mono">$996.00</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold text-emerald-400">
                      <span>Total Landed</span>
                      <span className="font-mono">$15,296.00</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-purple-500/10 p-2 rounded border border-purple-500/20">
                    <span className="text-xs text-purple-300">Tracking: <span className="font-mono text-white">AWB-774-8921</span></span>
                    <span className="text-[10px] bg-purple-500 text-white px-2 py-0.5 rounded-full">In Transit</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
