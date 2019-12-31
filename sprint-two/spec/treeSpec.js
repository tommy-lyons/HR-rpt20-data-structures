describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  // additional test
  it('should work for all primitive data types and variables passed in as the value', function() {
    var testStr = 'string';
    var testArr = [1, 2, 3, 4, 5];
    var testObj = {name: 'testObj'};

    tree.addChild(true);
    tree.addChild('string');
    tree.addChild(null);
    tree.addChild(testStr);
    tree.addChild(testArr);
    tree.addChild(testObj);
    expect(tree.contains(true)).to.equal(true);
    expect(tree.contains(null)).to.equal(true);
    expect(tree.contains('string')).to.equal(true);
    expect(tree.contains(testStr)).to.eql(true);
    expect(tree.contains(testArr)).to.eql(true);
    expect(tree.contains(testObj)).to.eql(true);
  });

});
