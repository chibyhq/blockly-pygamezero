/*
 * Required blocks :
   * Animate actor attributes
       * Position attribute
       * Height ? Width ? zoom ?
       * Rotation ??
   * Screen blit
     * Surfaces
   * Music control (rpi compatible ??)
   * sounds
   * Keyboard events
   * Text
      * Position with all supported attributes (unary and binary)
      * Anchor with all supported combinations of (1,1) (0,1) (0,0) (1,0) as dropdown
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
//    this.setDeletable(false);
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
//    this.setDeletable(false);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['on_touch_event'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("When the touch screen is ")
        .appendField(new Blockly.FieldDropdown([ ["pressed","on_mouse_down"], ["released","on_mouse_up"] ]), "EVENT");
    this.appendStatementInput("STATEMENTS")
        .setCheck(null);
    this.setColour(120);
    this.setTooltip('Executes code when the touchscreen is pressed or released');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['on_drag_event'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("When the touch screen is dragged");
    this.appendStatementInput("STATEMENTS")
        .setCheck(null);
    this.setColour(120);
    this.setTooltip('Executes code when a finger is dragged across the touchscreen');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['get_last_touch_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get touch position");
    this.setColour(120);
    this.setOutput(true,"Position");
    this.setTooltip('Returns the touch position (inside a touchscreen event handler only !)');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['get_last_drag_distance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get drag distance");
    this.setColour(120);
    this.setOutput(true,"Position");
    this.setTooltip('Returns the relative distance of the drag event (inside a drag event handler only !)');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['actor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Add a new game actor")
        .appendField(new Blockly.FieldVariable("item"), "NAME")
        .appendField("anchored by its")
        .appendField(new Blockly.FieldDropdown([ ["top left","topleft"], ["center","center"],  ["middle top","midtop"], ["top right","topright"], ["middle left","midleft"], ["middle right","midright"], ["bottom left","bottomleft"], ["middle bottom","midbottom"], ["bottom right","bottomright"]]), "ANCHOR")
        .appendField("at position X")
        .appendField(new Blockly.FieldNumber(0, 0), "POSX")
        .appendField("Y")
        .appendField(new Blockly.FieldNumber(0, 0), "POSY");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
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
    this.setColour(0);
    this.setTooltip('Get a property value from an actor');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['actor_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move actor")
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

Blockly.Blocks['actor_position_tuple'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move actor")
        .appendField(new Blockly.FieldVariable("item"), "ACTOR")
        .appendField("to position tuple");
    this.appendValueInput("POS")
        .setCheck("Position");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("Move the character to a given position using a tuple");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['actor_colliding'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Actor")
        .appendField(new Blockly.FieldVariable("item"), "ACTOR")
        .appendField("colliding with position");
    this.appendValueInput("POSITION")
        .setCheck("Position");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(0);
    this.setTooltip("Returns true if the actor is colliding with the given position");
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

Blockly.Blocks['screen_blit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Draw image");
    this.appendValueInput("IMAGE")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("on the screen at position");
    this.appendValueInput("TOP")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("LEFT")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip('Draws the given image file on the screen');
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

Blockly.Blocks['screen_draw_line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Draw a line from");
    this.appendValueInput("STARTX")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("STARTY")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("to");
    this.appendValueInput("FINISHX")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("FINISHY")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("in color")
        .appendField(new Blockly.FieldColour("#FFFFFF"), "COLOR");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip('Draws a line on the screen');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['screen_draw_circle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Draw a(n)")
        .appendField(new Blockly.FieldDropdown([ ["empty","circle"], ["filled","filled_circle"]]), "EMPTYFILLED")
    this.appendDummyInput()
        .appendField("circle at");
    this.appendValueInput("CENTERX")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("CENTERY")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("and a radius of");
    this.appendValueInput("RADIUS")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("pixels in color")
        .appendField(new Blockly.FieldColour("#FFFF00"), "COLOR");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip('Draws a circle on the screen');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['screen_draw_rectangle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Draw a(n)")
        .appendField(new Blockly.FieldDropdown([ ["empty","rect"], ["filled","filled_rect"]]), "EMPTYFILLED")
    this.appendDummyInput()
        .appendField("rectangle ");
    this.appendValueInput("RECT")
        .setCheck("Rect");
    this.appendDummyInput()
        .appendField("in color")
        .appendField(new Blockly.FieldColour("#FF0000"), "COLOR");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip('Draws a rectangle on the screen');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['screen_draw_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Draw text");
    this.appendValueInput("TEXT")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("formatted as");
    this.appendStatementInput("FORMAT")
        .setCheck(["format_font_name", "format_font_size", "format_font_color"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip('Draws the given text on the screen using formatting');
    this.setHelpUrl('');
  }
};

// Global variable that lists all Text Format blocks that are allowed 
var pgzTextFormatBlocks = ["format_font_name"
                          ,"format_font_size"
                          ,"format_font_color"
                          ,"format_font_bgcolor"
                          ,"format_text_position"
                          ,"format_text_rotation"
                          ,"format_text_align"
                          ,"format_text_shadow"
                 //         ,"__"
                          ];

Blockly.Blocks['format_font_name'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Font name");
    this.appendValueInput("VALUE")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true, pgzTextFormatBlocks);
    this.setNextStatement(true, pgzTextFormatBlocks);
    this.setColour(250);
    this.setTooltip('Sets the Font Name of the text');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['format_font_size'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Font size");
    this.appendValueInput("VALUE")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, pgzTextFormatBlocks);
    this.setNextStatement(true, pgzTextFormatBlocks);
    this.setColour(250);
    this.setTooltip('Sets the Font Size of the text');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['format_font_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Font color")
        .appendField(new Blockly.FieldColour("#FFFFFF"), "VALUE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, pgzTextFormatBlocks);
    this.setNextStatement(true, pgzTextFormatBlocks);
    this.setColour(250);
    this.setTooltip('Sets the Font Color of the text');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['format_font_bgcolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Font background color")
        .appendField(new Blockly.FieldColour("#FFFFFF"), "VALUE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, pgzTextFormatBlocks);
    this.setNextStatement(true, pgzTextFormatBlocks);
    this.setColour(250);
    this.setTooltip('Sets the Font Background Color of the text');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['format_text_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Text position anchored by its")
        .appendField(new Blockly.FieldDropdown([ ["top left","topleft"], ["center","center"],  ["middle top","midtop"], ["top right","topright"], ["middle left","midleft"], ["middle right","midright"], ["bottom left","bottomleft"], ["middle bottom","midbottom"], ["bottom right","bottomright"]]), "ANCHOR")
        .appendField("at X");
    this.appendValueInput("X")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("Y");
    this.appendValueInput("Y")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, pgzTextFormatBlocks);
    this.setNextStatement(true, pgzTextFormatBlocks);
    this.setColour(250);
    this.setTooltip('Sets the Font Color of the text');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['format_text_rotation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Text Rotation Angle")
        .appendField(new Blockly.FieldAngle(0), "VALUE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, pgzTextFormatBlocks);
    this.setNextStatement(true, pgzTextFormatBlocks);
    this.setColour(250);
    this.setTooltip('Sets the Rotation Angle of the text');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['format_text_align'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Text aligned to the ")
        .appendField(new Blockly.FieldDropdown([ ["left","left"], ["center","center"], ["right","right"]]), "VALUE")
    this.setInputsInline(true);
    this.setPreviousStatement(true, pgzTextFormatBlocks);
    this.setNextStatement(true, pgzTextFormatBlocks);
    this.setColour(250);
    this.setTooltip('Sets the Alignment of the text');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['format_text_shadow'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Text shadow offset by ")
        .appendField("X");
    this.appendValueInput("X")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("Y");
    this.appendValueInput("Y")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, pgzTextFormatBlocks);
    this.setNextStatement(true, pgzTextFormatBlocks);
    this.setColour(250);
    this.setTooltip('Sets a Shadow under the text with the given offset');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['clock_schedule'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Schedule")
        .appendField(new Blockly.FieldDropdown([ ["once","schedule_unique"], ["forever","schedule"] ]), "REPEAT");
   this.appendDummyInput()
        .appendField(" in ");
    this.appendValueInput("DELAY")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("second(s)");
   this.appendStatementInput("STATEMENTS")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("*Optional callback name");
    this.appendValueInput("CALLBACK_NAME")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Execute the given code after the given delay (once or until cancelled)');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['clock_schedule_interval'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Schedule")
   this.appendDummyInput()
        .appendField(" every ");
    this.appendValueInput("INTERVAL")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("second(s)");
   this.appendStatementInput("STATEMENTS")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("*Optional callback name");
    this.appendValueInput("CALLBACK_NAME")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Execute the given code at the given interval');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['clock_unschedule'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Cancel scheduled callback")
    this.appendValueInput("CALLBACK_NAME")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Cancel the given callback');
    this.setHelpUrl('');
  }
};