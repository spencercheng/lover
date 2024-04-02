async function sendMessage()
{
    event.preventDefault();
    // get message from elements
    var message = document.querySelector("form textarea.send").value;
    var messageJson = { date: "October", message: message, from: "michael", time: "10 am"};
    // post message to api
    const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(messageJson),
      });

    // Store what the service gave us as the high scores
    const result = await response.json();
    localStorage.setItem('messages', JSON.stringify(result));
}