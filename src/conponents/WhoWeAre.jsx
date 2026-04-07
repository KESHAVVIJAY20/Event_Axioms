import React from "react";
export default function WhoWeAre() {
  const reviews = [
    {
      id: 1,
      review:
        "When you are searching for the best event management company in Kota, you need a team that understands your vision and executes it flawlessly. That is exactly what we deliver. As Event Axioms Kota, we pride ourselves on being trusted local experts who possess the logistical capability to manage events Pan-India. From the initial concept to the final teardown, we handle the heavy lifting so you can actually enjoy your event.",
    },
  ];
  return (
    <div
      className="bg-orange-50 text-center mask-[linear-gradient(to_bottom,transparent_0%,black_10%)] 
        drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] py-10 space-y-5 justify-center items-center flex flex-col"
    >
      <p data-aos="fade-left" className="text-4xl font-semibold ">
        Who We Are ?
      </p>
      <div className="py-6">
        <div className="flex flex-col gap-6 w-full">
          {reviews.map((review) => (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-md w-full shrink-0 "
            >
              <p className="text-gray-600 max-w-200">"{review.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
