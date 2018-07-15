const expect = require('expect');

const {isRealString} = require('../utils/validation');

//import isRealString

describe('isRealString', () => {
    it('should reject non-string values', ()=> {
        expect(isRealString(7)).toBeFalsy();
    });

    it('should reject string with only spaces', ()=> {
        expect(isRealString('    ')).toBeFalsy();
    });

    it('should allow stirng with non-space characters', ()=> {
        expect(isRealString('  epic  ')).toBeTruthy();
    });
})
