QUnit.test( "Типы данных", function( assert ) {
    var foo = 42;
    assert.equal( typeof foo, "number", "Passed!" );
    foo = "string";
    assert.equal( typeof foo, "string", "Passed!" );
});