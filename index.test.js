// Test the results of the game by comparing the two players' scores.
import {expect} from "chai";
var expect = chai.expect;

describe(`resultCheck`, function() {
    describe("generateValues", function(){
        it('should generate integers from 0 to N-1, and repeat the values.', function() {
            var x = genrateValues(4);
            expect(x).to.equal("0,1,2,3,0,1,2,3");  // hard code here.
        });
    });
});

