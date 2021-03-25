import sinon from 'sinon'

const sandbox = sinon.createSandbox()

const mockGame = {
  addBonusPoints: () => {},
  setStatus: () => {}
}

export default {
  sandbox,
  mockGame: () => sandbox.spy(mockGame)
}
