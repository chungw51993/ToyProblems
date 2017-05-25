var Stack = function() {
  var storage = [];

  this.push = function(val){
    storage.push(val)
  };

  this.pop = function(){
    return storage.pop();
  };

  this.size = function(){
    return storage.length;
  };

};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(val){
    inbox.push(val)
  };

  this.dequeue = function(){
    if (!outbox.size()) {
      while (inbox.size()) {
        outbox.push(inbox.pop())
      }
    }
    return outbox.pop()
  };

  this.size = function(){
    return inbox.size() + outbox.size();
  };
};
