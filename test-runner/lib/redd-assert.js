(function () {
	var results;
	var _result = {
		result_num: 0,
		resultDOM: document.getElementById("ReddAssert"),
		createResultItem: function (value, unitDesc) {
			var listItem = document.createElement('li');
			listItem.className = value ? "pass":"fail";
			listItem.appendChild(document.createTextNode(unitDesc));
			return listItem;
		}
	}, 
	_assert = function (value, unitTestDescription) {
		var li = _result.createResultItem(value, unitTestDescription)
		results.appendChild(li);
		if (!value) {
			li.parentNode.parentNode.className = "fail";
		}
		return li;
	},
	_group = function (testName, fn) {
		results = _result.resultDOM;
		rn = _result.result_num++;
		results = _assert(true, rn + ". " +testName).appendChild(document.createElement("ol"));
		fn();			
	};
	this.ReddAssert = { assert: _assert, group: _group }
})();