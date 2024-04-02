async function loadMessages() {
    let messages = [];
    try {
      // Get the latest messages from the service
      const response = await fetch('/api/messages');
      messages = await response.json();
  
      // Save the messages in case we go offline in the future
      localStorage.setItem('messages', JSON.stringify(messages));
    } catch {
      // If there was an error then just use the last saved messages
      const messagesText = localStorage.getItem('messages');
      if (messagesText) {
        messages = JSON.parse(messagesText);
      }
    }
  
    displayMessages(messages);
  }
  
  function displayMessages(messages) {
    const tableBodyEl = document.querySelector('#story');
  
    if (messages.length) {
      // Update the DOM with the the messages
      for (const [i, message] of messages.entries()) {


        const dateTdEl = document.createElement('td');
        const fromTdEl = document.createElement('td');
        const messageTdEl = document.createElement('td');
        const timeTdEl = document.createElement('td');
  
        dateTdEl.textContent = message.date;
        fromTdEl.textContent = message.from;
        messageTdEl.textContent = message.message;
        timeTdEl.textContent = message.time;
  
        const rowEl = document.createElement('tr');
        rowEl.appendChild(dateTdEl);
        rowEl.appendChild(fromTdEl);
        rowEl.appendChild(messageTdEl);
        rowEl.appendChild(timeTdEl);
  
        tableBodyEl.appendChild(rowEl);
      }
    } else {
      tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to score</td></tr>';
    }
  }
  
  loadMessages();