import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I list my property for sale?",
      answer: "Listing your property is simple! Click on 'Sell Property' in the navigation menu, fill out the property details form including photos, description, price, and location. Once submitted, our team will review and approve your listing within 24 hours. You can then track inquiries and manage your listing from your dashboard."
    },
    {
      question: "What are the fees for selling a property?",
      answer: "We offer transparent pricing with no hidden fees. Basic listings are free for the first 30 days. Premium listings with featured placement start at $49/month. We only charge a small commission (2%) when your property successfully sells through our platform. There are no upfront costs or subscription fees required."
    },
    {
      question: "How long does it take to sell a property?",
      answer: "The time to sell varies depending on factors like location, price, and market conditions. On average, properties listed on our platform receive offers within 2-4 weeks. Premium listings with professional photos and detailed descriptions typically sell 40% faster. We provide market insights and pricing recommendations to help you sell quickly."
    },
    {
      question: "Can I edit my listing after it's published?",
      answer: "Yes! You have full control over your listing. You can edit property details, update photos, change the price, or mark it as sold at any time through your seller dashboard. Changes are reflected immediately on the platform. You can also pause or reactivate your listing as needed."
    },
    {
      question: "How do I communicate with potential buyers?",
      answer: "Our platform provides a secure messaging system where you can communicate directly with interested buyers. You'll receive email notifications for new inquiries, and can respond through your dashboard. We also offer phone verification for serious buyers and can help schedule property viewings through our integrated calendar system."
    },
    {
      question: "What documents do I need to sell my property?",
      answer: "You'll need proof of ownership (title deed), property tax receipts, approved building plans, NOC (No Objection Certificate) if applicable, and identity proof. During the listing process, you can upload these documents securely. Our team can guide you through the documentation process and connect you with legal experts if needed."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions (FAQ)
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Find answers to common questions about buying and selling properties on our platform. 
            Get started with confidence and make your real estate journey smooth and hassle-free!
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-indigo-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none group"
              >
                <span className="font-semibold text-gray-800 pr-4 text-lg group-hover:text-indigo-600 transition-colors">
                  {faq.question}
                </span>
                <div className="bg-indigo-100 rounded-full p-1 group-hover:bg-indigo-200 transition-colors">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-indigo-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-indigo-600" />
                  )}
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center bg-[#03373D] from-indigo-500 to-blue-600 rounded-2xl p-8 text-white shadow-lg">
          <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
          <p className="mb-6 text-indigo-100">
            Our support team is here to help you 24/7
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors shadow-md">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}