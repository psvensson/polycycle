// Generated by CoffeeScript 1.10.0
(function() {
  var DB, Game, SampleLogic;

  Game = require('./SampleGame');

  DB = require('spincycle').DB;

  SampleLogic = (function() {
    SampleLogic.gamecount = 0;

    function SampleLogic(messageRouter) {
      this.messageRouter = messageRouter;
      this.games = [];
      DB.createDatabases(['samplegame', 'sampleplayer']).then((function(_this) {
        return function(results) {
          console.log(' DB init done..');
          _this.messageRouter.objectManager.expose('SampleGame');
          _this.messageRouter.objectManager.expose('SamplePlayer');
          _this.messageRouter.objectManager.expose('FooThing');
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
