# BLAST Playground - Bit Academy

Execute BLAST tests locally for education development. Currently supporting 
PHP tests with PHPUnit and NodeJS tests with Jasmine.

## Installation
```shell
git clone https://github.com/robbplo/blast-playground
cd blast-playground
composer install
npm install
```

## Usage

Write your PHP tests in `tests/php/BLASTTest.php`. Any files used by the 
tests can be placed in `tests/php/source_dir`. The same goes for JavaScript, 
except the tests are written in `tests/javascript/blastSpec.js` and source 
files go into `tests/javascript/source_dir`. To execute PHP tests, use 
command `composer run test`. To execute Node tests, use command `npm run test`.

There is one test file for each language. You are expected to write your 
tests in this file, make sure they work correctly, and then move the test 
source code over to Notion.
