// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
// const vscode = require('vscode')

const registerCommands = require('./commands/index')
const registerProviders = require('./providers/index')

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "vue-toolkit" is now active!');

  registerCommands(context)
  registerProviders(context)
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
  console.log('您的扩展“vscode-plugin-demo”已被释放！')
}
exports.deactivate = deactivate;

module.exports = {
  activate,
  deactivate
}