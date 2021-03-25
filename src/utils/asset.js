import path from 'path'

const getAssetPath = (localPath) => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://guilhermekodama.github.io/ceros-ski.github.io' + localPath
  } else {
    return path.join(__dirname, '..' + localPath)
  }
}

export default { getAssetPath }
