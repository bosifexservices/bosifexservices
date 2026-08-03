// ===============================
// DARK MODE
// ===============================

const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {
    darkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        darkModeBtn.textContent =
            document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });
}
function showToast(message, type){

    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.className = "toast " + type + " show";

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);

}
// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}

// ===============================
// BACK TO TOP
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (topBtn) {
        topBtn.style.display = window.scrollY > 300 ? "block" : "none";
    }
});

if (topBtn) {
    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ===============================
// CONTACT FORM
// ===============================



const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = new FormData(contactForm);

        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.ok) {
                showToast("✅ Message sent successfully","success");
                contactForm.reset();
            } else {
                showToast("❌ Failed to send message. Please try again.");
            }
        } catch (error) {
            showToast("⚠️ Network error. Please check your internet connection.");
        }
    });
}
// ===============================
// COUNTERS
// ===============================

const counters = document.querySelectorAll(".count");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.dataset.target;
        const current = +counter.innerText;
        const increment = Math.ceil(target / 80);

        if (current < target) {

            counter.innerText = current + increment;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

// ===============================
// SCROLL REVEAL
// ===============================

const revealItems = document.querySelectorAll(
".card,.about-content,.contact-form,.contact-info"
);

revealItems.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = ".6s";
});

function reveal() {

    const trigger = window.innerHeight - 120;

    revealItems.forEach(item => {

        if (item.getBoundingClientRect().top < trigger) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener("scroll", reveal);
reveal();

// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        if (window.scrollY >= section.offsetTop - 150) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// SMOOTH SCROLL
// ===============================

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

        navbar.classList.remove("active");

    });

});

// ===============================
// LOADER
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.display = "none";

    }

});

// ===============================
// HEADER EFFECT
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "0 2px 15px rgba(0,0,0,.08)";

    }

});

console.log("Bosifex Services Website Loaded Successfully");


