const supertest = require('supertest');

describe('Test of data service', function() {
	const server = supertest.agent('http://localhost:3000');

	it('should return an expected message', function(done) {
		server
			.get('/api/message/welcome')
			.expect(200)
			.end((err, res) => {
				expect(res.status).toBe(200);
				expect(res.body.text).toBe('Hello World');
				expect(res.body.description).toBe('welcome message');
				expect(res.body.date).toBe(1520220154507);
				done();
			});
	});
});
