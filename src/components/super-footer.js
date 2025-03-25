export default class SuperFooter extends HTMLElement {

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
            .info-footer {
                font-family: "Verdana";
                background-color: coral;
				color: white;
            }
        `
        this.shadowRoot.appendChild(style);
	}

	render() {
		const info = document.createElement('p');
        info.classList.add('info-footer');
        const infoAttribute = this.getAttribute('super-info');
        const infoNode = document.createTextNode(infoAttribute);
        info.appendChild(infoNode);
        this.shadowRoot.appendChild(info);
	}
}

customElements.define('super-footer', SuperFooter);