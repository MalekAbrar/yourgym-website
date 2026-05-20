// Dynamic Mobile Menu Control
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenu.querySelector('i');
    if(navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close menu automatically on nav item click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenu.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Advanced Scroll Reveal Animation Pipeline
function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

// Interactive FAQ Accordion Logic
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('h3 i');
        
        if (answer.style.display === "block") {
            answer.style.display = "none";
            icon.style.transform = "rotate(0deg)";
        } else {
            answer.style.display = "block";
            icon.style.transform = "rotate(180deg)";
        }
    });
});

// Professional Metrics BMI Calculator Architecture
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    const resultDiv = document.getElementById('bmi-output');

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultDiv.innerHTML = "⚠️ Metrics error. Please enter valid physiological data!";
        resultDiv.style.color = "#ff3333";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);
    let status = "";
    let color = "#ff5722";

    if (bmi < 18.5) {
        status = "Underweight 🏋️‍♂️ (Ecosystem Recommendation: Hypertrophy & Bulk)";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Optimal / Fit 👍 (Condition: High Performance Maintenance)";
        color = "#22ff57";
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = "Overweight 🏃‍♂️ (Ecosystem Recommendation: Metabolic Conditioning & Cardio)";
    } else {
        status = "Obese ⚠️ (Action Required: Elite Guided Transformation)";
        color = "#ff3333";
    }

    resultDiv.innerHTML = `Your Body Mass Index is <strong>${bmi}</strong> — ${status}`;
    resultDiv.style.color = color;
}

// MOBILE MENU
document.getElementById("mobile-menu").onclick = function () {
    document.querySelector(".nav-links").classList.toggle("active");
};

// BMI CALCULATOR
function calculateBMI() {
    let w = document.getElementById("weight").value;
    let h = document.getElementById("height").value / 100;

    let bmi = w / (h * h);

    let output = document.getElementById("bmi-output");

    if (!bmi) {
        output.innerHTML = "Enter valid values";
        return;
    }

    output.innerHTML = "Your BMI: " + bmi.toFixed(2);
}

// FAQ TOGGLE
document.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
        let ans = item.querySelector(".faq-answer");
        ans.style.display = ans.style.display === "block" ? "none" : "block";
    });
});

// SCROLL REVEAL
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        let top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});
