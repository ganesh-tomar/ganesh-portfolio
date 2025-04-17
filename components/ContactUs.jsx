import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // Check if all fields are filled
  useEffect(() => {
    const { user_email, subject, message } = formData;
    setIsFormValid(user_email && subject && message);
  }, [formData]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_dib7m3q",
        "template_bex6h4f",
        form.current,
        "nvW12k7AKCi_-2oCJ"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ user_email: "", subject: "", message: "" });
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message, please try again.");
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section className="projects">
      <h2 data-aos="fade-up" className="font-bold uppercase mb-6">
        LET'S WORK <span className="text-[#626166]">TOGETHER</span>
      </h2>

      <div className="formWrap">
        <form
          data-aos-delay={300}
          data-aos="fade-up"
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
        >
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
              value={formData.user_email}
              onChange={handleChange}
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
              value={formData.subject}
              onChange={handleChange}
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
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 text-sm rounded-lg border shadow-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={`w-full py-3 px-5 text-center rounded-lg font-medium text-white transition duration-200 ${
              isFormValid && !isSubmitting
                ? "bg-orange hover:bg-orange-600 cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
