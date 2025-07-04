import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQSection = () => {
  const faqs = [
    {
      question: "Can patients book appointments 24/7?",
      answer: "Absolutely. Devix's self-service portal allows patients to schedule, reschedule, or cancel anytime—freeing up your staff and improving patient satisfaction."
    },
    {
      question: "Do I need technical expertise to set it up?",
      answer: "Not at all. Our team handles the configuration and provides step-by-step training. You'll have a fully operational system without heavy IT involvement."
    },
    {
      question: "How does Devix reduce no-shows?",
      answer: "Devix automatically sends timely reminders via text, email, or phone. Patients can also self-manage bookings, making it easier to keep or adjust appointments."
    },
    {
      question: "What if I have multiple locations or providers?",
      answer: "Devix is built to scale. You can easily add new locations, providers, or departments, and the system adjusts to accommodate growing patient volumes."
    },
    {
      question: "How much does it cost?",
      answer: "Every practice is unique. That's why we custom-tailor our packages to your specific goals. We operate on a simple model—a retainer on our services. Book a call to get a custom quote."
    }
  ];

  return (
    <div className="w-full my-12">
      <div className="">
     
        <h1 className='heading mb-8'>
        Frequently Asked {''}
            <span className='text-purple'>Questions</span>
        </h1>
        <Card className="bg-[#000319] border-slate-800 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-300">Everything you need to know</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b last:border-b-0 border-slate-800"
                >
                  <AccordionTrigger className="text-lg font-medium text-left text-white hover:text-purple-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
        
        
      </div>
    </div>
  );
};

export default FAQSection;