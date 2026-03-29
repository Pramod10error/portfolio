import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { z } from "zod";
import emailjs from '@emailjs/browser';

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSent(true);
    emailjs.send(
      "service_zp8i8pc",
      "template_aa5zwsi",
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
     },
     "JHrembd3M1EB7z4Qj"
    )
    .then(() => {
      console.log("Email sent ✅");
   })
   .catch((error) => {
     console.log("Error ❌", error);
   });
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 3000);
  };

  const inputClass =
    "w-full bg-muted/50 border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder-transparent focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all peer";

  const labelClass =
    "absolute left-4 top-3 text-muted-foreground text-sm font-body transition-all duration-200 pointer-events-none peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-90";

  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto max-w-2xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Have a question or want to work together? Drop me a message!
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-card rounded-xl p-6 md:p-10 space-y-6"
        >
          {/* Name */}
          <div className="relative floating-label">
            <input
              type="text"
              placeholder=" "
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
              aria-label="Your Name"
            />
            <label className={labelClass}>Your Name</label>
            {errors.name && <p className="text-destructive text-xs mt-1 font-body">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="relative floating-label">
            <input
              type="email"
              placeholder=" "
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
              aria-label="Your Email"
            />
            <label className={labelClass}>Your Email</label>
            {errors.email && <p className="text-destructive text-xs mt-1 font-body">{errors.email}</p>}
          </div>

         {/* Message */}
          <div className="relative floating-label">
            <textarea
              rows={5}
              placeholder=" "
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClass} resize-none`}
              aria-label="Your Message"
           ></textarea>

           <label className={labelClass}>Your Message</label>

            {errors.message && (<p className="text-destructive text-xs mt-1 font-body">{errors.message}</p>)}
          </div>

          <button
            type="submit"
            disabled={sent}
            className="glow-button w-full py-3 rounded-lg text-primary-foreground font-body font-medium text-sm flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {sent ? (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-2"
              >
                <CheckCircle size={18} /> Message Sent!
              </motion.span>
            ) : (
              <>
                <Send size={16} /> Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
