//elements
var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');

textbox.addEventListener('keyup', function (e) {
    if (textbox.value != "") {
        sendBtn.disabled = false;
    } else {
        sendBtn.disabled = true;
    }
});
