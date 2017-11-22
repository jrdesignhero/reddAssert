//Requirements: When need to send user form data to a crm after a lead generation form is completed. 
var User = function (conf) {
	this.name = conf.name;
	this.age = conf.age;
	this.phone = conf.phone;
}
User.prototype.setName = function (n) { this.name = n; return this.name }
User.prototype.setAge = function (n) { this.age = n; return this.age }
User.prototype.setPhone = function (n) { this.phone = n; return this.phone }