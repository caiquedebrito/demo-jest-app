import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/__tests__'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts']
};

export default config;
