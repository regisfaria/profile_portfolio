function cpyClipboard() {
  var textArea = document.createElement("textarea");
  var email = document.getElementById("email").getAttribute("value");
  textArea.value = email;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  document.execCommand('copy');

  //show modal copied to clipboard [ ]TODO

  document.body.removeChild(textArea);
}