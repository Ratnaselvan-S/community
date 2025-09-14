import React, { useState, useEffect } from "react";

const HappiestCommunity = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      type: "bot",
      message:
        "Hello! I'm your Fluent Design assistant. How can I help you today?",
    },
  ]);
  const [chatInput, setChatInput] = useState("");

  // Sample data
  const events = [
    {
      id: 1,
      title: "Global Meetup 2025",
      date: "March 15, 2025",
      time: "6:00 PM UTC",
      location: "Virtual",
      description:
        "Join our monthly global meetup where members from around the world come together to share experiences and connect.",
      attendees: 150,
    },
    {
      id: 2,
      title: "Wellness Workshop",
      date: "March 22, 2025",
      time: "3:00 PM UTC",
      location: "Virtual",
      description:
        "A workshop focused on mental health and wellness practices for our community members.",
      attendees: 75,
    },
    {
      id: 3,
      title: "Tech Talk Series",
      date: "March 30, 2025",
      time: "7:00 PM UTC",
      location: "Virtual",
      description:
        "Monthly tech talk featuring community members sharing their expertise in various technology fields.",
      attendees: 120,
    },
  ];

  const members = [
    { id: 1, name: "Sarah Johnson", country: "USA", role: "Community Leader" },
    { id: 2, name: "Ahmed Hassan", country: "Egypt", role: "Tech Enthusiast" },
    { id: 3, name: "Maria Garcia", country: "Spain", role: "Wellness Coach" },
    { id: 4, name: "Raj Patel", country: "India", role: "Developer" },
    { id: 5, name: "Emma Wilson", country: "UK", role: "Designer" },
    { id: 6, name: "Liu Wei", country: "China", role: "Student" },
    { id: 7, name: "Carlos Silva", country: "Brazil", role: "Entrepreneur" },
    { id: 8, name: "Fatima Al-Zahra", country: "UAE", role: "Artist" },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Building Connections Across Cultures",
      excerpt:
        "How our community bridges cultural gaps through understanding and empathy.",
      date: "March 10, 2025",
      author: "Community Team",
    },
    {
      id: 2,
      title: "The Power of Digital Wellness",
      excerpt:
        "Exploring how technology can enhance our mental and physical well-being.",
      date: "March 8, 2025",
      author: "Dr. Sarah Johnson",
    },
    {
      id: 3,
      title: "Innovation Through Collaboration",
      excerpt:
        "Success stories from our community's collaborative projects and initiatives.",
      date: "March 5, 2025",
      author: "Ahmed Hassan",
    },
  ];

  const handleChatSend = () => {
    if (chatInput.trim()) {
      const newMessages = [
        ...chatMessages,
        { type: "user", message: chatInput },
        {
          type: "bot",
          message:
            "Thank you for your message! Our team will get back to you soon.",
        },
      ];
      setChatMessages(newMessages);
      setChatInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleChatSend();
    }
  };

  const openEventModal = (event) => {
    setSelectedEvent(event);
    setIsEventModalOpen(true);
  };

  const closeEventModal = () => {
    setIsEventModalOpen(false);
    setSelectedEvent(null);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-white font-sans antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => scrollToSection("home")}
                className="text-2xl font-bold text-blue-600"
              >
                Hi
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("events")}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Events
              </button>
              <button
                onClick={() => scrollToSection("members")}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Members
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Blog
              </button>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                Login
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Join Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("events")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Events
              </button>
              <button
                onClick={() => scrollToSection("members")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Members
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Blog
              </button>
              <div className="px-3 py-2 space-y-2">
                <button className="block w-full text-left text-blue-600 font-medium">
                  Login
                </button>
                <button className="block w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-center">
                  Join Us
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className="pt-16 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Welcome to <span className="text-blue-600">Hi</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                A global space for growth, kindness, and connection. Let's grow
                happily, smartly, and globally together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105">
                  Join Our Community
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is Happiest Community?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A global, community-driven initiative bringing together people
                from all countries, sectors, and backgrounds. We provide an
                open, inclusive space for connection, collaboration, and
                collective growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow duration-200">
                <div className="w-16 h-16 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Global Connection
                </h3>
                <p className="text-gray-600">
                  Connect with like-minded individuals from every corner of the
                  world.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow duration-200">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-emerald-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Personal Growth
                </h3>
                <p className="text-gray-600">
                  Develop through shared knowledge, experiences, and
                  collaboration.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow duration-200">
                <div className="w-16 h-16 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-amber-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Kindness First
                </h3>
                <p className="text-gray-600">
                  Foster positivity and collective well-being in everything we
                  do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Upcoming Events
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join our community events and connect with amazing people
                worldwide.
              </p>
            </div>
            <div
              class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              id="events-container"
              bis_skin_checked="1"
            >
              <div
                class="bg-white border border-gray-200 rounded-2xl overflow-hidden hover-lift cursor-pointer event-card fade-in"
                data-event-id="1"
                onclick="openEventModal(1)"
                bis_skin_checked="1"
              >
                <div
                  class="h-48 bg-gradient-to-r from-primary to-secondary flex items-center justify-center"
                  bis_skin_checked="1"
                >
                  <span class="text-white text-lg font-semibold">Workshop</span>
                </div>
                <div class="p-6" bis_skin_checked="1">
                  <div
                    class="text-sm text-secondary font-medium mb-2"
                    bis_skin_checked="1"
                  >
                    March 15, 2025
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-3">
                    Global Happiness Summit
                  </h3>
                  <p class="text-gray-600 mb-4">
                    Join experts discussing well-being and positive psychology.
                  </p>
                  <div
                    class="flex items-center justify-between"
                    bis_skin_checked="1"
                  >
                    <span class="text-sm text-gray-500">1247 attending</span>
                    <span class="text-primary font-medium hover:text-blue-700 transition-colors duration-200">
                      Learn More →
                    </span>
                  </div>
                </div>
              </div>

              <div
                class="bg-white border border-gray-200 rounded-2xl overflow-hidden hover-lift cursor-pointer event-card fade-in"
                data-event-id="2"
                onclick="openEventModal(2)"
                bis_skin_checked="1"
              >
                <div
                  class="h-48 bg-gradient-to-r from-primary to-secondary flex items-center justify-center"
                  bis_skin_checked="1"
                >
                  <span class="text-white text-lg font-semibold">Learning</span>
                </div>
                <div class="p-6" bis_skin_checked="1">
                  <div
                    class="text-sm text-secondary font-medium mb-2"
                    bis_skin_checked="1"
                  >
                    March 22, 2025
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-3">
                    Community Skills Workshop
                  </h3>
                  <p class="text-gray-600 mb-4">
                    Interactive workshop for sharing skills and learning
                    together.
                  </p>
                  <div
                    class="flex items-center justify-between"
                    bis_skin_checked="1"
                  >
                    <span class="text-sm text-gray-500">892 attending</span>
                    <span class="text-primary font-medium hover:text-blue-700 transition-colors duration-200">
                      Learn More →
                    </span>
                  </div>
                </div>
              </div>

              <div
                class="bg-white border border-gray-200 rounded-2xl overflow-hidden hover-lift cursor-pointer event-card fade-in"
                data-event-id="3"
                onclick="openEventModal(3)"
                bis_skin_checked="1"
              >
                <div
                  class="h-48 bg-gradient-to-r from-primary to-secondary flex items-center justify-center"
                  bis_skin_checked="1"
                >
                  <span class="text-white text-lg font-semibold">
                    Networking
                  </span>
                </div>
                <div class="p-6" bis_skin_checked="1">
                  <div
                    class="text-sm text-secondary font-medium mb-2"
                    bis_skin_checked="1"
                  >
                    April 5, 2025
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-3">
                    Virtual Coffee Connect
                  </h3>
                  <p class="text-gray-600 mb-4">
                    Casual networking session to meet new global friends.
                  </p>
                  <div
                    class="flex items-center justify-between"
                    bis_skin_checked="1"
                  >
                    <span class="text-sm text-gray-500">654 attending</span>
                    <span class="text-primary font-medium hover:text-blue-700 transition-colors duration-200">
                      Learn More →
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                View All Events
              </button>
            </div>
          </div>
        </section>

        {/* Members Section */}
        <section id="members" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Community
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet amazing community members from around the world.
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="bg-white p-6 rounded-2xl hover:shadow-lg transition-shadow duration-200 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-semibold text-lg">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{member.country}</p>
                  <p className="text-xs text-blue-600 font-medium">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                View All Members
              </button>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Latest News & Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Stay updated with community highlights and inspiring content.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start your journey of growth, connection, and positive impact
              today.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200">
              Get Started Now
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Happiest Community</h3>
              <p className="text-gray-400">
                Building a happier world through connection, growth, and
                kindness.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button className="hover:text-white transition-colors duration-200">
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("events")}
                    className="hover:text-white transition-colors duration-200"
                  >
                    Events
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("members")}
                    className="hover:text-white transition-colors duration-200"
                  >
                    Members
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors duration-200">
                    Guidelines
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("blog")}
                    className="hover:text-white transition-colors duration-200"
                  >
                    Blog
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors duration-200">
                    Support
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors duration-200">
                    FAQ
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors duration-200">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button className="hover:text-white transition-colors duration-200">
                    Newsletter
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors duration-200">
                    Social Media
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors duration-200">
                    Partnerships
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 Happiest Community. Built with love for global
              connection.
            </p>
          </div>
        </div>
      </footer>

      {/* Event Modal */}
      {isEventModalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedEvent.title}
                </h2>
                <button
                  onClick={closeEventModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">{selectedEvent.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {selectedEvent.date} at {selectedEvent.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {selectedEvent.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    {selectedEvent.attendees} attendees expected
                  </div>
                </div>
                <div className="pt-4">
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Register for Event
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chatbot Widget */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setIsChatbotOpen(!isChatbotOpen)}
          className="w-16 h-16 bg-white text-green-700 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group shadow-xl/30 "
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:rotate-12 transition-transform duration-300"
          >
            <path
              d="M12 3C17.5 3 22 6.58 22 11C22 15.42 17.5 19 12 19C10.76 19 9.57 18.82 8.47 18.5L5.5 21C5.22 21.28 4.78 21.28 4.5 21C4.22 20.72 4.22 20.28 4.5 20L6.71 17.79C4.5 16.28 3 13.78 3 11C3 6.58 7.5 3 12 3M12 17C16.42 17 20 14.31 20 11S16.42 5 12 5 4 7.69 4 11C4 13.17 5.45 15.09 7.71 16.24L8.58 16.8L6.89 18.5L8.11 17.71C9.08 17.89 10.53 18 12 18V17Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      {/* Chatbot Panel */}
      {isChatbotOpen && (
        <div className="fixed bottom-28 right-8 w-80 h-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-40 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <h4 className="font-semibold">Fluent Assistant</h4>
            <button
              onClick={() => setIsChatbotOpen(false)}
              className="text-white hover:bg-white/20 p-1 rounded transition-colors duration-200"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`message ${
                  msg.type === "bot" ? "bot-message" : "user-message"
                } max-w-xs ${msg.type === "user" ? "ml-auto" : ""}`}
              >
                <div
                  className={`p-3 rounded-2xl text-sm ${
                    msg.type === "bot"
                      ? "bg-gray-100 text-gray-800 rounded-bl-sm"
                      : "bg-green-500 text-white rounded-br-sm"
                  }`}
                >
                  {msg.message}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
            />
            <button
              onClick={handleChatSend}
              disabled={!chatInput.trim()}
              className="bg-green-500 text-white p-3 rounded-xl hover:bg-green-600 transition-colors duration-200 disabled:opacity-50"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 21L23 12L2 3V10L17 12L2 14V21Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HappiestCommunity;
