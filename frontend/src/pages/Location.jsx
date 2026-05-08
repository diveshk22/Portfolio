import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaGlobe, FaMapPin } from "react-icons/fa";

export default function Location() {
  const location = "Chandigarh, India";
  const phone = "+91 9465670766";
  const mapLink = `https://www.google.com/maps/place/${encodeURIComponent(
    location
  )}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Location & Availability
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Location Info */}
          <motion.div 
            className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-blue-100 backdrop-blur-sm"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl">
                <FaMapMarkerAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Current Location</h3>
            </div>

            <motion.div 
              className="flex items-center gap-4 p-6 bg-white/60 rounded-2xl backdrop-blur-sm mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                <FaMapPin className="text-white text-xl" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Based in</p>
                <p className="text-xl font-semibold text-gray-900">{location}</p>
              </div>
            </motion.div>

            <motion.a
              href={mapLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-2xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-2xl transform hover:scale-105 hover:shadow-blue-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGlobe className="text-xl" />
              View on Google Maps
            </motion.a>
          </motion.div>

          {/* Availability Info */}
          <motion.div 
            className="bg-gradient-to-br from-white via-green-50 to-emerald-50 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-green-100 backdrop-blur-sm"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl">
                <FaPhone className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Get In Touch</h3>
            </div>

            <motion.div 
              className="flex items-center gap-4 p-6 bg-white/60 rounded-2xl backdrop-blur-sm mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl">
                <FaPhone className="text-white text-xl" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Call me at</p>
                <a
                  href={`tel:${phone}`}
                  className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  {phone}
                </a>
              </div>
            </motion.div>

            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                <h4 className="font-bold text-green-700 mb-2">🌍 Remote Work</h4>
                <p className="text-gray-700 text-sm">
                  Available for remote projects worldwide. I work across different time zones to accommodate global clients.
                </p>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
                <h4 className="font-bold text-blue-700 mb-2">⚡ Quick Response</h4>
                <p className="text-gray-700 text-sm">
                  I typically respond to messages within 2-4 hours during business hours (IST).
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}