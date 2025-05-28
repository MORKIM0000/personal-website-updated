import { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    // For now, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! I will get back to you soon.'
    });
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-secondary py-16">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4">Contact Me</h1>
            <p className="text-lg text-muted-foreground">
              Have questions or want to connect? Reach out using the form below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12">
        <div className="content-container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="md:col-span-1">
                <div className="bg-card rounded-lg border border-border p-6">
                  <h2 className="text-xl font-medium mb-6">Contact Information</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-secondary p-2 rounded-md mr-4">
                        <Mail className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">Email</h3>
                        <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-accent">
                          contact@example.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-secondary p-2 rounded-md mr-4">
                        <MapPin className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">Location</h3>
                        <p className="text-muted-foreground">
                          Boston, Massachusetts
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-secondary p-2 rounded-md mr-4">
                        <Phone className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">Phone</h3>
                        <p className="text-muted-foreground">
                          Available upon request
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-border">
                    <h3 className="text-sm font-medium mb-4">Connect on Social Media</h3>
                    <div className="flex space-x-4">
                      <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-secondary rounded-full text-muted-foreground hover:text-accent transition-colors"
                        aria-label="GitHub"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                      <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-secondary rounded-full text-muted-foreground hover:text-accent transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                      <a 
                        href="https://substack.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-secondary rounded-full text-muted-foreground hover:text-accent transition-colors"
                        aria-label="Substack"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M6 12h12" />
                          <path d="M6 7h12" />
                          <path d="M12 17v-5" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="md:col-span-2">
                <div className="bg-card rounded-lg border border-border p-6">
                  <h2 className="text-xl font-medium mb-6">Send a Message</h2>
                  
                  {formStatus.submitted ? (
                    <div className={`p-4 mb-6 rounded-md ${formStatus.error ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                      {formStatus.message}
                    </div>
                  ) : null}
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-md border border-input bg-background"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-md border border-input bg-background"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-input bg-background"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="blog">Blog Content</option>
                        <option value="mcat">MCAT Resources</option>
                        <option value="study">Study Guides</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-2 rounded-md border border-input bg-background resize-none"
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="inline-flex items-center px-6 py-3 rounded-md bg-accent text-white hover:bg-accent-teal-600 transition-colors"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-secondary">
        <div className="content-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-medium text-center mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-lg font-medium mb-2">Do you offer tutoring services?</h3>
                <p className="text-muted-foreground">
                  Yes, I offer tutoring for pre-med courses and MCAT preparation. Please use the contact form to inquire about availability and rates.
                </p>
              </div>
              
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-lg font-medium mb-2">Can I request a specific study guide?</h3>
                <p className="text-muted-foreground">
                  Absolutely! I'm always looking to expand my collection of study resources. Let me know what topic you're interested in, and I'll consider creating a guide for it.
                </p>
              </div>
              
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-lg font-medium mb-2">Are you available for speaking engagements?</h3>
                <p className="text-muted-foreground">
                  I occasionally speak at events related to pre-med education, bioethics, and medical humanities. Please reach out with details about your event.
                </p>
              </div>
              
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="text-lg font-medium mb-2">How can I contribute to the blog?</h3>
                <p className="text-muted-foreground">
                  I welcome guest contributions from individuals with expertise in medicine, bioethics, education, or related fields. Contact me with your proposed topic and a brief outline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
