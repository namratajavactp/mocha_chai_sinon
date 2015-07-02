/**
 * Created by namratam on 15-05-2015.
 * demo:- using 'sinonjs' spies to test angularjs code
 * http://sinonjs.org/docs/#spies
 */
describe('Service Testing: notify', function() {
    var mock, notify;
    beforeEach(module('myServiceModule'));
    beforeEach(function () {
        mock = {alert: sinon.spy()};

        module(function ($provide) {
            $provide.value('$window', mock);
        });

        inject(function ($injector) {
            notify = $injector.get('notify');
        });
    });



    it('should alert all after third notification', function () {
        notify('one');
        notify('two');
        notify('three');

        assert(mock.alert.called);
    //    expect(mock.alert).toHaveBeenCalledWith("one\ntwo\nthree");
    });

    it('should clear messages after alert', function () {
        notify('one');
        notify('two');
        notify('third');
        notify('more');
        notify('two');
        notify('third');

        assert(mock.alert.callCount, 2);
     //   expect(mock.alert.callCount).toEqual(2);
       // expect(mock.alert.mostRecentCall.args).toEqual(["more\ntwo\nthird"]);
    });
});