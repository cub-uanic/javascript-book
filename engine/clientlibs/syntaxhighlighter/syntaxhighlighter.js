/* $Id: syntaxhighlighter.js,v 1.3 2009/12/06 17:06:20 mrfelton Exp $ */

/**
 * @file
 * SyntaxHighlighter JavaScript.
 *
 * @author: Matthew Young <www.hddigitalworks.com/contact>
 * @author: Tom Kirkpatrick (mrfelton), www.kirkdesigns.co.uk
 */

/**
 * Core behavior for syntaxHighlighter.
 *
 */
 
(function ($) {

Drupal.behaviors.syntaxhighlighter = function(context) {
  // Initialize settings.
  Drupal.settings.syntaxhighlighter = $.extend({
    tagname: false,
    clipboard: false,
    legacy_mode: false
  }, Drupal.settings.syntaxhighlighter || {});
  
  if ($('body:not(.syntaxhighlighter-processed)', context).length) {
    SyntaxHighlighter.config.strings.expandSource = Drupal.t('expand source');
    SyntaxHighlighter.config.strings.viewSource = Drupal.t('view source');
    SyntaxHighlighter.config.strings.copyToClipboard = Drupal.t('copy to clipboard');
    SyntaxHighlighter.config.strings.copyToClipboardConfirmation = Drupal.t('The code is in your clipboard now');
    SyntaxHighlighter.config.strings.print = Drupal.t('print');
    SyntaxHighlighter.config.strings.help = Drupal.t('?');

    SyntaxHighlighter.config.strings.alert = Drupal.t('SyntaxHighlighter\n\n');
    SyntaxHighlighter.config.strings.noBrush = Drupal.t('Can\'t find brush for: ');
    SyntaxHighlighter.config.strings.brushNotHtmlScript = Drupal.t('Brush wasn\'t made for html-script option: ');

    if (Drupal.settings.syntaxhighlighter.tagname) {
      SyntaxHighlighter.config.tagName = Drupal.settings.syntaxhighlighter.tagname;
    }

    if (Drupal.settings.syntaxhighlighter.clipboard) {
      SyntaxHighlighter.config.clipboardSwf = Drupal.settings.syntaxhighlighter.clipboard;
    }
    $('body:not(.syntaxhighlighter-processed)', context).addClass('syntaxhighlighter-processed');
  };

  SyntaxHighlighter.highlight();
  if (Drupal.settings.syntaxhighlighter.legacy_mode) {
    dp.SyntaxHighlighter.HighlightAll('code');
  }
};

})(jQuery);
