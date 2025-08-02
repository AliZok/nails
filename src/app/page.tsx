"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-[#5df0ec]/20 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="overflow-hidden">
            <div className="animate-slideInUp text-4xl md:text-6xl font-light text-gray-400 mb-2">
              by
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="animate-slideInUpDelayed text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 to-[#5df0ec] bg-clip-text text-transparent">
              ALI ZOKAEI
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-[#5df0ec]/20">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-pink-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-pink-600">Bliss Nails</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-pink-500 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-pink-500 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-pink-500 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-500 transition-colors">Contact</a>
            </div>
            <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Beautiful Nails,
                <span className="text-pink-500 block">Beautiful You</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience luxury nail care in a serene environment. Our expert technicians create stunning designs that reflect your unique style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors shadow-lg">
                  Book Appointment
                </button>
                <button className="border-2 border-[#5df0ec] text-[#5df0ec] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#5df0ec]/10 transition-colors">
                  View Services
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-200 to-[#5df0ec]/30 rounded-3xl p-8">
                <Image
                  src="/woman-green-nails-glamour-makeup-eyes-beautiful-blond-34563531.jpg"
                  alt="Beautiful nails"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From classic manicures to stunning nail art, we offer a wide range of services to pamper your hands and feet.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-pink-100">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">💅</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Classic Manicure</h3>
              <p className="text-gray-600 mb-6">Professional nail shaping, cuticle care, and polish application for a clean, classic look.</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-pink-500">$35</span>
                <button className="text-pink-500 hover:text-pink-600 font-semibold">Book Now</button>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-[#5df0ec]/30">
              <div className="w-16 h-16 bg-[#5df0ec]/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nail Art Design</h3>
              <p className="text-gray-600 mb-6">Creative and custom nail art designs to express your personality and style.</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-[#5df0ec]">$45</span>
                <button className="text-[#5df0ec] hover:text-[#4dd8d4] font-semibold">Book Now</button>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-pink-100">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🦶</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Pedicure</h3>
              <p className="text-gray-600 mb-6">Relaxing foot care including exfoliation, massage, and polish for beautiful feet.</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-pink-500">$50</span>
                <button className="text-pink-500 hover:text-pink-600 font-semibold">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">About Bliss Nails</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Bliss Nails, we believe that beautiful nails are an essential part of feeling confident and beautiful. Our team of skilled technicians is dedicated to providing you with the highest quality nail care in a relaxing, hygienic environment.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We use only premium products and follow strict sanitation protocols to ensure your safety and satisfaction. Whether you&apos;re looking for a simple manicure or an elaborate nail art design, we&apos;re here to make your vision come to life.
              </p>
              <div className="flex space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#5df0ec]">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500">100+</div>
                  <div className="text-gray-600">Designs Created</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/nail1.jpg"
                alt="Nail art 1"
                width={250}
                height={300}
                className="rounded-2xl shadow-lg"
              />
              <Image
                src="/nail2.jpg"
                alt="Nail art 2"
                width={250}
                height={300}
                className="rounded-2xl shadow-lg mt-8"
              />
              <Image
                src="/nail3.jpg"
                alt="Nail art 3"
                width={250}
                height={300}
                className="rounded-2xl shadow-lg"
              />
              <div className="bg-gradient-to-br from-pink-200 to-[#5df0ec]/30 rounded-2xl p-8 flex items-center justify-center mt-8">
                <div className="text-center">
                  <div className="text-4xl mb-2">✨</div>
                  <div className="text-lg font-semibold text-gray-700">Premium Quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to experience the best nail care? Contact us to book your appointment.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Location</h3>
                  <p className="text-gray-600">123 Beauty Street, Downtown<br />City, State 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#5df0ec]/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">✉️</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">hello@blissnails.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#5df0ec]/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">🕒</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Hours</h3>
                  <p className="text-gray-600">Mon-Sat: 9AM-7PM<br />Sunday: 10AM-5PM</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Tell us about your appointment needs..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-pink-400 mb-4">Bliss Nails</h3>
              <p className="text-gray-300">
                Creating beautiful nails and confident smiles since 2019.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Manicures</li>
                <li>Pedicures</li>
                <li>Nail Art</li>
                <li>Gel Polish</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#home" className="hover:text-pink-400">Home</a></li>
                <li><a href="#services" className="hover:text-pink-400">Services</a></li>
                <li><a href="#about" className="hover:text-pink-400">About</a></li>
                <li><a href="#contact" className="hover:text-pink-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-pink-400 text-xl">📱</a>
                <a href="#" className="text-gray-300 hover:text-pink-400 text-xl">📷</a>
                <a href="#" className="text-gray-300 hover:text-pink-400 text-xl">💬</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Bliss Nails. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
