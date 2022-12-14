function expand_image() {
  let picture = document.getElementById("QandA_picture");
  picture.style.width = "450px";
  picture.style.transitionDuration = "250ms";
  picture.style.cursor = "pointer";
}


function revert_image() {
  let picture = document.getElementById("QandA_picture");
  picture.style.width = "400px";
  picture.style.transitionDuration = "250ms";
}


function highlight_main_text() {
  
  let text_1 = document.getElementById("QandA_text_1");
  let text_2 = document.getElementById("QandA_text_2");
  let text_3 = document.getElementById("QandA_text_3");

  text_1.style.textShadow = "1px 1px 2px #000000";
  text_2.style.textShadow = "1px 1px 2px #000000";
  text_3.style.textShadow = "1px 1px 2px #000000";
  text_1.style.transitionDuration = "250ms";
  text_2.style.transitionDuration = "250ms";
  text_3.style.transitionDuration = "250ms";

  return;
}


function dehighlight_main_text() {
  
  let text_1 = document.getElementById("QandA_text_1");
  let text_2 = document.getElementById("QandA_text_2");
  let text_3 = document.getElementById("QandA_text_3");

  text_1.style.textShadow = "0px 0px 0px";
  text_2.style.textShadow = "0px 0px 0px";
  text_3.style.textShadow = "0px 0px 0px";
  text_1.style.transitionDuration = "250ms";
  text_2.style.transitionDuration = "250ms";
  text_3.style.transitionDuration = "250ms";

  return
}


function highlight_QandA_text() {
  
  let text_1 = document.getElementById("QandA_text_1");
  let text_2 = document.getElementById("QandA_text_2");
  let text_3 = document.getElementById("QandA_text_3");

  text_1.style.textShadow = "1px 1px 2px #000000";
  text_2.style.textShadow = "1px 1px 2px #000000";
  text_3.style.textShadow = "1px 1px 2px #000000";
  text_1.style.transitionDuration = "250ms";
  text_2.style.transitionDuration = "250ms";
  text_3.style.transitionDuration = "250ms";

  return;
}


function expand_text_1() {
  let text = document.getElementById("pQandA_1");
  text.style.letterSpacing = "0.1em"
  text.style.transitionDuration = "250ms";
}


function revert_text_1() {
  let text = document.getElementById("pQandA_1");
  text.style.letterSpacing = "0em"
  text.style.transitionDuration = "250ms";
}


function expand_text_2() {
  let text = document.getElementById("pQandA_2");
  text.style.letterSpacing = "0.1em"
  text.style.transitionDuration = "250ms";
}


function revert_text_2() {
  let text = document.getElementById("pQandA_2");
  text.style.letterSpacing = "0em"
  text.style.transitionDuration = "250ms";
}


function expand_text_3() {
  let text = document.getElementById("pQandA_3");
  text.style.letterSpacing = "0.1em"
  text.style.transitionDuration = "250ms";
}


function revert_text_3() {
  let text = document.getElementById("pQandA_3");
  text.style.letterSpacing = "0em";
  text.style.transitionDuration = "250ms";
}


function QandA_icon_color(input_num) {
  if (input_num == 1) {
    let icon = document.getElementById("icon_1");
    icon.className = "icon_over"
  }
  
  else if (input_num == 2) {
    let icon = document.getElementById("icon_2");
    icon.className = "icon_over"
  }
  
  else if (input_num == 3) {
    let icon = document.getElementById("icon_3");
    icon.className = "icon_over"
  }
  
  else if (input_num == 4) {
    let icon = document.getElementById("icon_4");
    icon.className = "icon_over"
  }
  
  else if (input_num == 5) {
    let icon = document.getElementById("icon_5");
    icon.className = "icon_over"
  }
  
  else if (input_num == 6) {
    let icon = document.getElementById("icon_6");
    icon.className = "icon_over"
  }
  
  else {}
  
}


function QandA_icon_decolor(input_num) {
  if (input_num == 1) {
    let icon = document.getElementById("icon_1");
    icon.className = "icons"
  }
  
  else if (input_num == 2) {
    let icon = document.getElementById("icon_2");
    icon.className = "icons"
  }
  
  else if (input_num == 3) {
    let icon = document.getElementById("icon_3");
    icon.className = "icons"
  }
  
  else if (input_num == 4) {
    let icon = document.getElementById("icon_4");
    icon.className = "icons"
  }
  
  else if (input_num == 5) {
    let icon = document.getElementById("icon_5");
    icon.className = "icons"
  }
  
  else if (input_num == 6) {
    let icon = document.getElementById("icon_6");
    icon.className = "icons"
  }
  
  else {}
  
}


function submit_form() {
  document.getElementById("question_form").reset();
  
  var buttons_div_1 = document.getElementById("buttons_div");
  buttons_div_1.innerHTML = `
    <a id="submit_button" onclick="submit_form(); return false;">Submit</a>
    <div id="submit_confirmation_message" class="submit_confirm_box">
      <i class="fa-solid fa-envelope"></i>
      Message Sent!
      <i class="fa-solid fa-paper-plane"></i>
    </div>
    <a id="clear_button" onclick="clear_form(); return false;">Clear</a>
    <select text">
      <option value="radicalrobin99@gmail.com">My Personal Email</option>
      <option value="robinsinghsood123@gmail.com">My Business Email</option>
      <option value="zceisoo@ucl.ac.uk">My Work Email</option>
    </select>
  `;

  var message_div = document.getElementById("submit_confirmation_message");
  message_div.style.backgroundColor = "purple";
  message_div.style.transitionDuration = "250ms";


  document.appendChild(buttons_div_1)
}


function update_submission_confirmation() {
  var buttons_div_1 = document.getElementById("buttons_div");
  buttons_div_1.innerHTML = `
    <a id="submit_button" onclick="submit_form(); return false;">Submit</a>
    <div id="submit_confirmation_message" class="submit_confirm_box">
      <i class="fa-solid fa-inbox"></i>
      Awaiting Messages...
      <i class="fa-solid fa-envelopes-bulk"></i>
    </div>
    <a id="clear_button" onclick="clear_form(); return false;">Clear</a>
    <select text">
      <option value="radicalrobin99@gmail.com">My Personal Email</option>
      <option value="robinsinghsood123@gmail.com">My Business Email</option>
      <option value="zceisoo@ucl.ac.uk">My Work Email</option>
    </select>
  `;

  window.setTimeout(document.appendChild(buttons_div_1), 1000);
}


function form_after_submission() {
  let buttons_div = document.getElementById("buttons_div");
  buttons_div.innerHTML = `
    <a id="submit_button" onclick="submit_form(); return false;">Submit</a>
    <div id="submit_confirmation_message" class="submit_confirm_box">
      <i class="fa-solid fa-inbox"></i>
      Awaiting Messages...
      <i class="fa-solid fa-envelopes-bulk"></i>
    </div>
    <a id="clear_button" onclick="clear_form(); return false;">Clear</a>
    <select text">
      <option value="radicalrobin99@gmail.com">My Personal Email</option>
      <option value="robinsinghsood123@gmail.com">My Business Email</option>
      <option value="zceisoo@ucl.ac.uk">My Work Email</option>
    </select>
  `;


}

function clear_form() {
  document.getElementById("question_form").reset();
}