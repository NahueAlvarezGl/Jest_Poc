const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const { By, Key, until } = require('selenium-webdriver');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

module.exports = {By, Key, until, driver};
