/**
 * Created by namratam on 28-05-2015.
 */
describe('Calculator with spies', function() {

    var calc,ele,spy;

    beforeEach(function() {
       calc = new Calculator('Output');
        spy = sinon.spy(calc,'add');
        calc.add(3,3);

        //todo:create calc stub


        //todo:create calc mock

      });

    it('spy add method and chk if it was called', function() {
        assert(spy.called);
        spy.withArgs(3,3);
        calc.add(4,5);
        assert(spy.withArgs(4,5).calledOnce);
    });

    it('test stub',function()
    {  //todo:write a code to test stub
    });

    it('test mock',function()
    {
        //todo:write a code to test mock
    });


});



/*In the above code example, we introduce Mocha spies. Mocha spies allow you to hook onto existing functions,
 and check whether they have been called, and if so, how many times they were called,the specific way they get
 called and so on. We call the spy function with an object as the first argument, and a string with the function name
 that we want to hook on to as the second argument. In this example, we tell Mocha to spy on the add function of the
 ItemService. */

