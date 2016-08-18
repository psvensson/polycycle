// Generated by CoffeeScript 1.10.0
(function() {
  var FooThing, SuperModel, defer, uuid,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  SuperModel = require('spincycle').SuperModel;

  defer = require('node-promise').defer;

  uuid = require('node-uuid');

  FooThing = (function(superClass) {
    extend(FooThing, superClass);

    FooThing.type = 'FooThing';

    FooThing.model = [
      {
        name: 'name',
        "public": true,
        value: 'name',
        "default": 'foothing'
      }, {
        name: 'foobar',
        "public": true,
        value: 'foobar',
        "default": 'xyzzy'
      }
    ];

    function FooThing(record) {
      this.record = record != null ? record : {};
      return FooThing.__super__.constructor.apply(this, arguments);
    }

    return FooThing;

  })(SuperModel);

  module.exports = FooThing;

}).call(this);

//# sourceMappingURL=FooThing.js.map
