System.register(['angular2/testing'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            }],
        execute: function() {
            testing_1.describe('weather', function () {
                testing_1.it('true is trues', function () {
                    testing_1.expect(true).toEqual(true);
                });
            });
        }
    }
});
//# sourceMappingURL=weather.spec.js.map