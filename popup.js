var textarea = document.getElementById('text');
var message = document.getElementById('message');
const submitButton = document.querySelector('input[type="submit"]');

// when focused clear text
textarea.onfocus = function () {
  textarea.value = '';
}

//  when inputting expand window
textarea.oninput = function () {
  message.innerHTML = textarea.value.length;
  textarea.style.height = "80";
  textarea.style.height = Math.min(textarea.scrollHeight, 500) + "px";
};


submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  if (textarea.value === "What do you want me to read?" || "") {
    textarea.value = "Text required!";
  };
  console.log('textValue');
});