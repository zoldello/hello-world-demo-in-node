const message = require('../../routes/message');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const express = require('express');
const router = express.Router();
const MessageDataService = require('../../data/message');
const endpoint = 'welcome';

describe('Test of data service', function() {
	afterEach(() => {
		sinon.restore();
	});

	it('should return an expected message', function() {
		const reqStub = sinon.stub();
		const resStub = sinon.stub();
		const statusStub = sinon.stub();
		const jsonStub = sinon.stub();
		const testInput = 'abc';
		const MessageDataServiceStub =
            sinon
            	.stub(MessageDataService.prototype, 'welcome')
            	.returns(testInput);

		statusStub.returns(jsonStub);
		resStub.returns(statusStub);

		resStub.returns();

	   message.get('welcome', function(reqStub, resStub) {});

		// expect(resStub.callCount).toBe(1);
	});
});

///////////////
/*

const express = require('express');
const MessageDataService = require('../data/message');

const router = express.Router();

router.get('/welcome', (req, res, next) => {
    const messageDataService = new MessageDataService();
    let welcomeData = messageDataService.welcome();

    res.status(200).json(welcomeData);
});

module.exports = router;
*/
