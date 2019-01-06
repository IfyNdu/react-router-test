module.exports = {

  moduleFileExtensions: [
    'js',
    'json'
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'jest-static-stubs/$1',
  },
  setupFiles: [
    './src/setup-tests.js'
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svg$': 'jest-svg-transformer'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true
};