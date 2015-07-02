/**
 * Created by namratam on 01-06-2015.
 */
describe("SinonFakeServerWithMocha", function() {
    var server;

    beforeEach(function() {
        server = sinon.fakeServer.create();
        // server.autoRespond = true;
    });

    afterEach(function () {
        server.restore();
    });

    it("should fake a jQuery ajax request", function () {
        server.respondWith("GET", "/something",
            [200, { "Content-Type": "application/json" },
                '{ "stuff": "is", "awesome": "in here" }']);

        var callbacks = [sinon.spy(), sinon.spy()];

        jQuery.ajax({
            url: "/something",
            success: callbacks[0]
        });

        jQuery.ajax({
            url: "/other",
            success: callbacks[1]
        });

     //   expect(callbacks[0]).to.be.calledOnce;
        console.log(server.requests); // Logs all requests so far
        server.respond(); // Process all requests so far

         expect(callbacks[0]).to.be.calledOnce;
         expect(callbacks[1]).not.to.be.calledOnce; // Unknown URL /other received 404 */

        expect(callbacks[0]).to.have.been.calledWith({
            stuff: "is",
            awesome: "in here"
        });


    });
});
