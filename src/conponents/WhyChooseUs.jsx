import React from "react";
export default function WhyChooseUs() {
  const reviews = [
    { 
      id: 1,
      review:
        "Tailored Experiences: We don't believe in cookie-cutter solutions. Every package is customized to fit your specific vision.",
    },
    {
      id: 2,
      review:
        "End-to-End Management: We manage venue selection, vendor negotiation, catering, artist booking, and on-ground execution.",
    },
    {
      id: 3,
      review:
        "National Reach, Local Roots: Proudly based in Kota, but fully equipped to execute flawless events anywhere in India.",
    },
    {
      id: 4,
      review:
        "Let’s Build Something Amazing Together Ready to plan your next milestone? Contact Event Axiom today and let our experts turn your dream event into a reality",
    },
  ];
  return (
    <div
      className="bg-purple-50 text-center mask-[linear-gradient(to_bottom,transparent_0%,black_10%)] 
        drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] py-10 space-y-5 justify-center items-center flex flex-col"
    >
      <p data-aos="fade-left" className="text-4xl font-semibold ">
        Why Choose Event Axiom ?
      </p>
      <div className="py-6">
        <div className="flex flex-col gap-6 w-full">
          {reviews.map((review) => (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              key={review.id}
              className="bg-white p-5 rounded-lg shadow-md w-full shrink-0 "
            >
              <p className="text-gray-600 max-w-250">"{review.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
