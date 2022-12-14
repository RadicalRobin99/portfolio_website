function highlight_text() {
  
  let text_1 = document.getElementById("intro_text_1");
  let text_2 = document.getElementById("intro_text_2");
  let text_3 = document.getElementById("intro_text_3");

  text_1.style.textShadow = "1px 1px 2px #000000";
  text_2.style.textShadow = "1px 1px 2px #000000";
  text_3.style.textShadow = "1px 1px 2px #000000";
  text_1.style.transitionDuration = "250ms";
  text_2.style.transitionDuration = "250ms";
  text_3.style.transitionDuration = "250ms";

  return;
}


function dehighlight_text() {
  
  let text_1 = document.getElementById("intro_text_1");
  let text_2 = document.getElementById("intro_text_2");
  let text_3 = document.getElementById("intro_text_3");

  text_1.style.textShadow = "0px 0px 0px";
  text_2.style.textShadow = "0px 0px 0px";
  text_3.style.textShadow = "0px 0px 0px";
  text_1.style.transitionDuration = "250ms";
  text_2.style.transitionDuration = "250ms";
  text_3.style.transitionDuration = "250ms";

  return
}

function hobby_cell_1_over() {
  var hobby_cell_1_text = document.getElementById("hobby_cell_1_text");
  hobby_cell_1_text.style.transitionDuration = "500ms";
  hobby_cell_1_text.style.fontSize = "25px";
  
  var hobby_cell = document.getElementById("hobby_cell_icons_1");
  hobby_cell.style.color = "#765341";
  hobby_cell.style.fontSize = "85px";
  hobby_cell.style.transitionDuration = "250ms";
}


function hobby_cell_1_out() {
  var hobby_cell_1_text = document.getElementById("hobby_cell_1_text");
  hobby_cell_1_text.style.transitionDuration = "500ms";
  hobby_cell_1_text.style.fontSize = "3px";

  var hobby_cell = document.getElementById("hobby_cell_icons_1");
  hobby_cell.style.color = "black";
  hobby_cell.style.fontSize = "75px";
  hobby_cell.style.transitionDuration = "250ms";
}


function hobby_cell_2_over() {
  var hobby_cell_2_text = document.getElementById("hobby_cell_2_text");
  hobby_cell_2_text.style.transitionDuration = "500ms";
  hobby_cell_2_text.style.fontSize = "25px";
  
  var hobby_cell = document.getElementById("hobby_cell_icons_2");
  hobby_cell.style.color = "#CC9900";
  hobby_cell.style.fontSize = "85px";
  hobby_cell.style.transitionDuration = "250ms";
}


function hobby_cell_2_out() {
  var hobby_cell_2_text = document.getElementById("hobby_cell_2_text");
  hobby_cell_2_text.style.transitionDuration = "500ms";
  hobby_cell_2_text.style.fontSize = "3px";

  var hobby_cell = document.getElementById("hobby_cell_icons_2");
  hobby_cell.style.color = "black";
  hobby_cell.style.fontSize = "75px";
  hobby_cell.style.transitionDuration = "250ms";
}



function hobby_cell_3_over() {
  var hobby_cell_3_text = document.getElementById("hobby_cell_3_text");
  hobby_cell_3_text.style.transitionDuration = "500ms";
  hobby_cell_3_text.style.fontSize = "25px";
  
  var hobby_cell = document.getElementById("hobby_cell_icons_3");
  hobby_cell.style.color = "#767676";
  hobby_cell.style.fontSize = "85px";
  hobby_cell.style.transitionDuration = "250ms";
}


function hobby_cell_3_out() {
  var hobby_cell_3_text = document.getElementById("hobby_cell_3_text");
  hobby_cell_3_text.style.transitionDuration = "500ms";
  hobby_cell_3_text.style.fontSize = "3px";

  var hobby_cell = document.getElementById("hobby_cell_icons_3");
  hobby_cell.style.color = "black";
  hobby_cell.style.fontSize = "75px";
  hobby_cell.style.transitionDuration = "250ms";
}


function hobby_cell_4_over() {
  var hobby_cell_4_text = document.getElementById("hobby_cell_4_text");
  hobby_cell_4_text.style.transitionDuration = "500ms";
  hobby_cell_4_text.style.fontSize = "25px";
  
  var hobby_cell = document.getElementById("hobby_cell_icons_4");
  hobby_cell.style.color = "#0099FF";
  hobby_cell.style.fontSize = "85px";
  hobby_cell.style.transitionDuration = "250ms";
}


function hobby_cell_4_out() {
  var hobby_cell_4_text = document.getElementById("hobby_cell_4_text");
  hobby_cell_4_text.style.transitionDuration = "500ms";
  hobby_cell_4_text.style.fontSize = "3px";

  var hobby_cell = document.getElementById("hobby_cell_icons_4");
  hobby_cell.style.color = "black";
  hobby_cell.style.fontSize = "75px";
  hobby_cell.style.transitionDuration = "250ms";
}


function hobby_cell_5_over() {
  var hobby_cell_5_text = document.getElementById("hobby_cell_5_text");
  hobby_cell_5_text.style.transitionDuration = "500ms";
  hobby_cell_5_text.style.fontSize = "25px";
  
  var hobby_cell = document.getElementById("hobby_cell_icons_5");
  hobby_cell.style.color = "#006600";
  hobby_cell.style.fontSize = "85px";
  hobby_cell.style.transitionDuration = "250ms";
}

function hobby_cell_5_out() {
  var hobby_cell_5_text = document.getElementById("hobby_cell_5_text");
  hobby_cell_5_text.style.transitionDuration = "500ms";
  hobby_cell_5_text.style.fontSize = "3px";

  var hobby_cell = document.getElementById("hobby_cell_icons_5");
  hobby_cell.style.color = "black";
  hobby_cell.style.fontSize = "75px";
  hobby_cell.style.transitionDuration = "250ms";
}



function projects_cell_1_over() {
  var projects_cell_1_text = document.getElementById("projects_cell_1_text");
  projects_cell_1_text.style.transitionDuration = "500ms";
  projects_cell_1_text.style.fontSize = "25px";

  var word_icon = document.getElementById("word_icon");
  var powerpoint_icon = document.getElementById("ppt_icon");
  var excel_icon = document.getElementById("excel_icon");

  word_icon.style.color = "rgb(0, 110, 255)";
  word_icon.style.transitionDuration = "500ms";
  powerpoint_icon.style.color = "rgb(241, 142, 28)";
  powerpoint_icon.style.transitionDuration = "500ms";
  excel_icon.style.color = "rgb(8, 112, 8)";
  excel_icon.icon.style.transitionDuration = "500ms"; 
}


function projects_cell_1_out() {
  var projects_cell_1_text = document.getElementById("projects_cell_1_text");
  projects_cell_1_text.style.transitionDuration = "500ms";
  projects_cell_1_text.style.fontSize = "3px";

  var word_icon = document.getElementById("word_icon");
  var powerpoint_icon = document.getElementById("ppt_icon");
  var excel_icon = document.getElementById("excel_icon");

  word_icon.style.color = "black";
  word_icon.style.transitionDuration = "500ms";
  powerpoint_icon.style.color = "black";
  powerpoint_icon.style.transitionDuration = "500ms";
  excel_icon.style.color = "black";
  excel_icon.style.transitionDuration = "500ms";
}


function projects_cell_2_over() {
  var projects_cell_2_text = document.getElementById("projects_cell_2_text");
  projects_cell_2_text.style.transitionDuration = "500ms";
  projects_cell_2_text.style.fontSize = "25px";
  
  var users_icon = document.getElementById("users_icon");
  var message_icon = document.getElementById("message_icon");

  users_icon.style.color = "#6a92d8";
  users_icon.style.transitionDuration = "500ms";
  message_icon.style.color = "purple";
  message_icon.style.transitionDuration = "500ms";
}


function projects_cell_2_out() {
  var projects_cell_2_text = document.getElementById("projects_cell_2_text");
  projects_cell_2_text.style.transitionDuration = "500ms";
  projects_cell_2_text.style.fontSize = "3px";

  var users_icon = document.getElementById("users_icon");
  var message_icon = document.getElementById("message_icon");

  users_icon.style.color = "black";
  users_icon.style.transitionDuration = "500ms";
  message_icon.style.color = "black";
  message_icon.style.transitionDuration = "500ms";
}


function projects_cell_3_over() {
  var projects_cell_3_text = document.getElementById("projects_cell_3_text");
  projects_cell_3_text.style.transitionDuration = "500ms";
  projects_cell_3_text.style.fontSize = "25px";
  
  var graph_icon_1 = document.getElementById("graph_icon_1");
  var graph_icon_2 = document.getElementById("graph_icon_2");

  graph_icon_1.style.color = "#fd8d94";
  graph_icon_1.style.transitionDuration = "500ms";
  graph_icon_2.style.color = "#8c6a58";
  graph_icon_2.style.transitionDuration = "500ms";
}


function projects_cell_3_out() {
  var projects_cell_3_text = document.getElementById("projects_cell_3_text");
  projects_cell_3_text.style.transitionDuration = "500ms";
  projects_cell_3_text.style.fontSize = "3px";

  var graph_icon_1 = document.getElementById("graph_icon_1");
  var graph_icon_2 = document.getElementById("graph_icon_2");


  graph_icon_1.style.color = "black";
  graph_icon_1.style.transitionDuration = "500ms";
  graph_icon_2.style.color = "black";
  graph_icon_2.style.transitionDuration = "500ms";
}


function projects_cell_4_over() {
  var projects_cell_4_text = document.getElementById("projects_cell_4_text");
  projects_cell_4_text.style.transitionDuration = "500ms";
  projects_cell_4_text.style.fontSize = "25px";
  
  var school_icon = document.getElementById("school_icon");
  var board_icon = document.getElementById("board_icon");

  school_icon.style.color = "gray";
  school_icon.style.transitionDuration = "500ms";
  board_icon.style.color = "pink";
  board_icon.style.transitionDuration = "500ms";
}


function projects_cell_4_out() {
  var projects_cell_4_text = document.getElementById("projects_cell_4_text");
  projects_cell_4_text.style.transitionDuration = "500ms";
  projects_cell_4_text.style.fontSize = "3px";

  var school_icon = document.getElementById("school_icon");
  var board_icon = document.getElementById("board_icon");

  school_icon.style.color = "black";
  school_icon.style.transitionDuration = "500ms";
  board_icon.style.color = "black";
  board_icon.style.transitionDuration = "500ms";
}


function projects_cell_5_over() {
  var projects_cell_5_text = document.getElementById("projects_cell_5_text");
  projects_cell_5_text.style.transitionDuration = "500ms";
  projects_cell_5_text.style.fontSize = "25px";
  
  var js_icon = document.getElementById("js_icon");
  var python_icon = document.getElementById("python_icon");
  var swift_icon = document.getElementById("swift_icon");

  js_icon.style.color = "orange";
  js_icon.style.transitionDuration = "500ms";
  python_icon.style.color = "#3471a3";
  python_icon.style.transitionDuration = "500ms";
  swift_icon.style.color = "red";
  swift_icon.style.transitionDuration = "500ms";
}


function projects_cell_5_out() {
  var projects_cell_5_text = document.getElementById("projects_cell_5_text");
  projects_cell_5_text.style.transitionDuration = "500ms";
  projects_cell_5_text.style.fontSize = "3px";

  var js_icon = document.getElementById("js_icon");
  var python_icon = document.getElementById("python_icon");
  var swift_icon = document.getElementById("swift_icon");

  js_icon.style.color = "black";
  js_icon.style.transitionDuration = "500ms";
  python_icon.style.color = "black";
  python_icon.style.transitionDuration = "500ms";
  swift_icon.style.color = "black";
  swift_icon.style.transitionDuration = "500ms";
}