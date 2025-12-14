/* ============================================
   Car Rental Reservation Platform - Main JS
   ============================================ */

// ============================================
// Data Model - Cars Array
// ============================================
const carsData = [
  {
    id: "sedan-01",
    name: "Toyota Camry",
    type: "Sedan",
    pricePerDay: 45,
    transmission: "Automatic",
    seats: 5,
    fuel: "Hybrid",
    rating: 4.8,
    bags: 2,
    img: "assets/img/Toyota Camry.jpeg",
    images: [
      "assets/img/Toyota Camry.jpeg",
      "assets/img/Toyota Camry-1.jpeg",
      "assets/img/Toyota Camry-2.jpeg",
    ],
    features: ["Bluetooth", "GPS", "USB Charging", "Air Conditioning"],
    description:
      "Comfortable and fuel-efficient sedan perfect for city driving and long trips.",
  },
  {
    id: "suv-01",
    name: "Honda CR-V",
    type: "SUV",
    pricePerDay: 65,
    transmission: "Automatic",
    seats: 7,
    fuel: "Gasoline",
    rating: 4.9,
    bags: 4,
    img: "assets/img/Honda CR-V.jpeg",
    images: [
      "assets/img/Honda CR-V.jpeg",
      "assets/img/Honda CR-V-1.jpeg",
      "assets/img/Honda CR-V-2.jpeg",
      "assets/img/Honda CR-V-3.jpeg",
      "assets/img/Honda CR-V-4.jpeg",
    ],
    features: [
      "All-Wheel Drive",
      "GPS",
      "USB Charging",
      "Air Conditioning",
      "Third Row",
    ],
    description:
      "Spacious SUV with excellent cargo capacity and advanced safety features.",
  },
  {
    id: "luxury-01",
    name: "BMW 5 Series",
    type: "Luxury",
    pricePerDay: 120,
    transmission: "Automatic",
    seats: 5,
    fuel: "Gasoline",
    rating: 4.9,
    bags: 3,
    img: "assets/img/BMW 5 Series.jpeg",
    images: [
      "assets/img/BMW 5 Series.jpeg",
      "assets/img/BMW 5 Series-1.jpeg",
      "assets/img/BMW 5 Series-2.jpeg",
      "assets/img/BMW 5 Series-3.jpeg",
    ],
    features: [
      "Leather Seats",
      "Premium Sound",
      "GPS",
      "USB Charging",
      "Heated Seats",
    ],
    description:
      "Premium luxury sedan with cutting-edge technology and superior comfort.",
  },
  {
    id: "compact-01",
    name: "Nissan Versa",
    type: "Compact",
    pricePerDay: 30,
    transmission: "Manual",
    seats: 5,
    fuel: "Gasoline",
    rating: 4.5,
    bags: 1,
    img: "assets/img/Nissan Versa.jpeg",
    images: [
      "assets/img/Nissan Versa.jpeg",
      "assets/img/Nissan Versa-1.jpeg",
      "assets/img/Nissan Versa-2.jpeg",
      "assets/img/Nissan Versa-3.jpeg",
    ],
    features: ["USB Charging", "Air Conditioning", "Bluetooth"],
    description: "Economical compact car ideal for budget-conscious travelers.",
  },
  {
    id: "suv-02",
    name: "Ford Explorer",
    type: "SUV",
    pricePerDay: 70,
    transmission: "Automatic",
    seats: 7,
    fuel: "Gasoline",
    rating: 4.7,
    bags: 5,
    img: "assets/img/Ford Explorer.jpeg",
    images: [
      "assets/img/Ford Explorer.jpeg",
      "assets/img/Ford Explorer-1.jpeg",
      "assets/img/Ford Explorer-2.jpeg",
      "assets/img/Ford Explorer-3.jpeg",
    ],
    features: [
      "All-Wheel Drive",
      "GPS",
      "USB Charging",
      "Air Conditioning",
      "Third Row",
      "Towing",
    ],
    description:
      "Powerful SUV with towing capability and premium interior features.",
  },
  {
    id: "sedan-02",
    name: "Hyundai Elantra",
    type: "Sedan",
    pricePerDay: 40,
    transmission: "Automatic",
    seats: 5,
    fuel: "Gasoline",
    rating: 4.6,
    bags: 2,
    img: "assets/img/Hyundai Elantra.jpeg",
    images: [
      "assets/img/Hyundai Elantra.jpeg",
      "assets/img/Hyundai Elantra-1.jpeg",
      "assets/img/Hyundai Elantra-2.jpeg",
      "assets/img/Hyundai Elantra-3.jpeg",
    ],
    features: [
      "Bluetooth",
      "GPS",
      "USB Charging",
      "Air Conditioning",
      "Apple CarPlay",
    ],
    description:
      "Modern sedan with advanced infotainment and excellent fuel economy.",
  },
  {
    id: "luxury-02",
    name: "Mercedes-Benz E-Class",
    type: "Luxury",
    pricePerDay: 130,
    transmission: "Automatic",
    seats: 5,
    fuel: "Gasoline",
    rating: 5.0,
    bags: 3,
    img: "assets/img/Mercedes-Benz E-Class.jpeg",
    images: [
      "assets/img/Mercedes-Benz E-Class.jpeg",
      "assets/img/Mercedes-Benz E-Class-1.jpeg",
      "assets/img/Mercedes-Benz E-Class-2.jpeg",
      "assets/img/Mercedes-Benz E-Class-3.jpeg",
    ],
    features: [
      "Leather Seats",
      "Premium Sound",
      "GPS",
      "USB Charging",
      "Heated Seats",
      "Massage Seats",
    ],
    description:
      "Ultra-luxury sedan with state-of-the-art technology and unparalleled comfort.",
  },
  {
    id: "compact-02",
    name: "Chevrolet Spark",
    type: "Compact",
    pricePerDay: 28,
    transmission: "Manual",
    seats: 4,
    fuel: "Gasoline",
    rating: 4.4,
    bags: 1,
    img: "assets/img/Chevrolet Spark.jpeg",
    images: [
      "assets/img/Chevrolet Spark.jpeg",
      "assets/img/Chevrolet Spark-1.jpeg",
      "assets/img/Chevrolet Spark-2.jpeg",
      "assets/img/Chevrolet Spark-3.jpeg",
    ],
    features: ["USB Charging", "Air Conditioning", "Bluetooth", "Compact Size"],
    description:
      "Ultra-compact city car perfect for tight parking spaces and urban driving.",
  },
  {
    id: "suv-03",
    name: "Jeep Wrangler",
    type: "SUV",
    pricePerDay: 75,
    transmission: "Manual",
    seats: 5,
    fuel: "Gasoline",
    rating: 4.6,
    bags: 3,
    img: "assets/img/Jeep Wrangler.jpeg",
    images: [
      "assets/img/Jeep Wrangler.jpeg",
      "assets/img/Jeep Wrangler-1.jpeg",
      "assets/img/Jeep Wrangler-2.jpeg",
      "assets/img/Jeep Wrangler-3.jpeg",
    ],
    features: [
      "Four-Wheel Drive",
      "GPS",
      "USB Charging",
      "Removable Doors",
      "Off-Road",
    ],
    description:
      "Rugged off-road vehicle perfect for adventure seekers and outdoor enthusiasts.",
  },
  {
    id: "sedan-03",
    name: "Mazda 6",
    type: "Sedan",
    pricePerDay: 50,
    transmission: "Automatic",
    seats: 5,
    fuel: "Gasoline",
    rating: 4.7,
    bags: 2,
    img: "assets/img/Mazda 6.jpeg",
    images: [
      "assets/img/Mazda 6.jpeg",
      "assets/img/Mazda 6-1.jpeg",
      "assets/img/Mazda 6-2.jpeg",
      "assets/img/Mazda 6-3.jpeg",
    ],
    features: [
      "Bluetooth",
      "GPS",
      "USB Charging",
      "Air Conditioning",
      "Premium Interior",
    ],
    description: "Sporty sedan with elegant design and responsive handling.",
  },
];

// ============================================
// Utility Functions
// ============================================

// Get URL parameter
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(amount);
}

// Format date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Calculate days between dates
function calculateDays(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays || 1;
}

// Generate booking reference
function generateBookingReference() {
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 100000)
    .toString()
    .padStart(5, "0");
  return `CRP-${year}-${random}`;
}

// ============================================
// Toast Notifications
// ============================================
function showToast(message, type = "success") {
  const container =
    document.getElementById("toast-container") || createToastContainer();

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.setAttribute("role", "alert");
  toast.setAttribute("aria-live", "polite");

  const icons = {
    success: "✓",
    error: "✕",
    warning: "⚠",
  };

  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || icons.success}</span>
    <span class="toast-message">${message}</span>
    <button class="toast-close" aria-label="Close notification">×</button>
  `;

  container.appendChild(toast);

  const closeBtn = toast.querySelector(".toast-close");
  closeBtn.addEventListener("click", () => removeToast(toast));

  setTimeout(() => removeToast(toast), 5000);
}

function createToastContainer() {
  const container = document.createElement("div");
  container.id = "toast-container";
  container.className = "toast-container";
  document.body.appendChild(container);
  return container;
}

function removeToast(toast) {
  toast.style.animation = "slideIn 0.3s ease reverse";
  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 300);
}

// ============================================
// Modal Component
// ============================================
function openModal(title, content) {
  let overlay = document.getElementById("modal-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "modal-overlay";
    overlay.className = "modal-overlay";
    overlay.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div class="modal-header">
          <h2 class="modal-title" id="modal-title">${title}</h2>
          <button class="modal-close" aria-label="Close modal">×</button>
        </div>
        <div class="modal-body"></div>
        <div class="modal-footer">
          <button class="btn btn-secondary" id="modal-close-btn">Close</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    const closeBtn = overlay.querySelector(".modal-close");
    const footerCloseBtn = overlay.querySelector("#modal-close-btn");
    const closeModal = () => {
      overlay.classList.remove("active");
      overlay.querySelector(".modal-body").innerHTML = "";
    };

    closeBtn.addEventListener("click", closeModal);
    footerCloseBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });

    // Keyboard navigation
    document.addEventListener("keydown", function escHandler(e) {
      if (e.key === "Escape" && overlay.classList.contains("active")) {
        closeModal();
        document.removeEventListener("keydown", escHandler);
      }
    });
  }

  overlay.querySelector("#modal-title").textContent = title;
  overlay.querySelector(".modal-body").innerHTML = content;
  overlay.classList.add("active");

  // Focus management
  const firstFocusable = overlay.querySelector(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (firstFocusable) firstFocusable.focus();
}

// ============================================
// Dark Mode Toggle
// ============================================
function initDarkMode() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateThemeIcon(toggle, newTheme);
    });
    updateThemeIcon(toggle, savedTheme);
  }
}

function updateThemeIcon(toggle, theme) {
  toggle.textContent = theme === "dark" ? "☀️" : "🌙";
  toggle.setAttribute(
    "aria-label",
    `Switch to ${theme === "dark" ? "light" : "dark"} mode`
  );
}

// ============================================
// Navigation
// ============================================
function initNavigation() {
  // Hamburger menu
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close menu when clicking a link
    const navLinks = navMenu.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // Active link highlighting
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    const linkPath = new URL(link.href).pathname;
    if (
      linkPath === currentPath ||
      (currentPath.includes(linkPath) && linkPath !== "/")
    ) {
      link.classList.add("active");
    }
  });
}

// ============================================
// Back to Top Button
// ============================================
function initBackToTop() {
  const button = document.getElementById("back-to-top");
  if (!button) return;

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      button.classList.add("visible");
    } else {
      button.classList.remove("visible");
    }
  });

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ============================================
// Car Cards Rendering
// ============================================
function renderCarCard(car) {
  // Determine correct path based on current page location
  const currentPath = window.location.pathname;
  const detailsPath =
    currentPath.includes("/pages/") || currentPath.endsWith("cars.html")
      ? "car-details.html"
      : "pages/car-details.html";

  // Fix image path for pages in pages/ folder
  const isInPagesFolder = currentPath.includes("/pages/");
  const imageBasePath = isInPagesFolder ? "../" : "";
  const carImageSrc = car.img.startsWith("assets/")
    ? imageBasePath + car.img
    : car.img;

  return `
    <div class="card" data-car-id="${car.id}">
      <img src="${carImageSrc}" alt="${
    car.name
  }" class="card-image" loading="lazy">
      <div class="card-body">
        <h3 class="card-title">${car.name}</h3>
        <p class="card-text">${car.description}</p>
        <div class="card-features">
          <span class="card-feature">${car.type}</span>
          <span class="card-feature">${car.seats} Seats</span>
          <span class="card-feature">${car.transmission}</span>
          <span class="card-feature">${car.fuel}</span>
        </div>
        <div class="card-footer">
          <div>
            <span class="price">${formatCurrency(car.pricePerDay)}</span>
            <span class="price-unit">/day</span>
          </div>
          <div class="rating">
            <span>★</span>
            <span>${car.rating}</span>
          </div>
        </div>
        <a href="${detailsPath}?id=${
    car.id
  }" class="btn btn-primary btn-full" style="margin-top: 1rem;">View Details</a>
      </div>
    </div>
  `;
}

function renderCars(cars, containerId = "cars-container") {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (cars.length === 0) {
    container.innerHTML =
      '<p style="text-align: center; padding: 2rem;">No cars found matching your criteria.</p>';
    return;
  }

  container.innerHTML = cars.map((car) => renderCarCard(car)).join("");
}

// ============================================
// Car Filtering & Sorting
// ============================================
function filterCars() {
  const searchTerm = (
    document.getElementById("car-search")?.value || ""
  ).toLowerCase();
  const priceMin = parseFloat(document.getElementById("price-min")?.value || 0);
  const priceMax = parseFloat(
    document.getElementById("price-max")?.value || 1000
  );
  const transmission =
    document.getElementById("filter-transmission")?.value || "all";
  const seats = document.getElementById("filter-seats")?.value || "all";
  const fuel = document.getElementById("filter-fuel")?.value || "all";
  const rating = parseFloat(
    document.getElementById("filter-rating")?.value || 0
  );

  let filtered = carsData.filter((car) => {
    const matchesSearch =
      car.name.toLowerCase().includes(searchTerm) ||
      car.type.toLowerCase().includes(searchTerm);
    const matchesPrice =
      car.pricePerDay >= priceMin && car.pricePerDay <= priceMax;
    const matchesTransmission =
      transmission === "all" || car.transmission === transmission;
    const matchesSeats = seats === "all" || car.seats === parseInt(seats);
    const matchesFuel = fuel === "all" || car.fuel === fuel;
    const matchesRating = car.rating >= rating;

    return (
      matchesSearch &&
      matchesPrice &&
      matchesTransmission &&
      matchesSeats &&
      matchesFuel &&
      matchesRating
    );
  });

  // Sorting
  const sortBy = document.getElementById("sort-cars")?.value || "default";
  switch (sortBy) {
    case "price-low":
      filtered.sort((a, b) => a.pricePerDay - b.pricePerDay);
      break;
    case "price-high":
      filtered.sort((a, b) => b.pricePerDay - a.pricePerDay);
      break;
    case "rating":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
  }

  renderCars(filtered);
  updatePriceRangeDisplay();
}

function initFilters() {
  const filterInputs = [
    "car-search",
    "price-min",
    "price-max",
    "filter-transmission",
    "filter-seats",
    "filter-fuel",
    "filter-rating",
    "sort-cars",
  ];

  filterInputs.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener("input", filterCars);
      element.addEventListener("change", filterCars);
    }
  });

  // Price range display
  const priceMinInput = document.getElementById("price-min");
  const priceMaxInput = document.getElementById("price-max");
  if (priceMinInput && priceMaxInput) {
    priceMinInput.addEventListener("input", updatePriceRangeDisplay);
    priceMaxInput.addEventListener("input", updatePriceRangeDisplay);
  }

  // Initial render
  filterCars();
}

function updatePriceRangeDisplay() {
  const priceMin = document.getElementById("price-min");
  const priceMax = document.getElementById("price-max");
  const priceDisplay = document.getElementById("price-range-display");

  if (priceMin && priceMax && priceDisplay) {
    priceDisplay.textContent = `$${priceMin.value} - $${priceMax.value}`;
  }
}

// ============================================
// Car Details Page
// ============================================
function initCarDetails() {
  const carId = getUrlParameter("id");
  if (!carId) {
    window.location.href = "cars.html";
    return;
  }

  const car = carsData.find((c) => c.id === carId);
  if (!car) {
    window.location.href = "cars.html";
    return;
  }

  // Render car details (car name will be in the innerHTML below)

  const detailsContent = document.querySelector(".details-content");
  if (detailsContent) {
    detailsContent.innerHTML = `
      <h1>${car.name}</h1>
      <div class="rating" style="margin-bottom: 1rem;">
        <span>★</span>
        <span>${car.rating}</span>
        <span style="color: var(--text-secondary); margin-left: 0.5rem;">(${
          car.type
        })</span>
      </div>
      <p>${car.description}</p>
      <div style="margin: 1.5rem 0;">
        <h3>Features</h3>
        <ul style="list-style: none; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.5rem; margin-top: 1rem;">
          ${car.features
            .map(
              (f) =>
                `<li style="padding: 0.5rem; background: var(--bg-secondary); border-radius: var(--radius-md);">✓ ${f}</li>`
            )
            .join("")}
        </ul>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
        <div><strong>Seats:</strong> ${car.seats}</div>
        <div><strong>Transmission:</strong> ${car.transmission}</div>
        <div><strong>Fuel:</strong> ${car.fuel}</div>
        <div><strong>Bags:</strong> ${car.bags}</div>
      </div>
      <div class="price-breakdown">
        <h3>Pricing</h3>
        <div class="price-row">
          <span>Base Price (per day)</span>
          <span>${formatCurrency(car.pricePerDay)}</span>
        </div>
        <div class="price-row">
          <span>Estimated Total (3 days)</span>
          <span>${formatCurrency(car.pricePerDay * 3)}</span>
        </div>
      </div>
      <a href="reservation.html?carId=${
        car.id
      }" class="btn btn-primary" style="margin-top: 1.5rem; display: inline-block;">Reserve Now</a>
    `;
  }

  // Image gallery
  const mainImage = document.getElementById("main-image");
  const thumbnailGrid = document.querySelector(".thumbnail-grid");

  // Use images array if available, otherwise use single img
  const carImages = car.images || [car.img];
  // Fix path for pages in pages/ folder
  const currentPath = window.location.pathname;
  const isInPagesFolder = currentPath.includes("/pages/");
  const imageBasePath = isInPagesFolder ? "../" : "";

  // Normalize image paths
  const normalizedImages = carImages.map((img) => {
    if (img.startsWith("assets/")) {
      return imageBasePath + img;
    }
    return img;
  });

  if (mainImage) {
    mainImage.src = normalizedImages[0];
    mainImage.alt = car.name;
  }

  // Dynamically create thumbnails for all images
  if (thumbnailGrid) {
    // Clear existing thumbnails
    thumbnailGrid.innerHTML = "";

    // Create thumbnail for each image
    normalizedImages.forEach((imgSrc, index) => {
      const thumb = document.createElement("img");
      thumb.src = imgSrc;
      thumb.alt = `${car.name} view ${index + 1}`;
      thumb.className = "thumbnail";
      thumb.tabIndex = 0;
      thumb.setAttribute("role", "button");
      thumb.setAttribute("aria-label", `View car image ${index + 1}`);

      // Add click handler
      thumb.addEventListener("click", () => {
        if (mainImage) {
          mainImage.src = imgSrc;
        }
        thumbnailGrid
          .querySelectorAll(".thumbnail")
          .forEach((t) => t.classList.remove("active"));
        thumb.classList.add("active");
      });

      // Add keyboard support
      thumb.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          thumb.click();
        }
      });

      thumbnailGrid.appendChild(thumb);
    });

    // Set first thumbnail as active
    const firstThumb = thumbnailGrid.querySelector(".thumbnail");
    if (firstThumb) {
      firstThumb.classList.add("active");
    }
  }
}

// ============================================
// Reservation Form
// ============================================
let currentStep = 1;
const totalSteps = 3;

function initReservationForm() {
  // Pre-fill car if coming from car details
  const carId = getUrlParameter("carId");
  if (carId) {
    const carSelect = document.getElementById("reservation-car");
    if (carSelect) {
      carSelect.value = carId;
      updateReservationPrice();
    }
  }

  // Step navigation
  document.getElementById("next-step")?.addEventListener("click", nextStep);
  document.getElementById("prev-step")?.addEventListener("click", prevStep);

  // Form validation
  const form = document.getElementById("reservation-form");
  if (form) {
    form.addEventListener("submit", handleReservationSubmit);

    // Real-time validation
    const inputs = form.querySelectorAll("input, select, textarea");
    inputs.forEach((input) => {
      input.addEventListener("blur", () => validateField(input));
      input.addEventListener("input", () => {
        if (input.classList.contains("error")) {
          validateField(input);
        }
      });
    });
  }

  // Add-ons price update
  const addons = document.querySelectorAll(
    '.addon-item input[type="checkbox"]'
  );
  addons.forEach((addon) => {
    addon.addEventListener("change", updateReservationPrice);
  });

  // Car selection change
  document
    .getElementById("reservation-car")
    ?.addEventListener("change", updateReservationPrice);
  document
    .getElementById("pickup-date")
    ?.addEventListener("change", updateReservationPrice);
  document
    .getElementById("return-date")
    ?.addEventListener("change", updateReservationPrice);

  // Character counter
  const messageField = document.getElementById("special-requests");
  if (messageField) {
    messageField.addEventListener("input", updateCharacterCounter);
  }

  updateStepDisplay();
  updateReservationPrice();
}

function nextStep() {
  if (validateCurrentStep()) {
    if (currentStep < totalSteps) {
      currentStep++;
      updateStepDisplay();
    }
  }
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    updateStepDisplay();
  }
}

function updateStepDisplay() {
  // Update step indicators
  for (let i = 1; i <= totalSteps; i++) {
    const step = document.querySelector(`.step[data-step="${i}"]`);
    if (step) {
      step.classList.remove("active", "completed");
      if (i < currentStep) {
        step.classList.add("completed");
      } else if (i === currentStep) {
        step.classList.add("active");
      }
    }
  }

  // Update step content
  document.querySelectorAll(".step-content").forEach((content, index) => {
    content.classList.remove("active");
    if (index + 1 === currentStep) {
      content.classList.add("active");
    }
  });

  // Update buttons
  const prevBtn = document.getElementById("prev-step");
  const nextBtn = document.getElementById("next-step");
  const submitBtn = document.getElementById("submit-reservation");

  if (prevBtn) {
    prevBtn.style.display = currentStep === 1 ? "none" : "inline-flex";
  }

  if (nextBtn) {
    if (currentStep === totalSteps) {
      nextBtn.style.display = "none";
    } else {
      nextBtn.style.display = "inline-flex";
      nextBtn.textContent = "Next Step";
    }
  }

  if (submitBtn) {
    submitBtn.style.display =
      currentStep === totalSteps ? "inline-flex" : "none";
  }
}

function validateCurrentStep() {
  let isValid = true;
  const currentStepContent = document.querySelector(".step-content.active");
  if (!currentStepContent) return false;

  const requiredFields = currentStepContent.querySelectorAll("[required]");
  requiredFields.forEach((field) => {
    if (!validateField(field)) {
      isValid = false;
    }
  });

  if (!isValid) {
    showToast("Please fill in all required fields correctly.", "error");
    const firstError = currentStepContent.querySelector(".error");
    if (firstError) {
      firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      firstError.focus();
    }
  }

  return isValid;
}

function validateField(field) {
  const value = field.value.trim();
  const fieldGroup = field.closest(".form-group");
  let isValid = true;
  let errorMessage = "";

  // Remove previous error
  fieldGroup?.classList.remove("error");
  const existingError = fieldGroup?.querySelector(".error-message");
  if (existingError) existingError.remove();

  // Required validation
  if (field.hasAttribute("required") && !value) {
    isValid = false;
    errorMessage = "This field is required.";
  }

  // Email validation
  if (field.type === "email" && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      errorMessage = "Please enter a valid email address.";
    }
  }

  // Phone validation
  if (field.type === "tel" && value) {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(value) || value.replace(/\D/g, "").length < 10) {
      isValid = false;
      errorMessage = "Please enter a valid phone number.";
    }
  }

  // Date validation
  if (field.type === "date" && value) {
    const date = new Date(value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) {
      isValid = false;
      errorMessage = "Date cannot be in the past.";
    }
  }

  // Return date must be after pickup date
  if (field.id === "return-date" && value) {
    const pickupDate = document.getElementById("pickup-date")?.value;
    if (pickupDate && new Date(value) <= new Date(pickupDate)) {
      isValid = false;
      errorMessage = "Return date must be after pickup date.";
    }
  }

  if (!isValid && fieldGroup) {
    fieldGroup.classList.add("error");
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = errorMessage;
    errorDiv.setAttribute("role", "alert");
    errorDiv.setAttribute("aria-live", "polite");
    fieldGroup.appendChild(errorDiv);
  }

  return isValid;
}

function updateReservationPrice() {
  const carId = document.getElementById("reservation-car")?.value;
  const pickupDate = document.getElementById("pickup-date")?.value;
  const returnDate = document.getElementById("return-date")?.value;

  if (!carId || !pickupDate || !returnDate) {
    document.getElementById("total-price")?.setAttribute("textContent", "$0") ||
      (document.getElementById("total-price") &&
        (document.getElementById("total-price").textContent = "$0"));
    return;
  }

  const car = carsData.find((c) => c.id === carId);
  if (!car) return;

  const days = calculateDays(pickupDate, returnDate);
  let total = car.pricePerDay * days;

  // Add-ons
  const gps = document.getElementById("addon-gps")?.checked ? 10 : 0;
  const childSeat = document.getElementById("addon-child-seat")?.checked
    ? 15
    : 0;
  const insurance = document.getElementById("addon-insurance")?.checked
    ? 25
    : 0;

  total += (gps + childSeat + insurance) * days;

  const totalPriceEl = document.getElementById("total-price");
  if (totalPriceEl) {
    totalPriceEl.textContent = formatCurrency(total);
  }

  // Update breakdown
  const breakdownEl = document.getElementById("price-breakdown-review");
  if (breakdownEl) {
    breakdownEl.innerHTML = `
      <div class="price-row">
        <span>${car.name} (${days} days)</span>
        <span>${formatCurrency(car.pricePerDay * days)}</span>
      </div>
      ${
        gps > 0
          ? `<div class="price-row"><span>GPS Navigation</span><span>${formatCurrency(
              gps * days
            )}</span></div>`
          : ""
      }
      ${
        childSeat > 0
          ? `<div class="price-row"><span>Child Seat</span><span>${formatCurrency(
              childSeat * days
            )}</span></div>`
          : ""
      }
      ${
        insurance > 0
          ? `<div class="price-row"><span>Insurance</span><span>${formatCurrency(
              insurance * days
            )}</span></div>`
          : ""
      }
      <div class="price-row">
        <span><strong>Total</strong></span>
        <span><strong>${formatCurrency(total)}</strong></span>
      </div>
    `;
  }
}

function updateCharacterCounter() {
  const field = document.getElementById("special-requests");
  const counter = document.getElementById("char-counter");
  if (!field || !counter) return;

  const current = field.value.length;
  const max = 500;
  counter.textContent = `${current}/${max} characters`;

  counter.classList.remove("warning", "error");
  if (current > max * 0.9) {
    counter.classList.add("warning");
  }
  if (current > max) {
    counter.classList.add("error");
  }
}

function handleReservationSubmit(e) {
  e.preventDefault();

  if (!validateCurrentStep()) {
    return;
  }

  // Validate all steps
  for (let i = 1; i <= totalSteps; i++) {
    const stepContent = document.querySelector(
      `.step-content[data-step="${i}"]`
    );
    if (stepContent) {
      const requiredFields = stepContent.querySelectorAll("[required]");
      requiredFields.forEach((field) => {
        if (!validateField(field)) {
          currentStep = i;
          updateStepDisplay();
          return;
        }
      });
    }
  }

  // Collect form data
  const formData = {
    bookingReference: generateBookingReference(),
    carId: document.getElementById("reservation-car").value,
    firstName: document.getElementById("first-name").value,
    lastName: document.getElementById("last-name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    pickupLocation: document.getElementById("pickup-location").value,
    pickupDate: document.getElementById("pickup-date").value,
    pickupTime: document.getElementById("pickup-time").value,
    returnDate: document.getElementById("return-date").value,
    returnTime: document.getElementById("return-time").value,
    addons: {
      gps: document.getElementById("addon-gps")?.checked || false,
      childSeat: document.getElementById("addon-child-seat")?.checked || false,
      insurance: document.getElementById("addon-insurance")?.checked || false,
    },
    specialRequests: document.getElementById("special-requests").value,
    status: "confirmed",
    createdAt: new Date().toISOString(),
  };

  // Save to localStorage
  localStorage.setItem("currentBooking", JSON.stringify(formData));

  showToast("Reservation confirmed! Redirecting to your booking...", "success");

  setTimeout(() => {
    window.location.href = "my-booking.html";
  }, 1500);
}

// ============================================
// My Booking Page
// ============================================
function initMyBooking() {
  const bookingData = localStorage.getItem("currentBooking");

  if (!bookingData) {
    const container = document.getElementById("booking-container");
    if (container) {
      container.innerHTML = `
        <div style="text-align: center; padding: 3rem;">
          <h2>No Active Booking</h2>
          <p>You don't have any active reservations.</p>
          <a href="reservation.html" class="btn btn-primary" style="margin-top: 1rem;">Make a Reservation</a>
        </div>
      `;
    }
    return;
  }

  const booking = JSON.parse(bookingData);
  const car = carsData.find((c) => c.id === booking.carId);

  if (!car) {
    showToast("Car information not found.", "error");
    return;
  }

  const days = calculateDays(booking.pickupDate, booking.returnDate);
  let total = car.pricePerDay * days;
  total += (booking.addons.gps ? 10 : 0) * days;
  total += (booking.addons.childSeat ? 15 : 0) * days;
  total += (booking.addons.insurance ? 25 : 0) * days;

  const container = document.getElementById("booking-container");
  if (container) {
    container.innerHTML = `
      <div class="booking-summary">
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
          <div>
            <h2>Booking Details</h2>
            <p style="color: var(--text-secondary); margin-top: 0.5rem;">Reference: <strong>${
              booking.bookingReference
            }</strong></p>
          </div>
          <span class="status-badge ${booking.status}">${
      booking.status.charAt(0).toUpperCase() + booking.status.slice(1)
    }</span>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
          <div>
            <h3>Car Information</h3>
            <p><strong>${car.name}</strong></p>
            <p>${car.type} • ${car.seats} Seats • ${car.transmission}</p>
          </div>
          <div>
            <h3>Pickup Details</h3>
            <p><strong>Location:</strong> ${booking.pickupLocation}</p>
            <p><strong>Date:</strong> ${formatDate(booking.pickupDate)}</p>
            <p><strong>Time:</strong> ${booking.pickupTime}</p>
          </div>
          <div>
            <h3>Return Details</h3>
            <p><strong>Date:</strong> ${formatDate(booking.returnDate)}</p>
            <p><strong>Time:</strong> ${booking.returnTime}</p>
            <p><strong>Duration:</strong> ${days} day${
      days !== 1 ? "s" : ""
    }</p>
          </div>
          <div>
            <h3>Customer Information</h3>
            <p><strong>${booking.firstName} ${booking.lastName}</strong></p>
            <p>${booking.email}</p>
            <p>${booking.phone}</p>
          </div>
        </div>
        
        ${
          booking.addons.gps ||
          booking.addons.childSeat ||
          booking.addons.insurance
            ? `
          <div style="margin: 1.5rem 0;">
            <h3>Add-ons</h3>
            <ul style="list-style: none; padding: 0;">
              ${booking.addons.gps ? "<li>✓ GPS Navigation</li>" : ""}
              ${booking.addons.childSeat ? "<li>✓ Child Seat</li>" : ""}
              ${booking.addons.insurance ? "<li>✓ Insurance</li>" : ""}
            </ul>
          </div>
        `
            : ""
        }
        
        ${
          booking.specialRequests
            ? `
          <div style="margin: 1.5rem 0;">
            <h3>Special Requests</h3>
            <p>${booking.specialRequests}</p>
          </div>
        `
            : ""
        }
        
        <div class="price-breakdown" style="margin-top: 1.5rem;">
          <h3>Price Breakdown</h3>
          <div class="price-row">
            <span>${car.name} (${days} days)</span>
            <span>${formatCurrency(car.pricePerDay * days)}</span>
          </div>
          ${
            booking.addons.gps
              ? `<div class="price-row"><span>GPS Navigation</span><span>${formatCurrency(
                  10 * days
                )}</span></div>`
              : ""
          }
          ${
            booking.addons.childSeat
              ? `<div class="price-row"><span>Child Seat</span><span>${formatCurrency(
                  15 * days
                )}</span></div>`
              : ""
          }
          ${
            booking.addons.insurance
              ? `<div class="price-row"><span>Insurance</span><span>${formatCurrency(
                  25 * days
                )}</span></div>`
              : ""
          }
          <div class="price-row">
            <span><strong>Total</strong></span>
            <span><strong>${formatCurrency(total)}</strong></span>
          </div>
        </div>
        
        <div class="booking-actions">
          <button class="btn btn-primary" onclick="window.print()">Print Receipt</button>
          <button class="btn btn-secondary" onclick="editBooking()">Edit Dates</button>
          <button class="btn btn-danger" onclick="cancelBooking()">Cancel Booking</button>
        </div>
      </div>
    `;
  }
}

function cancelBooking() {
  if (confirm("Are you sure you want to cancel this booking?")) {
    const bookingData = localStorage.getItem("currentBooking");
    if (bookingData) {
      const booking = JSON.parse(bookingData);
      booking.status = "cancelled";
      localStorage.setItem("currentBooking", JSON.stringify(booking));
      showToast("Booking cancelled successfully.", "warning");
      initMyBooking();
    }
  }
}

function editBooking() {
  const bookingData = localStorage.getItem("currentBooking");
  if (bookingData) {
    const booking = JSON.parse(bookingData);
    const newPickupDate = prompt(
      "Enter new pickup date (YYYY-MM-DD):",
      booking.pickupDate
    );
    const newReturnDate = prompt(
      "Enter new return date (YYYY-MM-DD):",
      booking.returnDate
    );

    if (
      newPickupDate &&
      newReturnDate &&
      new Date(newReturnDate) > new Date(newPickupDate)
    ) {
      booking.pickupDate = newPickupDate;
      booking.returnDate = newReturnDate;
      localStorage.setItem("currentBooking", JSON.stringify(booking));
      showToast("Booking dates updated successfully.", "success");
      initMyBooking();
    } else {
      showToast(
        "Invalid dates. Return date must be after pickup date.",
        "error"
      );
    }
  }
}

// Make functions globally available
window.cancelBooking = cancelBooking;
window.editBooking = editBooking;

// ============================================
// Contact Form
// ============================================
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validate form
    const name = document.getElementById("contact-name");
    const email = document.getElementById("contact-email");
    const message = document.getElementById("contact-message");

    let isValid = true;
    [name, email, message].forEach((field) => {
      if (!validateField(field)) {
        isValid = false;
      }
    });

    if (isValid) {
      showToast(
        "Thank you for your message! We will get back to you soon.",
        "success"
      );
      form.reset();
      updateContactCharacterCounter();
    }
  });

  const messageField = document.getElementById("contact-message");
  if (messageField) {
    messageField.addEventListener("input", updateContactCharacterCounter);
  }
}

function updateContactCharacterCounter() {
  const field = document.getElementById("contact-message");
  const counter = document.getElementById("contact-char-counter");
  if (!field || !counter) return;

  const current = field.value.length;
  const max = 1000;
  counter.textContent = `${current}/${max} characters`;

  counter.classList.remove("warning", "error");
  if (current > max * 0.9) {
    counter.classList.add("warning");
  }
  if (current > max) {
    counter.classList.add("error");
  }
}

// ============================================
// FAQ Accordion
// ============================================
function initFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    if (question) {
      question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        // Close all items
        faqItems.forEach((i) => i.classList.remove("active"));

        // Open clicked item if it wasn't active
        if (!isActive) {
          item.classList.add("active");
        }
      });

      // Keyboard navigation
      question.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          question.click();
        }
      });
    }
  });
}

// ============================================
// Homepage Features
// ============================================
function initHomepage() {
  // Featured cars
  const featuredCars = carsData.slice(0, 6);
  renderCars(featuredCars, "featured-cars");

  // Search widget form
  const searchForm = document.getElementById("home-search-form");
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const location = document.getElementById("home-pickup-location")?.value;
      const pickupDate = document.getElementById("home-pickup-date")?.value;
      const returnDate = document.getElementById("home-return-date")?.value;

      if (location && pickupDate && returnDate) {
        window.location.href = `pages/cars.html?location=${encodeURIComponent(
          location
        )}&pickup=${pickupDate}&return=${returnDate}`;
      } else {
        window.location.href = "pages/cars.html";
      }
    });
  }
}

// ============================================
// Initialize on DOM Load
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  initDarkMode();
  initNavigation();
  initBackToTop();

  // Page-specific initializations
  const path = window.location.pathname;

  if (path.includes("cars.html") || path.endsWith("/")) {
    if (path.includes("cars.html")) {
      initFilters();
    } else {
      initHomepage();
    /* ============================================
   Car Rental Reservation Platform - Main JS
   ============================================ */

// ============================================
// Data Model - Cars Array
// ============================================
const carsData = [
  {
    id: "sedan-01",
    name: "Toyota Camry",
    type: "Sedan",
    pricePerDay: 45,
    transmission: "Automatic",
    seats: 5,
    fuel: "Hybrid",
    rating: 4.8,
    bags: 2,
    img: "assets/img/Toyota Camry.jpeg",
    images: [
      "assets/img/Toyota Camry.jpeg",
      "assets/img/Toyota Camry-1.jpeg",
      "assets/img/Toyota Camry-2.jpeg",
    ],
    features: ["Bluetooth", "GPS", "USB Charging", "Air Conditioning"],
    description:
      "Comfortable and fuel-efficient sedan perfect for city driving and long trips.",
  },
  {
    id: "suv-01",
    name: "Honda CR-V",
    type: "SUV",
    pricePerDay: 65,
    transmission: "Automatic",
    seats: 7,
    fuel: "Gasoline",
    rating: 4.9,
    bags: 4,
    img: "assets/img/Honda CR-V.jpeg",
    images: [
      "assets/img/Honda CR-V.jpeg",
      "assets/img/Honda CR-V-1.jpeg",
      "assets/img/Honda CR-V-2.jpeg",
      "assets/img/Honda CR-V-3.jpeg",
      "assets/img/Honda CR-V-4.jpeg",
    ],
    features: [
      "All-Wheel Drive",
      "GPS",
      "USB Charging",
      "Air Conditioning",
      "Third Row",
    ],
    description:
      "Spacious SUV with excellent cargo capacity and advanced safety features.",
  },
  {
    id: "luxury-01",
    name: "BMW 5 Series",
    type: "Luxury",
    pricePerDay: 120,
    transmission: "Automatic",
    seats: 5,
    fuel: "Gasoline",
    rating: 4.9,
    bags: 3,
    img: "assets/img/BMW 5 Series.jpeg",
    images: [
      "assets/img/BMW 5 Series.jpeg",
      "assets/img/BMW 5 Series-1.jpeg",
      "assets/img/BMW 5 Series-2.jpeg",
      "assets/img/BMW 5 Series-3.jpeg",
    ],
    features: [
      "Leather Seats",
      "Premium Sound",
      "GPS",
      "USB Charging",
      "Heated Seats",
    ],
    description:
      "Premium luxury sedan with cutting-edge technology and superior comfort.",
  },
  {
    id: "compact-01",
    name: "Nissan Versa",
    type: "Compact",
    pricePerDay: 30,
    transmission: "Manual",
    seats: 5,
    fuel: "Gasoline",
    rating: 4.5,
    bags: 1,
    img: "assets/img/Nissan Versa.jpeg",
    images: [
      "assets/img/Nissan Versa.jpeg",
      "assets/img/Nissan Versa-1.jpeg",
      "assets/img/Nissan Versa-2.jpeg",
      "assets/img/Nissan Versa-3.jpeg",
    ],
    features: ["USB Charging", "Air Conditioning", "Bluetooth"],
    description: "Economical compact car ideal for budget-conscious travelers.",
  },
  {
    id: "suv-02",
    name: "Ford Explorer",
    type: "SUV",
    pricePerDay: 70,
    transmission: "Automatic",
    seats: 7,
    fuel: "Gasoline",
    rating: 4.7,
    bags: 5,
    img: "assets/img/Ford Explorer.jpeg",
    images: [
      "assets/img/Ford Explorer.jpeg",
      "assets/img/Ford Explorer-1.jpeg",
      "assets/img/Ford Explorer-2.jpeg",
      "assets/img/Ford Explorer-3.jpeg",
    ],
    features: [
      "All-Wheel Drive",
      "GPS",
      "USB Charging",
      "Air Conditioning",
      "Third Row",
      "Towing",
    ],
    description:
      "Powerful SUV with towing capability and premium interior features.",
  },
  {
    id: "sedan-02",
    name: "Hyundai Elantra",
    type: "Sedan",
    pricePerDay: 40,
    transmission: "Automatic",
    seats: 5,
    fuel: "Gasoline",
    rating: 4.6,
    bags: 2,
    img: "assets/img/Hyundai Elantra.jpeg",
    images: [
      "assets/img/Hyundai Elantra.jpeg",
      "assets/img/Hyundai Elantra-1.jpeg",
      "assets/img/Hyundai Elantra-2.jpeg",
      "assets/img/Hyundai Elantra-3.jpeg",
    ],
    features: [
      "Bluetooth",
      "GPS",
      "USB Charging",
      "Air Conditioning",
      "Apple CarPlay",
    ],
    description:
      "Modern sedan with advanced infotainment and excellent fuel economy.",
  },
  {
    id: "luxury-02",
    name: "Mercedes-Benz E-Class",
    type: "Luxury",
    pricePerDay: 130,
    transmission: "Automatic",
    seats: 5,
    fuel: "Gasoline",
    rating: 5.0,
    bags: 3,
    img: "assets/img/Mercedes-Benz E-Class.jpeg",
    images: [
      "assets/img/Mercedes-Benz E-Class.jpeg",
      "assets/img/Mercedes-Benz E-Class-1.jpeg",
      "assets/img/Mercedes-Benz E-Class-2.jpeg",
      "assets/img/Mercedes-Benz E-Class-3.jpeg",
    ],
    features: [
      "Leather Seats",
      "Premium Sound",
      "GPS",
      "USB Charging",
      "Heated Seats",
      "Massage Seats",
    ],
    description:
      "Ultra-luxury sedan with state-of-the-art technology and unparalleled comfort.",
  },
  {
    id: "compact-02",
    name: "Chevrolet Spark",
    type: "Compact",
    pricePerDay: 28,
    transmission: "Manual",
    seats: 4,
    fuel: "Gasoline",
    rating: 4.4,
    bags: 1,
    img: "assets/img/Chevrolet Spark.jpeg",
    images: [
      "assets/img/Chevrolet Spark.jpeg",
      "assets/img/Chevrolet Spark-1.jpeg",
      "assets/img/Chevrolet Spark-2.jpeg",
      "assets/img/Chevrolet Spark-3.jpeg",
    ],
    features: ["USB Charging", "Air Conditioning", "Bluetooth", "Compact Size"],
    description:
      "Ultra-compact city car perfect for tight parking spaces and urban driving.",
  },
  {
    id: "suv-03",
    name: "Jeep Wrangler",
    type: "SUV",
    pricePerDay: 75,
    transmission: "Manual",
    seats: 5,
    fuel: "Gasoline",
    rating: 4.6,
    bags: 3,
    img: "assets/img/Jeep Wrangler.jpeg",
    images: [
      "assets/img/Jeep Wrangler.jpeg",
      "assets/img/Jeep Wrangler-1.jpeg",
      "assets/img/Jeep Wrangler-2.jpeg",
      "assets/img/Jeep Wrangler-3.jpeg",
    ],
    features: [
      "Four-Wheel Drive",
      "GPS",
      "USB Charging",
      "Removable Doors",
      "Off-Road",
    ],
    description:
      "Rugged off-road vehicle perfect for adventure seekers and outdoor enthusiasts.",
  },
  {
    id: "sedan-03",
    name: "Mazda 6",
    type: "Sedan",
    pricePerDay: 50,
    transmission: "Automatic",
    seats: 5,
    fuel: "Gasoline",
    rating: 4.7,
    bags: 2,
    img: "assets/img/Mazda 6.jpeg",
    images: [
      "assets/img/Mazda 6.jpeg",
      "assets/img/Mazda 6-1.jpeg",
      "assets/img/Mazda 6-2.jpeg",
      "assets/img/Mazda 6-3.jpeg",
    ],
    features: [
      "Bluetooth",
      "GPS",
      "USB Charging",
      "Air Conditioning",
      "Premium Interior",
    ],
    description: "Sporty sedan with elegant design and responsive handling.",
  },
];

// ============================================
// Utility Functions
// ============================================

// Get URL parameter
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(amount);
}

// Format date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Calculate days between dates
function calculateDays(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays || 1;
}

// Generate booking reference
function generateBookingReference() {
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 100000)
    .toString()
    .padStart(5, "0");
  return `CRP-${year}-${random}`;
}

// ============================================
// Toast Notifications
// ============================================
function showToast(message, type = "success") {
  const container =
    document.getElementById("toast-container") || createToastContainer();

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.setAttribute("role", "alert");
  toast.setAttribute("aria-live", "polite");

  const icons = {
    success: "✓",
    error: "✕",
    warning: "⚠",
  };

  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || icons.success}</span>
    <span class="toast-message">${message}</span>
    <button class="toast-close" aria-label="Close notification">×</button>
  `;

  container.appendChild(toast);

  const closeBtn = toast.querySelector(".toast-close");
  closeBtn.addEventListener("click", () => removeToast(toast));

  setTimeout(() => removeToast(toast), 5000);
}

function createToastContainer() {
  const container = document.createElement("div");
  container.id = "toast-container";
  container.className = "toast-container";
  document.body.appendChild(container);
  return container;
}

function removeToast(toast) {
  toast.style.animation = "slideIn 0.3s ease reverse";
  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 300);
}

// ============================================
// Modal Component
// ============================================
function openModal(title, content) {
  let overlay = document.getElementById("modal-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "modal-overlay";
    overlay.className = "modal-overlay";
    overlay.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div class="modal-header">
          <h2 class="modal-title" id="modal-title">${title}</h2>
          <button class="modal-close" aria-label="Close modal">×</button>
        </div>
        <div class="modal-body"></div>
        <div class="modal-footer">
          <button class="btn btn-secondary" id="modal-close-btn">Close</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    const closeBtn = overlay.querySelector(".modal-close");
    const footerCloseBtn = overlay.querySelector("#modal-close-btn");
    const closeModal = () => {
      overlay.classList.remove("active");
      overlay.querySelector(".modal-body").innerHTML = "";
    };

    closeBtn.addEventListener("click", closeModal);
    footerCloseBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });

    // Keyboard navigation
    document.addEventListener("keydown", function escHandler(e) {
      if (e.key === "Escape" && overlay.classList.contains("active")) {
        closeModal();
        document.removeEventListener("keydown", escHandler);
      }
    });
  }

  overlay.querySelector("#modal-title").textContent = title;
  overlay.querySelector(".modal-body").innerHTML = content;
  overlay.classList.add("active");

  // Focus management
  const firstFocusable = overlay.querySelector(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (firstFocusable) firstFocusable.focus();
}

// ============================================
// Terms & Privacy (FIX jump to top + safer content)
// ============================================
function initPolicyModals() {
  document.addEventListener("click", (e) => {
    const link = e.target.closest(".js-open-modal");
    if (!link) return;

    e.preventDefault(); // ✅ prevents jump-to-top

    const title = link.getAttribute("data-modal-title") || "Details";
    const templateId = link.getAttribute("data-modal-template");
    const tpl = document.getElementById(templateId);

    if (!tpl) {
      showToast("Modal content not found.", "error");
      return;
    }

    // Convert template content to HTML string for existing openModal()
    const wrapper = document.createElement("div");
    wrapper.appendChild(tpl.content.cloneNode(true));
    openModal(title, wrapper.innerHTML);
  });
}

// ============================================
// Dark Mode Toggle
// ============================================
function initDarkMode() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateThemeIcon(toggle, newTheme);
    });
    updateThemeIcon(toggle, savedTheme);
  }
}

function updateThemeIcon(toggle, theme) {
  toggle.textContent = theme === "dark" ? "☀️" : "🌙";
  toggle.setAttribute(
    "aria-label",
    `Switch to ${theme === "dark" ? "light" : "dark"} mode`
  );
}

// ============================================
// Navigation
// ============================================
function initNavigation() {
  // Hamburger menu
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close menu when clicking a link
    const navLinks = navMenu.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // Active link highlighting
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    const linkPath = new URL(link.href).pathname;
    if (
      linkPath === currentPath ||
      (currentPath.includes(linkPath) && linkPath !== "/")
    ) {
      link.classList.add("active");
    }
  });
}

// ============================================
// Back to Top Button
// ============================================
function initBackToTop() {
  const button = document.getElementById("back-to-top");
  if (!button) return;

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      button.classList.add("visible");
    } else {
      button.classList.remove("visible");
    }
  });

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ============================================
// Car Cards Rendering
// ============================================
function renderCarCard(car) {
  // Determine correct path based on current page location
  const currentPath = window.location.pathname;
  const detailsPath =
    currentPath.includes("/pages/") || currentPath.endsWith("cars.html")
      ? "car-details.html"
      : "pages/car-details.html";

  // Fix image path for pages in pages/ folder
  const isInPagesFolder = currentPath.includes("/pages/");
  const imageBasePath = isInPagesFolder ? "../" : "";
  const carImageSrc = car.img.startsWith("assets/")
    ? imageBasePath + car.img
    : car.img;

  return `
    <div class="card" data-car-id="${car.id}">
      <img src="${carImageSrc}" alt="${car.name}" class="card-image" loading="lazy">
      <div class="card-body">
        <h3 class="card-title">${car.name}</h3>
        <p class="card-text">${car.description}</p>
        <div class="card-features">
          <span class="card-feature">${car.type}</span>
          <span class="card-feature">${car.seats} Seats</span>
          <span class="card-feature">${car.transmission}</span>
          <span class="card-feature">${car.fuel}</span>
        </div>
        <div class="card-footer">
          <div>
            <span class="price">${formatCurrency(car.pricePerDay)}</span>
            <span class="price-unit">/day</span>
          </div>
          <div class="rating">
            <span>★</span>
            <span>${car.rating}</span>
          </div>
        </div>
        <a href="${detailsPath}?id=${car.id}" class="btn btn-primary btn-full" style="margin-top: 1rem;">View Details</a>
      </div>
    </div>
  `;
}

function renderCars(cars, containerId = "cars-container") {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (cars.length === 0) {
    container.innerHTML =
      '<p style="text-align: center; padding: 2rem;">No cars found matching your criteria.</p>';
    return;
  }

  container.innerHTML = cars.map((car) => renderCarCard(car)).join("");
}

// ============================================
// Car Filtering & Sorting
// ============================================
function filterCars() {
  const searchTerm = (
    document.getElementById("car-search")?.value || ""
  ).toLowerCase();
  const priceMin = parseFloat(document.getElementById("price-min")?.value || 0);
  const priceMax = parseFloat(
    document.getElementById("price-max")?.value || 1000
  );
  const transmission =
    document.getElementById("filter-transmission")?.value || "all";
  const seats = document.getElementById("filter-seats")?.value || "all";
  const fuel = document.getElementById("filter-fuel")?.value || "all";
  const rating = parseFloat(
    document.getElementById("filter-rating")?.value || 0
  );

  let filtered = carsData.filter((car) => {
    const matchesSearch =
      car.name.toLowerCase().includes(searchTerm) ||
      car.type.toLowerCase().includes(searchTerm);
    const matchesPrice =
      car.pricePerDay >= priceMin && car.pricePerDay <= priceMax;
    const matchesTransmission =
      transmission === "all" || car.transmission === transmission;
    const matchesSeats = seats === "all" || car.seats === parseInt(seats);
    const matchesFuel = fuel === "all" || car.fuel === fuel;
    const matchesRating = car.rating >= rating;

    return (
      matchesSearch &&
      matchesPrice &&
      matchesTransmission &&
      matchesSeats &&
      matchesFuel &&
      matchesRating
    );
  });

  // Sorting
  const sortBy = document.getElementById("sort-cars")?.value || "default";
  switch (sortBy) {
    case "price-low":
      filtered.sort((a, b) => a.pricePerDay - b.pricePerDay);
      break;
    case "price-high":
      filtered.sort((a, b) => b.pricePerDay - a.pricePerDay);
      break;
    case "rating":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
  }

  renderCars(filtered);
  updatePriceRangeDisplay();
}

function initFilters() {
  const filterInputs = [
    "car-search",
    "price-min",
    "price-max",
    "filter-transmission",
    "filter-seats",
    "filter-fuel",
    "filter-rating",
    "sort-cars",
  ];

  filterInputs.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener("input", filterCars);
      element.addEventListener("change", filterCars);
    }
  });

  // Price range display
  const priceMinInput = document.getElementById("price-min");
  const priceMaxInput = document.getElementById("price-max");
  if (priceMinInput && priceMaxInput) {
    priceMinInput.addEventListener("input", updatePriceRangeDisplay);
    priceMaxInput.addEventListener("input", updatePriceRangeDisplay);
  }

  // Initial render
  filterCars();
}

function updatePriceRangeDisplay() {
  const priceMin = document.getElementById("price-min");
  const priceMax = document.getElementById("price-max");
  const priceDisplay = document.getElementById("price-range-display");

  if (priceMin && priceMax && priceDisplay) {
    priceDisplay.textContent = `$${priceMin.value} - $${priceMax.value}`;
  }
}

// ============================================
// Car Details Page
// ============================================
function initCarDetails() {
  const carId = getUrlParameter("id");
  if (!carId) {
    window.location.href = "cars.html";
    return;
  }

  const car = carsData.find((c) => c.id === carId);
  if (!car) {
    window.location.href = "cars.html";
    return;
  }

  const detailsContent = document.querySelector(".details-content");
  if (detailsContent) {
    detailsContent.innerHTML = `
      <h1>${car.name}</h1>
      <div class="rating" style="margin-bottom: 1rem;">
        <span>★</span>
        <span>${car.rating}</span>
        <span style="color: var(--text-secondary); margin-left: 0.5rem;">(${car.type})</span>
      </div>
      <p>${car.description}</p>
      <div style="margin: 1.5rem 0;">
        <h3>Features</h3>
        <ul style="list-style: none; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.5rem; margin-top: 1rem;">
          ${car.features
            .map(
              (f) =>
                `<li style="padding: 0.5rem; background: var(--bg-secondary); border-radius: var(--radius-md);">✓ ${f}</li>`
            )
            .join("")}
        </ul>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
        <div><strong>Seats:</strong> ${car.seats}</div>
        <div><strong>Transmission:</strong> ${car.transmission}</div>
        <div><strong>Fuel:</strong> ${car.fuel}</div>
        <div><strong>Bags:</strong> ${car.bags}</div>
      </div>
      <div class="price-breakdown">
        <h3>Pricing</h3>
        <div class="price-row">
          <span>Base Price (per day)</span>
          <span>${formatCurrency(car.pricePerDay)}</span>
        </div>
        <div class="price-row">
          <span>Estimated Total (3 days)</span>
          <span>${formatCurrency(car.pricePerDay * 3)}</span>
        </div>
      </div>
      <a href="reservation.html?carId=${car.id}" class="btn btn-primary" style="margin-top: 1.5rem; display: inline-block;">Reserve Now</a>
    `;
  }

  // Image gallery
  const mainImage = document.getElementById("main-image");
  const thumbnailGrid = document.querySelector(".thumbnail-grid");

  const carImages = car.images || [car.img];
  const currentPath = window.location.pathname;
  const isInPagesFolder = currentPath.includes("/pages/");
  const imageBasePath = isInPagesFolder ? "../" : "";

  const normalizedImages = carImages.map((img) => {
    if (img.startsWith("assets/")) {
      return imageBasePath + img;
    }
    return img;
  });

  if (mainImage) {
    mainImage.src = normalizedImages[0];
    mainImage.alt = car.name;
  }

  if (thumbnailGrid) {
    thumbnailGrid.innerHTML = "";

    normalizedImages.forEach((imgSrc, index) => {
      const thumb = document.createElement("img");
      thumb.src = imgSrc;
      thumb.alt = `${car.name} view ${index + 1}`;
      thumb.className = "thumbnail";
      thumb.tabIndex = 0;
      thumb.setAttribute("role", "button");
      thumb.setAttribute("aria-label", `View car image ${index + 1}`);

      thumb.addEventListener("click", () => {
        if (mainImage) {
          mainImage.src = imgSrc;
        }
        thumbnailGrid
          .querySelectorAll(".thumbnail")
          .forEach((t) => t.classList.remove("active"));
        thumb.classList.add("active");
      });

      thumb.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          thumb.click();
        }
      });

      thumbnailGrid.appendChild(thumb);
    });

    const firstThumb = thumbnailGrid.querySelector(".thumbnail");
    if (firstThumb) {
      firstThumb.classList.add("active");
    }
  }
}

// ============================================
// Reservation Form
// ============================================
let currentStep = 1;
const totalSteps = 3;

function initReservationForm() {
  const carId = getUrlParameter("carId");
  if (carId) {
    const carSelect = document.getElementById("reservation-car");
    if (carSelect) {
      carSelect.value = carId;
      updateReservationPrice();
    }
  }

  document.getElementById("next-step")?.addEventListener("click", nextStep);
  document.getElementById("prev-step")?.addEventListener("click", prevStep);

  const form = document.getElementById("reservation-form");
  if (form) {
    form.addEventListener("submit", handleReservationSubmit);

    const inputs = form.querySelectorAll("input, select, textarea");
    inputs.forEach((input) => {
      input.addEventListener("blur", () => validateField(input));
      input.addEventListener("input", () => {
        if (input.classList.contains("error")) {
          validateField(input);
        }
      });
    });
  }

  const addons = document.querySelectorAll('.addon-item input[type="checkbox"]');
  addons.forEach((addon) => {
    addon.addEventListener("change", updateReservationPrice);
  });

  document
    .getElementById("reservation-car")
    ?.addEventListener("change", updateReservationPrice);
  document
    .getElementById("pickup-date")
    ?.addEventListener("change", updateReservationPrice);
  document
    .getElementById("return-date")
    ?.addEventListener("change", updateReservationPrice);

  const messageField = document.getElementById("special-requests");
  if (messageField) {
    messageField.addEventListener("input", updateCharacterCounter);
  }

  updateStepDisplay();
  updateReservationPrice();
}

function nextStep() {
  if (validateCurrentStep()) {
    if (currentStep < totalSteps) {
      currentStep++;
      updateStepDisplay();
    }
  }
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    updateStepDisplay();
  }
}

function updateStepDisplay() {
  for (let i = 1; i <= totalSteps; i++) {
    const step = document.querySelector(`.step[data-step="${i}"]`);
    if (step) {
      step.classList.remove("active", "completed");
      if (i < currentStep) {
        step.classList.add("completed");
      } else if (i === currentStep) {
        step.classList.add("active");
      }
    }
  }

  document.querySelectorAll(".step-content").forEach((content, index) => {
    content.classList.remove("active");
    if (index + 1 === currentStep) {
      content.classList.add("active");
    }
  });

  const prevBtn = document.getElementById("prev-step");
  const nextBtn = document.getElementById("next-step");
  const submitBtn = document.getElementById("submit-reservation");

  if (prevBtn) prevBtn.style.display = currentStep === 1 ? "none" : "inline-flex";

  if (nextBtn) {
    if (currentStep === totalSteps) nextBtn.style.display = "none";
    else {
      nextBtn.style.display = "inline-flex";
      nextBtn.textContent = "Next Step";
    }
  }

  if (submitBtn) {
    submitBtn.style.display = currentStep === totalSteps ? "inline-flex" : "none";
  }
}

function validateCurrentStep() {
  let isValid = true;
  const currentStepContent = document.querySelector(".step-content.active");
  if (!currentStepContent) return false;

  const requiredFields = currentStepContent.querySelectorAll("[required]");
  requiredFields.forEach((field) => {
    if (!validateField(field)) isValid = false;
  });

  if (!isValid) {
    showToast("Please fill in all required fields correctly.", "error");
    const firstError = currentStepContent.querySelector(".error");
    if (firstError) {
      firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      firstError.focus();
    }
  }

  return isValid;
}

function validateField(field) {
  const value = field.value.trim();
  const fieldGroup = field.closest(".form-group");
  let isValid = true;
  let errorMessage = "";

  fieldGroup?.classList.remove("error");
  const existingError = fieldGroup?.querySelector(".error-message");
  if (existingError) existingError.remove();

  if (field.hasAttribute("required") && !value) {
    isValid = false;
    errorMessage = "This field is required.";
  }

  if (field.type === "email" && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      errorMessage = "Please enter a valid email address.";
    }
  }

  if (field.type === "tel" && value) {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(value) || value.replace(/\D/g, "").length < 10) {
      isValid = false;
      errorMessage = "Please enter a valid phone number.";
    }
  }

  if (field.type === "date" && value) {
    const date = new Date(value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) {
      isValid = false;
      errorMessage = "Date cannot be in the past.";
    }
  }

  if (field.id === "return-date" && value) {
    const pickupDate = document.getElementById("pickup-date")?.value;
    if (pickupDate && new Date(value) <= new Date(pickupDate)) {
      isValid = false;
      errorMessage = "Return date must be after pickup date.";
    }
  }

  if (!isValid && fieldGroup) {
    fieldGroup.classList.add("error");
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = errorMessage;
    errorDiv.setAttribute("role", "alert");
    errorDiv.setAttribute("aria-live", "polite");
    fieldGroup.appendChild(errorDiv);
  }

  return isValid;
}

function updateReservationPrice() {
  const carId = document.getElementById("reservation-car")?.value;
  const pickupDate = document.getElementById("pickup-date")?.value;
  const returnDate = document.getElementById("return-date")?.value;

  const totalPriceEl = document.getElementById("total-price");

  if (!carId || !pickupDate || !returnDate) {
    if (totalPriceEl) totalPriceEl.textContent = "$0";
    return;
  }

  const car = carsData.find((c) => c.id === carId);
  if (!car) return;

  const days = calculateDays(pickupDate, returnDate);
  let total = car.pricePerDay * days;

  const gps = document.getElementById("addon-gps")?.checked ? 10 : 0;
  const childSeat = document.getElementById("addon-child-seat")?.checked ? 15 : 0;
  const insurance = document.getElementById("addon-insurance")?.checked ? 25 : 0;

  total += (gps + childSeat + insurance) * days;

  if (totalPriceEl) totalPriceEl.textContent = formatCurrency(total);

  const breakdownEl = document.getElementById("price-breakdown-review");
  if (breakdownEl) {
    breakdownEl.innerHTML = `
      <div class="price-row">
        <span>${car.name} (${days} days)</span>
        <span>${formatCurrency(car.pricePerDay * days)}</span>
      </div>
      ${gps > 0 ? `<div class="price-row"><span>GPS Navigation</span><span>${formatCurrency(gps * days)}</span></div>` : ""}
      ${childSeat > 0 ? `<div class="price-row"><span>Child Seat</span><span>${formatCurrency(childSeat * days)}</span></div>` : ""}
      ${insurance > 0 ? `<div class="price-row"><span>Insurance</span><span>${formatCurrency(insurance * days)}</span></div>` : ""}
      <div class="price-row">
        <span><strong>Total</strong></span>
        <span><strong>${formatCurrency(total)}</strong></span>
      </div>
    `;
  }
}

function updateCharacterCounter() {
  const field = document.getElementById("special-requests");
  const counter = document.getElementById("char-counter");
  if (!field || !counter) return;

  const current = field.value.length;
  const max = 500;
  counter.textContent = `${current}/${max} characters`;

  counter.classList.remove("warning", "error");
  if (current > max * 0.9) counter.classList.add("warning");
  if (current > max) counter.classList.add("error");
}

function handleReservationSubmit(e) {
  e.preventDefault();

  if (!validateCurrentStep()) return;

  for (let i = 1; i <= totalSteps; i++) {
    const stepContent = document.querySelector(`.step-content[data-step="${i}"]`);
    if (stepContent) {
      const requiredFields = stepContent.querySelectorAll("[required]");
      for (const field of requiredFields) {
        if (!validateField(field)) {
          currentStep = i;
          updateStepDisplay();
          return;
        }
      }
    }
  }

  const formData = {
    bookingReference: generateBookingReference(),
    carId: document.getElementById("reservation-car").value,
    firstName: document.getElementById("first-name").value,
    lastName: document.getElementById("last-name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    pickupLocation: document.getElementById("pickup-location").value,
    pickupDate: document.getElementById("pickup-date").value,
    pickupTime: document.getElementById("pickup-time").value,
    returnDate: document.getElementById("return-date").value,
    returnTime: document.getElementById("return-time").value,
    addons: {
      gps: document.getElementById("addon-gps")?.checked || false,
      childSeat: document.getElementById("addon-child-seat")?.checked || false,
      insurance: document.getElementById("addon-insurance")?.checked || false,
    },
    specialRequests: document.getElementById("special-requests").value,
    status: "confirmed",
    createdAt: new Date().toISOString(),
  };

  localStorage.setItem("currentBooking", JSON.stringify(formData));

  showToast("Reservation confirmed! Redirecting to your booking...", "success");

  setTimeout(() => {
    window.location.href = "my-booking.html";
  }, 1500);
}

// ============================================
// My Booking Page
// ============================================
function initMyBooking() {
  const bookingData = localStorage.getItem("currentBooking");

  if (!bookingData) {
    const container = document.getElementById("booking-container");
    if (container) {
      container.innerHTML = `
        <div style="text-align: center; padding: 3rem;">
          <h2>No Active Booking</h2>
          <p>You don't have any active reservations.</p>
          <a href="reservation.html" class="btn btn-primary" style="margin-top: 1rem;">Make a Reservation</a>
        </div>
      `;
    }
    return;
  }

  const booking = JSON.parse(bookingData);
  const car = carsData.find((c) => c.id === booking.carId);

  if (!car) {
    showToast("Car information not found.", "error");
    return;
  }

  const days = calculateDays(booking.pickupDate, booking.returnDate);
  let total = car.pricePerDay * days;
  total += (booking.addons.gps ? 10 : 0) * days;
  total += (booking.addons.childSeat ? 15 : 0) * days;
  total += (booking.addons.insurance ? 25 : 0) * days;

  const container = document.getElementById("booking-container");
  if (container) {
    container.innerHTML = `
      <div class="booking-summary">
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
          <div>
            <h2>Booking Details</h2>
            <p style="color: var(--text-secondary); margin-top: 0.5rem;">Reference: <strong>${booking.bookingReference}</strong></p>
          </div>
          <span class="status-badge ${booking.status}">${booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}</span>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
          <div>
            <h3>Car Information</h3>
            <p><strong>${car.name}</strong></p>
            <p>${car.type} • ${car.seats} Seats • ${car.transmission}</p>
          </div>
          <div>
            <h3>Pickup Details</h3>
            <p><strong>Location:</strong> ${booking.pickupLocation}</p>
            <p><strong>Date:</strong> ${formatDate(booking.pickupDate)}</p>
            <p><strong>Time:</strong> ${booking.pickupTime}</p>
          </div>
          <div>
            <h3>Return Details</h3>
            <p><strong>Date:</strong> ${formatDate(booking.returnDate)}</p>
            <p><strong>Time:</strong> ${booking.returnTime}</p>
            <p><strong>Duration:</strong> ${days} day${days !== 1 ? "s" : ""}</p>
          </div>
          <div>
            <h3>Customer Information</h3>
            <p><strong>${booking.firstName} ${booking.lastName}</strong></p>
            <p>${booking.email}</p>
            <p>${booking.phone}</p>
          </div>
        </div>
        
        ${
          booking.addons.gps ||
          booking.addons.childSeat ||
          booking.addons.insurance
            ? `
          <div style="margin: 1.5rem 0;">
            <h3>Add-ons</h3>
            <ul style="list-style: none; padding: 0;">
              ${booking.addons.gps ? "<li>✓ GPS Navigation</li>" : ""}
              ${booking.addons.childSeat ? "<li>✓ Child Seat</li>" : ""}
              ${booking.addons.insurance ? "<li>✓ Insurance</li>" : ""}
            </ul>
          </div>
        `
            : ""
        }
        
        ${
          booking.specialRequests
            ? `
          <div style="margin: 1.5rem 0;">
            <h3>Special Requests</h3>
            <p>${booking.specialRequests}</p>
          </div>
        `
            : ""
        }
        
        <div class="price-breakdown" style="margin-top: 1.5rem;">
          <h3>Price Breakdown</h3>
          <div class="price-row">
            <span>${car.name} (${days} days)</span>
            <span>${formatCurrency(car.pricePerDay * days)}</span>
          </div>
          ${
            booking.addons.gps
              ? `<div class="price-row"><span>GPS Navigation</span><span>${formatCurrency(10 * days)}</span></div>`
              : ""
          }
          ${
            booking.addons.childSeat
              ? `<div class="price-row"><span>Child Seat</span><span>${formatCurrency(15 * days)}</span></div>`
              : ""
          }
          ${
            booking.addons.insurance
              ? `<div class="price-row"><span>Insurance</span><span>${formatCurrency(25 * days)}</span></div>`
              : ""
          }
          <div class="price-row">
            <span><strong>Total</strong></span>
            <span><strong>${formatCurrency(total)}</strong></span>
          </div>
        </div>
        
        <div class="booking-actions">
          <button class="btn btn-primary" onclick="window.print()">Print Receipt</button>
          <button class="btn btn-secondary" onclick="editBooking()">Edit Dates</button>
          <button class="btn btn-danger" onclick="cancelBooking()">Cancel Booking</button>
        </div>
      </div>
    `;
  }
}

function cancelBooking() {
  if (confirm("Are you sure you want to cancel this booking?")) {
    const bookingData = localStorage.getItem("currentBooking");
    if (bookingData) {
      const booking = JSON.parse(bookingData);
      booking.status = "cancelled";
      localStorage.setItem("currentBooking", JSON.stringify(booking));
      showToast("Booking cancelled successfully.", "warning");
      initMyBooking();
    }
  }
}

function editBooking() {
  const bookingData = localStorage.getItem("currentBooking");
  if (bookingData) {
    const booking = JSON.parse(bookingData);
    const newPickupDate = prompt(
      "Enter new pickup date (YYYY-MM-DD):",
      booking.pickupDate
    );
    const newReturnDate = prompt(
      "Enter new return date (YYYY-MM-DD):",
      booking.returnDate
    );

    if (
      newPickupDate &&
      newReturnDate &&
      new Date(newReturnDate) > new Date(newPickupDate)
    ) {
      booking.pickupDate = newPickupDate;
      booking.returnDate = newReturnDate;
      localStorage.setItem("currentBooking", JSON.stringify(booking));
      showToast("Booking dates updated successfully.", "success");
      initMyBooking();
    } else {
      showToast("Invalid dates. Return date must be after pickup date.", "error");
    }
  }
}

// Make functions globally available
window.cancelBooking = cancelBooking;
window.editBooking = editBooking;

// ============================================
// Contact Form
// ============================================
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contact-name");
    const email = document.getElementById("contact-email");
    const message = document.getElementById("contact-message");

    let isValid = true;
    [name, email, message].forEach((field) => {
      if (!validateField(field)) isValid = false;
    });

    if (isValid) {
      showToast("Thank you for your message! We will get back to you soon.", "success");
      form.reset();
      updateContactCharacterCounter();
    }
  });

  const messageField = document.getElementById("contact-message");
  if (messageField) {
    messageField.addEventListener("input", updateContactCharacterCounter);
  }
}

function updateContactCharacterCounter() {
  const field = document.getElementById("contact-message");
  const counter = document.getElementById("contact-char-counter");
  if (!field || !counter) return;

  const current = field.value.length;
  const max = 1000;
  counter.textContent = `${current}/${max} characters`;

  counter.classList.remove("warning", "error");
  if (current > max * 0.9) counter.classList.add("warning");
  if (current > max) counter.classList.add("error");
}

// ============================================
// FAQ Accordion
// ============================================
function initFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    if (question) {
      question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        faqItems.forEach((i) => i.classList.remove("active"));
        if (!isActive) item.classList.add("active");
      });

      question.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          question.click();
        }
      });
    }
  });
}

// ============================================
// Homepage Features
// ============================================
function initHomepage() {
  const featuredCars = carsData.slice(0, 6);
  renderCars(featuredCars, "featured-cars");

  const searchForm = document.getElementById("home-search-form");
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const location = document.getElementById("home-pickup-location")?.value;
      const pickupDate = document.getElementById("home-pickup-date")?.value;
      const returnDate = document.getElementById("home-return-date")?.value;

      if (location && pickupDate && returnDate) {
        window.location.href = `pages/cars.html?location=${encodeURIComponent(
          location
        )}&pickup=${pickupDate}&return=${returnDate}`;
      } else {
        window.location.href = "pages/cars.html";
      }
    });
  }
}

// ============================================
// Initialize on DOM Load
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  initDarkMode();
  initNavigation();
  initBackToTop();
  initPolicyModals(); // 

  const path = window.location.pathname;

  if (path.includes("cars.html") || path.endsWith("/")) {
    if (path.includes("cars.html")) {
      initFilters();
    } else {
      initHomepage();
    }
  } else if (path.includes("car-details.html")) {
    initCarDetails();
  } else if (path.includes("reservation.html")) {
    initReservationForm();
  } else if (path.includes("my-booking.html")) {
    initMyBooking();
  } else if (path.includes("contact.html")) {
    initContactForm();
  } else if (path.includes("faq.html")) {
    initFAQ();
  }
});
}
  } else if (path.includes("car-details.html")) {
    initCarDetails();
  } else if (path.includes("reservation.html")) {
    initReservationForm();
  } else if (path.includes("my-booking.html")) {
    initMyBooking();
  } else if (path.includes("contact.html")) {
    initContactForm();
  } else if (path.includes("faq.html")) {
    initFAQ();
  }
});
