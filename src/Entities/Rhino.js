import * as Constants from '../Constants'
import { Entity } from './Entity'

export class Rhino extends Entity {
  assetName = Constants.RHINO.RHINO

  direction = Constants.SKIER.DIRECTIONS.DOWN
  speed = Constants.SKIER.STARTING_SPEED

  constructor(x, y) {
    super(x, y)
  }

  move() {
    this.moveDown()
  }

  moveDown() {
    this.y += this.speed
  }
}
