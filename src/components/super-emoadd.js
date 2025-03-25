export default class SuperEmoadd extends HTMLElement {

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
			button {
				padding: 8px 16px;
				font-size: 16px;
				cursor: pointer;
			}`;
		
		this.shadowRoot.appendChild(style);
    }
    
    render() {
		if (!this.shadowRoot.innerHTML) {
			this.shadowRoot.innerHTML = '';
		} else {
		this.shadowRoot.innerHTML = this.shadowRoot.innerHTML;
		}

		const addButton = document.createElement('button');
		addButton.appendChild(document.createTextNode('Add Emotion of Today!'));

		addButton.addEventListener('click', () => {
			this.dispatchEvent(new CustomEvent('emotion-add-request', {
				bubbles: true,
				composed: true
			}));
		});

		this.shadowRoot.appendChild(addButton);
    }

}

customElements.define('super-emoadd', SuperEmoadd);