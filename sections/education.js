const educationData = {
  institution: "BMS College of Engineering",
  degree: "Computer Science",
  duration: "2023-2027",
  link: "https://bmsce.ac.in/",
};

function generateEducationSection() {
  const educationContent = document.getElementById("education-content");
  if (!educationContent) return;
  const educationItem = document.createElement("div");
  const institutionLink = document.createElement("a");
  institutionLink.href = educationData.link;
  institutionLink.className =
    "text-white hover:text-white/80 underline font-medium text-lg block mb-1";
  institutionLink.textContent = educationData.institution;
  institutionLink.target = "_blank";
  institutionLink.rel = "noopener noreferrer";
  institutionLink.setAttribute(
    "aria-label",
    `Visit ${educationData.institution} website`
  );
  const degreeDuration = document.createElement("p");
  degreeDuration.className = "text-sm sm:text-base";
  degreeDuration.textContent = `${educationData.degree} (${educationData.duration})`;
  educationItem.appendChild(institutionLink);
  educationItem.appendChild(degreeDuration);
  educationContent.appendChild(educationItem);
}

document.addEventListener("DOMContentLoaded", generateEducationSection);
