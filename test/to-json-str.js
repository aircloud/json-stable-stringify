var test = require('tape');
var stringify = require('../');

test('toJSONStr returns string', function (t) {
	t.plan(1);
	var obj = { one: 1, two: 2 };
  let res = stringify(obj, {
    toJSONStr: function(key, value) { 
      if (key == 'one') return 'one';
      return null;
     }
  });
	t.equal(res, '{\"one\":one,\"two\":2}');
});
