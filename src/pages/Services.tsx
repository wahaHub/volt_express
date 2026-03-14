import { motion } from 'motion/react';
import { PackageSearch, AlertTriangle, Wrench, ShieldCheck, FileText, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: "long-lead",
      icon: <PackageSearch className="w-8 h-8 text-amber-500" />,
      title: "Long-Lead Gear Sourcing",
      desc: "Critical-path equipment sourcing to beat factory standard lead times. We leverage a vetted China supplier network + local inventory partners (per category).",
      deliverables: "Quote + lead time + approved alternates (if needed) + submittal-ready docs (optional)",
      turnaround: "24h quote on complete RFQs",
      input: "BOM / drawings / nameplates + needed-by date + shipping ZIP",
      features: ["Panelboards & Switchboards", "LV Switchgear", "MCC", "ATS", "Breakers", "Transformers (RFQ-only for large power)"]
    },
    {
      id: "emergency",
      icon: <AlertTriangle className="w-8 h-8 text-red-400" />,
      title: "Emergency Replacement",
      desc: "Hard-to-find and last-minute replacements for failed equipment or sudden scope changes. Expedited logistics available.",
      deliverables: "Cross-reference match + expedite options + ship-ready QC pack",
      turnaround: "Same/next-day sourcing on common items (case-by-case)",
      input: "Photos + nameplate + “what failed” + needed-by",
      features: ["Critical Breakers", "Drawout Modules", "Control Components", "Obsolete Parts Matching (photo-based)"]
    },
    {
      id: "punch-list",
      icon: <Wrench className="w-8 h-8 text-blue-400" />,
      title: "Punch-List Closeout Kits",
      desc: "Jobsite shortages happen. We consolidate multiple small orders from different suppliers into one delivery to close out your project.",
      deliverables: "Consolidated delivery + packing list by room/panel + one tracking number",
      turnaround: "3–10 days depending on items",
      input: "Short list / missing items list / panel schedule",
      features: ["Fuses & Terminals", "Cable Glands", "Cabinet Hardware", "Metering Accessories"]
    },
    {
      id: "tender-support",
      icon: <FileText className="w-8 h-8 text-emerald-400" />,
      title: "Tender Support Pack",
      desc: "Bid-ready documentation for your submittals. We provide the proof you need to get equivalents approved by the engineer of record.",
      deliverables: "Supplier submittals pack (compliance matrix + datasheets/drawings + test index + lead-time statement + QC plan)",
      turnaround: "48–72h for standard packs (after receiving spec)",
      input: "Tender specs / key requirements + target model list (if any)",
      features: ["Compliance Matrix", "Spec-Diff Tables", "Datasheets & Drawings", "Lead-Time Statements"]
    },
    {
      id: "qc-pack",
      icon: <ShieldCheck className="w-8 h-8 text-indigo-400" />,
      title: "QC Pack + Approve-to-Ship",
      desc: "Proof-driven quality control. You review high-resolution photos and inspection checklists before we authorize shipment.",
      deliverables: "Digital QC pack + “approve-to-ship” checkpoint before dispatch",
      turnaround: "QC pack issued before shipment",
      features: ["Visual Inspection Photos", "Dimensional spot-checks (as required)", "Nameplate Verification", "Optional Functional Tests"]
    },
    {
      id: "logistics",
      icon: <Truck className="w-8 h-8 text-slate-400" />,
      title: "Transparent Landed Cost",
      desc: "Clear breakdown of factory price, logistics, and our service fee. Door-to-door shipping options available.",
      deliverables: "Factory price + logistics + clearly stated service fee (no surprise charges)",
      options: "Door-to-door shipping; DDP available on request",
      features: ["Factory Cost Visibility", "Freight & Customs", "Clear Service Fee", "DDP Available on Request"]
    }
  ];

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Service Packages</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We don't just list products. We provide end-to-end procurement services designed specifically for electrical contractors and EPCs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 flex flex-col h-full"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">{service.desc}</p>
              
              <div className="space-y-3 mb-8 flex-grow">
                {service.deliverables && (
                  <div className="text-sm">
                    <span className="text-amber-500 font-semibold">Deliverables:</span> <span className="text-slate-300">{service.deliverables}</span>
                  </div>
                )}
                {service.turnaround && (
                  <div className="text-sm">
                    <span className="text-amber-500 font-semibold">Turnaround:</span> <span className="text-slate-300">{service.turnaround}</span>
                  </div>
                )}
                {service.input && (
                  <div className="text-sm">
                    <span className="text-amber-500 font-semibold">Input:</span> <span className="text-slate-300">{service.input}</span>
                  </div>
                )}
                {service.options && (
                  <div className="text-sm">
                    <span className="text-amber-500 font-semibold">Options:</span> <span className="text-slate-300">{service.options}</span>
                  </div>
                )}
              </div>
              
              <div className="pt-6 border-t border-white/10">
                <ul className="space-y-3">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            to="/upload-rfq"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-lg transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]"
          >
            Start Your RFQ
          </Link>
        </div>
      </div>
    </div>
  );
}
