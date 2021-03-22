import path from 'path'

export const GAME_WIDTH = window.innerWidth
export const GAME_HEIGHT = window.innerHeight

export const SKIER_CRASH = 'skierCrash'
export const SKIER_LEFT = 'skierLeft'
export const SKIER_LEFTDOWN = 'skierLeftDown'
export const SKIER_DOWN = 'skierDown'
export const SKIER_RIGHTDOWN = 'skierRightDown'
export const SKIER_RIGHT = 'skierRight'
export const TREE = 'tree'
export const TREE_CLUSTER = 'treeCluster'
export const ROCK1 = 'rock1'
export const ROCK2 = 'rock2'

export const SKIER_STARTING_SPEED = 10
export const SKIER_DIAGONAL_SPEED_REDUCER = 1.4142

export const ASSETS = {
  [SKIER_CRASH]: path.join(__dirname, '../img/skier_crash.png'),
  [SKIER_LEFT]: path.join(__dirname, '../img/skier_left.png'),
  [SKIER_LEFTDOWN]: path.join(__dirname, '../img/skier_left_down.png'),
  [SKIER_DOWN]: path.join(__dirname, '../img/skier_down.png'),
  [SKIER_RIGHTDOWN]: path.join(__dirname, '../img/skier_right_down.png'),
  [SKIER_RIGHT]: path.join(__dirname, '../img/skier_right.png'),
  [TREE]: path.join(__dirname, '../img/tree_1.png'),
  [TREE_CLUSTER]: path.join(__dirname, '../img/tree_cluster.png'),
  [ROCK1]: path.join(__dirname, '../img/rock_1.png'),
  [ROCK2]: path.join(__dirname, '../img/rock_2.png')
}

export const SKIER_DIRECTIONS = {
  CRASH: 0,
  LEFT: 1,
  LEFT_DOWN: 2,
  DOWN: 3,
  RIGHT_DOWN: 4,
  RIGHT: 5
}

export const SKIER_DIRECTION_ASSET = {
  [SKIER_DIRECTIONS.CRASH]: SKIER_CRASH,
  [SKIER_DIRECTIONS.LEFT]: SKIER_LEFT,
  [SKIER_DIRECTIONS.LEFT_DOWN]: SKIER_LEFTDOWN,
  [SKIER_DIRECTIONS.DOWN]: SKIER_DOWN,
  [SKIER_DIRECTIONS.RIGHT_DOWN]: SKIER_RIGHTDOWN,
  [SKIER_DIRECTIONS.RIGHT]: SKIER_RIGHT
}

export const KEYS = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40,
  SPACE: 32
}
