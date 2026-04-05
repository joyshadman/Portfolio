import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaUser, FaEnvelope, FaPenNib } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";
import "../pagecss/loginpage.css";
import Footer from "../components/Footer";
import Beams from "../components/Beams"; 

// Reusable Input Field Component with data-hoverable and cursor-none
const InputField = ({ type, label, textarea = false, name, value, onChange, icon: Icon }) => (
  <div className="relative mb-10 group">
    <div className="absolute left-0 bottom-2 text-white/30 group-focus-within:text-[#fa9828] transition-colors">
      <Icon />
    </div>
    {textarea ? (
      <textarea
        placeholder=" "
        name={name}
        value={value}
        onChange={onChange}
        data-hoverable
        className="w-full pl-8 py-2 text-white border-b border-white/20 focus:border-[#fa9828] focus:outline-none peer bg-transparent min-h-[100px] transition-all cursor-none"
      />
    ) : (
      <input
        placeholder=" "
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        data-hoverable
        className="w-full pl-8 py-2 text-white border-b border-white/20 focus:border-[#fa9828] focus:outline-none peer bg-transparent transition-all cursor-none"
      />
    )}
    <label
      className={`absolute left-8 text-white/50 pointer-events-none transition-all duration-300 
        ${value ? "-top-5 text-[#fa9828] text-xs uppercase tracking-widest" : "top-2 text-base group-focus-within:-top-5 group-focus-within:text-[#fa9828] group-focus-within:text-xs group-focus-within:tracking-widest"}
      `}
    >
      {label}
    </label>
  </div>
);

const LoginPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", description: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.description) {
      toast.error("Please fill in all fields.");
      return;
    }

    const recipient = "joyshadman@gmail.com";
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Joy,\n\nMy name is ${formData.name} (${formData.email}).\n\nProject Brief:\n${formData.description}`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank");
    toast.success("Redirecting to Gmail...");
  };

  return (
    <div className="relative min-h-screen bg-[#050505]">
      <Toaster position="top-right" />

      <div className="fixed inset-0 z-0">
        <Beams beamNumber={15} lightColor="#fa9828" speed={1.5} opacity={0.2} />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center px-4 pt-32 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-2xl bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-8 md:p-16 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Start a <span className="text-[#fa9828]">Project.</span>
            </h2>
            <p className="text-white/40 font-mono text-sm uppercase tracking-widest">
              Direct line to joyshadman@gmail.com
            </p>
          </div>

          <form onSubmit={handleEmailSubmit} className="space-y-2 cursor-none" >
            <InputField icon={FaUser} type="text" label="Full Name" name="name" value={formData.name} onChange={handleChange} />
            <InputField icon={FaEnvelope} type="email" label="Your Email" name="email" value={formData.email} onChange={handleChange} />
            <InputField icon={FaPenNib} textarea label="How can I help?" name="description" value={formData.description} onChange={handleChange} />

            <button
              type="submit"
              data-hoverable
              className="group relative w-full py-5 bg-[#fa9828] text-black font-bold rounded-2xl overflow-hidden transition-all hover:scale-[1.01] active:scale-95 cursor-none"
            >
              <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                Continue to Gmail
                <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </form>

          <p className="text-center mt-8 text-white/20 text-xs font-mono uppercase tracking-widest">
            Opens Gmail in a new tab
          </p>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default LoginPage;