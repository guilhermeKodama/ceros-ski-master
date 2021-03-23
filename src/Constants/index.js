import { Skier, Rhino } from './Entities'
import * as Obstacles from './Obstacles'

export const SKIER = Skier
export const RHINO = Rhino
export const OBSTACLES = Obstacles

export const GAME_WIDTH = window.innerWidth
export const GAME_HEIGHT = window.innerHeight

export const ANIMATIONS_ENABLED = process.env.NODE_ENV !== 'test'

export const ASSETS = {
  ...SKIER.ASSETS,
  ...OBSTACLES.ASSETS,
  ...RHINO.ASSETS
}

export const KEYS = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40,
  SPACE: 32
}
