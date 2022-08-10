const testUtils = require('./testUtils.js');
const SOURCE_DIR = process.env['SOURCE_DIR'];

describe("A suite", function () {
    /**
     * @message True is true
     */
    it("True is true", function () {
        expect(true).toBeTrue()
    });
});
