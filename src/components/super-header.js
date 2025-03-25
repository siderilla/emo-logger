export default class SuperHeader extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.style();
        this.render();
    }

    style() {
        const style = document.createElement('style');
        style.innerText = `
            .main-title {
                font-family: "Verdana";
                background-color: coral;
				color: white;
            }
        `
        this.shadowRoot.appendChild(style);
    }
    
    render() {
        const title = document.createElement('h1');
        title.classList.add('main-title');
        const titleAttribute = this.getAttribute('super-title');
        const titleNode = document.createTextNode(titleAttribute);
        title.appendChild(titleNode);
        this.shadowRoot.appendChild(title);
    }

}

customElements.define('super-header', SuperHeader);