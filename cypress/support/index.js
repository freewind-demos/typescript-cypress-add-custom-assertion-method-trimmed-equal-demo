chai.Assertion.addMethod("trimmedEqual", function (expectedString) {
  const actual = this._obj.trim();
  const expected = expectedString.trim();
  this.assert(
    actual === expected
    , 'expected #{this} to equal string #{exp} after trimmed, but it was #{act} after trimmed'
    , 'expected #{this} not to equal string #{exp} after trimmed'
    , expected
    , actual
  );
});
