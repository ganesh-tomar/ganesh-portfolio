import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "your_service_id", // Replace with your EmailJS service ID
    //     "your_template_id", // Replace with your EmailJS template ID
    //     form.current,
    //     "your_public_key" // Replace with your EmailJS public key
    //   )
    //   .then(
    //     (result) => {
    //       alert("Message sent successfully!");
    //       form.current.reset();
    //     },
    //     (error) => {
    //       alert("Failed to send message, please try again.");
    //     }
    //   );
  };

  return (
    <section className="projects">
      <h2 className="font-bold uppercase mb-6">
        LET'S WORK <span className="text-[#626166]">TOGETHER</span>
      </h2>

      <div className="formWrap">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              placeholder="you@example.com"
              required
              className="w-full p-2.5 text-sm rounded-lg border shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="What would you like to discuss?"
              required
              className="w-full p-3 text-sm rounded-lg border shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Tell me a bit about your project..."
              className="w-full p-3 text-sm rounded-lg border shadow-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-5 text-center bg-orange text-white font-medium rounded-lg hover:bg-orange-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
