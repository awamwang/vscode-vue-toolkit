// The command has been defined in the package.json file
// Now provide the implementation of the command with  registerCommand
// The commandId parameter must match the command field in package.json
module.exports = function(vscode) {
  let disposable = vscode.commands.registerCommand('extension.helloWorld', function() {
    // The code you place here will be executed every time your command is executed

    // Display a message box to the user
    vscode.window.showInformationMessage('Hello World hha!')
  });

  return disposable
}