chai.Assertion.addMethod("trimmedEqual", function (expectedString) {
  const str = this._obj;
  new chai.Assertion(str.trim()).to.equal(expectedString.trim());
});
