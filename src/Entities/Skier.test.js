import 'babel-polyfill'
import * as Constants from '../Constants'
import { Skier } from './Skier'
import { Obstacle } from './Obstacles/Obstacle'
import { AssetManager } from '../Core/AssetManager'
import { ObstacleManager } from './Obstacles/ObstacleManager'

let assetManager = null

beforeAll(async () => {
  assetManager = new AssetManager()
  await assetManager.loadAssets(Constants.ASSETS)
})

/*
  DIRECTIONS
*/

test('should instantiated skier correctly', () => {
  const skier = new Skier(0, 0)

  expect(skier.direction).toBe(Constants.SKIER.DIRECTIONS.DOWN)
  expect(skier.assetName).toBe(Constants.SKIER.DOWN)
})

test('should turn left', () => {
  const skier = new Skier(0, 0)
  skier.turnLeft()

  expect(skier.direction).toBe(Constants.SKIER.DIRECTIONS.LEFT_DOWN)
  expect(skier.assetName).toBe(Constants.SKIER.LEFTDOWN)

  skier.turnLeft()

  expect(skier.direction).toBe(Constants.SKIER.DIRECTIONS.LEFT)
  expect(skier.assetName).toBe(Constants.SKIER.LEFT)
})

test('should turn right', () => {
  const skier = new Skier(0, 0)
  skier.turnRight()

  expect(skier.direction).toBe(Constants.SKIER.DIRECTIONS.RIGHT_DOWN)
  expect(skier.assetName).toBe(Constants.SKIER.RIGHTDOWN)

  skier.turnRight()

  expect(skier.direction).toBe(Constants.SKIER.DIRECTIONS.RIGHT)
  expect(skier.assetName).toBe(Constants.SKIER.RIGHT)
})

/*
  JUMPING
 */

test('should jump', () => {
  const skier = new Skier(0, 0)
  skier.jump()

  expect(skier.direction).toBe(Constants.SKIER.DIRECTIONS.JUMP)
  expect(skier.assetName).toBe(Constants.SKIER.JUMP_1)
})

test('should crash in trees while jumping', () => {
  const skier = new Skier(0, 0)
  skier.jump()

  const obstacle = new Obstacle(0, 0)
  obstacle.assetName = Constants.OBSTACLES.TREE

  const obstacleManager = new ObstacleManager()

  // mock obstacle
  obstacleManager.obstacles.push(obstacle)

  // simulate collision
  skier.checkIfSkierHitObstacle(obstacleManager, assetManager)

  expect(skier.direction).toBe(Constants.SKIER.DIRECTIONS.CRASH)
  expect(skier.assetName).toBe(Constants.SKIER.CRASH)
})

test('should crash in tree cluster while jumping', () => {
  const skier = new Skier(0, 0)
  skier.jump()

  const obstacle = new Obstacle(0, 0)
  obstacle.assetName = Constants.OBSTACLES.TREE_CLUSTER

  const obstacleManager = new ObstacleManager()

  // mock obstacle
  obstacleManager.obstacles.push(obstacle)

  // simulate collision
  skier.checkIfSkierHitObstacle(obstacleManager, assetManager)

  expect(skier.direction).toBe(Constants.SKIER.DIRECTIONS.CRASH)
  expect(skier.assetName).toBe(Constants.SKIER.CRASH)
})

test('should not crash in rocks while jumping', () => {
  const skier = new Skier(0, 0)
  skier.jump()

  const obstacle = new Obstacle(0, 0)
  obstacle.assetName = Constants.OBSTACLES.ROCK1

  const obstacleManager = new ObstacleManager()

  // mock obstacle
  obstacleManager.obstacles.push(obstacle)

  // simulate collision
  skier.checkIfSkierHitObstacle(obstacleManager, assetManager)

  expect(skier.direction).toBe(Constants.SKIER.DIRECTIONS.JUMP)
  expect(skier.assetName).toBe(Constants.SKIER.JUMP_1)
})

test('should not crash in cluster rocks while jumping', () => {
  const skier = new Skier(0, 0)
  skier.jump()

  const obstacle = new Obstacle(0, 0)
  obstacle.assetName = Constants.OBSTACLES.ROCK2

  const obstacleManager = new ObstacleManager()

  // mock obstacle
  obstacleManager.obstacles.push(obstacle)

  // simulate collision
  skier.checkIfSkierHitObstacle(obstacleManager, assetManager)

  expect(skier.direction).toBe(Constants.SKIER.DIRECTIONS.JUMP)
  expect(skier.assetName).toBe(Constants.SKIER.JUMP_1)
})

/*
  CRASH
 */

test('should recover from collision and turn left', () => {
  const skier = new Skier(0, 0)

  const obstacle = new Obstacle(0, 0)
  // forcing obstacle to not be a ramp
  obstacle.assetName = Constants.OBSTACLES.TREE_CLUSTER

  const obstacleManager = new ObstacleManager()

  // mock obstacle
  obstacleManager.obstacles.push(obstacle)

  // simulate collision
  skier.checkIfSkierHitObstacle(obstacleManager, assetManager)

  skier.turnLeft()

  expect(skier.direction).toBe(Constants.SKIER.DIRECTIONS.LEFT)
  expect(skier.assetName).toBe(Constants.SKIER.LEFT)
})

test('should recover from collision and turn right', () => {
  const skier = new Skier(0, 0)

  const obstacle = new Obstacle(0, 0)
  // forcing obstacle to not be a ramp
  obstacle.assetName = Constants.OBSTACLES.ROCK2

  const obstacleManager = new ObstacleManager()

  // mock obstacle
  obstacleManager.obstacles.push(obstacle)

  // simulate collision
  skier.checkIfSkierHitObstacle(obstacleManager, assetManager)

  skier.turnRight()

  expect(skier.direction).toBe(Constants.SKIER.DIRECTIONS.RIGHT)
  expect(skier.assetName).toBe(Constants.SKIER.RIGHT)
})
