import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const FAQSection = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)
const faqs = [
    {
      question: "What is AHTCODERS and what do you teach?",
      answer:
        "AHTCODERS is a YouTube channel dedicated to teaching coding, web development, and tech skills. We create beginner-friendly tutorials, advanced projects, and real-world coding solutions.",
    },
    {
      question: "Do I need prior coding experience to follow AHTCODERS?",
      answer:
        "Not at all! Our tutorials start from scratch and guide you step-by-step. Whether you’re a complete beginner or an advanced developer, you’ll find valuable content here.",
    },
    {
      question: "What technologies do you cover?",
      answer:
        "We cover HTML, CSS, JavaScript, React, Bootstrap, Node.js, Tailwind CSS, and more. We also explore modern tools, libraries, and project building.",
    },
    {
      question: "Can I request a tutorial?",
      answer:
        "Yes! You can contact us through the form below or comment on our YouTube videos to suggest a topic you’d like us to cover.",
    },
  ]



  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }
return (
<>
<section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg cursor-pointer border border-gray-200 hover:border-blue-400 transition-colors duration-300"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-xl font-semibold text-gray-900 flex justify-between items-center">
                  {faq.question}
                   {openFaqIndex === index ? (
                    <AiOutlineMinus className="text-gray-500" size={24} />
                  ) : (
                    <AiOutlinePlus className="text-gray-500" size={24} />
                  )}
                </h3>
                {openFaqIndex === index && (
                  <p className="text-gray-600 leading-relaxed mt-4 animate-fade-in">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
</>  
)
}

export default FAQSection