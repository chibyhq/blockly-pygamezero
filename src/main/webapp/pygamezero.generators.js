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

Blockly.Python['screen_fill'] = function(block) {
  var colour_color = block.getFieldValue('COLOR');
  console.log(colour_color);
  var code = 'screen.fill('+colour_color+')\n';
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