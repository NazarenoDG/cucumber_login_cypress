const report = require("multiple-cucumber-html-reporter")
report.generate({
    jsonDir: "cypress/cucumber-json",
    reportPath:"./reports/cucumber",
    metadata: {
        browser:{
            name:"chrome",
            version:"96"
        },
        device:"PC",
        platform:{
            name:"Windows",
            version:"10"
        }
    }

})