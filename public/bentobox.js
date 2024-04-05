const HeartShareEvent = 'heartShare';


class BentoBox{
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

const BentoBox = new BentoBox();

function shareSushi()
{
  event.preventDefault();
  BentoBox
.sendMessage(BentoBox
  .getPlayerName(), HeartShareEvent, "heart")
}

