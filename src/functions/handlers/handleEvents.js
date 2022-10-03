const fs = require('fs');

module.exports = (mustardclient) => {
  mustardclient.handleEvents = async () => {
    const eventFolders = fs.readdirSync('./src/events');
    for (const folder of eventFolders) {
      const eventFiles = fs
        .readdirSync(`./src/events/${folder}`)
        .filter((file) => file.endsWith('.js'));
      switch (folder) {
        case 'mustardclient':
          for (const file of eventFiles) {
            const event = require(`../../events/${folder}/${file}`);
            if (event.once)
              mustardclient.once(event.name, (...args) =>
                event.execute(...args, mustardclient)
              );
            else
              mustardclient.on(event.name, (...args) =>
                event.execute(...args, mustardclient)
              );
          }
          break;

        default:
          break;
      }
    }
  };
};
