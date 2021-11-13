
module.exports = {
  verbose:true,
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    transform: {
      '^.+\\.vue$': 'vue-jest'
    },
    
  }
  