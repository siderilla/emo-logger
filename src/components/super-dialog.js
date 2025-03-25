export default class SuperDialog extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.style();
        this.render();
		this.addListeners();
    }

    style() {
        const style = document.createElement('style');
        style.innerText = `
            .dialog {
				position: fixed;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				background: white;
				border: 1px solid #ccc;
				padding: 20px;
				display: none;
				z-index: 1000;
        	}
        	.dialog.active {
          		display: block;
        	}
        	.emoji-button {
				font-size: 24px;
				margin: 5px;
				cursor: pointer;
        	}
        `
        this.shadowRoot.appendChild(style);
    }
    
    render() {
		this.shadowRoot.innerHTML = `
		<div class="dialog" id="dialog">
        	<p>Select your emotion:</p>
			<div class="emojis">
				<button class="emoji-button" data-emoji="😠">😠</button>
				<button class="emoji-button" data-emoji="😞">😞</button>
				<button class="emoji-button" data-emoji="🤨">🤨</button>
				<button class="emoji-button" data-emoji="🙂">🙂</button>
				<button class="emoji-button" data-emoji="😁">😁</button>
			</div>
        	<button id="closeDialog">Close</button>
      	</div>
		`
    }

	addListeners() {

		const dialogElement = this.shadowRoot.getElementById('dialog');

		const emojiButtons = this.shadowRoot.querySelectorAll('.emoji-button');
		emojiButtons.forEach(button => {
			button.addEventListener('click', (event) => {
				const selectedEmoji = event.currentTarget.getAttribute('data-emoji');
				this.dispatchEvent(new CustomEvent('emoji-selected', {
					detail: { emoji: selectedEmoji },
					bubbles: true,
					composed: true
				}));
				this.close();
			});
		});
		this.shadowRoot.getElementById('closeDialog').addEventListener('click', () => {
			dialogElem.close();
		});
	}

	open() {
		const dialogElem = this.shadowRoot.getElementById('dialog');
		dialogElem.showModal();
	}
}

customElements.define('super-dialog', SuperDialog);