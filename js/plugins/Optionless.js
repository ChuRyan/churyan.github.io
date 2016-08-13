//=============================================================================
// Optionless.js
//=============================================================================

/*:
 * @plugindesc Remove Option and Continue from the Title Screen
 *
 * @help This plugin does not provide plugin commands.
 */

;(function() {
  Window_TitleCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.newGame, 'newGame')
  }

  Window_MenuCommand.prototype.addOptionsCommand = function() {}
})()