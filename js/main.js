const mobileToggle = document.querySelector("[data-mobile-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const backToTop = document.querySelector("[data-back-to-top]");

if (mobileToggle && mobileMenu) {
  mobileToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    const expanded = mobileMenu.classList.contains("open");
    mobileToggle.setAttribute("aria-expanded", String(expanded));
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const id = anchor.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const pageName = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("[data-nav]").forEach((link) => {
  const linkPage = link.getAttribute("href");
  if (!linkPage) return;
  if (linkPage === pageName || (pageName === "" && linkPage === "index.html")) {
    link.classList.add("active");
  }
});

window.addEventListener("scroll", () => {
  if (!backToTop) return;
  if (window.scrollY > 350) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const fadeItems = document.querySelectorAll(".fade-up");
if (fadeItems.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  fadeItems.forEach((item, i) => {
    item.style.transitionDelay = `${Math.min(i * 60, 280)}ms`;
    observer.observe(item);
  });
}

const contactForm = document.querySelector("[data-contact-form]");
if (contactForm) {
  const nameInput = contactForm.querySelector("#name");
  const emailInput = contactForm.querySelector("#email");
  const messageInput = contactForm.querySelector("#message");
  const interestInput = contactForm.querySelector("#interest");
  const feedback = contactForm.querySelector("[data-form-message]");

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!feedback || !nameInput || !emailInput || !messageInput) return;

    feedback.textContent = "";
    feedback.className = "form-message";

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      feedback.textContent = "Please fill out all required fields.";
      feedback.classList.add("error");
      return;
    }

    if (!emailPattern.test(email)) {
      feedback.textContent = "Please enter a valid email address.";
      feedback.classList.add("error");
      return;
    }

    if (interestInput && interestInput.required && !interestInput.value) {
      feedback.textContent = "Please choose an area of interest.";
      feedback.classList.add("error");
      return;
    }

    const formData = new FormData(contactForm);
    const useFormSubmit = contactForm.dataset.useFormsubmit === "true";

    if (useFormSubmit) {
      try {
        const response = await fetch(contactForm.action, {
          method: "POST",
          body: formData
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        feedback.textContent = "Thanks! Your request has been sent to the GH AI team.";
        feedback.classList.add("success");
        contactForm.reset();
      } catch (error) {
        feedback.textContent = "Unable to send right now. Please try again in a moment.";
        feedback.classList.add("error");
      }
      return;
    }

    const payload = {
      name,
      email,
      company: contactForm.querySelector("#company")?.value.trim() || "",
      interest: contactForm.querySelector("#interest")?.value || "",
      message
    };

    console.log("GH AI demo request:", payload);
    feedback.textContent = "Thanks! Your request has been received. Our team will reach out shortly.";
    feedback.classList.add("success");
    contactForm.reset();
  });
}
