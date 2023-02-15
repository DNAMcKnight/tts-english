document.getElementById("text").oninput = function () {
  document.getElementById("message").innerHTML =
    document.getElementById("text").value.length;
};
