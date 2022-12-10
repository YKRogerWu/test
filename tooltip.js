class Tooltip extends HTMLElement {
  constructor() {
    super(); // always do this in the beginning of a class constructor
  }

  connectedCallback() {
    // Create an span HTML element
    const tooltipIcon = document.createElement("span");

    // Attach a specific "textContent" property to the created
    // element with text content which becomes <span> (!)</span>
    tooltipIcon.textContent = "       (!)";

    //append the tooltipIcon to the class
    this.appendChild(tooltipIcon);
  }
}

// Transform the Tooltip class to a HTML element
// 2 arguments: customized HTML tag name, class name
customElements.define("my-tooltip", Tooltip);
