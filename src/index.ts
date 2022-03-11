import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ISettingRegistry } from '@jupyterlab/settingregistry';

/**
 * Initialization data for the jubLabBlocklyExtExt extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jubLabBlocklyExtExt:plugin',
  autoStart: true,
  optional: [ISettingRegistry],
  activate: (app: JupyterFrontEnd, settingRegistry: ISettingRegistry | null) => {
    console.log('JupyterLab extension jubLabBlocklyExtExt is activated!');

    if (settingRegistry) {
      settingRegistry
        .load(plugin.id)
        .then(settings => {
          console.log('jubLabBlocklyExtExt settings loaded:', settings.composite);
        })
        .catch(reason => {
          console.error('Failed to load settings for jubLabBlocklyExtExt.', reason);
        });
    }
  }
};

export default plugin;
