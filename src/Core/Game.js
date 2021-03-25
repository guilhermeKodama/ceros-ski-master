import * as Constants from '../Constants'
import { AssetManager } from './AssetManager'
import { Canvas } from './Canvas'
import { Skier } from '../Entities/Skier'
import { Rhino } from '../Entities/Rhino'

import { ObstacleManager } from '../Entities/Obstacles/ObstacleManager'
import { Rect } from './Utils'

export class Game {
  gameWindow = null

  constructor() {
    this.score = 0
    this.assetManager = new AssetManager()
    this.canvas = new Canvas(Constants.GAME_WIDTH, Constants.GAME_HEIGHT)
    this.rhino = new Rhino(500, -100)
    this.skier = new Skier(0, 0)
    this.obstacleManager = new ObstacleManager()

    document.addEventListener('keydown', this.handleKeyDown.bind(this))
  }

  init() {
    this.obstacleManager.placeInitialObstacles()
  }

  async load() {
    await this.assetManager.loadAssets(Constants.ASSETS)
  }

  isRhinoOnTheLoose() {
    return this.score > 1000
  }

  run() {
    this.canvas.clearCanvas()

    this.updateGameWindow()
    this.drawGameWindow()

    requestAnimationFrame(this.run.bind(this))
  }

  updateGameWindow() {
    this.skier.move()
    if (this.isRhinoOnTheLoose()) this.rhino.move(this.skier)
    this.calculateScore()

    const previousGameWindow = this.gameWindow
    this.calculateGameWindow()

    this.obstacleManager.placeNewObstacle(this.gameWindow, previousGameWindow)

    this.skier.checkIfSkierHitObstacle(this.obstacleManager, this.assetManager)
    this.rhino.checkIfHitSkier(this.skier, this.assetManager)
    this.skier.checkIfHitRhino(this.rhino, this.assetManager)
  }

  drawGameWindow() {
    this.canvas.setDrawOffset(this.gameWindow.left, this.gameWindow.top)

    this.canvas.drawText(
      `score: ${this.score}`,
      this.isRhinoOnTheLoose() ? Constants.COLORS.RED : Constants.COLORS.BLACK,
      10,
      80
    )

    if (!this.skier.isDead()) this.skier.draw(this.canvas, this.assetManager)
    if (this.isRhinoOnTheLoose()) this.rhino.draw(this.canvas, this.assetManager)
    this.obstacleManager.drawObstacles(this.canvas, this.assetManager)
  }

  calculateGameWindow() {
    const skierPosition = this.skier.getPosition()
    const left = skierPosition.x - Constants.GAME_WIDTH / 2
    const top = skierPosition.y - Constants.GAME_HEIGHT / 2

    this.gameWindow = new Rect(left, top, left + Constants.GAME_WIDTH, top + Constants.GAME_HEIGHT)
  }

  calculateScore() {
    this.score = parseInt(this.skier.y / 10)
  }

  handleKeyDown(event) {
    switch (event.which) {
      case Constants.KEYS.LEFT:
        this.skier.turnLeft()
        event.preventDefault()
        break
      case Constants.KEYS.RIGHT:
        this.skier.turnRight()
        event.preventDefault()
        break
      case Constants.KEYS.UP:
        this.skier.turnUp()
        event.preventDefault()
        break
      case Constants.KEYS.DOWN:
        this.skier.turnDown()
        event.preventDefault()
        break
      case Constants.KEYS.SPACE:
        this.skier.jump()
        event.preventDefault()
        break
    }
  }
}
