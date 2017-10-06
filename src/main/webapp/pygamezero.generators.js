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


function getGlobalVariablesStatement(block, addLineReturn) {
  if(addLineReturn=== undefined) {
    addLineReturn = true;
  }
  // taken from blockly/blob/master/generators/python/procedures.js
  var globals = [];
  var workspace = block.workspace;
  var varName;
  var variables = workspace.getAllVariables() || [];
  for (var i = 0, variable; variable = variables[i]; i++) {
    varName = variable.name;
//    if (block.arguments_.indexOf(varName) == -1) {
      globals.push(Blockly.Python.variableDB_.getName(varName,
          Blockly.Variables.NAME_TYPE));
//    }
  }
  var globals = globals.length ? '  global ' + globals.join(', ') + (addLineReturn?'\n':'') : '';
  return globals;
}


Blockly.Python['draw_loop'] = function(block) {
  var statements = Blockly.Python.statementToCode(block, 'STATEMENTS');
  var globals = getGlobalVariablesStatement(block);
  var code = 'def draw():\n'+globals+statements+'\n';
  return code;
};

Blockly.Python['update_loop'] = function(block) {
  var statements = Blockly.Python.statementToCode(block, 'STATEMENTS');
  var globals = getGlobalVariablesStatement(block);
  var code = 'def update():\n'+globals+statements+'\n';
  return code;
};

Blockly.Python['on_touch_event'] = function(block) {
  var event = block.getFieldValue('EVENT');
  var globals = getGlobalVariablesStatement(block);
  var statements = Blockly.Python.statementToCode(block, 'STATEMENTS');
  var code = 'def '+event+'(pos):\n'+globals+statements+'\n';
  return code;
};

Blockly.Python['on_drag_event'] = function(block) {
  var statements = Blockly.Python.statementToCode(block, 'STATEMENTS');
  var globals = getGlobalVariablesStatement(block);
  var code = 'def on_mouse_move(pos,rel):\n'+globals+statements+'\n';
  return code;
};

Blockly.Python['get_last_touch_position'] = function(block) {
  var code = 'pos';
  return [code, Blockly.Python.ORDER_ADDITION];
};

Blockly.Python['get_last_drag_distance'] = function(block) {
  var code = 'rel';
  return [code, Blockly.Python.ORDER_ADDITION];
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

Blockly.Python['actor_draw'] = function(block) {
  var variable_actor = Blockly.Python.variableDB_.getName(block.getFieldValue('ACTOR'), Blockly.Variables.NAME_TYPE);
  var code = variable_actor+'.draw()\n';
  return code;
};

Blockly.Python['get_actor_property'] = function(block) {
  var dropdown_property = block.getFieldValue('PROPERTY');
  var variable_actor = Blockly.Python.variableDB_.getName(block.getFieldValue('ACTOR'), Blockly.Variables.NAME_TYPE);
  var code = variable_actor+'.'+dropdown_property;
  return [code, Blockly.Python.ORDER_ADDITION];
};

Blockly.Python['actor_colliding'] = function(block) {
  var actor = Blockly.Python.variableDB_.getName(block.getFieldValue('ACTOR'), Blockly.Variables.NAME_TYPE);
  var position = Blockly.Python.valueToCode(block,'POSITION', Blockly.Python.ORDER_ATOMIC);
  var code = actor+'.collidepoint('+position+')';
  return [code, Blockly.Python.ORDER_ADDITION];
};

Blockly.Python['actor_position'] = function(block) {
  var variable_actor = Blockly.Python.variableDB_.getName(block.getFieldValue('ACTOR'), Blockly.Variables.NAME_TYPE);
  var value_posx = Blockly.Python.valueToCode(block, 'POSX', Blockly.Python.ORDER_ATOMIC);
  var value_posy = Blockly.Python.valueToCode(block, 'POSY', Blockly.Python.ORDER_ATOMIC);
  var code = variable_actor+'.pos = '+value_posx+','+value_posy+'\n';
  return code;
};
Blockly.Python['actor_position_tuple'] = function(block) {
  var variable_actor = Blockly.Python.variableDB_.getName(block.getFieldValue('ACTOR'), Blockly.Variables.NAME_TYPE);
  var value_pos = Blockly.Python.valueToCode(block, 'POS', Blockly.Python.ORDER_ATOMIC);
  var code = variable_actor+'.pos = '+value_pos+'\n';
  return code;
};

Blockly.Python['animate'] = function(block) {
  var variable_object = Blockly.Python.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
  var dropdown_tweening = block.getFieldValue('TWEENING');
  var on_finished_statements = Blockly.Python.statementToCode(block, 'ON_FINISHED');
  var value_duration = Blockly.Python.valueToCode(block, 'DURATION', Blockly.Python.ORDER_ATOMIC);
  var functionName = '';
  var globals = getGlobalVariablesStatement(block);
  if( (! on_finished_statements) || (on_finished_statements.trim() == "") ){
      var onFinishedFunctionName = 'on_finished_animation_'+block.id;
      var functionName = Blockly.Python.provideFunction_(
        onFinishedFunctionName,
        [ 'def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
          globals,on_finished_statements,
          '\n']);
  }
  var code = 'animate('+variable_object+',tween=\''+dropdown_tweening+'\',duration='+value_duration+')';
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
  var code = 'screen.fill(('+color_rgb+'))\n';
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
  var code = "'color':("+value+"),";
  return code;
};
Blockly.Python['format_font_bgcolor'] = function(block) {
  var value =  hexToRgb(block.getFieldValue(block, 'VALUE', Blockly.Python.ORDER_ATOMIC));
  var code = "'background':("+value+"),";
  return code;
};

Blockly.Python['format_text_position'] = function(block) {
  var value_anchor = block.getFieldValue('ANCHOR');
  var x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  var code = "'"+value_anchor+"':("+x+','+y+"),";
  return code;
};

Blockly.Python['format_text_rotation'] = function(block) {
  var value_angle = block.getFieldValue('VALUE');
  var code = "'angle':"+value_angle+",";
  return code;
};

Blockly.Python['format_text_align'] = function(block) {
  var value =  block.getFieldValue('VALUE');
  var code = "'align':"+value+",";
  return code;
};

Blockly.Python['format_text_shadow'] = function(block) {
  var x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  var code = "'shadow':("+x+','+y+"),";
  return code;
};

Blockly.Python['clock_schedule'] = function(block) {
  var statements = Blockly.Python.statementToCode(block, 'STATEMENTS');
  var repeatMode =  block.getFieldValue('REPEAT');
  var callbackName = Blockly.Python.valueToCode(block, 'CALLBACK_NAME', Blockly.Python.ORDER_ATOMIC);
  
  if( (! callbackName) || (callbackName.trim() == "") ){
    callbackName = 'scheduled_'+block.id;
  }
  
  var globals = getGlobalVariablesStatement(block,false);
  var functionName = Blockly.Python.provideFunction_(
    callbackName,
    [ 'def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
      globals, statements,
      '\n']);
  var delay = Blockly.Python.valueToCode(block, 'DELAY', Blockly.Python.ORDER_ATOMIC);
  
  var code = 'Clock.'+repeatMode+'('+functionName+','+delay+')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];  
};

Blockly.Python['clock_schedule_interval'] = function(block) {
  var statements = Blockly.Python.statementToCode(block, 'STATEMENTS');
  var callbackName = Blockly.Python.valueToCode(block, 'CALLBACK_NAME', Blockly.Python.ORDER_ATOMIC);
  
  if( (! callbackName) || (callbackName.trim() == "") ){
    callbackName = 'scheduled_interval_'+block.id;
  }
  
  var globals = getGlobalVariablesStatement(block,false);
  var functionName = Blockly.Python.provideFunction_(
    callbackName,
    [ 'def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
      globals, statements,
      '\n']);
  var interval = Blockly.Python.valueToCode(block, 'INTERVAL', Blockly.Python.ORDER_ATOMIC);
  
  var code = 'Clock.schedule_interval('+functionName+','+interval+')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];  
};

Blockly.Python['clock_unschedule'] = function(block) {
  var callbackName = Blockly.Python.valueToCode(block, 'CALLBACK_NAME', Blockly.Python.ORDER_ATOMIC);
  
  var functionName = Blockly.Python.functionNames_[callbackName];
  var code = 'Clock.unschedule('+functionName+')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];  
};

