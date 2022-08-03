# wdio_ts_cucumber_boilerplate
Integration tests

# Getting Started
Install the dependencies:
`npm install`

Compile TypeScript:
`npm run build`

# Run Test
You can start your test suite by using the run command and pointing to the WebdriverIO config that you just created:

`npx wdio run ./wdio.conf.js`
If you like to run specific test files you can add a --spec parameter:

`npx wdio run ./wdio.conf.js --spec example.e2e.js`
or define suites in your config file and run just the test files defined by in a suite:

`npx wdio run ./wdio.conf.js --suite exampleSuiteName`