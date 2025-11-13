// components/FAQSection.js
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Optional icons

export default function FAQSection() {
  const faqs = [
    {
      question: "How does the message filtering work?",
      answer: "Our AI-powered system analyzes messages in your Telegram groups against your product preferences. When a match is found, you receive instant notifications with the relevant message details."
    },
    {
      question: "What types of products can I set preferences for?",
      answer: "You can set preferences for any product category—electronics, fashion, real estate, vehicles, services, and more. Our system understands natural language descriptions and can match based on specific features, brands, or price ranges."
    },
    {
      question: "Can I use this with multiple Telegram groups?",
      answer: "Yes! Depending on your subscription plan, you can connect from 1 to unlimited Telegram groups. The Free plan supports 1 group, while Enterprise offers unlimited group connections."
    },
    {
      question: "How many messages can the system process per day?",
      answer: "Message limits vary by plan: Free (20/day), Starter (100/day), Professional (500/day), and Enterprise (2000/day). These limits ensure optimal performance for all users."
    },
    {
      question: "What happens if I exceed my daily message limit?",
      answer: "The system will pause filtering until your limit resets at midnight UTC. You'll receive a notification when approaching your limit, and can upgrade your plan for higher capacity."
    },
    {
      question: "Can I change plans later?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades apply at the next billing cycle with prorated adjustments."
    },
    {
      question: "Is there a free trial for paid plans?",
      answer: "We don't offer free trials for paid tiers since we already have a comprehensive Free plan. You can start with Free to test the service, then upgrade when you're ready for more features."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. All payments are secure and encrypted."
    },
    {
      question: "How secure is my data and Telegram connection?",
      answer: "We use end-to-end encryption for all data and never store your Telegram login credentials. Your preferences and matched messages are encrypted and can be deleted at any time."
    },
    {
      question: "Can I set up complex preference rules?",
      answer: "Absolutely! Beyond basic keywords, you can set rules for price ranges, locations, condition (new/used), specific brands, and even exclude certain terms to fine-tune your matches."
    },
    {
      question: "What kind of analytics and reporting do you provide?",
      answer: "Professional and Enterprise plans include detailed analytics showing match rates, popular products, time-based trends, and performance metrics across your connected groups."
    },
    {
      question: "How quickly will I receive notifications after a match?",
      answer: "Matches are typically delivered within seconds of the message being posted in the group. Our real-time processing ensures you never miss time-sensitive opportunities."
    },
    {
      question: "Is there a contract or long-term commitment?",
      answer: "No long-term contracts required. Monthly plans can be canceled anytime. Yearly plans offer significant savings but are also cancelable with prorated refunds for unused time."
    },
    {
      question: "What support options are available?",
      answer: "Free plan includes email support, Starter offers priority email, Professional includes chat support, and Enterprise provides 24/7 dedicated support with a personal account manager."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-blue-200 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-400 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex justify-between items-center w-full px-5 py-4 text-left text-lg font-medium text-gray-800 hover:bg-orange-100 transition"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
