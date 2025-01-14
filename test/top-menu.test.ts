import { keepTrackContainer } from '@app/js/container';
import { Singletons } from '@app/js/interfaces';
import { keepTrackApi } from '@app/js/keepTrackApi';
import { soundManagerPlugin } from '@app/js/plugins/sounds/sound-manager';
import { TopMenu } from '@app/js/plugins/top-menu/top-menu';
import { errorManagerInstance } from '@app/js/singletons/errorManager';
import { setupMinimumHtml } from './environment/standard-env';
import { standardPluginSuite } from './generic-tests';

describe('TopMenu_class', () => {
  beforeEach(() => {
    for (const callback in keepTrackApi.callbacks) {
      keepTrackApi.callbacks[callback] = [];
    }
    setupMinimumHtml();
  });

  standardPluginSuite(TopMenu, 'TopMenu');

  // Tests that sound button throws warning if sound plugin is not loaded
  it('test_sound_button_toggle_without_sound_plugin', () => {
    const topMenu = new TopMenu();
    topMenu.init();
    keepTrackApi.methods.uiManagerInit();
    keepTrackApi.methods.uiManagerFinal();
    const soundBtn = document.getElementById('sound-btn') as HTMLAnchorElement;
    errorManagerInstance.warn = jest.fn();
    keepTrackContainer.registerSingleton(Singletons.SoundManager, null);
    soundBtn.click();
    expect(errorManagerInstance.warn).toHaveBeenCalled();
  });

  // Tests that sound button toggles sound on/off
  it('test_sound_button_toggle', () => {
    const topMenu = new TopMenu();
    topMenu.init();
    keepTrackApi.methods.uiManagerInit();
    keepTrackApi.methods.uiManagerFinal();

    const soundBtn = document.getElementById('sound-btn') as HTMLAnchorElement;
    const soundIcon = document.getElementById('sound-icon') as HTMLImageElement;
    keepTrackContainer.registerSingleton(Singletons.SoundManager, soundManagerPlugin);
    const soundManager = keepTrackApi.getSoundManager();
    soundBtn.click();
    expect(soundManager.isMute).toBe(true);
    expect(soundIcon.parentElement.classList.contains('bmenu-item-selected')).toBe(false);
    soundBtn.click();
    expect(soundManager.isMute).toBe(false);
    expect(soundIcon.parentElement.classList.contains('bmenu-item-selected')).toBe(true);
  });
});
