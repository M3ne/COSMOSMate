import { DateTimeManager } from '@app/js/plugins/date-time-manager/date-time-manager';
import { SensorListPlugin } from '@app/js/plugins/sensor/sensor-list-plugin';
import { TopMenu } from '@app/js/plugins/top-menu/top-menu';
import { setupStandardEnvironment } from './environment/standard-env';
import { standardClickTests, standardPluginMenuButtonTests, standardPluginSuite } from './generic-tests';

describe('SensorListPlugin_class', () => {
  beforeEach(() => {
    // Mock DateTimeManager uiManagerFinal to prevent errors
    DateTimeManager.prototype.uiManagerFinal = jest.fn();
    setupStandardEnvironment([TopMenu, DateTimeManager]);
  });

  afterEach(() => {
    jest.advanceTimersByTime(1000);
  });

  standardPluginSuite(SensorListPlugin);
  standardPluginMenuButtonTests(SensorListPlugin);
  standardClickTests(SensorListPlugin);
});
