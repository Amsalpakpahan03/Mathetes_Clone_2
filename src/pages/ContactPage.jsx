import React, { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const mailtoLink = `mailto:mail.mathetes@gmail.com?subject=Contact%20from%20${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    )}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
      setLoading(false);
    }, 2000);
  };

  return (
    <main className="font-[Poppins] text-gray-800">
      {/* HERO SECTION */}
      <div className="relative h-72 md:h-[28rem] flex items-center justify-center overflow-hidden">
        {/* Placeholder shimmer sebelum gambar muncul */}
        {!bgLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse" />
        )}

        {/* Gambar utama (lazy load) */}
        <img
          src="/images/ContactUs.jpg"
          alt="Contact Us Background"
          loading="lazy"
          onLoad={() => setBgLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            bgLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Overlay gelap agar teks tetap terbaca */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Animasi teks muncul */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold text-white z-10 text-center px-4 tracking-wide"
        >
          Contact Us
        </motion.h1>
      </div>

      {/* CONTACT INFO */}
      <section className="bg-slate-100 py-14 md:py-[6.18rem] px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-[6.18rem]"
          >
            Get in Touch With Us
          </motion.h2>

          {/* CONTACT ICONS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-[4rem] text-center mb-[6.18rem]">
            {/* Telepon */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-[#243665] flex items-center justify-center mb-3 hover:bg-green-600 transition"
              >
                <BsTelephone className="text-white text-3xl md:text-4xl" />
              </a>
              <h3 className="text-xl md:text-2xl font-bold mb-1">Phone / WhatsApp</h3>
              <p className="text-gray-600 text-sm md:text-base">+62 812-3456-7890</p>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <a
                href="mailto:mail.mathetes@gmail.com"
                className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-[#243665] flex items-center justify-center mb-3 hover:bg-blue-600 transition"
              >
                <MdOutlineEmail className="text-white text-3xl md:text-4xl" />
              </a>
              <h3 className="text-xl md:text-2xl font-bold mb-1">Email</h3>
              <p className="text-gray-600 text-sm md:text-base">
                mail.mathetes@gmail.com
              </p>
            </motion.div>

            {/* Maps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <a
                href="https://share.google/pPiXTGgjCT9FKyS30"
                target="_blank"
                rel="noopener noreferrer"
                className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-[#243665] flex items-center justify-center mb-3 hover:bg-red-600 transition"
              >
                <IoLocationOutline className="text-white text-3xl md:text-4xl" />
              </a>
              <h3 className="text-xl md:text-2xl font-bold mb-1">Location</h3>
              <p className="text-gray-600 text-sm md:text-base text-center">
                Jalan Surya Timur IIX No. 16, Kedoya Utara, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11520
              </p>
            </motion.div>
          </div>

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl md:max-w-4xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-[1.618rem]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.618rem]">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full bg-slate-200 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#243665]"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  required
                  className="w-full bg-slate-200 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#243665]"
                />
              </div>

              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full bg-slate-200 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#243665]"
              />

              <textarea
                name="message"
                placeholder="Message"
                rows="6"
                required
                className="w-full bg-slate-200 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#243665]"
              ></textarea>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#243665] hover:bg-[#1a2750]"
                  } text-white font-bold py-3 px-12 rounded-lg transition duration-300`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Sending...
                    </span>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
