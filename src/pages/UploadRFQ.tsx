import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UploadCloud, CheckCircle2, ArrowRight, ArrowLeft, FileText, X } from 'lucide-react';

export default function UploadRFQ() {
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    neededBy: '',
    zip: '',
    brandMatch: '',
    ratings: '',
    projectType: '',
    notes: ''
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) setStep(2);
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission logic here
    console.log('Submitted:', { files, formData });
    alert('RFQ Submitted Successfully! (Demo)');
  };

  return (
    <div className="pt-24 pb-32 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Upload Your RFQ</h1>
          <p className="text-slate-400">
            Messy BOM screenshots, nameplate photos, or full specs—our engineering team parses it all.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-0 h-0.5 bg-amber-500 transition-all duration-500 -translate-y-1/2" style={{ width: step === 1 ? '50%' : '100%' }}></div>
          
          <div className="relative flex justify-between z-10">
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-colors ${
                step >= 1 ? 'bg-amber-500 border-amber-500 text-slate-950' : 'bg-slate-900 border-white/20 text-slate-500'
              }`}>
                1
              </div>
              <span className={`text-xs mt-2 font-medium ${step >= 1 ? 'text-amber-500' : 'text-slate-500'}`}>Required Info</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-colors ${
                step >= 2 ? 'bg-amber-500 border-amber-500 text-slate-950' : 'bg-slate-900 border-white/20 text-slate-500'
              }`}>
                2
              </div>
              <span className={`text-xs mt-2 font-medium ${step >= 2 ? 'text-amber-500' : 'text-slate-500'}`}>Optional Details</span>
            </div>
          </div>
        </div>

        <div className="glass-card p-8">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.form
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={nextStep}
                className="space-y-8"
              >
                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Upload BOM, Specs, or Photos <span className="text-red-400">*</span>
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-white/10 border-dashed rounded-xl hover:border-amber-500/50 transition-colors bg-slate-900/50 relative group">
                    <div className="space-y-2 text-center">
                      <UploadCloud className="mx-auto h-12 w-12 text-slate-400 group-hover:text-amber-500 transition-colors" />
                      <div className="flex text-sm text-slate-400 justify-center">
                        <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-amber-500 hover:text-amber-400 focus-within:outline-none">
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" multiple className="sr-only" onChange={handleFileChange} required={files.length === 0} />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-slate-500">PDF, PNG, JPG, Excel up to 50MB</p>
                    </div>
                  </div>
                  
                  {/* File List */}
                  {files.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {files.map((file, index) => (
                        <li key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-blue-400" />
                            <span className="text-sm text-slate-300 truncate max-w-[200px] sm:max-w-xs">{file.name}</span>
                          </div>
                          <button type="button" onClick={() => removeFile(index)} className="text-slate-500 hover:text-red-400 transition-colors">
                            <X className="w-5 h-5" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address <span className="text-red-400">*</span></label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" placeholder="you@company.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">Phone Number <span className="text-red-400">*</span></label>
                    <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" placeholder="(555) 000-0000" />
                  </div>
                  <div>
                    <label htmlFor="neededBy" className="block text-sm font-medium text-slate-300 mb-2">Needed By Date <span className="text-red-400">*</span></label>
                    <input type="date" id="neededBy" name="neededBy" required value={formData.neededBy} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all [color-scheme:dark]" />
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-slate-300 mb-2">Shipping ZIP Code <span className="text-red-400">*</span></label>
                    <input type="text" id="zip" name="zip" required value={formData.zip} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" placeholder="12345" />
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex justify-end">
                  <button type="submit" className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                    Continue to Optional Details <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.form>
            )}

            {step === 2 && (
              <motion.form
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={submitForm}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="brandMatch" className="block text-sm font-medium text-slate-300 mb-2">Preferred Brand (Must Match?)</label>
                    <input type="text" id="brandMatch" name="brandMatch" value={formData.brandMatch} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" placeholder="e.g., Square D, Eaton" />
                    <p className="mt-1 text-xs text-slate-500">Leave blank if equivalents are acceptable.</p>
                  </div>
                  <div>
                    <label htmlFor="ratings" className="block text-sm font-medium text-slate-300 mb-2">Voltage / Current Ratings</label>
                    <input type="text" id="ratings" name="ratings" value={formData.ratings} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" placeholder="e.g., 480V, 1200A, 65kAIC" />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="projectType" className="block text-sm font-medium text-slate-300 mb-2">Project Type</label>
                    <select id="projectType" name="projectType" value={formData.projectType} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all appearance-none">
                      <option value="">Select Project Type...</option>
                      <option value="commercial">Commercial Construction</option>
                      <option value="industrial">Industrial / Manufacturing</option>
                      <option value="data-center">Data Center / Mission Critical</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="infrastructure">Infrastructure / Utilities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="notes" className="block text-sm font-medium text-slate-300 mb-2">Additional Notes</label>
                    <textarea id="notes" name="notes" rows={4} value={formData.notes} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none" placeholder="Any specific constraints, delivery requirements, or context we should know?"></textarea>
                  </div>
                </div>

                {/* Pricing Transparency Mini-Section */}
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-1">Pricing Transparency Guarantee</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Your quote will clearly separate: Factory Price + Logistics + Service Fee. No surprise charges.
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                  <button type="button" onClick={() => setStep(1)} className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium flex items-center gap-2 transition-all border border-white/10">
                    <ArrowLeft className="w-5 h-5" /> Back
                  </button>
                  <button type="submit" className="px-8 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                    Submit RFQ <CheckCircle2 className="w-5 h-5" />
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
