/*
 * Required blocks :
   * Animate actor attributes
       * Height ? Width ? zoom ?
       * angle ?
   * Get actor width and height
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
 */



Blockly.Blocks['draw_loop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_DRAW LOOP"]);
    this.appendStatementInput("STATEMENTS")
        .setCheck(null);
    this.setColour(120);
    this.setTooltip(Blockly.Msg["PGZ_MAIN PYGAMEZERO DRAW LOOP"]);
//    this.setDeletable(false);

  }
};

Blockly.Blocks['update_loop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_UPDATE LOOP"]);
    this.appendStatementInput("STATEMENTS")
        .setCheck(null);
    this.setColour(120);
    this.setTooltip(Blockly.Msg["PGZ_MAIN PYGAMEZERO UPDATE LOOP"]);
//    this.setDeletable(false);

  }
};

Blockly.Blocks['on_touch_event'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_WHEN THE TOUCH SCREEN IS "])
        .appendField(new Blockly.FieldDropdown([ [Blockly.Msg["PGZ_PRESSED"],"on_mouse_down"], [Blockly.Msg["PGZ_RELEASED"],"on_mouse_up"] ]), "EVENT");
    this.appendStatementInput("STATEMENTS")
        .setCheck(null);
    this.setColour(120);
    this.setTooltip(Blockly.Msg["PGZ_EXECUTES CODE WHEN THE TOUCHSCREEN IS PRESSED OR RELEASED"]);

  }
};

Blockly.Blocks['on_drag_event'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_WHEN THE TOUCH SCREEN IS DRAGGED"]);
    this.appendStatementInput("STATEMENTS")
        .setCheck(null);
    this.setColour(120);
    this.setTooltip(Blockly.Msg["PGZ_EXECUTES CODE WHEN A FINGER IS DRAGGED ACROSS THE TOUCHSCREEN"]);

  }
};

Blockly.Blocks['get_last_touch_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_GET TOUCH POSITION"]);
    this.setColour(120);
    this.setOutput(true,"Position");
    this.setTooltip(Blockly.Msg["PGZ_RETURNS THE TOUCH POSITION"]);

  }
};

Blockly.Blocks['get_last_touch_position_property'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_GET THE"])
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg["PGZ_X COORDINATE"],"0"], [Blockly.Msg["PGZ_Y COORDINATE"],"1"]]), "PROPERTY")
        .appendField(Blockly.Msg["PGZ_OF THE TOUCH POSITION"]);
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip(Blockly.Msg["PGZ_GET A COORDINATE PROPERTY VALUE FROM THE LAST TOUCH (INSIDE A TOUCHSCREEN EVENT HANDLER ONLY !)"]);

  }
};



Blockly.Blocks['get_last_drag_distance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_GET DRAG DISTANCE"]);
    this.setColour(120);
    this.setOutput(true,"Position");
    this.setTooltip(Blockly.Msg["PGZ_RETURNS THE RELATIVE DISTANCE OF THE DRAG EVENT"]);

  }
};

Blockly.Blocks['actor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_ADD A NEW GAME ACTOR"])
        .appendField(new Blockly.FieldVariable("item"), "NAME")
        .appendField(Blockly.Msg["PGZ_ANCHORED BY ITS"])
        .appendField(new Blockly.FieldDropdown([ [Blockly.Msg["PGZ_TOP LEFT"] ,"('left','top')"], [Blockly.Msg["PGZ_CENTER"],"('center','middle')"], [Blockly.Msg["PGZ_MIDDLE TOP"] ,"('center','top')"], [Blockly.Msg["PGZ_TOP RIGHT"] ,"('right','top')"], [Blockly.Msg["PGZ_MIDDLE LEFT"] ,"('left','middle')"], [Blockly.Msg["PGZ_MIDDLE RIGHT"] ,"('right', 'middle')"], [Blockly.Msg["PGZ_BOTTOM LEFT"] ,"('left','bottom')"], [Blockly.Msg["PGZ_MIDDLE BOTTOM"],"('center','bottom')"], [Blockly.Msg["PGZ_BOTTOM RIGHT"] ,"('right','bottom')"]]), "ANCHOR")
        .appendField(Blockly.Msg["PGZ_AT POSITION X"])
        .appendField(new Blockly.FieldNumber(0), "POSX")
        .appendField(Blockly.Msg["PGZ_Y"])
        .appendField(new Blockly.FieldNumber(0), "POSY");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(0);
    this.setTooltip(Blockly.Msg["PGZ_DEFINE A NEW ACTOR IN THE GAME"]);

  }
};

Blockly.Blocks['actor_image'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_UPDATE ACTOR"])
        .appendField(new Blockly.FieldVariable("item"), "ACTOR")
        .appendField(Blockly.Msg["PGZ_WITH IMAGE"]);
    this.appendValueInput("IMAGE")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip(Blockly.Msg["PGZ_CHANGE THE ACTOR TO ANOTHER IMAGE"]);

  }
};

Blockly.Blocks['get_actor_property'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_GET THE"])
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg["PGZ_X COORDINATE"],"x"], [Blockly.Msg["PGZ_Y COORDINATE"],"y"]]), "PROPERTY")
        .appendField(Blockly.Msg["PGZ_POSITION OF ACTOR"])
        .appendField(new Blockly.FieldVariable("item"), "ACTOR");
    this.setOutput(true, "Number");
    this.setColour(0);
    this.setTooltip(Blockly.Msg["PGZ_GET A PROPERTY VALUE FROM AN ACTOR"]);

  }
};

Blockly.Blocks['actor_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_MOVE ACTOR"])
        .appendField(new Blockly.FieldVariable("item"), "ACTOR")
        .appendField(Blockly.Msg["PGZ_TO POSITION X"]);
    this.appendValueInput("POSX")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_Y"]);
    this.appendValueInput("POSY")
        .setCheck("Number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip(Blockly.Msg["PGZ_MOVE THE CHARACTER TO A GIVEN POSITION"]);
    this.setHelpUrl("");
  }
};

Blockly.Blocks['actor_position_tuple'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_MOVE ACTOR"])
        .appendField(new Blockly.FieldVariable("item"), "ACTOR")
        .appendField(Blockly.Msg["PGZ_TO POSITION TUPLE"]);
    this.appendValueInput("POS")
        .setCheck("Position");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip(Blockly.Msg["PGZ_MOVE THE CHARACTER TO A GIVEN POSITION USING A TUPLE"]);
    this.setHelpUrl("");
  }
};

Blockly.Blocks['actor_colliding'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_ACTOR"])
        .appendField(new Blockly.FieldVariable("item"), "ACTOR")
        .appendField(Blockly.Msg["PGZ_COLLIDING WITH POSITION"]);
    this.appendValueInput("POSITION")
        .setCheck("Position");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(0);
    this.setTooltip(Blockly.Msg["PGZ_RETURNS TRUE IF THE ACTOR IS COLLIDING WITH THE GIVEN POSITION"]);
    this.setHelpUrl("");
  }
};

Blockly.Blocks['actor_colliding_rect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_ACTOR"])
        .appendField(new Blockly.FieldVariable("item"), "ACTOR")
        .appendField(Blockly.Msg["PGZ_COLLIDING WITH RECTANGLE OR ACTOR"]);
    this.appendValueInput("RECTANGLE")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(0);
    this.setTooltip(Blockly.Msg["PGZ_RETURNS TRUE IF THE ACTOR IS COLLIDING WITH THE GIVEN RECTANGLE"]);
    this.setHelpUrl("");
  }
};



Blockly.Blocks['actor_draw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_DRAW ACTOR"])
        .appendField(new Blockly.FieldVariable("item"), "ACTOR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip(Blockly.Msg["PGZ_DRAW THE ACTOR ON THE SCREEN AT ITS SET POSITION"]);
    this.setHelpUrl("");
  }
};


var animateBlocks = ['animate_position'];

Blockly.Blocks['animate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_ANIMATE OBJECT"])
        .appendField(new Blockly.FieldVariable("item"), "OBJECT");
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_USING TWEENING MODE"])
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg["PGZ_LINEAR"],"linear"], [Blockly.Msg["PGZ_ACCELERATE"],'accelerate'], [Blockly.Msg["PGZ_DECELERATE"],'decelerate'], [Blockly.Msg["PGZ_ACCELERATE THEN DECELERATE"],'accel_decel'], [Blockly.Msg["PGZ_ELASTIC AT THE END"],'end_elastic'], [Blockly.Msg["PGZ_ELASTIC AT THE START"],'start_elastic'], [Blockly.Msg["PGZ_ELASTIC AT START AND END"],'both_elastic'], [Blockly.Msg["PGZ_BOUNCE AT THE END"],'bounce_end'], [Blockly.Msg["PGZ_BOUNCE AT THE START"],'bounce_start'], [Blockly.Msg["PGZ_BOUNCE AT THE START AND END"],'bounce_start_end']]), "TWEENING");
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_DURING"]);
    this.appendValueInput("DURATION")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_SECONDS"]);
    this.appendStatementInput("TARGETS")
        .setCheck(animateBlocks);
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ__WHEN FINISHED, EXECUTE THIS CODE"]);
   this.appendStatementInput("ON_FINISHED")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip(Blockly.Msg["PGZ_ANIMATE THE ACTOR BY UPDATING ITS PROPERTIES PROGRESSIVELY"]);

  }
};
    
Blockly.Blocks['animate_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_POSITION"])
        .appendField(Blockly.Msg["PGZ_X"]);
    this.appendValueInput("X")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_Y"]);
    this.appendValueInput("Y")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, animateBlocks);
    this.setNextStatement(true, animateBlocks);
    this.setColour(0);
    this.setTooltip(Blockly.Msg["PGZ_DEFINES A POSITION TARGET FOR ANIMATION"]);

  }
};

Blockly.Blocks['screen_size'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_SET THE SCREEN'S WIDTH"])
        .appendField(new Blockly.FieldNumber(0, 0), "W")
        .appendField(Blockly.Msg["PGZ_AND HEIGHT"])
        .appendField(new Blockly.FieldNumber(0, 0), "H");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip(Blockly.Msg["PGZ_SETS THE SCREEN WIDTH AND HEIGHT"]);

  }
};


Blockly.Blocks['screen_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_CLEAR THE SCREEN"]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip(Blockly.Msg["PGZ_REMOVES EVERYTHING OFF THE SCREEN"]);

  }
};

Blockly.Blocks['screen_fill'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_FILL SCREEN WITH"])
        .appendField(new Blockly.FieldColour("#000000"), "COLOR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip(Blockly.Msg["PGZ_FILL THE SCREEN WITH THE GIVEN COLOR"]);

  }
};

Blockly.Blocks['screen_blit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_DRAW IMAGE"]);
    this.appendValueInput("IMAGE")
        .setCheck("String");
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_ON THE SCREEN AT POSITION"]);
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
    this.setTooltip(Blockly.Msg["PGZ_DRAWS THE GIVEN IMAGE FILE ON THE SCREEN"]);

  }
};

Blockly.Blocks['screen_create_rect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_CREATE A RECTANGLE"]);
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("Y");
    this.appendValueInput("WIDTH")
        .setCheck("Number")
        .appendField(Blockly.Msg["PGZ_WIDTH"]);
    this.appendValueInput("HEIGHT")
        .setCheck("Number")
        .appendField(Blockly.Msg["PGZ_HEIGHT"]);
    this.setInputsInline(true);
    this.setOutput(true, "Rect");
    this.setColour(270);
 this.setTooltip(Blockly.Msg["PGZ_CREATE A RECTANGULAR SURFACE FOR USE IN PYGAME"]);
 this.setHelpUrl("");
  }
};

Blockly.Blocks['screen_draw_line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_DRAW A LINE FROM"]);
    this.appendValueInput("STARTX")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("STARTY")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_TO"]);
    this.appendValueInput("FINISHX")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("FINISHY")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_IN COLOR"])
        .appendField(new Blockly.FieldColour("#FFFFFF"), "COLOR");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip(Blockly.Msg["PGZ_DRAWS A LINE ON THE SCREEN"]);

  }
};

Blockly.Blocks['screen_draw_circle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_DRAW A(N)"])
        .appendField(new Blockly.FieldDropdown([ [Blockly.Msg["PGZ_EMPTY"],"circle"], [Blockly.Msg["PGZ_FILLED"],"filled_circle"]]), "EMPTYFILLED")
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_CIRCLE AT"]);
    this.appendValueInput("CENTERX")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("CENTERY")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_AND A RADIUS OF"]);
    this.appendValueInput("RADIUS")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_IN COLOR"])
        .appendField(new Blockly.FieldColour("#FFFF00"), "COLOR");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip(Blockly.Msg["PGZ_DRAWS A CIRCLE ON THE SCREEN"]);

  }
};

Blockly.Blocks['screen_draw_rectangle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_DRAW A(N)"])
        .appendField(new Blockly.FieldDropdown([ [Blockly.Msg["PGZ_EMPTY"],"rect"], [Blockly.Msg["PGZ_FILLED"],"filled_rect"]]), "EMPTYFILLED")
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_RECTANGLE "]);
    this.appendValueInput("RECT")
        .setCheck("Rect");
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_IN COLOR"])
        .appendField(new Blockly.FieldColour("#FF0000"), "COLOR");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip(Blockly.Msg["PGZ_DRAWS A RECTANGLE ON THE SCREEN"]);

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

Blockly.Blocks['screen_draw_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_DRAW TEXT"]);
    this.appendValueInput("TEXT")
        .setCheck("String");
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_FORMATTED AS"]);
    this.appendStatementInput("FORMAT")
        .setCheck(pgzTextFormatBlocks);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip(Blockly.Msg["PGZ_DRAWS THE GIVEN TEXT ON THE SCREEN USING FORMATTING"]);

  }
};


Blockly.Blocks['format_font_name'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_FONT NAME"]);
    this.appendValueInput("VALUE")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true, pgzTextFormatBlocks);
    this.setNextStatement(true, pgzTextFormatBlocks);
    this.setColour(250);
    this.setTooltip(Blockly.Msg["PGZ_SETS THE FONT NAME OF THE TEXT"]);

  }
};
Blockly.Blocks['format_font_size'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_FONT SIZE"]);
    this.appendValueInput("VALUE")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, pgzTextFormatBlocks);
    this.setNextStatement(true, pgzTextFormatBlocks);
    this.setColour(250);
    this.setTooltip(Blockly.Msg["PGZ_SETS THE FONT SIZE OF THE TEXT"]);

  }
};
Blockly.Blocks['format_font_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_FONT COLOR"])
        .appendField(new Blockly.FieldColour("#FFFFFF"), "VALUE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, pgzTextFormatBlocks);
    this.setNextStatement(true, pgzTextFormatBlocks);
    this.setColour(250);
    this.setTooltip(Blockly.Msg["PGZ_SETS THE FONT COLOR OF THE TEXT"]);

  }
};
Blockly.Blocks['format_font_bgcolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_FONT BACKGROUND COLOR"])
        .appendField(new Blockly.FieldColour("#FFFFFF"), "VALUE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, pgzTextFormatBlocks);
    this.setNextStatement(true, pgzTextFormatBlocks);
    this.setColour(250);
    this.setTooltip(Blockly.Msg["PGZ_SETS THE FONT BACKGROUND COLOR OF THE TEXT"]);

  }
};

Blockly.Blocks['format_text_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_TEXT POSITION ANCHORED BY ITS"])
        .appendField(new Blockly.FieldDropdown([ [Blockly.Msg["PGZ_TOP LEFT"],"topleft"], [Blockly.Msg["PGZ_CENTER"],"center"],  [Blockly.Msg["PGZ_MIDDLE TOP"],"midtop"], [Blockly.Msg["PGZ_TOP RIGHT"],"topright"], [Blockly.Msg["PGZ_MIDDLE LEFT"],"midleft"], [Blockly.Msg["PGZ_MIDDLE RIGHT"],"midright"], [Blockly.Msg["PGZ_MIDDLE BOTTOM"],"midbottom"], [Blockly.Msg["PGZ_BOTTOM RIGHT"],"bottomright"], [Blockly.Msg["PGZ_BOTTOM LEFT"],"bottomleft"]]), "ANCHOR")
        .appendField(Blockly.Msg["PGZ_AT X"]);
    this.appendValueInput("X")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_Y"]);
    this.appendValueInput("Y")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, pgzTextFormatBlocks);
    this.setNextStatement(true, pgzTextFormatBlocks);
    this.setColour(250);
    this.setTooltip(Blockly.Msg["PGZ_SETS THE POSITION ANCHOR OF THE TEXT"]);

  }
};

Blockly.Blocks['format_text_rotation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_TEXT ROTATION ANGLE"])
        .appendField(new Blockly.FieldAngle(0), "VALUE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, pgzTextFormatBlocks);
    this.setNextStatement(true, pgzTextFormatBlocks);
    this.setColour(250);
    this.setTooltip(Blockly.Msg["PGZ_SETS THE ROTATION ANGLE OF THE TEXT"]);

  }
};

Blockly.Blocks['format_text_align'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_TEXT ALIGNED TO THE "])
        .appendField(new Blockly.FieldDropdown([ [Blockly.Msg["PGZ_LEFT"],"left"], [Blockly.Msg["PGZ_CENTER"],"center"], [Blockly.Msg["PGZ_RIGHT"],"right"]]), "VALUE")
    this.setInputsInline(true);
    this.setPreviousStatement(true, pgzTextFormatBlocks);
    this.setNextStatement(true, pgzTextFormatBlocks);
    this.setColour(250);
    this.setTooltip(Blockly.Msg["PGZ_SETS THE ALIGNMENT OF THE TEXT"]);

  }
};
Blockly.Blocks['format_text_shadow'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_TEXT SHADOW OFFSET BY "])
        .appendField(Blockly.Msg["PGZ_X"]);
    this.appendValueInput("X")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_Y"]);
    this.appendValueInput("Y")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, pgzTextFormatBlocks);
    this.setNextStatement(true, pgzTextFormatBlocks);
    this.setColour(250);
    this.setTooltip(Blockly.Msg["PGZ_SETS A SHADOW UNDER THE TEXT WITH THE GIVEN OFFSET"]);

  }
};


Blockly.Blocks['clock_schedule'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_SCHEDULE"])
        .appendField(new Blockly.FieldDropdown([ [Blockly.Msg["PGZ_ONCE"],"schedule_unique"], [Blockly.Msg["PGZ_FOREVER"],"schedule"] ]), "REPEAT");
   this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_IN"]);
    this.appendValueInput("DELAY")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_SECOND(S)"]);
   this.appendStatementInput("STATEMENTS")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ__OPTIONAL CALLBACK NAME"]);
    this.appendValueInput("CALLBACK_NAME")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip(Blockly.Msg["PGZ_EXECUTE THE GIVEN CODE AFTER THE GIVEN DELAY (ONCE OR UNTIL CANCELLED)"]);

  }
};

Blockly.Blocks['clock_schedule_interval'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_SCHEDULE"])
   this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_EVERY"]);
    this.appendValueInput("INTERVAL")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_SECOND(S)"]);
   this.appendStatementInput("STATEMENTS")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ__OPTIONAL CALLBACK NAME"]);
    this.appendValueInput("CALLBACK_NAME")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip(Blockly.Msg["PGZ_EXECUTE THE GIVEN CODE AT THE GIVEN INTERVAL"]);

  }
};

Blockly.Blocks['clock_unschedule'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["PGZ_CANCEL SCHEDULED CALLBACK"])
    this.appendValueInput("CALLBACK_NAME")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip(Blockly.Msg["PGZ_CANCEL THE GIVEN CALLBACK"]);

  }
};