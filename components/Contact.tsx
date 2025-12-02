import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // NOTE FOR DEVELOPER:
    // This is a client-side only example. To make Nodemailer work "for real", 
    // you need a backend server (Node.js/Express) to handle the POST request.
    // 
    // Example backend call would look like this:
    /*
    fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    */

    // Since we are in a frontend demo, we will simulate success.
    console.log("Form Data to be sent via Nodemailer:", formData);
    alert("Thank you for your message! (Simulated Send)");
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-4xl md:text-6xl mb-4 text-gray-900 dark:text-white">
              LET'S <span className="text-gradient">CONNECT</span>
            </h2>
            <div className="inline-block px-4 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 text-sm font-bold tracking-wider uppercase">
              Available for new projects
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info */}
          <ScrollReveal>
            <div className="glass-panel p-8 rounded-3xl space-y-8 bg-white/50 dark:bg-transparent">
              <div>
                <h3 className="font-orbitron text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h3>
                <div className="space-y-4 font-outfit text-gray-700 dark:text-gray-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gray-100 dark:bg-white/5 rounded-lg text-neon-cyan">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">Email</div>
                      <a href="mailto:s.jayanthkumr12@gmail.com" className="hover:text-neon-cyan transition-colors break-all">s.jayanthkumr12@gmail.com</a>
                    </div>
                  </div>
                  
                  {/* Phone Number - Clickable */}
                  <div className="flex items-start space-x-4">
                     <a href="tel:+917306028068" className="p-3 bg-gray-100 dark:bg-white/5 rounded-lg text-neon-cyan hover:bg-neon-cyan hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </a>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">Phone</div>
                      <a href="tel:+917306028068" className="hover:text-neon-cyan transition-colors">+91 7306028068</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                     <div className="p-3 bg-gray-100 dark:bg-white/5 rounded-lg text-neon-cyan">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">Location</div>
                      <p>Bhimavaram, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-orbitron text-xl font-bold text-gray-900 dark:text-white mb-4">Social Profiles</h3>
                <div className="flex flex-wrap gap-4">
                   <a href="https://github.com/Jayanthkumar73" target="_blank" rel="noreferrer" className="p-3 bg-gray-100 dark:bg-white/5 rounded-full hover:bg-neon-cyan hover:text-black transition-all text-gray-700 dark:text-gray-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                   </a>
                   <a href="https://www.linkedin.com/in/s-jayanth-kumar/" target="_blank" rel="noreferrer" className="p-3 bg-gray-100 dark:bg-white/5 rounded-full hover:bg-neon-blue hover:text-black transition-all text-gray-700 dark:text-gray-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                   </a>
                   <a href="#" className="p-3 bg-gray-100 dark:bg-white/5 rounded-full hover:bg-neon-purple hover:text-black transition-all text-gray-700 dark:text-gray-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                   </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal className="delay-200">
            <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-3xl space-y-6 bg-white/50 dark:bg-transparent">
              <h3 className="font-orbitron text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-sm text-gray-600 dark:text-gray-400 font-outfit uppercase tracking-wider">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm text-gray-600 dark:text-gray-400 font-outfit uppercase tracking-wider">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                    />
                 </div>
              </div>
              
              <div className="space-y-2">
                 <label className="text-sm text-gray-600 dark:text-gray-400 font-outfit uppercase tracking-wider">Subject</label>
                 <input 
                   type="text" 
                   name="subject"
                   value={formData.subject}
                   onChange={handleChange}
                   required
                   className="w-full bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                 />
              </div>

              <div className="space-y-2">
                 <label className="text-sm text-gray-600 dark:text-gray-400 font-outfit uppercase tracking-wider">Message</label>
                 <textarea 
                   rows={4}
                   name="message"
                   value={formData.message}
                   onChange={handleChange}
                   required
                   className="w-full bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all resize-none"
                 ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl text-white font-bold tracking-widest uppercase hover:shadow-lg hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};