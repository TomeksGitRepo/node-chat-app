var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let from = 'Epic';
        let text = 'Things to do';
        let res = generateMessage(from, text);
        expect(res.from).toBe(from);
        expect(res.text).toBe(text);
        expect(res.createdAt).toBeA('number');

    })
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        let from = 'Epic';
        let latitude = 1;
        let longitude = 1;

        let res = generateLocationMessage(from, latitude, longitude);
        
        expect(res.from).toBe(from);
        expect(res.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
        expect(res.createdAt).toBeA('number');
    })
})