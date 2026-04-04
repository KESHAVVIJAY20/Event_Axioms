import { useState } from "react";

export default function EnquiryModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    country: "India",
    state: "",
    city: "",
    pincode: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Fetch location from pincode
  const fetchLocation = async (pincode) => {
    if (pincode.length !== 6) return;

    try {
      const res = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`
      );
      const data = await res.json();

      if (data[0].Status === "Success") {
        const postOffice = data[0].PostOffice[0];

        setForm((prev) => ({
          ...prev,
          state: postOffice.State,
          city: postOffice.District,
        }));
      }
    } catch (err) {
      console.log("Error fetching location", err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-[90%] md:w-125 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-center">
          Enquiry Form
        </h2>

        <div className="flex flex-col gap-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="border p-3 rounded-lg"
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="border p-3 rounded-lg"
            onChange={handleChange}
          />

          <input
            type="text"
            name="country"
            value={form.country}
            readOnly
            className="border p-3 rounded-lg bg-gray-100"
          />

          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            className="border p-3 rounded-lg"
            value={form.pincode}
            onChange={(e) => {
              handleChange(e);
              fetchLocation(e.target.value);
            }}
          />

          <input
            type="text"
            name="state"
            placeholder="State"
            value={form.state}
            readOnly
            className="border p-3 rounded-lg bg-gray-100"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            readOnly
            className="border p-3 rounded-lg bg-gray-100"
          />

          <button className="bg-black text-white py-3 rounded-lg hover:opacity-90">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}