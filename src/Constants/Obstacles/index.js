/**
 * In the future this file can be used to just import several diff types of obstacles
 * and their constants and provide a unified interface regarding the Obstacles constants
 * to the rest of the application (ex: Entities folder)
 */
import path from 'path'

export const TREE = 'tree'
export const TREE_CLUSTER = 'treeCluster'
export const ROCK1 = 'rock1'
export const ROCK2 = 'rock2'
export const RAMP = 'ramp'

export const ROCKS_SET = new Set([ROCK1, ROCK2])
export const TREES_SET = new Set([TREE, TREE_CLUSTER])

export const ASSETS = {
  [TREE]: path.join(__dirname, '../img/tree_1.png'),
  [TREE_CLUSTER]: path.join(__dirname, '../img/tree_cluster.png'),
  [ROCK1]: path.join(__dirname, '../img/rock_1.png'),
  [ROCK2]: path.join(__dirname, '../img/rock_2.png'),
  [RAMP]: path.join(__dirname, '../img/jump_ramp.png')
}
