describe("triangle", function() {
  it("will determine if it is an equilateral triangle", function() {
    expect(triangle(3, 3, 3)).to.equal("equilateral");
  });

  it("will determine if it is a scalene triangle", function() {
    expect(triangle(5, 7, 3)).to.equal("scalene");
  });

  it("will determine if it is an isoceles triangle", function() {
    expect(triangle(5, 5, 3)).to.equal("isoceles");
  });

  it("will confirm that it is in fact a triangle", function() {
    expect(triangle(4, 4, 10)).to.equal("not a triangle");
  });

});
