import * as Constants from '../Constants'
import { Entity } from './Entity'
import { intersectTwoRects, Rect } from '../Core/Utils'

export class Rhino extends Entity {
  assetName = Constants.RHINO.RHINO

  direction = Constants.RHINO.DIRECTIONS.CHASE
  speed = Constants.RHINO.STARTING_SPEED

  constructor(x, y) {
    super(x, y)

    const interval = setInterval(() => {
      if (this.speed <= Constants.RHINO.MAX_SPEED) {
        this.speed *= Constants.RHINO.ACCELERATION_PERCENT
      } else {
        clearInterval(interval)
      }
    }, Constants.RHINO.INCREASE_ACCELERATION_TIMER)
  }

  move(skier) {
    switch (this.direction) {
      case Constants.RHINO.DIRECTIONS.CHASE:
        this.moveTowards(skier)
        break
    }
  }

  moveTowards(skier) {
    const position = skier.getPosition()

    // direction
    let newX = position.x - this.x
    let newY = position.y - this.y

    // normalize
    const length = Math.sqrt(newX * newX + newY * newY)
    newX = newX / length
    newY = newY / length

    // move towards player
    this.x += newX * this.speed
    this.y += newY * this.speed
  }

  isEating() {
    return this.direction === Constants.RHINO.DIRECTIONS.EAT
  }

  eat() {
    this.assetName = Constants.RHINO.LIFT
    this.direction = Constants.RHINO.DIRECTIONS.EAT

    // disable animations while testing to avoid race conditions
    if (Constants.ANIMATIONS_ENABLED) {
      setInterval(() => {
        switch (this.assetName) {
          case Constants.RHINO.LIFT:
            this.assetName = Constants.RHINO.LIFT_MOUTH_OPEN
            break
          case Constants.RHINO.LIFT_MOUTH_OPEN:
            this.assetName = Constants.RHINO.EAT
            break
          case Constants.RHINO.EAT:
            this.assetName = Constants.RHINO.EAT2
            break
          case Constants.RHINO.EAT2:
            this.assetName = Constants.RHINO.EAT3
            break
          case Constants.RHINO.EAT3:
            this.assetName = Constants.RHINO.EAT4
            break
          case Constants.RHINO.EAT4:
            this.assetName = Constants.RHINO.EAT3
            break
        }
      }, Constants.RHINO.EAT_ANIMATION_SPEED)
    }
  }

  checkIfHitSkier(skier, assetManager, game) {
    const asset = assetManager.getAsset(this.assetName)

    const rhinoBounds = new Rect(
      this.x - asset.width / 2,
      this.y - asset.height / 2,
      this.x + asset.width / 2,
      this.y - asset.height / 4
    )

    const skierAsset = assetManager.getAsset(skier.getAssetName())
    const skierPosition = skier.getPosition()

    const skierBounds = new Rect(
      skierPosition.x - skierAsset.width / 2,
      skierPosition.y - skierAsset.height / 2,
      skierPosition.x + skierAsset.width / 2,
      skierPosition.y
    )

    const collision = intersectTwoRects(rhinoBounds, skierBounds)

    if (collision && !this.isEating()) {
      this.eat()
      game.setStatus(Constants.GAME_STATUS.OVER)
    }
  }
}
