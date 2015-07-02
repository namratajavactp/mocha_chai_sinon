describe('ItemCtrl with SpyReturn', function() {
  beforeEach(module('notesApp1'));

  var ctrl1, itemService,stub;

  beforeEach(inject(function($controller, ItemService) {


      stub = sinon.stub(ItemService,'list',function(){return {id: 4, label: 'Item 4'};});
      itemService = ItemService;
      ctrl1 = $controller('ItemCtrl');


  }));

  it('should load mocked out items', function() {
        assert(stub.called);
        expect(ctrl1.items).to.eql({id: 4, label: 'Item 4'});


  });
});
/*In the example above, we override the list method in the ItemService, and replace it with our Sinon stub. */
