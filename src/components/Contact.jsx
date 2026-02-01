import React, { useState } from "react";
import Navbar from "./Navbar";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .sendForm(
        "service_uq065hj",
        "template_gzyn54k",
        e.target,
        "OjDE3vgMKdOkdEboz"
      )
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        setStatus("error");
        console.error(err);
      });
  };

  return (
    <>
      <Navbar />
      <section className="contact">
        <h2>Contact Me</h2>
        <p className="contact-subtitle">
          Feel free to reach out for opportunities or inquiries. I’m open to
          discussing new projects, freelance work, or full‑time roles.
        </p>

        <form onSubmit={onSubmit}>
          <input
            className="contact-input"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={onChange}
            required
          />
          <input
            className="contact-input"
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={onChange}
            required
          />
          <textarea
            className="contact-textarea"
            name="message"
            placeholder="Message"
            rows="5"
            value={form.message}
            onChange={onChange}
            required
          />

          <button
            className="btn btn-primary contact-btn"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="form-msg ok">✅ Thanks! I’ll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="form-msg err">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
        <div className="mail-phone">
          <p>
            <span className="mail-icon">&#9993;</span>{" "}
            <a href="mailto:maheswarankasi@gmail.com" target="_blank">
              maheswarankasi@gmail.com
            </a>
          </p>
          <p>
            <span><FaLinkedin /></span> <a href="https://linkedin.com/in/maheswaran-kasi" target="_blank">LinkedIn</a>
          </p>
          <p>
            <span><FaGithub /></span> <a href="https://github.com/maheswarankasi" target="_blank">GitHub</a>
          </p>
          <p>
            <span className="call-icon">&#128222;</span>{" "}
            <a href="tel:+91 812 454 5697" target="_blank">
              (+91) 812 454 5697
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;

// function ContactForm() {
//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs.sendForm("service_id", "template_id", e.target, "user_id")
//       .then(() => alert("Message sent!"))
//       .catch(err => console.error(err));
//   };

//   return (
//     <form onSubmit={sendEmail}>
//       <input type="text" name="name" placeholder="Your Name" />
//       <input type="email" name="email" placeholder="Your Email" />
//       <textarea name="message" placeholder="Message"></textarea>
//       <button type="submit">Send</button>
//     </form>
//   );
// }
