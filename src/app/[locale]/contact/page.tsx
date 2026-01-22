"use client";
import { FloatIn } from "@/components/FloatIn";
import Footer from "@/components/Footer";
import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ExternalLink,
  MessageSquare,
  Send,
} from "lucide-react";

const offices = [
  {
    id: 1,
    city: "Head office",
    address: "Al-Sulimania, 25 Taha Hussain st., P. O. Box 9390, Riyadh 11413",
    phones: ["+966 11 4169057", "+966 11 4615735", "+966 11 4630853"],
    web: "www.enzar.com",
    email: "info@enzar.com",
    mapUrl: "#",
  },
  {
    id: 2,
    city: "Jeddah Office",
    address: "Al-Salama district, P. O. Box 14994, Jeddah 21434",
    phones: ["+966 11 4169057", "+966 11 4615735", "+966 11 4630853"],
    web: "www.enzar.com",
    email: "info@enzar.com",
    mapUrl: "#",
  },
  {
    id: 3,
    city: "Al Khobar Office",
    address: "Al Akrabia district, P. O. Box 21591, AL Khobar 31952",
    phones: ["+966 11 4169057", "+966 11 4615735", "+966 11 4630853"],
    web: "www.enzar.com",
    email: "info@enzar.com",
    mapUrl: "#",
  },
];

export default function Contact() {
  return (
    <>
      <section className="bg-black py-24 px-6 pt-32">
        <div className="max-w-7xl mx-auto my-10">
          {/* Main Title Section */}
          <div className="text-center mb-24">
            <FloatIn direction="up">
              <h1 className="text-5xl md:text-8xl font-bold text-white mb-6">
                Contact Us
              </h1>
              <p className="text-neutral-400 text-lg md:text-xl tracking-widest uppercase font-medium">
                We're here to help. Reach out to us and we'll be happy to answer
                your questions
              </p>
            </FloatIn>
          </div>
        </div>
      </section>
      <section className="bg-black py-24 px-6 text-white">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* BRANCH INFORMATION */}
          <div className="text-center">
            <FloatIn direction="up">
              <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-neutral-500 mb-16">
                Here you will find all informations about our Branches.
              </p>
            </FloatIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {offices.map((office, idx) => (
                <FloatIn key={office.id} direction="up" delay={idx * 0.1}>
                  <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 text-left relative group hover:border-red-600/30 transition-all h-full">
                    <div className="absolute top-6 right-6 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-[10px] font-bold">
                      {office.id}
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2.5 bg-red-600/10 rounded-xl text-red-600">
                        <MapPin size={20} />
                      </div>
                      <h3 className="text-xl font-bold">{office.city}</h3>
                    </div>

                    <div className="space-y-6 text-sm text-neutral-400">
                      <div className="flex gap-3">
                        <MapPin size={16} className="shrink-0 mt-0.5" />
                        <div>
                          <p className="leading-relaxed mb-2">
                            {office.address}
                          </p>
                          <a
                            href={office.mapUrl}
                            className="text-red-500 flex items-center gap-1 text-xs font-bold hover:underline"
                          >
                            Google Maps <ExternalLink size={12} />
                          </a>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {office.phones.map((phone, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-3">
                            <Phone size={14} className="shrink-0" /> {phone}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        <Globe size={14} /> {office.web}
                      </div>

                      <div className="flex items-center gap-3">
                        <Mail size={14} /> {office.email}
                      </div>
                    </div>
                  </div>
                </FloatIn>
              ))}
            </div>
          </div>

          {/* INTERMEDIATE CTA BANNER */}
          <FloatIn direction="up">
            <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-12 text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">
                Ready to start your project?
              </h2>
              <p className="text-neutral-500 mb-8 max-w-md mx-auto">
                Get in touch with us today and let us transform your vision into
                stunning digital reality.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 mx-auto shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all">
                <MessageSquare size={16} /> Start Conversation
              </button>
            </div>
          </FloatIn>

          {/* MESSAGE FORM */}
          <div className="max-w-3xl mx-auto">
            <FloatIn direction="up">
              <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
                <p className="text-neutral-500 mb-10">
                  Fill out the form below and we'll get back to you as soon as
                  possible
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your first name"
                        className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your last name"
                        className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600/50 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600/50 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="What is your message about?"
                      className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600/50 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Write your message here..."
                      className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600/50 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-[0.98]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </FloatIn>
          </div>

          {/* NEWSLETTER FOOTER */}
          <div className="text-center pt-24 pb-12">
            <FloatIn direction="up">
              <h2 className="text-3xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-neutral-500 mb-8">
                Get the latest news and updates delivered directly to your inbox
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-red-600/50 transition-colors"
                />
                <button className="whitespace-nowrap bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg transition-all">
                  Subscribe
                </button>
              </div>
            </FloatIn>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
