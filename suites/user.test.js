ReddAssert.group('User Unit Test', function (){
	ReddAssert.assert(user = new User( {name: 'James Redd', age: 32, phone: '(714) 872-7177'} ), 'Create a User');	
	ReddAssert.assert(user.name, 'Name can be set on user object');	
	ReddAssert.assert(user.name === 'James Redds', 'User returns expected name value when set in constructor');	
	ReddAssert.assert(user.age, 'Age can be set on user object');	
	ReddAssert.assert(user.age === 32, 'User returns expected age value when set in constructor');	
	ReddAssert.assert(user.phone, 'Phone can be set on user object');	
	ReddAssert.assert(user.phone === '(714) 872-7177', 'User returns expected phone value when set in constructor');	
});

ReddAssert.group('User Functionality Test', function () {
	ReddAssert.assert(user.setName('Mike Young'), 'User name can be set from interface');
	ReddAssert.assert(user.setAge(25), 'User age can be set from interface');
	ReddAssert.assert(user.setPhone('(714)872-7178'), 'User phone can be set from interface');
	ReddAssert.assert(user.name === 'Mike Young', 'User returns expected name value when set from interface');	
	ReddAssert.assert(user.age === 25, 'User returns expected age value when set from interface');	
	ReddAssert.assert(user.phone === '(714)872-7178', 'User returns expected phone value when set from interface');	
});

ReddAssert.group('Additional Example Test', function () {
	ReddAssert.assert( (1+1 == 2), 'JavaScript math works still -- 1+1 = 2');
	ReddAssert.assert( ('james'.length === 5), 'JavaScript string functions work in this browers');
	ReddAssert.assert( (typeof 'james' === 'string'), 'string data type works in this browser')
});
