const SOURCE_DIR = __dirname + '/source_dir/';
const fs = require('fs')
const {execSync} = require("child_process");

process.env['SOURCE_DIR'] = SOURCE_DIR;

/**
 * Evaluate a string containing JS code in the current runtime and record everything that goes to console.log
 * @param script the script code to be used
 * @returns {*[]} the lines that the provided script returned to the console
 */
const evalGetConsoleLog = function (script) {
  const oldLog = console.log;
  const values = [];
  console.log = function (value) {
    values.push(value);
  };
  eval(script);
  console.log = oldLog;
  return values;
};

/**
 * Helper function to load a script from the source dir into a string
 */
const readScriptSync = function (fileName) {
  return fs.readFileSync(`${SOURCE_DIR}${fileName}`, 'utf-8');
};

/**
 * Execute a script file stand alone so the command line args can be used
 *
 * Will spin up a separate node process
 * @param cmdWithArgs the name of the script to be executed with the args attached e.g. `students-code.js arg1 arg2`
 * @returns {string} The output of the script in one continues string
 */
const executeWithArgs = function (cmdWithArgs) {
  const output = execSync(`node ${SOURCE_DIR}${cmdWithArgs}`);
  return new Buffer.from(output).toString();
};


module.exports = {
  evalGetConsoleLog,
  readScriptSync,
  executeWithArgs,
  SOURCE_DIR
};
