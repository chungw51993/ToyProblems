var compose = function () {
  var functions = arguments;

  return function (result) {
    for (var i = functions.length - 1; i >= 0; i--) {
      result = functions[i].call(this, result);
    }

    return result;
  };
};

var pipe = function () {
  var functions = arguments;

  return function (result) {
    for (var i = 0; i < functions.length; i++) {
      result = functions[i].call(this, result);
    }

    return result;
  };
};
