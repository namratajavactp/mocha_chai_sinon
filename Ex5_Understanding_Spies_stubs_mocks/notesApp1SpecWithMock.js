describe('ItemCtrl with SpyReturn', function() {
  beforeEach(module('notesApp1'));
  var ctrl1, itemService,mock,expectation;
  beforeEach(inject(function($controller, ItemService) {

      mock = sinon.mock(ItemService);
      expectation= mock.expects('list').returns(6);

      itemService = ItemService;
      ctrl1 = $controller('ItemCtrl');

  }));

  it('should load mocked out items', function() {
      expectation.atLeast(1).atMost(5);
      mock.verify();
       expect(ctrl1.items).to.equal(6);
        mock.restore();
       //expect(ctrl1.items).to.eql({id: 4, label: 'Item 4'});

  });
});
/*In the above code example,Mock has constructs that can combine the functionality of Spies and stubs both */