# cost-calculator application

*runtime versions*: node v14.15.4

*dependencies*: npm install jest

*how to run tests from the command line*:
    
    > in package.json add: 
        "type": "module"
    > update "test" element under "scripts", as following:
        "test": "jest --coverage"
    > npm install
    > npm test
*test run report*: ./coverage/Icov-report/index.html