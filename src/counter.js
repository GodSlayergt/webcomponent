

const template = document.createElement('template');
template.innerHTML = `
  <style>
    div {
      margin-top: 20px;
      color: black;
    }
  </style>
  <div>
    Webcomponent <span></span>
  </div>
`;

class WebCounter extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector('span').innerText = '';
  }

  static get observedAttributes() {
    return ['name-attribute'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == 'name-attribute') {
      this.shadowRoot.querySelector(
        'span'
      ).innerText = `${newValue}`;
    }
  }
}

window.customElements.define('web-counter', WebCounter);
