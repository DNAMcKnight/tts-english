var textarea = document.getElementById("text");
var count = document.getElementById("count");
const submitButton = document.querySelector('input[type="submit"]');

// when focused clear text if the text is the default text
textarea.onfocus = () => {
  if (textarea.value.trim() === '') 
    textarea.value = "";
};

//  when inputting expand window with a minimum size of 80
textarea.oninput = () => {
  count.innerHTML = textarea.value.length;
  textarea.style.height = 'auto';
  textarea.style.height = Math.min(textarea.scrollHeight, 400) + "px"
};

// when button is clicked the event triggers
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (textarea.value.trim() === "") {
    textarea.placeholder = "You must enter some text...";
    textarea.value = "";
    count.innerHTML = 0;
  }
  audioCallback();
});

async function audioCallback() {
  let speak = await fetch('https://api.streamelements.com/kappa/v2/speech?voice=Brian&text=' + encodeURIComponent(textarea.value.trim()));
  if (speak.status != 200) {
    alert(await speak.text());
    return;
  }
  let mp3 = await speak.blob();
  let blobUrl = URL.createObjectURL(mp3)
  document.getElementById('source').setAttribute('src', blobUrl);
  let audio = document.getElementById('audio');
  audio.pause();
  audio.load();
  audio.play();
}