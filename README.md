# wdio_ts_cucumber_boilerplate
Integration tests

# Setting up
Run 
`npm install`

# Run Test
You can start your test suite by using the run command and pointing to the WebdriverIO config that you just created:

`npm run wdio`
if you like to run all tests (wdio script is dedined in package.json)

`npx wdio run ./wdio.conf.js`
If you like to run specific test files you can add a --spec parameter:

`npm run wdio --spec textbox.feature`
or define suites in your config file and run just the test files defined by in a suite:

`npm run wdio --suite exampleSuiteName` 

`npx wdio run ./wdio.conf.js --suite exampleSuiteName`

If you want to run a specific cucumber's scenario yoy should specyfy a tage over this scenario
`"scripts": { "test": "wdio ./wdio.conf.js --cucumberOpts.tagExpression" }`
and running the test using
`npm run test "@Tag"`

# WDIO CLI
If you want to install reporter or other service from WDIO CLI
    https://webdriver.io/docs/clioptions/ 


# Cucumber 

To generate steps sceleton
`npx cucumber-js path_to_feature_file`

After you created steps file you should specify path to it in wdio.conf.ts

# Features
- Typescript
- PageObject
- Cucumber.js
- GTS - npx gts fix src\filename


