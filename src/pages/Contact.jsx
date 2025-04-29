import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Toaster } from "@/components/ui/sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Name validation: Ensure it's not empty and only contains valid characters
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name should only contain letters and spaces.";
    }

    // Email validation: Standard email format
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone validation: Ensure it's a valid 10-digit number
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    // Message validation: Ensure it's not empty
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Clear error for the field being edited
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fix the errors before submitting.");
      return;
    }

    emailjs
      .send("service_79taz2m", "template_o69linl", formData, "aPzRloy7lUbsh1bVw")
      .then(
        () => {
          toast.success("Email sent successfully!");
        },
        () => {
          toast.error("Failed to send email. Please try again.");
        }
      );

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-20 border-t " id="contact">
      <Toaster />
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            I'm always excited to discuss new projects and opportunities. Feel
            free to reach out to me using the form below.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-left">
                Name
              </Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-left">
                Email
              </Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone" className="text-left">
                Phone
              </Label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message" className="text-left">
                Message
              </Label>
              <Textarea
                className="min-h-[100px] w-full"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            I'll get back to you as soon as possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
