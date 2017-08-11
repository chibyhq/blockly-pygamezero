/**
 * Convert a given HEX color code to a string (handling the padding)
 */
function hexToRgb(hex) {
    if(hex == null){
        return "(0,0,0)";
    }
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return (result ? parseInt(result[1], 16)+","+parseInt(result[2], 16)+","+parseInt(result[3], 16) : null);
}



Blockly.Python['draw_loop'] = function(block) {
  var statements = Blockly.Python.statementToCode(block, 'STATEMENTS');
  var code = 'def draw():\n'+statements+'\n';
  return code;
};

Blockly.Python['update_loop'] = function(block) {
  var statements = Blockly.Python.statementToCode(block, 'STATEMENTS');
  var code = 'def update():\n'+statements+'\n';
  return code;
};

Blockly.Python['actor'] = function(block) {
  var actor_var_name = block.getFieldValue('NAME');
  var dropdown_anchor = block.getFieldValue('ANCHOR');
  var number_posx = block.getFieldValue('POSX');
  var number_posy = block.getFieldValue('POSY');
  var code = actor_var_name +' = Actor(\''+actor_var_name+'\','+dropdown_anchor+'=('+number_posx+','+number_posy+'))\n';
  return code;
};




Blockly.Python['actor_image'] = function(block) {
  var variable_actor = Blockly.Python.variableDB_.getName(block.getFieldValue('ACTOR'), Blockly.Variables.NAME_TYPE);
  var value_image = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_ATOMIC);
  var code = variable_actor+'.image='+value_image+'\n';
  return code;
};

Blockly.Python['get_actor_property'] = function(block) {
  var dropdown_property = block.getFieldValue('PROPERTY');
  var variable_actor = Blockly.Python.variableDB_.getName(block.getFieldValue('ACTOR'), Blockly.Variables.NAME_TYPE);
  var code = variable_actor+'.'+dropdown_property;
  return [code, Blockly.Python.ORDER_ADDITION];
};

Blockly.Python['actor_position'] = function(block) {
  var variable_actor = Blockly.Python.variableDB_.getName(block.getFieldValue('ACTOR'), Blockly.Variables.NAME_TYPE);
  var value_posx = Blockly.Python.valueToCode(block, 'POSX', Blockly.Python.ORDER_ATOMIC);
  var value_posy = Blockly.Python.valueToCode(block, 'POSY', Blockly.Python.ORDER_ATOMIC);
  var code = variable_actor+'.pos = '+value_posx+','+value_posy+'\n';
  return code;
};

Blockly.Python['actor_draw'] = function(block) {
  var variable_actor = Blockly.Python.variableDB_.getName(block.getFieldValue('ACTOR'), Blockly.Variables.NAME_TYPE);
  var code = variable_actor+'.draw()\n';
  return code;
};

Blockly.Python['screen_clear'] = function(block) {
  var code = 'screen.clear()\n';
  return code;
};

Blockly.Python['screen_blit'] = function(block) {
  var value_image = Blockly.Python.valueToCode(block, 'IMAGE', Blockly.Python.ORDER_ATOMIC);
  var number_top = Blockly.Python.valueToCode(block, 'TOP', Blockly.Python.ORDER_ATOMIC);
  var number_left =Blockly.Python.valueToCode(block, 'LEFT', Blockly.Python.ORDER_ATOMIC);
  var code = 'screen.blit('+value_image+',('+number_top+','+number_left+'))\n';
  return code;
};

Blockly.Python['screen_fill'] = function(block) {
  var color_rgb = hexToRgb(block.getFieldValue('COLOR'));
  var code = 'screen.fill('+color_rgb+')\n';
  return code;
};

Blockly.Python['screen_create_rect'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  var value_width = Blockly.Python.valueToCode(block, 'WIDTH', Blockly.Python.ORDER_ATOMIC);
  var value_height = Blockly.Python.valueToCode(block, 'HEIGHT', Blockly.Python.ORDER_ATOMIC);
  var code = 'Rect(('+value_x+','+value_y+'),('+value_width+','+value_height+'))';
  return [code, Blockly.Python.ORDER_ADDITION];
};

Blockly.Python['screen_draw_line'] = function(block) {
  var color_rgb = hexToRgb(block.getFieldValue('COLOR'));
  var startx = Blockly.Python.valueToCode(block, 'STARTX', Blockly.Python.ORDER_ATOMIC);
  var starty = Blockly.Python.valueToCode(block, 'STARTY', Blockly.Python.ORDER_ATOMIC);
  var finishx = Blockly.Python.valueToCode(block, 'FINISHX', Blockly.Python.ORDER_ATOMIC);
  var finishy = Blockly.Python.valueToCode(block, 'FINISHY', Blockly.Python.ORDER_ATOMIC);
  
  var code = 'screen.draw.line(('+startx+','+starty+'),('+finishx+','+finishy+'),('+color_rgb+'))\n';
  return code;
};

Blockly.Python['screen_draw_circle'] = function(block) {
  var emptyOrFilled =  block.getFieldValue('EMPTYFILLED');
  var color_rgb = hexToRgb(block.getFieldValue('COLOR'));
  var x = Blockly.Python.valueToCode(block, 'CENTERX', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'CENTERY', Blockly.Python.ORDER_ATOMIC);
  
  var code = 'screen.draw.'+emptyOrFilled+'(('+x+','+y+'),('+color_rgb+'))\n';
  return code;
};

Blockly.Python['screen_draw_rectangle'] = function(block) {
  var emptyOrFilled =  block.getFieldValue('EMPTYFILLED');
  var color_rgb = hexToRgb(block.getFieldValue('COLOR'));
  var rect = Blockly.Python.valueToCode(block, 'RECT', Blockly.Python.ORDER_ATOMIC);
  
  var code = 'screen.draw.'+emptyOrFilled+'('+rect+',('+color_rgb+'))\n';
  return code;
};

Blockly.Python['screen_draw_text'] = function(block) {
  var text =  Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);
  var formatArray = Blockly.Python.statementToCode(block,'FORMAT');
  var arrayDict = "";
  // Convert text format array into a python dictionary that we unpack to
  // fill named arguments
  if(formatArray != null && formatArray.length > 0){
      arrayDict = ",**{"+(formatArray.replace(/\,\s*$/, '  '))+"}";
  }
  
  var code = 'screen.draw.text('+text+arrayDict+')\n';
  return code;
};

Blockly.Python['format_font_name'] = function(block) {
  var value =  Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  var code = "'fontname':"+value+",";
  return code;
};

Blockly.Python['format_font_size'] = function(block) {
  var value =  Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  var code = "'fontsize':"+value+",";
  return code;
};
Blockly.Python['format_font_color'] = function(block) {
  var value =  hexToRgb(block.getFieldValue(block, 'VALUE', Blockly.Python.ORDER_ATOMIC));
  var code = "'color':"+value+",";
  return code;
};

Blockly.Python['format_text_position'] = function(block) {
  var value_anchor = block.getFieldValue('ANCHOR');
  var x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  var code = "'"+value_anchor+"':("+x+','+y+"),";
  return code;
};
