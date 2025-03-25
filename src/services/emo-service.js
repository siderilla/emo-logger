export default class EmoService {
    
    constructor() {
		this.emotions = [];
		this.emojis = {
			angry: '😠​',
			saddy: '😞​',
			medium: '🤨​',
			happy: '🙂',
			super: '😁​'
		};
    }

	addEmotion(emoji, date) {
		this.emotions.push({emoji, date});
		localStorage.setItem('emotions', JSON.stringify(this.emotions));
	}

	getEmotions() {
		const emotionsCopy = [];
		for (let i = 0; i < this.emotions.length; i++) {
			emotionsCopy.push(this.emotions[i]);
		}
		return emotionsCopy;
	}


}