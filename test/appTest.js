const assert = require('chai').assert;
const app = require('../app.js');

describe('App', function(){
    it('app should return hello', function(){
        assert.equal(app.sayhello(), 'hello');
    });
    it('app sayhello should return string', function(){
        assert.typeOf(app.sayhello(), 'string');
    })
    it('sum a, b', function(){
        assert.equal(app.addNumbers(2,4), 6);
    })
})