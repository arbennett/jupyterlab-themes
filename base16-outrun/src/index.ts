import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for base16-outrun
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'base16-outrun:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = '@arbennett/base16-outrun/index.css';

    manager.register({
      name: 'base16-outrun',
      isLight: false,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
