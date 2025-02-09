import { keepTrackApi } from '@app/js/keepTrackApi';
import { ClassificationBar } from '@app/js/plugins/classification-bar/classification-bar';
import { ClassificationString } from '@app/js/static/classification';
import { setupMinimumHtml } from './environment/standard-env';
import { standardPluginInit, standardPluginSuite } from './generic-tests';

describe('classification_bar_plugin', () => {
  let classificationPlugin: ClassificationBar;
  beforeEach(() => {
    classificationPlugin = new ClassificationBar();
    setupMinimumHtml();
  });

  standardPluginSuite(ClassificationBar, 'Classification');

  it('process_init', () => {
    standardPluginInit(ClassificationBar);
    expect(document.getElementById('classification-string')).toBe(null);
  });

  it('process_init_with_settings_classification', () => {
    ['Unclassified', 'Secret', 'Top Secret', 'Top Secret//SCI'].forEach((testClassificationStr) => {
      classificationPlugin = new ClassificationBar();
      setupMinimumHtml();
      settingsManager.classificationStr = testClassificationStr as ClassificationString;
      expect(() => classificationPlugin.init()).not.toThrow();

      expect(() => keepTrackApi.callbacks.uiManagerInit.forEach((callback) => callback.cb())).not.toThrow();
      expect(() => keepTrackApi.callbacks.uiManagerFinal.forEach((callback) => callback.cb())).not.toThrow();

      expect(document.getElementById('classification-string').innerHTML).toBe(testClassificationStr);
    });
  });

  it('process_no_classification_container', () => {
    expect(() => classificationPlugin.updateClassificationString('Unclassified')).not.toThrow();
  });

  it('process_update_classification_unofficial_string', () => {
    settingsManager.classificationStr = 'Test' as ClassificationString;
    expect(() => classificationPlugin.init()).not.toThrow();

    expect(() => keepTrackApi.callbacks.uiManagerInit.forEach((callback) => callback.cb())).not.toThrow();
    expect(() => keepTrackApi.callbacks.uiManagerFinal.forEach((callback) => callback.cb())).not.toThrow();
  });
});
