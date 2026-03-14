import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <Zap className="w-4 h-4 text-amber-500" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">VoltSource</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Premium Procurement & Tender Support Desk for electrical contractors and EPCs. We deliver bid-ready and install-ready equipment on schedule.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-amber-500" />
                <a href="mailto:rfq@voltsource.com" className="hover:text-white transition-colors">rfq@voltsource.com</a>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-amber-500" />
                <a href="tel:+18005550199" className="hover:text-white transition-colors">+1 (800) 555-0199</a>
              </div>
              <div className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Global Logistics Hub<br/>Houston, TX</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/services" className="hover:text-amber-500 transition-colors">Long-Lead Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-amber-500 transition-colors">Emergency Replacement</Link></li>
              <li><Link to="/services" className="hover:text-amber-500 transition-colors">Punch-List Closeout Kits</Link></li>
              <li><Link to="/tender-support" className="hover:text-amber-500 transition-colors">Tender Support Pack</Link></li>
              <li><Link to="/services" className="hover:text-amber-500 transition-colors">QC Pack & Approve-to-Ship</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Equipment</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/catalog" className="hover:text-amber-500 transition-colors">Panelboards & Switchboards</Link></li>
              <li><Link to="/catalog" className="hover:text-amber-500 transition-colors">LV Switchgear</Link></li>
              <li><Link to="/catalog" className="hover:text-amber-500 transition-colors">ATS & MCCs</Link></li>
              <li><Link to="/catalog" className="hover:text-amber-500 transition-colors">Critical Breakers</Link></li>
              <li><Link to="/catalog" className="hover:text-amber-500 transition-colors">Transformers & UPS</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/how-it-works" className="hover:text-amber-500 transition-colors">How It Works</Link></li>
              <li><Link to="/case-studies" className="hover:text-amber-500 transition-colors">Case Studies</Link></li>
              <li><Link to="/faq" className="hover:text-amber-500 transition-colors">FAQ</Link></li>
              <li><Link to="/upload-rfq" className="hover:text-amber-500 transition-colors text-amber-500/80 font-medium">Upload RFQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} VoltSource. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Logistics Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
