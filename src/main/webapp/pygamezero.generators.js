Blockly.Python['draw'] = function(block) {
  var statements_draw = Blockly.Python.statementToCode(block, 'DRAW');
  var code = 'def draw():\n    '+statements_update+'\n';
  return code;
};

Blockly.Python['update'] = function(block) {
  var statements_update = Blockly.Python.statementToCode(block, 'UPDATE');
  var code = 'def update():\n    '+statements_update+'\n';
  return code;
};

Blockly.Python['actor'] = function(block) {
  var text_image = block.getFieldValue('IMAGE');
  var dropdown_anchor = block.getFieldValue('ANCHOR');
  var number_posx = block.getFieldValue('POSX');
  var number_posy = block.getFieldValue('POSY');
  var code = 'Actor(\''+text_image+'\','+dropdown_anchor+'=('+number_posx+','+number_posy+'))';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['actor_position'] = function(block) {
  var variable_actor = Blockly.Python.variableDB_.getName(block.getFieldValue('ACTOR'), Blockly.Variables.NAME_TYPE);
  var number_posx = block.getFieldValue('POSX');
  var number_posy = block.getFieldValue('POSY');
  var code = variable_actor+'.pos = '+number_posx+','+number_posy+'\n';
  return code;
};

Blockly.Python['actor_image'] = function(block) {
  var variable_actor = Blockly.Python.variableDB_.getName(block.getFieldValue('ACTOR'), Blockly.Variables.NAME_TYPE);
  var text_image = block.getFieldValue('IMAGE');
  var code = variable_actor+'.image='+text_image+'\n';
  return code;
};

Blockly.Python['get_actor_property'] = function(block) {
  var dropdown_property = block.getFieldValue('PROPERTY');
  var variable_actor = Blockly.Python.variableDB_.getName(block.getFieldValue('ACTOR'), Blockly.Variables.NAME_TYPE);
  var code = variable_actor+'.'+dropdown_property;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['screen_clear'] = function(block) {
  var code = 'screen.clear()\n';
  return code;
};

Blockly.Python['screen_fill'] = function(block) {
  var colour_color = block.getFieldValue('COLOR');
  console.log(colour_color);
  var code = 'screen.fill(('+colour_color+'))\n';
  return code;
};

