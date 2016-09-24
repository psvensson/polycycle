// Generated by CoffeeScript 1.9.3
(function() {
  var DB, FooThing, ResolveModule, SampleGame, SampleLogic, SamplePlayer;

  SampleGame = require('./SampleGame');

  SamplePlayer = require('./SamplePlayer');

  FooThing = require('./FooThing');

  DB = require('spincycle').DB;

  ResolveModule = require('spincycle').ResolveModule;

  SampleLogic = (function() {
    function SampleLogic(messageRouter) {
      this.messageRouter = messageRouter;
      this.messageRouter.objectManager.expose('SampleGame');
      this.messageRouter.objectManager.expose('SamplePlayer');
      this.messageRouter.objectManager.expose('FooThing');
      ResolveModule.modulecache['SampleGame'] = SampleGame;
      ResolveModule.modulecache['SamplePlayer'] = SamplePlayer;
      ResolveModule.modulecache['FooThing'] = FooThing;
      DB.createDatabases(['SampleGame', 'SamplePlayer', 'FooThing']).then((function(_this) {
        return function(results) {
          console.log(' DB init done..');
          return DB.getOrCreateObjectByRecord({
            id: 17,
            name: 'fooGame',
            type: 'SampleGame',
            createdBy: 'SYSTEM',
            createdAt: Date.now()
          }).then(function(game) {
            console.log('got first game');
            game.serialize();
            return _this.messageRouter.open();
          });
        };
      })(this));
    }

    return SampleLogic;

  })();

  module.exports = SampleLogic;

}).call(this);

//# sourceMappingURL=SampleLogic.js.map
