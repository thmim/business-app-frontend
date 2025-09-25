import React from "react";
import user1Image from '../assets/user-1.png'
import user2Image from '../assets/user-2.png'
import user3Image from '../assets/user-3.jpg'
const testimonials = [
  {
    name: "Farzana H.",
    designation: "Owner, CleanPro Services",
    comment:
      "This app completely changed the way we manage our team. Assigning jobs takes minutes, and we never miss an update.",
    image: user1Image,
  },
  {
    name: "Ahmed R.",
    designation: "Technician",
    comment:
      "I love how easy it is to see my daily tasks and track my time. It makes my job stress-free.",
    image: user2Image,
  },
  {
    name: "Farzana H.",
    designation: "Rafiq M., Homeowner",
    comment:
      "As a client, I love being able to see exactly when my service is on the way. No calls, no guessing — just clear updates.",
    image: user3Image,
  },
];

const Testimonials = () => {
  return (
    <section className="py-10">
      <div className="">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-primary text-center mb-4">
          What Our Users Are Saying
        </h2>
        <p className="text-center text-secondary text-sm mb-10">
          Real stories from clients, employees, and business owners who use our<br/>
          app every day.
        </p>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-7">
          {testimonials.map((user, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-[8px_10px_13px_#92AB911A]"
            >
              <div className="flex items-center mb-4">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold text-primary text-base">{user.name}</h3>
                  <p className="text-secondary text-base">{user.designation}</p>
                </div>
              </div>
              <p className="text-secondary">{user.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
