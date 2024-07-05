import React, { useState, useEffect } from "react";
import conf from "../conf/conf";

const Contact = () => {
  const [isbtn, setIsbtn] = useState(false);

  useEffect(() => {
    const handleLocationChange = () => {
      setIsbtn(window.location.pathname === "/contact"); // Update state based on URL
    };

    handleLocationChange(); // Call handler initially

    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange); // Cleanup listener
  }, []);

  return (
    <div>
      {isbtn ? (
        <div
          className="min-h-screen flex items-center justify-center file:blur-2xl  bg-cover bg-center p-6"
          style={{
            backgroundImage:
              "url(https://media.istockphoto.com/id/938430202/photo/client-satisfaction-is-our-daily-commitment.jpg?s=612x612&w=0&k=20&c=70HWmOMYPkgOkzYUGVXP9a8bKq-Pk_44ExZ_mI5YUuY=)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            // filter: "blur(2px)",
          }}
        >
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="bg-[#ffffff99] p-6 rounded shadow-md w-full max-w-lg"
          >
            <input
              type="hidden"
              name="access_key"
              value={`${conf.web3formUrl}`}
            />

            <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border rounded border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border  border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-3 py-2 border  border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      ) : (
        <h1>hello</h1>
      )}
    </div>
  );
};

export default Contact;
