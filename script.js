// Open/close modals
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");

function openModal(modal) {
  if (modal) modal.classList.add("show");
}

function closeModal(modal) {
  if (modal) modal.classList.remove("show");
}

if (loginBtn) {
  loginBtn.addEventListener("click", () => openModal(loginModal));
}

if (signupBtn) {
  signupBtn.addEventListener("click", () => openModal(signupModal));
}

// Close buttons
document.querySelectorAll(".modal-close").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const targetId = e.currentTarget.dataset.close;
    const modal = document.getElementById(targetId);
    closeModal(modal);
  });
});

// Close on background click
document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal(modal);
    }
  });
});

// Download form (demo behavior)
const downloadForm = document.getElementById("downloadForm");
const videoUrlInput = document.getElementById("videoUrl");
const downloadStatus = document.getElementById("downloadStatus");

if (downloadForm) {
  downloadForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const url = videoUrlInput.value.trim();

    if (!url) {
      downloadStatus.textContent = "Please paste a valid video URL.";
      return;
    }

    // Simple front-end validation
    try {
      new URL(url);
    } catch {
      downloadStatus.textContent = "Invalid URL. Please check and try again.";
      return;
    }

    // Demo only: here you would call your backend API
    downloadStatus.textContent = "Processing your link (demo)...";

    // Simulate API delay
    setTimeout(() => {
      downloadStatus.textContent =
        "Demo only: connect this button to your server/API to generate a download link according to each platform's terms.";
    }, 1200);
  });
}

// Auth forms (prevent default for demo)
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Login form submitted (demo only). Connect to your auth backend.");
  });
}

if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Signup form submitted (demo only). Connect to your auth backend.");
  });
                                }
