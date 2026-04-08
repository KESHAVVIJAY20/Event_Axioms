import React from "react";

export default function ClientReview() {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      review:
        "Event Axiom made our wedding absolutely magical. Every detail was perfect.",
    },
    {
      id: 2,
      name: "Jane Smith",
      review:
        "The team at Event Axiom was professional and attentive. Our corporate event was a huge success thanks to them.",
    },
    {
      id: 3,
      name: "Emily Johnson",
      review:
        "I can't thank Event Axiom enough for making my birthday party unforgettable. They took care of everything!",
    },
  ];
  return (
    <div
      className="bg-orange-50 text-center mask-[linear-gradient(to_bottom,transparent_0%,black_10%)] 
        drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] py-10 space-y-5 justify-center items-center flex flex-col"
    >
      <p data-aos="fade-left" className="text-4xl font-semibold ">What Clients Says ?</p>
      {/* <p>Our clients love us! Read what they have to say about our services.</p> */}
      <span data-aos="fade-right" className="text-lg italic w-3/4">
        "Event Axiom made our wedding absolutely magical. Every detail was
        perfect."
      </span>
      <div className="overflow-x-auto overflow-hidden py-6">
        <div className="flex gap-6 w-full">
          {reviews.map((review) => (
            <div
            data-aos="fade-up"
            data-aos-duration="1000"
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-md w-full md:w-80 shrink-0 "
            >
              <p className="text-lg font-semibold">{review.name}</p>
              <p className="text-gray-600">"{review.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
