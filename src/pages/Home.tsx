import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ShieldCheck, Clock, FileCheck, Truck, ArrowRight, Zap, 
  Settings, Box, FileText
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Split Layout */}
      <section className="relative pt-24 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900/80"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left: Pain & CTA */}
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-medium mb-6"
              >
                <Zap className="w-4 h-4" />
                <span>Premium Industrial Sourcing Desk</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
              >
                Vetted China Supplier Network for Power Distribution Gear
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed"
              >
                We match complex requirements to vetted suppliers across China, provide bid-ready documentation, verify with QC packs, and ship with transparent landed cost options.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <Link
                  to="/upload-rfq"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-lg transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] flex items-center justify-center gap-2"
                >
                  Upload RFQ <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>

            {/* Right: "What we source" Scrolling Grid */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="h-[400px] lg:h-[500px] overflow-hidden relative rounded-2xl border border-white/10 bg-slate-900/50"
              style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }}
            >
              <div className="grid grid-cols-3 gap-3 p-3 h-full">
                {/* Column 1 */}
                <div className="flex flex-col gap-3 animate-scroll-up">
                  {[
                    { name: "Panelboards & Switchboards", img: "https://images.unsplash.com/photo-1580982327559-c1202864eb05?q=80&w=400&auto=format&fit=crop" },
                    { name: "Meter Sockets & Banks", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400&auto=format&fit=crop" },
                    { name: "Service Entrance", img: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=400&auto=format&fit=crop" },
                    { name: "Panelboards & Switchboards", img: "https://images.unsplash.com/photo-1580982327559-c1202864eb05?q=80&w=400&auto=format&fit=crop" },
                    { name: "Meter Sockets & Banks", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400&auto=format&fit=crop" },
                    { name: "Service Entrance", img: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=400&auto=format&fit=crop" },
                    { name: "Panelboards & Switchboards", img: "https://images.unsplash.com/photo-1580982327559-c1202864eb05?q=80&w=400&auto=format&fit=crop" },
                    { name: "Meter Sockets & Banks", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400&auto=format&fit=crop" },
                    { name: "Service Entrance", img: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=400&auto=format&fit=crop" }
                  ].map((item, i) => (
                    <div key={i} className="relative group overflow-hidden rounded-xl border border-white/10 aspect-square bg-slate-900 shrink-0">
                      <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
                      <div className="absolute inset-0 p-4 flex flex-col justify-end">
                        <h3 className="text-sm font-semibold text-white leading-tight">{item.name}</h3>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Column 2 */}
                <div className="flex flex-col gap-3 animate-scroll-down">
                  {[
                    { name: "LV Switchgear", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400&auto=format&fit=crop" },
                    { name: "MCC", img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=400&auto=format&fit=crop" },
                    { name: "Breakers & Accessories", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop" },
                    { name: "LV Switchgear", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400&auto=format&fit=crop" },
                    { name: "MCC", img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=400&auto=format&fit=crop" },
                    { name: "Breakers & Accessories", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop" },
                    { name: "LV Switchgear", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400&auto=format&fit=crop" },
                    { name: "MCC", img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=400&auto=format&fit=crop" },
                    { name: "Breakers & Accessories", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop" }
                  ].map((item, i) => (
                    <div key={i} className="relative group overflow-hidden rounded-xl border border-white/10 aspect-square bg-slate-900 shrink-0">
                      <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
                      <div className="absolute inset-0 p-4 flex flex-col justify-end">
                        <h3 className="text-sm font-semibold text-white leading-tight">{item.name}</h3>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Column 3 */}
                <div className="flex flex-col gap-3 animate-scroll-up">
                  {[
                    { name: "ATS", img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=400&auto=format&fit=crop" },
                    { name: "UPS Systems", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop" },
                    { name: "Power Transformers", img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=400&auto=format&fit=crop" },
                    { name: "Dry-Type Transformers", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop" },
                    { name: "ATS", img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=400&auto=format&fit=crop" },
                    { name: "UPS Systems", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop" },
                    { name: "Power Transformers", img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=400&auto=format&fit=crop" },
                    { name: "Dry-Type Transformers", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop" },
                    { name: "ATS", img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=400&auto=format&fit=crop" }
                  ].map((item, i) => (
                    <div key={i} className="relative group overflow-hidden rounded-xl border border-white/10 aspect-square bg-slate-900 shrink-0">
                      <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
                      <div className="absolute inset-0 p-4 flex flex-col justify-end">
                        <h3 className="text-sm font-semibold text-white leading-tight">{item.name}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Badge Row (Outcomes) */}
      <section className="border-b border-white/5 bg-slate-900/30 backdrop-blur-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-x-8 gap-y-4 text-sm font-medium text-slate-400">
            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-amber-500" /> Lead time confirmed fast</div>
            <div className="flex items-center gap-2"><FileCheck className="w-4 h-4 text-blue-400" /> Spec-diff tables</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-400" /> QC pack before ship</div>
            <div className="flex items-center gap-2"><Truck className="w-4 h-4 text-slate-300" /> Door-to-door options</div>
            <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-indigo-400" /> 48h issue response SLA</div>
          </div>
        </div>
      </section>

      {/* 3. Products & Services */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Products & Services</h2>
            <p className="text-slate-400">Everything you need to source, verify, and deliver critical electrical gear.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Products */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Box className="w-6 h-6 text-blue-400" />
                Products <span className="text-sm font-normal text-slate-400">(What we source)</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { name: "Panelboards & Switchboards", img: "https://images.unsplash.com/photo-1580982327559-c1202864eb05?q=80&w=400&auto=format&fit=crop" },
                  { name: "LV Switchgear", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400&auto=format&fit=crop" },
                  { name: "MCC", img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=400&auto=format&fit=crop" },
                  { name: "Breakers & Accessories", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop" },
                  { name: "ATS", img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=400&auto=format&fit=crop" },
                  { name: "UPS Systems", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop" },
                  { name: "Power Transformers", img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=400&auto=format&fit=crop" },
                  { name: "Dry-Type Transformers", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop" },
                  { name: "Meter Sockets & Banks", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400&auto=format&fit=crop" }
                ].map((item, i) => (
                  <div key={i} className="relative group overflow-hidden rounded-xl border border-white/10 aspect-square bg-slate-900">
                    <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:opacity-60 group-hover:scale-110 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
                    <div className="absolute inset-0 p-3 flex flex-col justify-end">
                      <h4 className="text-xs font-semibold text-white leading-tight">{item.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Services */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Settings className="w-6 h-6 text-amber-500" />
                Services <span className="text-sm font-normal text-slate-400">(What we deliver)</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "24h Quote + Lead Time", desc: "Fast, accurate pricing and delivery confirmation.", icon: <Clock className="w-5 h-5 text-blue-400" />, link: "/services" },
                  { title: "Equivalency + Spec-Diff", desc: "Engineer-ready comparison tables for easy approval.", icon: <FileCheck className="w-5 h-5 text-emerald-400" />, link: "/services" },
                  { title: "QC Pack + Approve-to-Ship", desc: "High-res photos and test reports before dispatch.", icon: <ShieldCheck className="w-5 h-5 text-amber-400" />, link: "/services" },
                  { title: "Landed Cost + Door-to-Door", desc: "Transparent DDP pricing with no hidden fees.", icon: <Truck className="w-5 h-5 text-purple-400" />, link: "/services" },
                  { title: "Consolidation", desc: "Multi-supplier orders combined into a single delivery.", icon: <Box className="w-5 h-5 text-indigo-400" />, link: "/services" },
                  { title: "Tender Support Pack", desc: "Compliance matrix, drawings, test index, and lead times.", icon: <FileText className="w-5 h-5 text-rose-400" />, link: "/tender-support" }
                ].map((svc, i) => (
                  <Link to={svc.link} key={i} className="glass-card p-5 rounded-xl border border-white/10 hover:border-white/20 transition-colors block group">
                    <div className="mb-3 p-2 bg-white/5 inline-block rounded-lg group-hover:bg-white/10 transition-colors">{svc.icon}</div>
                    <h4 className="text-sm font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">{svc.title}</h4>
                    <p className="text-xs text-slate-400">{svc.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Case Studies Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Proven Outcomes</h2>
              <p className="text-slate-400">Real-world critical path rescues.</p>
            </div>
            <Link to="/case-studies" className="text-sm font-medium text-amber-500 hover:text-amber-400 hidden sm:flex items-center gap-1">
              View All Cases <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "2MW UPS Replacement", outcome: "Delivered in 18 weeks", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop" },
              { title: "Hospital Switchgear", outcome: "Approved & installed in 22w", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop" },
              { title: "Auto Plant MCC", outcome: "Air-freighted in 14 days", img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=600&auto=format&fit=crop" }
            ].map((study, i) => (
              <div key={i} className="glass-card overflow-hidden group">
                <div className="h-40 relative overflow-hidden">
                  <img src={study.img} alt={study.title} className="w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-3">{study.title}</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-xs text-slate-400 flex justify-between"><span className="text-emerald-400">Outcome:</span> {study.outcome}</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center" title="Spec-Diff Proof">
                      <FileCheck className="w-4 h-4 text-slate-400" />
                    </div>
                    <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center" title="QC Pack Proof">
                      <ShieldCheck className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link to="/case-studies" className="text-sm font-medium text-amber-500 hover:text-amber-400 inline-flex items-center gap-1">
              View All Cases <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. How Pricing Works */}
      <section className="py-24 bg-slate-900/50 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Transparent Landed Cost</h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            No hidden broker markups. We break down the exact cost to get the equipment from the factory floor to your jobsite.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
            <div className="glass-panel p-4 rounded-xl w-full md:w-48">
              <span className="block text-xs text-slate-500 font-mono mb-1">01</span>
              <span className="block text-white font-medium">Factory Price</span>
            </div>
            <div className="text-slate-600 font-bold">+</div>
            <div className="glass-panel p-4 rounded-xl w-full md:w-48">
              <span className="block text-xs text-slate-500 font-mono mb-1">02</span>
              <span className="block text-white font-medium">Logistics & Customs</span>
            </div>
            <div className="text-slate-600 font-bold">+</div>
            <div className="glass-panel p-4 rounded-xl w-full md:w-48 border-amber-500/30">
              <span className="block text-xs text-amber-500/50 font-mono mb-1">03</span>
              <span className="block text-amber-400 font-medium">Clear Service Fee</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-400 text-left">
            <div className="p-4 bg-white/5 rounded-lg">
              <strong className="text-white block mb-1">Optional Expedite Lane</strong>
              Air-freight and priority factory slots available for critical emergencies.
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <strong className="text-white block mb-1">QC Upgrades</strong>
              Add functional testing or third-party inspections to the standard QC Pack.
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <strong className="text-white block mb-1">Trial Orders Welcome</strong>
              Test our process on a smaller punch-list order before committing to major gear.
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final CTA + RFQ Form Teaser */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-500/5"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to secure your schedule?</h2>
          <p className="text-xl text-slate-400 mb-10">
            Upload your BOM, specs, or nameplate photos. Our engineering team will parse the requirements and begin sourcing immediately.
          </p>
          
          <div className="glass-card p-2 rounded-2xl inline-flex flex-col sm:flex-row items-center gap-2 w-full max-w-xl mx-auto bg-slate-900/80">
            <div className="flex-grow flex items-center gap-3 px-4 py-3 w-full">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-mono text-xs">1</div>
              <span className="text-slate-300 text-sm">Upload Files</span>
              <div className="w-4 border-t border-slate-700 mx-2 hidden sm:block"></div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-mono text-xs hidden sm:flex">2</div>
              <span className="text-slate-500 text-sm hidden sm:block">Details</span>
            </div>
            <Link
              to="/upload-rfq"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)] whitespace-nowrap"
            >
              Start RFQ
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
            <span>* Vetted/quality-managed suppliers per category.</span>
            <span>* UL listing provided per order.</span>
            <span>* DDP available on request.</span>
          </div>
        </div>
      </section>
    </div>
  );
}

