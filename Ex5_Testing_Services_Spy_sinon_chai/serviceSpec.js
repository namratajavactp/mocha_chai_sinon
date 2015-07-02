/**
 * Created by namratam on 15-05-2015.
 * demo:- using 'sinonjs' spies to test angularjs code
 * http://sinonjs.org/docs/#spies
 * http://chaijs.com/plugins/sinon-chai
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

    it('should not alert first two notifications', function () {
        notify('one');
        notify('two');

        mock.alert.should.have.not.been.called;

    });

    it('should alert all after third notification', function () {
        notify('one');
        notify('two');
        notify('three');

        mock.alert.should.have.been.called;
        mock.alert.should.have.callCount(1);
        mock.alert.should.have.been.calledWith("one\ntwo\nthree");


    });

    it('should clear messages after alert', function () {
        notify('one');
        notify('two');
        notify('third');
        notify('more');
        notify('two');
        notify('third');

        mock.alert.should.have.callCount(2);

    });
});