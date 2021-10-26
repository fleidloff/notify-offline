const notifier = require('node-notifier');
const isOnline = require('is-online');

let online = true;

setInterval(async () => {
  const newOnline = await isOnline({ timeout: 3_000});

  if (newOnline !== online) {
    online = newOnline;
    notifier.notify({
      title: online ? "ONLINE" : "OFFLINE",
      message: `your connection status changed`,
    });
  }

}, 3_000);


