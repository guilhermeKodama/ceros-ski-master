import * as Constants from '../Constants'
import { Entity } from './Entity'
import { intersectTwoRects, Rect } from '../Core/Utils'

export class Skier extends Entity {
  assetName = Constants.SKIER.DOWN

  direction = Constants.SKIER.DIRECTIONS.DOWN
  speed = Constants.SKIER.STARTING_SPEED

  constructor(x, y) {
    super(x, y)
  }

  setDirection(direction) {
    this.direction = direction
    this.updateAsset()
  }

  updateAsset() {
    this.assetName = Constants.SKIER.DIRECTION_ASSET[this.direction]
  }

  isJumping() {
    return Constants.SKIER.JUMP_DIRECTIONS.has(this.direction)
  }

  move() {
    if (this.direction === Constants.SKIER.DIRECTIONS.LEFT_DOWN) {
      this.moveSkierLeftDown()
    } else if (this.direction === Constants.SKIER.DIRECTIONS.DOWN) {
      this.moveSkierDown()
    } else if (this.direction === Constants.SKIER.DIRECTIONS.RIGHT_DOWN) {
      this.moveSkierRightDown()
    } else if (this.isJumping()) {
      this.moveSkierDown()
    }
  }

  moveSkierLeft() {
    this.x -= Constants.SKIER.STARTING_SPEED
  }

  moveSkierLeftDown() {
    this.x -= this.speed / Constants.SKIER.DIAGONAL_SPEED_REDUCER
    this.y += this.speed / Constants.SKIER.DIAGONAL_SPEED_REDUCER
  }

  moveSkierDown() {
    this.y += this.speed
  }

  moveSkierRightDown() {
    this.x += this.speed / Constants.SKIER.DIAGONAL_SPEED_REDUCER
    this.y += this.speed / Constants.SKIER.DIAGONAL_SPEED_REDUCER
  }

  moveSkierRight() {
    this.x += Constants.SKIER.STARTING_SPEED
  }

  moveSkierUp() {
    this.y -= Constants.SKIER.STARTING_SPEED
  }

  turnLeft() {
    if (!this.isJumping()) {
      if (this.direction === Constants.SKIER.DIRECTIONS.LEFT) {
        this.moveSkierLeft()
      } else if (this.direction === Constants.SKIER.DIRECTIONS.CRASH) {
        this.moveSkierLeft()
        this.setDirection(Constants.SKIER.DIRECTIONS.LEFT)
      } else {
        this.setDirection(this.direction - 1)
      }
    }
  }

  turnRight() {
    if (!this.isJumping()) {
      if (this.direction === Constants.SKIER.DIRECTIONS.RIGHT) {
        this.moveSkierRight()
      } else if (this.direction === Constants.SKIER.DIRECTIONS.CRASH) {
        this.moveSkierRight()
        this.setDirection(Constants.SKIER.DIRECTIONS.RIGHT)
      } else {
        this.setDirection(this.direction + 1)
      }
    }
  }

  turnUp() {
    if (
      !this.isJumping() ||
      this.direction === Constants.SKIER.DIRECTIONS.LEFT ||
      this.direction === Constants.SKIER.DIRECTIONS.RIGHT
    ) {
      this.moveSkierUp()
    }
  }

  turnDown() {
    if (!this.isJumping()) {
      this.setDirection(Constants.SKIER.DIRECTIONS.DOWN)
    }
  }

  jump() {
    this.setDirection(Constants.SKIER.DIRECTIONS.JUMP)

    // disable animations while testing to avoid race conditions
    if (Constants.ANIMATIONS_ENABLED) {
      const animation = setInterval(() => {
        switch (this.direction) {
          case Constants.SKIER.DIRECTIONS.JUMP:
            this.setDirection(Constants.SKIER.DIRECTIONS.JUMP2)
            break
          case Constants.SKIER.DIRECTIONS.JUMP2:
            this.setDirection(Constants.SKIER.DIRECTIONS.JUMP3)
            break
          case Constants.SKIER.DIRECTIONS.JUMP3:
            this.setDirection(Constants.SKIER.DIRECTIONS.JUMP4)
            break
          case Constants.SKIER.DIRECTIONS.JUMP4:
            clearInterval(animation)
            this.setDirection(Constants.SKIER.DIRECTIONS.DOWN)
            break
          case Constants.SKIER.DIRECTIONS.CRASH:
            clearInterval(animation)
            break
        }
      }, Constants.SKIER.JUMP_ANIMATION_SPEED)
    }
  }

  checkIfSkierHitObstacle(obstacleManager, assetManager) {
    const asset = assetManager.getAsset(this.assetName)

    const skierBounds = new Rect(
      this.x - asset.width / 2,
      this.y - asset.height / 2,
      this.x + asset.width / 2,
      this.y - asset.height / 4
    )

    const collision = obstacleManager.getObstacles().find((obstacle) => {
      const obstacleAsset = assetManager.getAsset(obstacle.getAssetName())
      const obstaclePosition = obstacle.getPosition()

      const obstacleBounds = new Rect(
        obstaclePosition.x - obstacleAsset.width / 2,
        obstaclePosition.y - obstacleAsset.height / 2,
        obstaclePosition.x + obstacleAsset.width / 2,
        obstaclePosition.y
      )

      return intersectTwoRects(skierBounds, obstacleBounds)
    })

    if (collision && collision.isRamp() && !this.isJumping()) {
      this.jump()
    } else if (
      (collision && collision.isTree()) ||
      (collision && !this.isJumping() && collision.isRock())
    ) {
      this.setDirection(Constants.SKIER.DIRECTIONS.CRASH)
    }
  }
}
