const navItems = [
  { text: "Home", href: "#hero" },
  { text: "Work", href: "#work" },
  { text: "Projects", href: "#projects" },
  { text: "Contact", href: "#contact" },
];

function generateNavItems() {
  const navList = document.getElementById("nav-list");
  navItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.setAttribute("role", "none");
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.text;
    a.className =
      "nav-link text-xs sm:text-sm text-white hover:text-gray-300 transition-colors";
    a.setAttribute("role", "menuitem");
    a.setAttribute("tabindex", "0");
    a.setAttribute("aria-label", `Navigate to ${item.text} section`);
    a.addEventListener("keydown", (e) => {
      const items = navList.querySelectorAll("a");
      const currentIndex = Array.from(items).indexOf(a);
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % items.length;
        items[nextIndex].focus();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        const prevIndex =
          currentIndex === 0 ? items.length - 1 : currentIndex - 1;
        items[prevIndex].focus();
      } else if (e.key === "Home") {
        e.preventDefault();
        items[0].focus();
      } else if (e.key === "End") {
        e.preventDefault();
        items[items.length - 1].focus();
      }
    });
    li.appendChild(a);
    navList.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", generateNavItems);
