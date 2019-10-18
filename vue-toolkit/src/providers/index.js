const vscode = require('vscode');

const json = require('./definiton-json')
const completionDeps = require('./completion-dependencies')
const hoverDeps = require('./hover-dependencies')

let list = [
  json(vscode),
  completionDeps(vscode),
  hoverDeps(vscode)
]

module.exports = function(context) {
  for (let i = 0, len = list.length; i < len; i++) {
    context.subscriptions.push(list[i])
  }
}
