import React, { useRef, useState } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pjwd02b", // replace with your actual service ID
        "template_oa8jicg", // replace with your actual template ID
        form.current,
        "NCqGshcROOu6Dg7TR" // replace with your actual public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="min-h-screen text-white py-16 px-4 md:px-20" id="contact">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Get In Touch</h2>
        <p className="text-gray-400 text-lg">
          Have a project in mind or want to collaborate? I'd love to hear from
          you!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#1c1f2c] p-10 rounded-2xl shadow-lg">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Send me a message</h3>
          <p className="text-gray-400 mb-6">
            Fill out the form below and I'll get back to you as soon as
            possible.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="John Doe"
              required
              className="w-full bg-[#0e101c] text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="john@example.com"
              required
              className="w-full bg-[#0e101c] text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Project Inquiry"
              className="w-full bg-[#0e101c] text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="I'd like to discuss a project opportunity..."
              required
              className="w-full bg-[#0e101c] text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
            ></textarea>

            {/* Hidden field for to_email — REQUIRED */}
            <input
              type="hidden"
              name="to_email"
              value="saurabhkhare893@gmail.com"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md font-semibold"
            >
              Send Message ✉️
            </button>

            {success && (
              <p className="text-green-400 pt-2">Message sent successfully!</p>
            )}
          </form>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Connect with me</h3>
          <p className="text-gray-400 mb-6">
            You can also reach out to me directly through these channels
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-4 bg-[#0e101c] p-4 rounded-lg border border-gray-700">
              <Github className="text-gray-300" />
              <a
                href="https://github.com/saurabh-develop"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                github.com/saurabh-develop
              </a>
            </li>
            <li className="flex items-center gap-4 bg-[#0e101c] p-4 rounded-lg border border-gray-700">
              <Linkedin className="text-gray-300" />
              <a
                href="https://www.linkedin.com/in/saurabhkhare/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/saurabhkhare/
              </a>
            </li>
            <li className="flex items-center gap-4 bg-[#0e101c] p-4 rounded-lg border border-gray-700">
              <Mail className="text-gray-300" />
              <a
                href="mailto:saurabhkhare893@gmail.com"
                className="hover:underline"
              >
                saurabhkhare893@gmail.com
              </a>
            </li>
          </ul>

          {/* Optional Location */}
          <div className="mt-8 text-sm text-gray-500">
            <strong>Current Location:</strong> Prayagraj, India
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
