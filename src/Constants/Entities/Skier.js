import utils from '../../utils/asset'

export const STARTING_SPEED = 10
export const JUMP_ANIMATION_SPEED = 200
export const DIAGONAL_SPEED_REDUCER = 1.4142

/* DIRECTIONS */
export const CRASH = 'skierCrash'
export const LEFT = 'skierLeft'
export const LEFTDOWN = 'skierLeftDown'
export const DOWN = 'skierDown'
export const RIGHTDOWN = 'skierRightDown'
export const RIGHT = 'skierRight'
export const DEAD = 'dead'

/* ASSETS */
export const JUMP_1 = 'skierJump1'
export const JUMP_2 = 'skierJump2'
export const JUMP_3 = 'skierJump3'
export const JUMP_4 = 'skierJump4'

export const ASSETS = {
  [CRASH]: utils.getAssetPath('/img/skier_crash.png'),
  [LEFT]: utils.getAssetPath('/img/skier_left.png'),
  [LEFTDOWN]: utils.getAssetPath('/img/skier_left_down.png'),
  [DOWN]: utils.getAssetPath('/img/skier_down.png'),
  [RIGHTDOWN]: utils.getAssetPath('/img/skier_right_down.png'),
  [DEAD]: utils.getAssetPath('/img/skier_crash.png'),
  [RIGHT]: utils.getAssetPath('/img/skier_right.png'),
  [JUMP_1]: utils.getAssetPath('/img/skier_jump_1.png'),
  [JUMP_2]: utils.getAssetPath('/img/skier_jump_2.png'),
  [JUMP_3]: utils.getAssetPath('/img/skier_jump_3.png'),
  [JUMP_4]: utils.getAssetPath('/img/skier_jump_4.png')
}

export const DIRECTIONS = {
  CRASH: 0,
  LEFT: 1,
  LEFT_DOWN: 2,
  DOWN: 3,
  RIGHT_DOWN: 4,
  RIGHT: 5,
  JUMP: 6,
  JUMP2: 7,
  JUMP3: 8,
  JUMP4: 9,
  DEAD: 10
}

export const JUMP_DIRECTIONS = new Set([
  DIRECTIONS.JUMP,
  DIRECTIONS.JUMP2,
  DIRECTIONS.JUMP3,
  DIRECTIONS.JUMP4
])

export const DIRECTION_ASSET = {
  [DIRECTIONS.CRASH]: CRASH,
  [DIRECTIONS.LEFT]: LEFT,
  [DIRECTIONS.LEFT_DOWN]: LEFTDOWN,
  [DIRECTIONS.DOWN]: DOWN,
  [DIRECTIONS.RIGHT_DOWN]: RIGHTDOWN,
  [DIRECTIONS.RIGHT]: RIGHT,
  [DIRECTIONS.JUMP]: JUMP_1,
  [DIRECTIONS.JUMP2]: JUMP_2,
  [DIRECTIONS.JUMP3]: JUMP_3,
  [DIRECTIONS.JUMP4]: JUMP_4,
  [DIRECTIONS.DEAD]: DEAD
}
