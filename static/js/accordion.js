const allPanels = Array.from(document.querySelectorAll(".panel"));
const allAccordion = Array.from(document.querySelectorAll(".accordion"));

const expandAccordion = (elem) => {
  const isActive = elem.parentElement.classList.contains("active");
  const activePanel = elem.parentElement.nextElementSibling;
  
  // toggling only the clicked section (no longer closing all others)
  if (!isActive) {
    elem.parentElement.classList.add("active");
    
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
    
    // scrolling to the beginning of the selected section
    const handleTransitionEnd = (event) => {
      if (event.target === activePanel && event.propertyName === 'max-height') {
        
        activePanel.removeEventListener('transitionend', handleTransitionEnd);
        
        // getting the accordion element's position, then scrolling
        const rect = elem.parentElement.getBoundingClientRect();
        const absoluteTop = window.pageYOffset + rect.top;
        
        window.scrollTo({
          top: absoluteTop - 20, // 20px offset from top
          behavior: 'smooth'
        });
      }
    };
    activePanel.addEventListener('transitionend', handleTransitionEnd);
  } else {
    // closing the current section if it's already active
    elem.parentElement.classList.remove("active");
    activePanel.style.maxHeight = null;
  }
};