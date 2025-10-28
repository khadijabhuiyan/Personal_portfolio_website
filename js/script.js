let contactMe = document.getElementById("contactBtn");
let contact = document.getElementById("contact");
let close = document.getElementById("closeBtn");
let form = document.getElementById("contactForm");
let send = document.getElementById("submitBtn");
let formMessage = document.getElementById("formMessage");
let toggleMenu = document.querySelector(".toggle-menu");
let nav = document.querySelector("nav");

toggleMenu.addEventListener('click', () => {
    nav.classList.toggle('mobile-menu-open');
});


contactToHire.addEventListener('click', () => {
  if (contact) {
    contact.classList.toggle('visible');
  }
});

contactMe.addEventListener('click', () => {
  if (contact) {
    contact.classList.toggle('visible');
  }
});

if (close) {
  close.addEventListener('click', () => {
    contact.classList.remove('visible');
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('messege').value.trim();

  if(name === "" || email === "" || message === ""){
    formMessage.style.color = "red";
    formMessage.textContent = "Please fill out all fields";
    return; 
  }
  formMessage.style.color = "green";
  formMessage.textContent = "Your message has been sent!";

  setTimeout(() => {
    formMessage.textContent = "";
  }, 3000);

  form.reset();
});


// theme color change

let themeButton = document.querySelector(".theme-change");
let hero = document.getElementById("hero");

themeButton.addEventListener('click', () =>{
    hero.classList.toggle('white-theme');
});

// hire me button
let hireMeBtn = document.getElementById("hireMeBt");
let hireMe = document.getElementById("hireMe");
let hireCloseBtn = document.getElementById("hireCloseBtn");

hireMeBtn.addEventListener('click', () => {
  if(hireMe){
     hireMe.style.display = "block";
  }
});
hireCloseBtn.addEventListener("click", () => {
  hireMe.style.display = "none";
});

// skills
let skillsBtn = document.getElementById("skillsBtn");
let skills = document.getElementById("skills");
let skillsCloseBtn = document.getElementById("skillsCloseBtn");


skillsBtn.addEventListener('click', () => {
  if (skills) {
    skills.classList.toggle("visible");
    skillBorder.style.borderBottom = "5px solid $BrandColor";
  }
});

skillsCloseBtn.addEventListener("click", () => {
  skills.classList.remove("visible");
});

// experience
let experienceBtn = document.getElementById("experienceBtn");
let experience = document.getElementById("experience");
let experienceCloseBtn = document.getElementById("experienceCloseBtn");

experienceBtn.addEventListener('click', () => {
  if (experience){
    experience.classList.toggle("visible");
  }
});

experienceCloseBtn.addEventListener("click", () => {
  experience.classList.remove("visible");
});

// projects
let projectsBtn = document.getElementById("projectsBtn");
let projects = document.getElementById("projects");
let projectsCloseBtn = document.getElementById("projectsCloseBtn");

projectsBtn.addEventListener('click', () => {
  if (projects) {
    projects.classList.toggle("visible");
    }
});

projectsCloseBtn.addEventListener("click", () => {
  projects.classList.remove("visible");
});

// education
let educationBtn = document.getElementById("educationBtn");
let education = document.getElementById("education");
let educationCloseBtn = document.getElementById("educationCloseBtn");

educationBtn.addEventListener('click', () => {
  if (education) {
    education.classList.toggle("visible");
  }
});

educationCloseBtn.addEventListener("click", () => {
  education.classList.remove("visible");
});

// portfolio
let portfolioBtn = document.getElementById("portfolioBtn");
let portfolio = document.getElementById("portfolio");
// let portfolioCloseBtn = document.getElementById("portfolioCloseBtn");
portfolioBtn.addEventListener('click', () => {
  if (portfolio) {
    portfolio.scrollIntoView({ behavior: "smooth" });
  }
});






