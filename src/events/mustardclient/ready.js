module.exports = {
  name: 'ready',
  once: true,
  async execute(mustardclient) {
    console.log(`Logged in as ${mustardclient.user.tag}`);
    // await mustardclient.handleCommands();
    // await mustardclient.handleEvents();
  },
};
