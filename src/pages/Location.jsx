import React from "react";
import { FaMapMarkerAlt, FaPhone, FaGlobe } from "react-icons/fa";

export default function ContactLocation() {
  const location = "Chandigarh, India";
  const phone = "+91 9465670766";
  const mapLink = `https://www.google.com/maps/place/${encodeURIComponent(
    location
  )}`;

  return (
    <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl shadow-lg max-w-md mx-auto mt-8 border border-teal-100">
      <h2 className="text-3xl font-bold text-teal-700 mb-4">
        Contact & Location
      </h2>

      {/* Location */}
      <div className="flex items-center mb-4">
        <FaMapMarkerAlt className="text-teal-500 text-2xl mr-3" />
        <p className="text-gray-700 text-lg">{location}</p>
      </div>
      <a
        href={mapLink}
        target="_blank"
        rel="noreferrer"
        className="flex items-center text-white bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-lg transition-colors mb-6 w-fit"
      >
        <FaGlobe className="mr-2" /> View on Google Maps
      </a>

      {/* Phone */}
      <div className="flex items-center">
        <FaPhone className="text-teal-500 text-2xl mr-3" />
        <a
          href={`tel:${phone}`}
          className="text-gray-700 text-lg hover:text-teal-600 transition-colors"
        >
          {phone}
        </a>
      </div>
    </div>
  );
}
