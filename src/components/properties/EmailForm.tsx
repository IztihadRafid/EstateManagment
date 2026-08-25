"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

interface InputValues {
  email: string;
  phone: string;
  name: string;
  message: string;
}
interface EmailFormProps {
  name: string;
  email: string;
  image: string;
  propertyTitle: string;
  propertyPrice: number;
}

export default function EmailForm({
  name,
  email,
  image,
  propertyTitle,
  propertyPrice,
}: EmailFormProps) {
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
      axios.post("/api/send-email", {
        ownerEmail: email,
        ownerName: name,
        propertyTitle: propertyTitle,
        propertyPrice: propertyPrice,
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sticky  top-28 rounded-4xl border border-black/5 bg-card p-8 shadow-sm ">
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt="logo"
          width={50}
          height={50}
          className="rounded-full"
        ></Image>
        <div>
          <h3 className="text-xl font-bold text-text">Iztihad Rafid</h3>
          <p className="text-text/60">Property Agent</p>
        </div>
      </div>
      <div className="mt-8 space-y-4">
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
            className="w-full py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
