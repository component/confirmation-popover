
/**
 * Module dependencies.
 */

var Popover = require('popover')
  , o = require('jquery');

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
  this.actions = o(require('./template'));
  Popover.call(this, this.actions, title);
  this.classname = 'popover confirmation-popover';
  this.actions.find('.cancel').click(this.oncancel.bind(this));
  this.actions.find('.ok').click(this.onok.bind(this));
  this.message(msg);
}

/**
 * Inherits from `Popover.prototype`.
 */

ConfirmationPopover.prototype.__proto__ = Popover.prototype;

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

ConfirmationPopover.prototype.message = function(msg){
  this.actions.find('.confirmation-popover-message').text(msg);
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
  this.actions.find('.cancel').text(text);
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
  this.actions.find('.ok').text(text);
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
  if (this._focus) this.el.find('.' + this._focus).focus();
  this.callback = fn || function(){};
  return this;
};
