import { useState, useEffect } from "react";
import { addRealtimeDocument } from "../config/firebase"; 
import toast, { Toaster } from "react-hot-toast";
import "../pagecss/loginpage.css";
import Footer from "../components/Footer";
import Beams from "../components/Beams"; 

// ✅ Reusable Input field
const InputField = ({ type, label, textarea = false, name, value, onChange }) => (
  <div className="relative mb-8">
    {textarea ? (
      <textarea
        placeholder=" "
        data-hoverable
        name={name}
        value={value}
        onChange={onChange}
        className="w-full py-2 text-white border-b border-white focus:outline-none peer bg-transparent min-h-[100px]"
      />
    ) : (
      <input
        placeholder=" "
        type={type}
        data-hoverable
        name={name}
        value={value}
        onChange={onChange}
        className="w-full py-2 text-white border-b border-white focus:outline-none peer bg-transparent"
      />
    )}
    <label
      className={`absolute left-0 text-white pointer-events-none transition-all duration-500 peer-focus:text-[#fa9828]
        ${value ? "-top-5 text-[#fa9828] text-sm" : "top-2 peer-placeholder-shown:text-white peer-placeholder-shown:text-base"}
      `}
    >
      {label}
    </label>
  </div>
);


const LoginPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", description: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    e.target.classList.remove("input-error");
  };

  const validateForm = () => {
    const { name, email, description } = formData;
    if (!name.trim() || name.trim().length < 2) {
      toast.error("⚠️ Please enter your full name (at least 2 letters).");
      document.querySelector("[name='name']").classList.add("input-error");
      return false;
    }
    if (!/^[A-Za-z\s]+$/.test(name.trim())) {
      toast.error("⚠️ Name can only contain letters and spaces.");
      document.querySelector("[name='name']").classList.add("input-error");
      return false;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("📧 Please enter a valid email address.");
      document.querySelector("[name='email']").classList.add("input-error");
      return false;
    }
    if (!description.trim() || description.trim().length < 10) {
      toast.error("📝 Description must be at least 10 characters long.");
      document.querySelector("[name='description']").classList.add("input-error");
      return false;
    }
    return true;
  };

  const ButtonAnimation = () => (
    <>
      <span className="absolute block top-0 left-[-100%] w-full h-0.5 bg-gradient-to-r from-transparent to-[#fa9828] animate-[btn-anim1_1s_linear_infinite]"></span>
      <span className="absolute block top-[-100%] right-0 w-0.5 h-full bg-gradient-to-b from-transparent to-[#fa9828] animate-[btn-anim2_1s_linear_infinite] animation-delay-250"></span>
      <span className="absolute block bottom-0 right-[-100%] w-full h-0.5 bg-gradient-to-l from-transparent to-[#fa9828] animate-[btn-anim3_1s_linear_infinite] animation-delay-500"></span>
      <span className="absolute block bottom-[-100%] left-0 w-0.5 h-full bg-gradient-to-t from-transparent to-[#fa9828] animate-[btn-anim4_1s_linear_infinite] animation-delay-750"></span>
    </>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      await addRealtimeDocument("users", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", description: "" });
    } catch (error) {
      console.error("Error saving data: ", error);
      toast.error("Failed to submit form. Please try again.");
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Beams Background */}
      <div className="fixed inset-0 w-full h-screen z-10">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>

      {/* Center Form */}
      <div className="flex-grow flex items-center justify-center w-full z-10 relative py-10 mt-30 mb-60 pop">
        <div className="w-[600px] p-12 bg-[#000000]/85 rounded-lg shadow-2xl shadow-black/60">
          {!submitted ? (
            <>
              <h2 className="text-white text-3xl mb-2 text-center font-bold">Welcome</h2>
              <p className="text-white text-center mb-8">Please fill in your details</p>

              <form onSubmit={handleSubmit}>
                <InputField type="text" label="Name" name="name" value={formData.name} onChange={handleChange} />
                <InputField type="email" label="Email" name="email" value={formData.email} onChange={handleChange} />
                <InputField type="text" label="Description" textarea name="description" value={formData.description} onChange={handleChange} />

                <button
                  data-hoverable
                  type="submit"
                  className="relative inline-block px-8 py-3 mt-10 text-[#fa9828] uppercase tracking-wider overflow-hidden transition-all duration-500 hover:bg-[#fa9828] hover:text-white hover:rounded-lg hover:shadow-[0_0_5px_#fa9828,0_0_25px_#fa9828,0_0_50px_#fa9828,0_0_100px_#fa9828] text-lg font-medium"
                >
                  Submit
                  <ButtonAnimation />
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-4xl font-bold text-[#fa9828] mb-4">🎉 Thank You!</h2>
              <p className="text-white text-lg">
                Your details have been successfully submitted. <br />
                We’ll get back to you soon.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="w-full z-10">
        <Footer />
      </div>
    </div>
  );
};

export default LoginPage;
