import { toast } from "sonner"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Toaster } from "@/components/ui/sonner"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone : "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_79taz2m", "template_o69linl", formData, "aPzRloy7lUbsh1bVw")
      .then(
        (result) => {
         toast.success("Email sent successfully!");
        },
        (error) => {
         toast.error("Failed to send email. Please try again.",error);
        }
      );

    setFormData({
      name: "",
      email: "",
      phone:"",
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
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone" className="text-left">
                Phone
              </Label>
              <Input
                type="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
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
                // className="w-full p-2 border rounded"
                required
              />
            </div>
            <Button type="submit" className="w-full">Submit</Button>
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
