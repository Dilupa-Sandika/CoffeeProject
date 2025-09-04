'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CartSidebar from '../../components/CartSidebar';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-heading font-bold bg-gradient-to-r from-amber-900 to-orange-800 bg-clip-text text-transparent mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-700">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-heading font-bold text-amber-900 mb-6">
                    Contact Information
                  </h2>
                  <p className="text-lg text-gray-700 mb-8">
                    Have a question about our coffee or need assistance with your order? 
                    We're here to help!
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-lg">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-amber-900 mb-1">Phone</h3>
                      <p className="text-gray-600">+61 3 9123 4567</p>
                      <p className="text-sm text-gray-500">Mon-Fri 9AM-5PM AEST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-lg">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-amber-900 mb-1">Email</h3>
                      <p className="text-gray-600">hello@cocoespresso.com.au</p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-lg">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-amber-900 mb-1">Address</h3>
                      <p className="text-gray-600">
                        123 Collins Street<br />
                        Melbourne VIC 3000<br />
                        Australia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-lg">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-amber-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-heading font-bold text-amber-900 mb-6">
                  Send us a Message
                </h2>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <p className="ml-3 text-green-800 font-medium">
                        Thank you! Your message has been sent successfully. We'll get back to you soon.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-amber-900 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-amber-900 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-amber-900 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-amber-900 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-900 to-orange-800 text-white py-4 px-8 rounded-xl text-lg font-bold hover:from-amber-800 hover:to-orange-700 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-amber-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-700">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-3">
                  How long does shipping take?
                </h3>
                <p className="text-gray-600">
                  We ship within 48 hours of roasting. Standard shipping takes 3-5 business days 
                  within Australia. Express shipping options are available.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-3">
                  Do you offer international shipping?
                </h3>
                <p className="text-gray-600">
                  Currently, we only ship within Australia. We're working on expanding 
                  internationally in the near future.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-3">
                  What's your return policy?
                </h3>
                <p className="text-gray-600">
                  We offer a 30-day satisfaction guarantee. If you're not completely satisfied 
                  with your coffee, we'll provide a full refund or replacement.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
}