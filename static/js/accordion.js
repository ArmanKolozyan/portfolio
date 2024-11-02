const allPanels = Array.from(document.querySelectorAll(".panel"));
const allAccordion = Array.from(document.querySelectorAll(".accordion"));

const expandAccordion = (elem) => {
  const isActive = elem.parentElement.classList.contains("active");
  
  // closing all sections
  allAccordion.forEach((acc) => {
    acc.classList.remove("active");
  });
  allPanels.forEach((panel) => {
    panel.style.maxHeight = null;
  });

  // toggling the clicked section
  if (!isActive) {
    elem.parentElement.classList.add("active");
    const activePanel = elem.parentElement.nextElementSibling;
    
    if (
      activePanel.id !== "skill-panel" &&
      document.querySelector("#skill-panel")
    ) {
      const skillBars = Array.from(document.querySelectorAll("#skill-percent"));
      skillBars.forEach((skill) => {
        skill.style.width = "0";
      });
    }
    
    activePanel.style.maxHeight = activePanel.scrollHeight + "px";
  }
};