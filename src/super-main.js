import SuperDialog from './components/super-dialog.js';
import SuperHeader from './components/super-header.js';
import SuperFooter from './components/super-footer.js';
import SuperEmoadd from './components/super-emoadd.js';
import EmoService from './services/emo-service.js';

const emoService = new EmoService();

export default class SuperMain extends HTMLElement {

	constructor() {
		super();
		this.attachShadow({mode: 'open'});
	}

	connectedCallback() {

		this.style();
		this.render();

		const emoAddComp = this.shadowRoot.querySelector('super-emoadd');
		emoAddComp.addEventListener('emotion-add-request', () => {
			const dialog = document.getElementById('emoji-dialog');
			if (dialog && typeof dialog.open === 'function') {
				dialog.open();
			}
		})
		const dialog = document.getElementById('emoji-dialog');
		if (dialog) {
			dialog.addEventListener('emoji-selected', (event) => {
				const selectedEmoji = event.detail.emoji;
				emoService.addEmotion(selectedEmoji, new Date());
				console.log('Updated: ', emoService.getEmotions());
			})
		}
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
		this.shadowRoot.innerHTML = `
		<div class="container">
      		<super-emoadd></super-emoadd>
		</div>
		`
	}

}

customElements.define('super-main', SuperMain);