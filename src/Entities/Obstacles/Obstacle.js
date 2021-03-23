import * as Constants from '../../Constants'
import { Entity } from '../Entity'
import { randomInt } from '../../Core/Utils'

const assetTypes = [
  Constants.OBSTACLES.TREE,
  Constants.OBSTACLES.TREE_CLUSTER,
  Constants.OBSTACLES.ROCK1,
  Constants.OBSTACLES.ROCK2,
  Constants.OBSTACLES.RAMP
]

export class Obstacle extends Entity {
  constructor(x, y) {
    super(x, y)

    const assetIdx = randomInt(0, assetTypes.length - 1)
    this.assetName = assetTypes[assetIdx]
  }

  isRock() {
    return Constants.OBSTACLES.ROCKS_SET.has(this.assetName)
  }

  isTree() {
    return Constants.OBSTACLES.TREES_SET.has(this.assetName)
  }

  isRamp() {
    return this.assetName === Constants.OBSTACLES.RAMP
  }
}
