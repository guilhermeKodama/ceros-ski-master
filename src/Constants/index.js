import { Skier, Rhino } from './Entities'
import * as Obstacles from './Obstacles'

export const SKIER = Skier
export const RHINO = Rhino
export const OBSTACLES = Obstacles

export const GAME_WIDTH = window.innerWidth
export const GAME_HEIGHT = window.innerHeight

// disable animations while testing to avoid race conditions
export const ANIMATIONS_ENABLED = process.env.NODE_ENV !== 'test'

export const POINTS = {
  HIT_RAMP: 200,
  JUMPED_OVER_ROCK: 25
}

export const GAME_STATUS = {
  LOADING: 0,
  RUNNING: 1,
  OVER: 2
}

export const COLORS = {
  BLACK: '#000000',
  RED: '#ff0000'
}

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
  SPACE: 32,
  R: 82
}
