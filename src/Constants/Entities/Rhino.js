import utils from '../../utils/asset'

export const EAT_ANIMATION_SPEED = 400
export const INCREASE_ACCELERATION_TIMER = 4000
export const MAX_SPEED = 11
export const ACCELERATION_PERCENT = 1.2
export const STARTING_SPEED = 7

export const RHINO = 'rhino'
export const LEFT = 'rhinoLeft'
export const LEFT2 = 'rhinoLeft2'
export const LIFT = 'rhinoLift'
export const LIFT_MOUTH_OPEN = 'rhinoLiftMouthOpen'
export const EAT = 'rhinoEat'
export const EAT2 = 'rhinoEat2'
export const EAT3 = 'rhinoEat3'
export const EAT4 = 'rhinoEat4'

export const DIRECTIONS = {
  CHASE: 0,
  EAT: 1
}

export const ASSETS = {
  [RHINO]: utils.getAssetPath('/img/rhino_default.png'),
  [LEFT]: utils.getAssetPath('/img/rhino_run_left.png'),
  [LEFT2]: utils.getAssetPath('/img/rhino_run_left_2.png'),
  [LIFT]: utils.getAssetPath('/img/rhino_lift.png'),
  [LIFT_MOUTH_OPEN]: utils.getAssetPath('/img/rhino_lift_mouth_open.png'),
  [EAT]: utils.getAssetPath('/img/rhino_lift_eat_1.png'),
  [EAT2]: utils.getAssetPath('/img/rhino_lift_eat_2.png'),
  [EAT3]: utils.getAssetPath('/img/rhino_lift_eat_3.png'),
  [EAT4]: utils.getAssetPath('/img/rhino_lift_eat_4.png')
}
