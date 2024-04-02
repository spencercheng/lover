// function loadNotifications() {
//   let notifications = [];
//   // temp load from local storage.  Will be replaced with Websockets in the future.
//   const notesJson = localStorage.getItem('notifications');
//   if (notesJson) {
//     notifications = JSON.parse(notesJson);
//   }

//   const listUlEl = document.querySelector('#notificationList');

//   if (notifications.length) {
//     for (const [i, note] of notifications.entries()) {
//       const noteLi = document.createElement('li');

//       noteLi.textContent = note.Message;

//       listUlEl.appendChild(noteLi);
//     }
//   } else {
//     listUlEl.innerHTML = '<li>Nobody loves you </li>';
//   }
// }

// loadNotifications();
// Event messages
const HeartShareEvent = 'heartShare';


class LoveBox{
  socket;

  constructor()
  {
    this.configureWebSocket();
  }

  getPlayerName() {
    return localStorage.getItem('userName') ?? 'Unknown User';
  }

  configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    this.socket.onopen = (event) => {
      this.displayMsg('system', this.getPlayerName(), 'connected');
    };
    this.socket.onclose = (event) => {
      this.displayMsg('system', this.getPlayerName(), 'disconnected');
    };
    this.socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      if (msg.type === HeartShareEvent) {
        this.displayMsg('share', msg.from, `gave you a heart! ♥`);
      }
    };
  }

  displayMsg(cls, from, msg) {
    const notificationListEl = document.querySelector('#notificationList');
    notificationListEl.innerHTML =
      `<li class="event"><span class="${cls}-event">${from}</span> ${msg}</li>` + notificationListEl.innerHTML;
  }

  broadcastEvent(from, type, value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    this.socket.send(JSON.stringify(event));
  }

  sendMessage(from, type, value)
  {
    this.broadcastEvent(from, type, value);
  }
}

const lovebox = new LoveBox();

function shareSushi()
{
  event.preventDefault();
  lovebox.sendMessage(lovebox.getPlayerName(), HeartShareEvent, "heart")
}

