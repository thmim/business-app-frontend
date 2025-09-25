import React from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { CgTrack } from "react-icons/cg";
import { IoShieldOutline } from "react-icons/io5";
import { LuLineChart } from "react-icons/lu"; 
const features = [
  {
    icon: <FaCalendarCheck className="text-4xl" />,
    title: "Easy Service Booking",
    description:
      "Streamlined booking process for clients with service catalogs and availability.",
      bgColor: "bg-neutral",
  },
  {
    icon: <CgTrack className="text-4xl" />,
    title: "Real-Time Tracking",
    description:
      "Monitor job progress, employee hours, and project timelines with live updates.",
      bgColor: "bg-neutral",
  },
  {
    icon: <LuLineChart className="text-4xl" />,
    title: "Performance Analytics",
    description:
      "Comprehensive reporting and insights to improve business operations and efficiency.",
      bgColor: "bg-neutral",
  },
  {
    icon: <IoShieldOutline className="text-4xl" />,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security with 99.9% uptime guarantee and data protection.",
      bgColor: "bg-neutral",
  },
];

const WhyUs = () => {
  return (
    <section className="py-10">
      <div className="">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-[1px_1px_4px_#92AB911A] hover:shadow-lg transition"
            >
              {/* <div className="mb-4 flex justify-start text-accent bg-neutral">{feature.icon}</div> */}
              <div
              className={`w-11 h-11 text-accent flex items-center justify-center rounded-xl ${feature.bgColor}`}
            >
              {feature.icon}
            </div>
              <h3 className="text-[18px] text-primary font-semibold text-start mb-2">
                {feature.title}
              </h3>
              <p className="text-secondary text-start">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
