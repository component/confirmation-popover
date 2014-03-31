
/**
 * Module dependencies.
 */

var Popover = require('popover');
var q = require('query');
var inherit = require('inherit');

/**
 * Expose `ConfirmationPopover`.
 */

module.exports = ConfirmationPopover;

/**
 * Initialize a `ConfirmationPopover` with the given `msg`
 * and optional `title`.
 *
 * @param {Mixed} msg
 * @param {Mixed} title
 * @api public
 */

function ConfirmationPopover(msg, title) {
  Popover.call(this, require('./template'), title);
  this.classname = 'popover confirmation-popover';
  this.events.bind('click .cancel', 'oncancel');
  this.events.bind('click .ok', 'onok');
  this.confirmation(msg);
}

/**
 * Inherits from `Popover.prototype`.
 */

inherit(ConfirmationPopover, Popover);

/**
 * Handle cancel click.
 *
 * Emits "cancel".
 *
 * @param {Event} e
 * @api private
 */

ConfirmationPopover.prototype.oncancel = function(e){
  e.preventDefault();
  this.emit('cancel');
  this.callback(false);
  this.hide();
};

/**
 * Handle ok click.
 *
 * Emits "ok".
 *
 * @param {Event} e
 * @api private
 */

ConfirmationPopover.prototype.onok = function(e){
  e.preventDefault();
  this.emit('ok');
  this.callback(true);
  this.hide();
};

/**
 * Set confirmation `msg`.
 *
 * @param {String} msg
 * @return {ConfirmationPopover}
 * @api public
 */

ConfirmationPopover.prototype.confirmation = function(msg){
  var el = q('.confirmation-popover-message', this.el);
  if (typeof msg === 'string') el.innerHTML = msg;
  else el.appendChild(msg);
  return this;
};

/**
 * Focus `type`, either "ok" or "cancel".
 *
 * @param {String} type
 * @return {ConfirmationPopover}
 * @api public
 */

ConfirmationPopover.prototype.focus = function(type){
  this._focus = type;
  return this;
};

/**
 * Change "cancel" button `text`.
 *
 * @param {String} text
 * @return {ConfirmationPopover}
 * @api public
 */

ConfirmationPopover.prototype.cancel = function(text){
  q('.cancel', this.el).innerHTML = text;
  return this;
};

/**
 * Change "ok" button `text`.
 *
 * @param {String} text
 * @return {ConfirmationPopover}
 * @api public
 */

ConfirmationPopover.prototype.ok = function(text){
  q('.ok', this.el).innerHTML = text;
  return this;
};

/**
 * Show the tip attached to `el` and invoke `fn(ok)`.
 *
 * @param {jQuery|Element} el
 * @param {Function} fn
 * @return {ConfirmationPopover}
 * @api public
 */

ConfirmationPopover.prototype.show = function(el, fn){
  Popover.prototype.show.call(this, el);
  if (this._focus) q('.' + this._focus, this.el).focus();
  this.callback = fn || function(){};
  return this;
};
