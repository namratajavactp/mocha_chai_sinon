/**
 * Created by namratam on 28-05-2015.
 */
describe('Calculator with spies', function() {

    var calc,ele,spy,stub,mock;

    beforeEach(function() {
       calc = new Calculator('Output');
        spy = sinon.spy(calc,'add');


        //todo:create calc stub
        stub = sinon.stub(calc,'sub',function(){return 6});

        //todo:create calc mock
        mock = sinon.mock(calc);
        mock.expects('mul').returns(5);

      });

    it('spy add method and chk if it was called', function() {
        calc.add(3,3);
        assert(spy.called);
        spy.withArgs(3,3);
        calc.add(4,5);
        assert(spy.withArgs(4,5).calledOnce);
    });

    it('test stub',function()
    {  //todo:write a code to test stub
        var val =calc.sub(3,3);
        assert(stub.called);
        expect(val).to.equal(6);

    });

    it('test mock',function()
    { //todo:write a code to test mock
        var val = calc.mul(3,3);
        mock.verify();
        expect(val).to.equal(5);
        mock.restore();

    });


});



/*In the above code example, we introduce Mocha spies. Mocha spies allow you to hook onto existing functions,
 and check whether they have been called, and if so, how many times they were called,the specific way they get
 called and so on. We call the spy function with an object as the first argument, and a string with the function name
 that we want to hook on to as the second argument. In this example, we tell Mocha to spy on the add function of the
 ItemService. */

