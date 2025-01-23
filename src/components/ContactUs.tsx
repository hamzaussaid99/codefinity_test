"use client";
import React, { useState } from "react";
import InputField from "./ui/TextInput";
import { formInitialvalue } from "@/lib/types";
import ImageComponent from "./ImageComponent";

const ContactUs = () => {
  const [formData, setFormData] = useState(formInitialvalue);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData(formInitialvalue);
    // Handle form submission logic here
  };

  return (
    <section id="contact" className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 lg:flex lg:items-center lg:justify-between">
        {/* Left Side - Image */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <ImageComponent
            src="/images/contact-us.jpg" // Replace with your image
            alt="Contact Us"
            width={500}
            height={400}
            imageClassName="w-full h-full object-cover"
            wrapperClassName="rounded-md w-full h-full"
          />
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-1/2 bg-white p-8 rounded-md shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <InputField
              label="Name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <InputField
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <InputField
              label="Phone Number"
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
            <InputField
              label="Message"
              type="textarea"
              name="message"
              placeholder="Write your message here"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
