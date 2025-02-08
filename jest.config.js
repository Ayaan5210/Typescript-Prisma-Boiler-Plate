module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testEnvironmentOptions: {
        NODE_ENV: 'test'
    },
    restoreMocks: true,
    coveragePathIgnorePatterns: ['node_modules', 'src/config', 'src/index.ts', 'tests'],
    coverageReporters: ['text', 'lcov', 'clover', 'html']
};