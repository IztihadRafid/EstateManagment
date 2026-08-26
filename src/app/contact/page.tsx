"use client";
import Footer from "@/components/Footer/Footer";
import { FrontendLayout } from "@/components/layouts/FrontendLayout";
import Navbar from "@/components/Navbar/Navbar";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
interface InputValues {
  email: string;
  phone: string;
  name: string;
  message: string;
}
export default function Contact() {
  const [values, setValues] = useState<InputValues>({
    email: "",
    phone: "",
    name: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!values.name || !values.email || !values.message || !values.phone) {
      toast.error("Please fill out all fields.");
      return;
    }

    try {
      setLoading(true);
      axios.post("/api/send-contact", {
        ownerName: "Estatemarket",
        propertyTitle: "General Contact Inquiry",
        propertyPrice: "N/A",
        message: values.message,
        senderEmail: values.email,
        senderName: values.name,
        senderPhone: values.phone,
      });

      toast.success("Email sent successfully");
      setValues({
        email: "",
        phone: "",
        name: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email", error);
      toast.error("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FrontendLayout>
      <Navbar variant="solid" />
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-28">
            <h2 className="text-4xl font-bold text-text mb-4">Get in Touch</h2>
            <p className="text-text/60 text-lg leading-relaxed">
              Have a question about this property or want to schedule a viewing?
              Fill out the form and our team will get back to you shortly.
            </p>
          </div>
          <div className="rounded-4xl border border-black/5 bg-card p-8 shadow-sm">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-text mb-1"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="+1 (234) 567-890"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="I'm interested in this property..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </FrontendLayout>
  );
}
