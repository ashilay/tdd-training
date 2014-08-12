describe(".helloText", function(){
	var result;
	beforeEach(function() {
		result = helloText();
	});

	it('should return correct text', function() {
		expect(result).toEqual("Hello, World!");
	});

});
