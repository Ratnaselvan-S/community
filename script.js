// Navigation Script
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      const targetId = this.textContent.toLowerCase();
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: "smooth",
        });
        // Update active state
        navItems.forEach((nav) => nav.classList.remove("active-nav"));
        this.classList.add("active-nav");
      }
    });
  });

  // Back to top button
  const backToTopButton = document.getElementById("backToTop");
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.remove("opacity-0", "invisible");
      backToTopButton.classList.add("opacity-100", "visible");
    } else {
      backToTopButton.classList.add("opacity-0", "invisible");
      backToTopButton.classList.remove("opacity-100", "visible");
    }

    // Update active nav based on scroll position
    const sections = ["home", "about", "skills", "community-events", "contact"];
    let currentSection = "";
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element && window.pageYOffset >= element.offsetTop - 200) {
        currentSection = section;
      }
    });
    if (currentSection) {
      navItems.forEach((nav) => {
        nav.classList.remove("active-nav");
        if (nav.textContent.toLowerCase() === currentSection) {
          nav.classList.add("active-nav");
        }
      });
    }
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// Community Event Modal Script
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("event-modal");
  const modalContent = document.querySelector("#event-modal .bg-white");

  // Force modal content to fit screen and scroll if necessary
  modalContent.style.maxHeight = "90vh";
  modalContent.style.overflowY = "auto";
  modalContent.style.width = "90vw";
  modalContent.style.maxWidth = "800px";

  const events = {
    "security-event": {
      title: "Security Event",
      content: `
<div class="space-y-6">
  <img src="D:\\Computer Vision\\tech portfolio\\1358905.png" alt="Event Image" class="w-full rounded-lg shadow-md" />

  <div class="space-y-4">
    <h4 class="text-xl font-semibold text-gray-800">Event Details</h4>
    <p class="text-gray-600">
      Security is not just protection — it’s the foundation of trust and resilience. 
      Stronger security today means a safer tomorrow.
    </p>

    <h4 class="text-xl font-semibold text-gray-800">Key Highlights</h4>
    <ul class="list-disc list-inside text-gray-600 space-y-2">
      <li>Latest trends in cybersecurity</li>
      <li>Practical sessions on risk management</li>
      <li>Networking with security professionals</li>
      <li>Workshops on modern defense strategies</li>
    </ul>

    <h4 class="text-xl font-semibold text-gray-800">Topics Covered</h4>
    <div class="flex flex-wrap gap-2">
      <span class="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Cybersecurity</span>
      <span class="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Python</span>
      <span class="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">NLP</span>
    </div>

    <h4 class="text-xl font-semibold text-gray-800">Impact</h4>
    <p class="text-gray-600">
      Participants gain practical knowledge on security measures, enabling them to create safer digital systems and protect organizational trust.
    </p>

    <div class="flex gap-4 mt-8">
      <a href="#" target="_blank"
         class="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
        <i class="ri-github-fill"></i>
        Apply Now
      </a>
      <a href="#" 
         class="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
        <i class="ri-live-line"></i>
        Event Details
      </a>
    </div>
  </div>
</div>
      `,
    },

    "ai-event": {
      title: "Artificial Intelligence Event",
      content: `
<div class="space-y-6">
  <img src="D:\\Computer Vision\\tech portfolio\\a-few-words-about-artificial-intelligence-what-is-it.jpeg" alt="Event Image" class="w-full rounded-lg shadow-md" />

  <div class="space-y-4">
    <h4 class="text-xl font-semibold text-gray-800">Event Details</h4>
    <p class="text-gray-600">
      Artificial Intelligence is not here to replace us, but to amplify human potential. 
      This event focuses on the applications of AI across industries.
    </p>

    <h4 class="text-xl font-semibold text-gray-800">Key Highlights</h4>
    <ul class="list-disc list-inside text-gray-600 space-y-2">
      <li>Hands-on AI workshops</li>
      <li>Case studies from leading tech companies</li>
      <li>Exploring ethical AI and responsible innovation</li>
    </ul>

    <h4 class="text-xl font-semibold text-gray-800">Topics Covered</h4>
    <div class="flex flex-wrap gap-2">
      <span class="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Machine Learning</span>
      <span class="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Python</span>
      <span class="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Pandas</span>
    </div>

    <h4 class="text-xl font-semibold text-gray-800">Impact</h4>
    <p class="text-gray-600">
      Attendees walk away with a strong understanding of AI advancements, ready to apply AI techniques in real-world scenarios.
    </p>

    <div class="flex gap-4 mt-8">
      <a href="#" target="_blank"
         class="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
        <i class="ri-github-fill"></i>
        Apply Now
      </a>
      <a href="#" 
         class="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
        <i class="ri-live-line"></i>
        Event Details
      </a>
    </div>
  </div>
</div>
      `,
    },

    "happiness-event": {
      title: "Happiest Life Event",
      content: `
<div class="space-y-6">
  <img src="D:\\Computer Vision\\tech portfolio\\360_F_484873483_hg1ofIdXbMha5lKEDG3hJBrwKh1oikTq.jpg" alt="Event Image" class="w-full rounded-lg shadow-md" />

  <div class="space-y-4">
    <h4 class="text-xl font-semibold text-gray-800">Event Details</h4>
    <p class="text-gray-600">
      The happiest people don’t have the best of everything, they just make the best of everything. 
      This event is designed to explore positivity, wellness, and a growth mindset.
    </p>

    <h4 class="text-xl font-semibold text-gray-800">Key Highlights</h4>
    <ul class="list-disc list-inside text-gray-600 space-y-2">
      <li>Mindfulness workshops</li>
      <li>Motivational talks</li>
      <li>Interactive activities for well-being</li>
    </ul>

    <h4 class="text-xl font-semibold text-gray-800">Topics Covered</h4>
    <div class="flex flex-wrap gap-2">
      <span class="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Well-being</span>
      <span class="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Mindset</span>
      <span class="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Happiness</span>
    </div>

    <h4 class="text-xl font-semibold text-gray-800">Impact</h4>
    <p class="text-gray-600">
      Participants leave with tools to cultivate happiness, manage stress, and live a more fulfilled life.
    </p>

    <div class="flex gap-4 mt-8">
      <a href="#" target="_blank"
         class="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
        <i class="ri-github-fill"></i>
        Apply Now
      </a>
      <a href="#" 
         class="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
        <i class="ri-live-line"></i>
        Event Details
      </a>
    </div>
  </div>
</div>
      `,
    },
  };

  window.openEventModal = function (eventId) {
    const event = events[eventId];
    if (event) {
      document.getElementById("modal-title").textContent = event.title;
      document.getElementById("modal-content").innerHTML = event.content;
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      setTimeout(() => {
        modalContent.classList.remove("scale-95", "opacity-0");
        modalContent.classList.add("scale-100", "opacity-100");
      }, 10);
    }
  };

  window.closeEventModal = function () {
    modalContent.classList.remove("scale-100", "opacity-100");
    modalContent.classList.add("scale-95", "opacity-0");
    setTimeout(() => {
      modal.classList.remove("flex");
      modal.classList.add("hidden");
    }, 300);
  };

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeEventModal();
    }
  });
});

// Form Handling Script
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector("form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Basic validation
      if (!name || !email || !message) {
        alert("Please fill in all required fields.");
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Simulate form submission
      alert(
        `Thank you, ${name}! Your message has been sent successfully. We'll get back to you soon.`
      );
      contactForm.reset();
    });
  }
});

const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("mobile-sidebar");
const chatbotTrigger = document.getElementById("chatbotTrigger");
const chatbotPanel = document.getElementById("chatbotPanel");
const chatbotClose = document.getElementById("chatbotClose");
const chatbotInput = document.getElementById("chatbotInput");
const chatbotSend = document.getElementById("chatbotSend");
const chatbotMessages = document.getElementById("chatbotMessages");

// Toggle sidebar on menu icon click
menuToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent bubbling to document
  sidebar.classList.toggle("-translate-x-full");
});

// Close sidebar when clicking outside
document.addEventListener("click", (e) => {
  const clickedOutsideSidebar = !sidebar.contains(e.target);
  const clickedOutsideToggle = !menuToggle.contains(e.target);

  if (clickedOutsideSidebar && clickedOutsideToggle) {
    sidebar.classList.add("-translate-x-full");
  }
});

// Close sidebar when clicking any link inside it
sidebar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full");
  });
});

// Toggle panel

// Open panel
chatbotTrigger.addEventListener("click", () => {
  chatbotPanel.classList.remove(
    "invisible",
    "opacity-0",
    "translate-y-4",
    "scale-95"
  );
  chatbotPanel.classList.add("opacity-100", "scale-100", "translate-y-0");
  chatbotInput.focus();
});

// Close panel
chatbotClose.addEventListener("click", () => {
  chatbotPanel.classList.add(
    "invisible",
    "opacity-0",
    "translate-y-4",
    "scale-95"
  );
  chatbotPanel.classList.remove("opacity-100", "scale-100", "translate-y-0");
});

// Send on Enter
chatbotInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    chatbotSend.click();
  }
});

// Send message
chatbotSend.addEventListener("click", () => {
  const userMessage = chatbotInput.value.trim();
  if (!userMessage) return;

  // User bubble (right-aligned, soft green-pink tone)
  const userBubble = document.createElement("div");
  userBubble.className = "flex justify-end px-2";
  userBubble.innerHTML = `
    <div class="bg-pink-100 text-pink-900 p-3 rounded-2xl rounded-br-sm text-sm max-w-[70%] shadow-sm animate-fade-in">
      ${userMessage}
    </div>
  `;
  chatbotMessages.appendChild(userBubble);
  chatbotInput.value = "";
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

  // Loader bubble (left-aligned, soft gray-pink tone)
  const loaderBubble = document.createElement("div");
  loaderBubble.className = "flex justify-start px-2";
  loaderBubble.innerHTML = `
    <div class="bg-white text-gray-600 p-3 rounded-2xl rounded-bl-sm text-sm max-w-[70%] shadow-sm flex items-center gap-2 animate-fade-in">
      <span class="w-2 h-2 rounded-full bg-pink-400 animate-ping"></span>
      <span class="text-xs text-pink-500">Typing...</span>
    </div>
  `;
  chatbotMessages.appendChild(loaderBubble);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

  // Simulate bot response
  setTimeout(() => {
    loaderBubble.remove();
    const botBubble = document.createElement("div");
    botBubble.className = "flex justify-start px-2";
    botBubble.innerHTML = `
      <div class="bg-white text-gray-800 p-3 rounded-2xl rounded-bl-sm text-sm max-w-[70%] shadow-sm animate-fade-in">
        You said: <span class="font-medium text-pink-700">"${userMessage}"</span>. This is a dummy response.
      </div>
    `;
    chatbotMessages.appendChild(botBubble);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }, 1000);
});

// Send on Enter
chatbotInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    chatbotSend.click();
  }
});
