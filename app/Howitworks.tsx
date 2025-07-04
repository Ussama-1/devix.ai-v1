import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const HowItWorksSection = () => {
  const features = [
    {
      number: "1",
      title: "Voice-Enabled Booking",
      description:
        "Patients simply call, and Devix AI handles scheduling, rescheduling, and cancellations—no staff intervention required.",
      icon: "📞",
    },
    {
      number: "2",
      title: "Seamless Calendar Sync",
      description:
        "Devix integrates with your existing scheduling systems, staff calendars, or EHR platforms so appointments update in real time, preventing overlaps or double-bookings.",
      icon: "🔄",
    },
    {
      number: "3",
      title: "Automated Reminders & Follow-Ups",
      description:
        "Devix sends timely voice or text reminders, ensuring patients remember appointments and can easily reschedule if needed—dramatically reducing no-shows.",
      icon: "⏰",
    },
    {
      number: "4",
      title: "Real-Time Analytics",
      description:
        "Track call volumes, appointment trends, and missed appointments in a single dashboard— enabling data-driven decisions for continual process improvement",
      icon: "📊",
    },
  ];

  return (
    <div className="w-full ">
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 -left-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Heading with animated underline */}
        <div className="text-center mb-16 relative">
          <h1 className="heading">
            How It {""}
            <span className="text-purple">Works</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <Card className="bg-gray-900/60 border border-gray-800 hover:border-[#cbacf9] h-full transition-all duration-300 backdrop-blur-sm hover:bg-gray-900/80 overflow-hidden">
                <CardContent className="p-0">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#0e1056] to-transparent transform group-hover:scale-150 transition-transform duration-500"></div>

                  <div className="p-6 flex gap-6 items-start relative z-10">
                    {/* Animated number box */}
                    <div className="flex-shrink-0 transition-all duration-300">
                      <div className="w-16 h-16 bg-gray-800 group-hover:bg-gradient-to-br group-hover:from-[] group-hover:to-emerald-800 text-white flex items-center justify-center text-2xl font-bold rounded-lg shadow-xl transform group-hover:-translate-y-1 transition-all duration-300 border border-gray-700 group-hover:border-green-400">
                        {feature.number}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
