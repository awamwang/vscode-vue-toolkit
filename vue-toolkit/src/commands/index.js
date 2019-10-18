const vscode = require('vscode');

const helloWorld = require('./helloWorld')
const baba = require('./baba')
let list = [
  helloWorld(vscode),
  baba(vscode),
]

module.exports = function(context) {
  for (let i = 0, len = list.length; i < len; i++) {
    context.subscriptions.push(list[i])
  }
}