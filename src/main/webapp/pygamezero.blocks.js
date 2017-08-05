Blockly.Blocks['draw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Draw Loop");
    this.appendStatementInput("DRAW")
        .setCheck(null);
    this.setInputsInline(false);
    this.setColour(240);
    this.setTooltip('Main Pygamezero Draw loop');
    this.setDeletable(false);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['update'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Update Loop");
    this.appendStatementInput("UPDATE")
        .setCheck(null);
    this.setColour(240);
    this.setTooltip('Main Pygamezero Update Loop');
    this.setDeletable(false);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['actor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Add a new game actor")
        .appendField(new Blockly.FieldTextInput(""), "IMAGE")
        .appendField("anchored by its")
        .appendField(new Blockly.FieldDropdown([ ["topleft","topleft"], ["center","center"],  ["midtop","midtop"], ["topright","topright"], ["midleft","midleft"], ["midright","midright"], ["bottomleft","bottomleft"], ["midbottom","midbottom"], ["bottomright","bottomright"]]), "ANCHOR")
        .appendField("at position X")
        .appendField(new Blockly.FieldNumber(0, 0), "POSX")
        .appendField("Y")
        .appendField(new Blockly.FieldNumber(0, 0), "POSY");;
    this.setInputsInline(false);
    this.setOutput(true, "Actor");
    this.setColour(90);
    this.setTooltip('Define a new actor in the game');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['actor_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move actor")
        .appendField(new Blockly.FieldVariable("item"), "ACTOR")
        .appendField("to position X")
        .appendField(new Blockly.FieldNumber(0, 0), "POSX")
        .appendField("Y")
        .appendField(new Blockly.FieldNumber(0, 0), "POSY");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('Move the actor to a given position');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['actor_image'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Update actor")
        .appendField(new Blockly.FieldVariable("item"), "ACTOR")
        .appendField("with image")
        .appendField(new Blockly.FieldTextInput(""), "IMAGE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
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
