var bind = function(func, context) {
  var args = Array.prototype.slice.call(arguments).slice(2);
  console.log(args);
  return function(){
    return func.apply(context, args.concat(Array.prototype.slice.call(arguments)));
  };
};

Function.prototype.bind = function(context) {
  var func = this
  var args = Array.prototype.slice.call(arguments).slice(1);

  return function (){
    return func.apply(context, args.concat(Array.prototype.slice.call(arguments)));
  };
};
