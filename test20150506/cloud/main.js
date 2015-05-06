// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

AV.Cloud.define("helloWithName", function(request, response) {
	var name = request.params.name;
  response.success("Hello " +name+ " !");
});