import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const faqs = [
  {
    question: 'What is the best time to book flights for the lowest prices?',
    answer:
      'Booking flights 2-3 months in advance typically offers the best rates. Prices may also be lower on Tuesdays and Wednesdays for domestic flights.',
  },
  {
    question: 'How can I modify or cancel my travel booking?',
    answer:
      'You can modify or cancel your booking through your account dashboard or by contacting our support team at support@travelwebsite.com.',
  },
  {
    question: 'Are travel insurance options available?',
    answer:
      'Yes, we offer comprehensive travel insurance plans that cover cancellations, medical emergencies, and lost luggage. Details are available during booking.',
  },
  {
    question: 'What documents do I need for international travel?',
    answer:
      'A valid passport is required for international travel. Some destinations may also require visas, vaccinations, or other documentation. Check specific country requirements before traveling.',
  },
  {
    question: 'Do you offer group travel discounts?',
    answer:
      'Yes, we provide discounts for groups of 10 or more. Contact our team for a customized quote tailored to your group’s needs.',
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-center text-xl lg:text-2xl font-bold text-gray-800 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="p-4 sm:p-5">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left text-sm sm:text-base font-medium text-gray-800 focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <i
                    className={`fa-solid fa-chevron-down text-xs text-gray-600 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out text-sm text-gray-600 mt-2 ${
                    openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="pt-2 leading-relaxed">{faq.answer}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
