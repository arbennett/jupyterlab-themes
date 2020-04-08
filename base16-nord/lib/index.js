import { IThemeManager } from '@jupyterlab/apputils';
/**
 * A plugin for base16-nord
 */
const plugin = {
    id: 'base16-nord:plugin',
    requires: [IThemeManager],
    activate: function (app, manager) {
        const style = 'base16-nord/index.css';
        manager.register({
            name: 'base16-nord',
            isLight: false,
            load: () => manager.loadCSS(style),
            unload: () => Promise.resolve(undefined)
        });
    },
    autoStart: true
};
export default plugin;
//# sourceMappingURL=index.js.map