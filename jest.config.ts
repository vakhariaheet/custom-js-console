// jest.config.ts
import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
	verbose: true,
	preset: 'ts-jest',
	collectCoverage: true,
	coverageReporters: ['text', 'json-summary', 'lcov'],
	testEnvironment: 'jsdom',
};
export default config;
