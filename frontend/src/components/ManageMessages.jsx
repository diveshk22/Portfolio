// src/admin/components/ManageMessages.jsx
import React, { useState, useEffect } from "react";

export default function ManageMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-800 border-b pb-3">
        Contact Form Submissions
      </h3>
      <div className="space-y-4">
        {messages.length === 0 ? (
          <p className="text-gray-500 italic">
            No incoming submissions found yet.
          </p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg._id}
              className="p-6 border rounded-2xl bg-slate-50 relative group"
            >
              <span className="absolute top-4 right-4 text-xs text-gray-400">
                {new Date(msg.createdAt).toLocaleDateString()}
              </span>
              <h4 className="font-bold text-blue-800">{msg.name}</h4>
              <p className="text-xs text-gray-500 mt-0.5">{msg.email}</p>
              <p className="text-gray-700 mt-3 whitespace-pre-line">
                {msg.message}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
