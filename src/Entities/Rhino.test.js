import 'babel-polyfill'
import testUtils from '../utils/tests'
import * as Constants from '../Constants'
import { Rhino } from './Rhino'
import { Skier } from './Skier'
import { AssetManager } from '../Core/AssetManager'

let assetManager = null
const game = testUtils.mockGame()

beforeAll(async () => {
  assetManager = new AssetManager()
  await assetManager.loadAssets(Constants.ASSETS)
})

afterEach(() => {
  testUtils.sandbox.resetHistory()
})

test('should eat skier', () => {
  const skier = new Skier(0, 0)
  const rhino = new Rhino(0, 0)

  rhino.checkIfHitSkier(skier, assetManager, game)

  expect(rhino.direction).toBe(Constants.RHINO.DIRECTIONS.EAT)
  expect(rhino.assetName).toBe(Constants.RHINO.LIFT)

  // check if ended the game
  expect(game.setStatus.calledOnce).toBe(true)
  expect(game.setStatus.firstCall.calledWith(Constants.GAME_STATUS.OVER)).toBe(true)
})
