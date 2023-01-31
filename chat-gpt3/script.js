const sections = {
  home: document.querySelector("#home-section"),
  services: document.querySelector("#services-section"),
  about: document.querySelector("#about-section"),
  contact: document.querySelector("#contact-section")
};

const buttons = {
  home: document.querySelector("#home-button"),
  services: document.querySelector("#services-button"),
  about: document.querySelector("#about-button"),
  contact: document.querySelector("#contact-button")
};

for (const button of Object.values(buttons)) {
  button.addEventListener("click", () => {
    const sectionId = button.id.split("-")[0];
    for (const [id, section] of Object.entries(sections)) {
      section.style.display = id === sectionId ? "block" : "none";
    }
  });
}
