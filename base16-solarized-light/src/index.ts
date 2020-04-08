import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for base16-solarized-light
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'base16-solarized-light:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = '@arbennett/base16-solarized-light/index.css';

    manager.register({
      name: 'base16-solarized-light',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
