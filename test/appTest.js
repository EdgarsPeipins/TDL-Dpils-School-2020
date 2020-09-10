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
    });
    it('sum a, b > 5', function(){
        assert.isAbove(app.addNumbers(3,7), 5);
    })
})

//assert.isAbove - addNumbers(3,7)
//asser.isAbove(app.add.Numbers(3, 7) 5);

