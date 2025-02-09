import { keepTrackContainer } from '@app/js/container';
import { Singletons } from '@app/js/interfaces';
import { keepTrackApi } from '@app/js/keepTrackApi';
import { SensorSurvFence } from '@app/js/plugins/sensor-surv/sensor-surv-fence';
import { StandardSensorManager } from '@app/js/plugins/sensor/sensorManager';
import { defaultSensor } from './environment/apiMocks';
import { setupStandardEnvironment } from './environment/standard-env';
import { standardPluginMenuButtonTests, standardPluginSuite, websiteInit } from './generic-tests';

describe('SensorSurvFence_class', () => {
  let sensorSurvFencePlugin: SensorSurvFence;
  beforeEach(() => {
    setupStandardEnvironment();
    sensorSurvFencePlugin = new SensorSurvFence();
  });

  standardPluginSuite(SensorSurvFence, 'SensorSurvFence');
  standardPluginMenuButtonTests(SensorSurvFence, 'SensorSurvFence');

  // Test bottom menu click responses
  it('test_bottom_menu_click', () => {
    websiteInit(sensorSurvFencePlugin);

    expect(() => keepTrackApi.methods.bottomMenuClick(sensorSurvFencePlugin.bottomIconElementName)).not.toThrow();

    const sensorManagerInstance = new StandardSensorManager();
    sensorManagerInstance.isSensorSelected = jest.fn().mockReturnValue(true);
    keepTrackContainer.registerSingleton(Singletons.SensorManager, sensorManagerInstance);
    expect(() => keepTrackApi.methods.bottomMenuClick(sensorSurvFencePlugin.bottomIconElementName)).not.toThrow();
  });

  // Test changing sensor
  it('test_change_sensor', () => {
    websiteInit(sensorSurvFencePlugin);

    expect(() => keepTrackApi.methods.setSensor('sensor', 1)).not.toThrow();
    expect(() => keepTrackApi.methods.setSensor(null, null)).not.toThrow();
    expect(() => keepTrackApi.methods.setSensor(defaultSensor, 0)).not.toThrow();
    expect(() => keepTrackApi.methods.setSensor(null, null)).not.toThrow();
    expect(() => keepTrackApi.methods.setSensor(defaultSensor, 2)).not.toThrow();
  });
});
