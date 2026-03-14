import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "Do you guarantee 7-day dispatch?",
      answer: "No. Any '7-day dispatch' claims apply strictly to select in-stock items. Custom or long-lead equipment will have specific lead times clearly stated in your Tender Support Pack."
    },
    {
      question: "Are your suppliers ISO 9001 certified?",
      answer: "We do not make blanket claims about ISO 9001 certification. We use quality-managed and vetted suppliers per category. Specific certifications for a manufacturer can be provided upon request."
    },
    {
      question: "Is the equipment UL Listed?",
      answer: "We do not claim blanket UL listing. UL listing or other required certifications are provided per order based on your specific requirements and the selected manufacturer."
    },
    {
      question: "Do you offer DDP (Delivered Duty Paid) shipping?",
      answer: "We offer various door-to-door shipping options. DDP is not our default, but it is available upon request. Your landed cost breakdown will clearly show all logistics fees."
    },
    {
      question: "What is your 48h Issue Response SLA?",
      answer: "We guarantee a response to any technical or logistical issue within 48 hours. Please note this is a response SLA, not a guaranteed resolution time, as complex engineering issues may take longer to solve."
    },
    {
      question: "How does the Approve-to-Ship workflow function?",
      answer: "Before equipment leaves the factory, we send you a QC Pack containing high-resolution photos and inspection checklists. The equipment will not ship until you or your team explicitly approve the QC Pack."
    },
    {
      question: "What is a Spec-Diff Table?",
      answer: "A Spec-Diff (Specification Difference) Table is a side-by-side comparison of your requested equipment specifications versus our proposed equivalent. It highlights matches, deviations, and areas where the proposed equipment exceeds requirements, making it easier for the Engineer of Record to approve the submittal."
    },
    {
      question: "How do you price your services?",
      answer: "We believe in total transparency. Your quote will show the factory price of the equipment, the exact logistics costs, and our clearly stated service fee. There are no surprise charges or hidden markups."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Clear answers about our process, compliance, and guarantees.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="glass-card overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-amber-500 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
