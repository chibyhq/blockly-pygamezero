/*
 * Required blocks :
   * Screen draw
     * Shapes
     * Text display
   * Screen blit
   * Keyboard events
   * Mouse click events
   * Clock.schedule
   * Animate actor attributes
       * Position attribute
       * Height ? Width ? zoom ?
       * Rotation ??
   * Music control (rpi compatible ??)
   * sounds
   * Move actor relative
 *
 *
 */



Blockly.Blocks['draw_loop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Draw Loop");
    this.appendStatementInput("STATEMENTS")
        .setCheck(null);
    this.setColour(120);
    this.setTooltip('Main Pygamezero Draw loop');
    this.setDeletable(false);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['update_loop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Update Loop");
    this.appendStatementInput("STATEMENTS")
        .setCheck(null);
    this.setColour(120);
    this.setTooltip('Main Pygamezero Update Loop');
    this.setDeletable(false);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['actor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Add a new game actor")
        .appendField(new Blockly.FieldVariable("item"), "NAME")
        .appendField("anchored by its")
        .appendField(new Blockly.FieldDropdown([ ["topleft","topleft"], ["center","center"],  ["midtop","midtop"], ["topright","topright"], ["midleft","midleft"], ["midright","midright"], ["bottomleft","bottomleft"], ["midbottom","midbottom"], ["bottomright","bottomright"]]), "ANCHOR")
        .appendField("at position X")
        .appendField(new Blockly.FieldNumber(0, 0), "POSX")
        .appendField("Y")
        .appendField(new Blockly.FieldNumber(0, 0), "POSY");;
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(false);
    this.setColour(0);
    this.setTooltip('Define a new actor in the game');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['actor_image'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Update actor")
        .appendField(new Blockly.FieldVariable("item"), "ACTOR")
        .appendField("with image");
    this.appendValueInput("IMAGE")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['get_actor_property'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get the")
        .appendField(new Blockly.FieldDropdown([["X coordinate","x"], ["Y coordinate","y"]]), "PROPERTY")
        .appendField("position of actor")
        .appendField(new Blockly.FieldVariable("item"), "ACTOR");
    this.setOutput(true, "Number");
    this.setColour(315);
    this.setTooltip('Get a property value from an actor');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['actor_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move character")
        .appendField(new Blockly.FieldVariable("item"), "ACTOR")
        .appendField("to position X");
    this.appendValueInput("POSX")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("Y");
    this.appendValueInput("POSY")
        .setCheck("Number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("Move the character to a given position");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['actor_draw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Draw actor")
        .appendField(new Blockly.FieldVariable("item"), "ACTOR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("Draw the actor on the screen at its set position");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['screen_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Clear the screen");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip('Removes everything off the screen');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['screen_fill'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Fill screen with")
        .appendField(new Blockly.FieldColour("#000000"), "COLOR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip('Fill the screen with the given color');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['screen_create_rect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create a rectangle");
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("Y");
    this.appendValueInput("WIDTH")
        .setCheck("Number")
        .appendField("Width");
    this.appendValueInput("HEIGHT")
        .setCheck("Number")
        .appendField("Height");
    this.setInputsInline(true);
    this.setOutput(true, "Rect");
    this.setColour(270);
 this.setTooltip("Create a rectangular surface for use in Pygame");
 this.setHelpUrl("");
  }
};
