const contactLinks = [
  {
    platform: "X",
    url: "https://x.com/HitishRaoP",
  },
  {
    platform: "GitHub",
    url: "https://github.com/HitishRaoP",
  },
  {
    platform: "Email",
    url: "hitishraop@gmail.com",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/HitishRaoP",
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/HitishRaoP",
  },
];

function generateContactLinks() {
  const contactList = document.getElementById("contact-list");
  if (!contactList) return;
  contactLinks.forEach((link) => {
    const listItem = document.createElement("li");
    listItem.className = "flex flex-col items-start sm:flex-row justify-between py-2";
    const platformSpan = document.createElement("span");
    platformSpan.textContent = link.platform;
    const linkElement = document.createElement("a");
    linkElement.href = link.url;
    linkElement.textContent = link.url;
    linkElement.className =
      "text-blue-400 hover:text-blue-300 underline transition-colors text-sm sm:text-base";
    linkElement.target = "_blank";
    linkElement.rel = "noopener noreferrer";
    listItem.appendChild(platformSpan);
    listItem.appendChild(linkElement);
    contactList.appendChild(listItem);
  });
}

document.addEventListener("DOMContentLoaded", generateContactLinks);
