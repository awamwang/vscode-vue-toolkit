module.exports = function(vscode) {
  let disposable = vscode.commands.registerCommand('ext.baba', function(uri) {
    vscode.window.showInformationMessage('balabalabab!', `xxx-${uri}`)
  });

  return disposable
}
