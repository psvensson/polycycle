SampleGame      =  require('./SampleGame')
SamplePlayer    = require('./SamplePlayer')
FooThing        = require('./FooThing')
DB              = require('spincycle').DB
ResolveModule   = require('spincycle').ResolveModule

class SampleLogic

  constructor: (@messageRouter) ->

    @messageRouter.objectManager.expose('SampleGame')
    @messageRouter.objectManager.expose('SamplePlayer')
    @messageRouter.objectManager.expose('FooThing')

    ResolveModule.modulecache['SampleGame'] = SampleGame
    ResolveModule.modulecache['SamplePlayer'] = SamplePlayer
    ResolveModule.modulecache['FooThing'] = FooThing

    DB.createDatabases(['SampleGame', 'SamplePlayer', 'FooThing']).then (results)=>
      console.log ' DB init done..'

      DB.getOrCreateObjectByRecord({id:17, name: 'fooGame', type: 'SampleGame', createdBy: 'SYSTEM', createdAt: Date.now()}).then (game)=>
        console.log 'got first game'
        game.serialize()
        @messageRouter.open()

module.exports = SampleLogic