describe('ItemCtrl with spies', function() {
  beforeEach(module('notesApp1'));

  var ctrl1,ctrl2, itemService,spy;

  beforeEach(inject(function($controller, ItemService) {
      spy = sinon.spy(ItemService,'add');

    itemService = ItemService;
    ctrl1 = $controller('ItemCtrl');

  }));

  it('should load mocked out items', function() {

    //  assert(spy.called);
      spy.withArgs({id: 3, label: 'Item 3'});
      spy.withArgs({id: 4, label: 'Item 4'});

      itemService.add({id: 3, label: 'Item 3'});
      itemService.add({id: 4, label: 'Item 4'});

      assert(spy.withArgs({id: 3, label: 'Item 3'}).calledOnce);
      assert(spy.withArgs({id: 4, label: 'Item 4'}).calledOnce);

    expect(ctrl1.items).to.eql([
      {id: 1, label: 'Item 0'},
      {id: 2, label: 'Item 1'},
      {id: 3, label: 'Item 3'},
      {id: 4, label: 'Item 4'}
    ]);
  });
});



/*In the above code example, we introduce Mocha spies. Mocha spies allow you to hook onto existing functions,
and check whether they have been called, and if so, how many times they were called,the specific way they get
 called and so on. We call the spy function with an object as the first argument, and a string with the function name
 that we want to hook on to as the second argument. In this example, we tell Mocha to spy on the add function of the
 ItemService. */
 