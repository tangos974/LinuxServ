import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  // Define the web server to start before tests
  webServer: {
    command: 'npm run build && npm run preview',
    port: 4173,
    reuseExistingServer: !process.env.CI,
  },

  testDir: 'tests',  // Directory for tests
  testMatch: /(.+\.)?(test|spec)\.[jt]s/, // Matches test files with .test.ts, .spec.ts, etc.

  timeout: 30000, // Set a 30-second timeout for tests
  retries: 2,     // Number of retries for failed tests

  use: {
    headless: true,   // Run tests in headless mode (no visible browser window)
    viewport: { width: 1280, height: 720 },  // Default viewport size
    ignoreHTTPSErrors: true,  // Ignore HTTPS errors, for testing on localhost
    trace: 'on-first-retry',
  },

  // Define multiple projects to run tests on different browsers
  projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } },
    { name: 'Firefox', use: { browserName: 'firefox' } },
    // { name: 'webkit', use: { browserName: 'webkit' } } Doesn't work for some reason
  ],

  // Configure reporter for better CI output
  reporter: [['dot'], ['html', { open: 'never' }]], // Dot for minimal output, HTML for detailed results
};

export default config;