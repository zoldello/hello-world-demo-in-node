
const message = () => {
	let messageModel = {
		'text': 'Hello World',
		'description': 'welcome message',
		'date': Date.now()
	};

	return messageModel;
};

module.exports = message;
