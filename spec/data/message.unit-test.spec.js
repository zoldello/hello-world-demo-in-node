const MessageDataService = require('../../data/message');

describe('Test of data service', function() {
	it('should return an expected message', function() {
		const messageDataService = new MessageDataService();
		const actual = messageDataService.read();

		expect(actual.text).toBe('Hello World');
		expect(actual.description).toBe('welcome message');
		expect(actual.date).toBe(1520220154507);

	});
});
