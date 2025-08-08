const workExperience = [
  {
    company: "CodeIO",
    role: "Vice President",
    duration: "Jan. 2025 - current",
    url: "https://www.linkedin.com/company/codeio-bmsce/",
  },
];

function generateWorkExperience() {
  const workList = document.getElementById("work-list");
  if (!workList) return;
  workExperience.forEach((job) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("role", "listitem");
    const companyLink = document.createElement("a");
    companyLink.href = job.url;
    companyLink.className =
      "text-white hover:text-white/80 underline font-medium text-lg block mb-1";
    companyLink.textContent = job.company;
    companyLink.target = "_blank";
    companyLink.rel = "noopener noreferrer";
    companyLink.setAttribute(
      "aria-label",
      `View ${job.company} company profile`
    );
    const roleDuration = document.createElement("p");
    roleDuration.className = "text-sm sm:text-base";
    roleDuration.textContent = `${job.role} (${job.duration})`;
    listItem.appendChild(companyLink);
    listItem.appendChild(roleDuration);
    workList.appendChild(listItem);
  });
}

document.addEventListener("DOMContentLoaded", generateWorkExperience);
