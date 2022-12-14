let personal_statement = document.getElementById("personal_statement_div");


function expand_div(placeholder_num) {

  if (placeholder_num == 1) {
    var current_div = document.getElementById("personal_statement_div");
  }
  else if (placeholder_num == 2) {
    var current_div = document.getElementById("testimonial_div");
  }
  else if (placeholder_num == 3) {
    var current_div = document.getElementById("accolades_div");
  }
  else if (placeholder_num == 4) {
    var current_div = document.getElementById("education_div");
  }
  else if (placeholder_num == 5) {
    var current_div = document.getElementById("experience_div");
  }
  current_div.style.color = "black";
  current_div.style.transitionDuration = "1000ms";
  current_div.style.fontSize = "26px";
  
}


function to_normal_div(placeholder_num) {
  if (placeholder_num == 1) {
    var current_div = document.getElementById("personal_statement_div");
  }
  else if (placeholder_num == 2) {
    var current_div = document.getElementById("testimonial_div");
  }
  else if (placeholder_num == 3) {
    var current_div = document.getElementById("accolades_div");
  }
  else if (placeholder_num == 4) {
    var current_div = document.getElementById("education_div");
  }
  else if (placeholder_num == 5) {
    var current_div = document.getElementById("experience_div");
  }
  current_div.style.color = "black";
  current_div.style.transitionDuration = "500ms";
  current_div.style.fontSize = "20px";
  
}


function skill_cell_1_over() {
  var skill_cell_1_text = document.getElementById("skill_cell_1_text");
  skill_cell_1_text.style.transitionDuration = "500ms";
  skill_cell_1_text.style.fontSize = "25px";

  var cell_icons = document.getElementById("cell_icons_1");
  cell_icons.style.fontSize = "85px";

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


function skill_cell_1_out() {
  var skill_cell_1_text = document.getElementById("skill_cell_1_text");
  skill_cell_1_text.style.transitionDuration = "500ms";
  skill_cell_1_text.style.fontSize = "3px";

  var cell_icons = document.getElementById("cell_icons_1");
  cell_icons.style.fontSize = "75px";

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


function skill_cell_2_over() {
  var skill_cell_2_text = document.getElementById("skill_cell_2_text");
  skill_cell_2_text.style.transitionDuration = "500ms";
  skill_cell_2_text.style.fontSize = "25px";
  
  var cell_icons = document.getElementById("cell_icons_2");
  cell_icons.style.fontSize = "85px";

  var users_icon = document.getElementById("users_icon");
  var message_icon = document.getElementById("message_icon");

  users_icon.style.color = "#6a92d8";
  users_icon.style.transitionDuration = "500ms";
  message_icon.style.color = "purple";
  message_icon.style.transitionDuration = "500ms";
}


function skill_cell_2_out() {
  var skill_cell_2_text = document.getElementById("skill_cell_2_text");
  skill_cell_2_text.style.transitionDuration = "500ms";
  skill_cell_2_text.style.fontSize = "3px";

  var cell_icons = document.getElementById("cell_icons_2");
  cell_icons.style.fontSize = "75px";

  var users_icon = document.getElementById("users_icon");
  var message_icon = document.getElementById("message_icon");

  users_icon.style.color = "black";
  users_icon.style.transitionDuration = "500ms";
  message_icon.style.color = "black";
  message_icon.style.transitionDuration = "500ms";
}


function skill_cell_3_over() {
  var skill_cell_3_text = document.getElementById("skill_cell_3_text");
  skill_cell_3_text.style.transitionDuration = "500ms";
  skill_cell_3_text.style.fontSize = "25px";
  
  var cell_icons = document.getElementById("cell_icons_3");
  cell_icons.style.fontSize = "85px";

  var graph_icon_1 = document.getElementById("graph_icon_1");
  var graph_icon_2 = document.getElementById("graph_icon_2");

  graph_icon_1.style.color = "#fd8d94";
  graph_icon_1.style.transitionDuration = "500ms";
  graph_icon_2.style.color = "#8c6a58";
  graph_icon_2.style.transitionDuration = "500ms";
}


function skill_cell_3_out() {
  var skill_cell_3_text = document.getElementById("skill_cell_3_text");
  skill_cell_3_text.style.transitionDuration = "500ms";
  skill_cell_3_text.style.fontSize = "3px";

  var cell_icons = document.getElementById("cell_icons_3");
  cell_icons.style.fontSize = "75px";

  var graph_icon_1 = document.getElementById("graph_icon_1");
  var graph_icon_2 = document.getElementById("graph_icon_2");


  graph_icon_1.style.color = "black";
  graph_icon_1.style.transitionDuration = "500ms";
  graph_icon_2.style.color = "black";
  graph_icon_2.style.transitionDuration = "500ms";
}


function skill_cell_4_over() {
  var skill_cell_4_text = document.getElementById("skill_cell_4_text");
  skill_cell_4_text.style.transitionDuration = "500ms";
  skill_cell_4_text.style.fontSize = "25px";

  var cell_icons = document.getElementById("cell_icons_4");
  cell_icons.style.fontSize = "85px";
  
  var school_icon = document.getElementById("school_icon");
  var board_icon = document.getElementById("board_icon");

  school_icon.style.color = "gray";
  school_icon.style.transitionDuration = "500ms";
  board_icon.style.color = "pink";
  board_icon.style.transitionDuration = "500ms";
}


function skill_cell_4_out() {
  var skill_cell_4_text = document.getElementById("skill_cell_4_text");
  skill_cell_4_text.style.transitionDuration = "500ms";
  skill_cell_4_text.style.fontSize = "3px";

  var cell_icons = document.getElementById("cell_icons_4");
  cell_icons.style.fontSize = "75px";

  var school_icon = document.getElementById("school_icon");
  var board_icon = document.getElementById("board_icon");

  school_icon.style.color = "black";
  school_icon.style.transitionDuration = "500ms";
  board_icon.style.color = "black";
  board_icon.style.transitionDuration = "500ms";
}




function skill_cell_5_over() {
  var skill_cell_5_text = document.getElementById("skill_cell_5_text");
  skill_cell_5_text.style.transitionDuration = "500ms";
  skill_cell_5_text.style.fontSize = "25px";
  
  var cell_icons = document.getElementById("cell_icons_5");
  cell_icons.style.fontSize = "85px";

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

function skill_cell_5_out() {
  var skill_cell_5_text = document.getElementById("skill_cell_5_text");
  skill_cell_5_text.style.transitionDuration = "500ms";
  skill_cell_5_text.style.fontSize = "3px";

  var cell_icons = document.getElementById("cell_icons_5");
  cell_icons.style.fontSize = "75px";

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