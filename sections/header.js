const navItems = [
  { text: "Home", href: "#" },
  { text: "Work", href: "#work" },
  { text: "Projects", href: "#projects" },
  { text: "Contact", href: "#contact" },
];

function generateNavItems() {
  const navList = document.getElementById("nav-list");
  navItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.text;
    a.className = "nav-link text-xs text-white hover:text-gray-300 transition-colors";
    li.appendChild(a);
    navList.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", generateNavItems);
