const { readdirSync } = require('fs');

module.exports = (mustardclient) => {
  mustardclient.handleComponents = async () => {
    const componentFolder = readdirSync(`./src/components`);

    for (const folder of componentFolder) {
      const componentFiles = readdirSync(`./src/components/${folder}`).filter(
        (file) => file.endsWith('.js')
      );

      const { buttons, selectMenus, modals } = mustardclient;

      switch (folder) {
        case 'buttons':
          for (const file of componentFiles) {
            const button = require(`../../components/${folder}/${file}`);
            buttons.set(button.data.name, button);
          }
          break;

        case 'selectMenus':
          for (const file of componentFiles) {
            const menu = require(`../../components/${folder}/${file}`);
            selectMenus.set(menu.data.name, menu);
          }
          break;

        case 'modals':
          for (const file of componentFiles) {
            const modal = require(`../../components/${folder}/${file}`);
            modals.set(modal.data.name, modal);
          }
          break;

        default:
          break;
      }
    }
  };
};