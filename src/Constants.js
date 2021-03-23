import path from 'path'

export const GAME_WIDTH = window.innerWidth
export const GAME_HEIGHT = window.innerHeight
export const SKIER_JUMP_ANIMATION_SPEED = 200
export const ANIMATIONS_ENABLED = process.env.NODE_ENV !== 'test'

export const SKIER_CRASH = 'skierCrash'
export const SKIER_LEFT = 'skierLeft'
export const SKIER_LEFTDOWN = 'skierLeftDown'
export const SKIER_DOWN = 'skierDown'
export const SKIER_RIGHTDOWN = 'skierRightDown'
export const SKIER_RIGHT = 'skierRight'
export const SKIER_JUMP_1 = 'skierJump1'
export const SKIER_JUMP_2 = 'skierJump2'
export const SKIER_JUMP_3 = 'skierJump3'
export const SKIER_JUMP_4 = 'skierJump4'
export const TREE = 'tree'
export const TREE_CLUSTER = 'treeCluster'
export const ROCK1 = 'rock1'
export const ROCK2 = 'rock2'
export const RAMP = 'ramp'

export const SKIER_STARTING_SPEED = 10
export const SKIER_DIAGONAL_SPEED_REDUCER = 1.4142

export const ASSETS = {
  [SKIER_CRASH]: path.join(__dirname, '../img/skier_crash.png'),
  [SKIER_LEFT]: path.join(__dirname, '../img/skier_left.png'),
  [SKIER_LEFTDOWN]: path.join(__dirname, '../img/skier_left_down.png'),
  [SKIER_DOWN]: path.join(__dirname, '../img/skier_down.png'),
  [SKIER_RIGHTDOWN]: path.join(__dirname, '../img/skier_right_down.png'),
  [SKIER_RIGHT]: path.join(__dirname, '../img/skier_right.png'),
  [SKIER_JUMP_1]: path.join(__dirname, '../img/skier_jump_1.png'),
  [SKIER_JUMP_2]: path.join(__dirname, '../img/skier_jump_2.png'),
  [SKIER_JUMP_3]: path.join(__dirname, '../img/skier_jump_3.png'),
  [SKIER_JUMP_4]: path.join(__dirname, '../img/skier_jump_4.png'),
  [TREE]: path.join(__dirname, '../img/tree_1.png'),
  [TREE_CLUSTER]: path.join(__dirname, '../img/tree_cluster.png'),
  [ROCK1]: path.join(__dirname, '../img/rock_1.png'),
  [ROCK2]: path.join(__dirname, '../img/rock_2.png'),
  [RAMP]: path.join(__dirname, '../img/jump_ramp.png')
}

export const SKIER_DIRECTIONS = {
  CRASH: 0,
  LEFT: 1,
  LEFT_DOWN: 2,
  DOWN: 3,
  RIGHT_DOWN: 4,
  RIGHT: 5,
  JUMP: 6,
  JUMP2: 7,
  JUMP3: 8,
  JUMP4: 9
}

export const SKIER_JUMP_DIRECTIONS = new Set([
  SKIER_DIRECTIONS.JUMP,
  SKIER_DIRECTIONS.JUMP2,
  SKIER_DIRECTIONS.JUMP3,
  SKIER_DIRECTIONS.JUMP4
])

export const SKIER_DIRECTION_ASSET = {
  [SKIER_DIRECTIONS.CRASH]: SKIER_CRASH,
  [SKIER_DIRECTIONS.LEFT]: SKIER_LEFT,
  [SKIER_DIRECTIONS.LEFT_DOWN]: SKIER_LEFTDOWN,
  [SKIER_DIRECTIONS.DOWN]: SKIER_DOWN,
  [SKIER_DIRECTIONS.RIGHT_DOWN]: SKIER_RIGHTDOWN,
  [SKIER_DIRECTIONS.RIGHT]: SKIER_RIGHT,
  [SKIER_DIRECTIONS.JUMP]: SKIER_JUMP_1,
  [SKIER_DIRECTIONS.JUMP2]: SKIER_JUMP_2,
  [SKIER_DIRECTIONS.JUMP3]: SKIER_JUMP_3,
  [SKIER_DIRECTIONS.JUMP4]: SKIER_JUMP_4
}

export const KEYS = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40,
  SPACE: 32
}

export const ROCKS_SET = new Set([ROCK1, ROCK2])
export const TREES_SET = new Set([TREE, TREE_CLUSTER])
