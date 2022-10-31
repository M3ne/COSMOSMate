import { keepTrackApi } from '@app/js/api/keepTrackApi';
import { SunObject } from '@app/js/drawManager/sceneManager/sun';
import { defaultSat, keepTrackApiStubs } from '../../api/apiMocks';
import { KeepTrackPrograms, SatObject } from '../../api/keepTrackTypes';
import { SpaceObjectType } from '../../api/SpaceObjectType';
import * as calculateVisMag from './calculateVisMag';

keepTrackApi.programs = <KeepTrackPrograms>(<unknown>{ ...keepTrackApi.programs, ...keepTrackApiStubs.programs });

// @ponicode
describe('satMath.calculateVisMag', () => {
  test('0', () => {
    let param3: any = new Date('01-13-2020');
    let result: any = calculateVisMag.calculateVisMag(
      {
        ...defaultSat,
        ...(<SatObject>(<unknown>{
          position: { x: 350, y: 90, z: 550 },
          static: true,
          TLE1: 'Foo bar',
          TLE2: 'Foo bar',
          sccNum: 'MT',
          active: true,
          C: 'red',
          LS: '₹',
          LV: 'Dwarf Crocodile',
          ON: '2021-07-30T00:05:36.818Z',
          OT: 987650,
          R: 'user@host:300',
          URL: 'http://www.example.com/route/123?foo=bar',
          O: 'TestUpperCase@Example.com',
          U: 'something.example.com',
          P: 'red',
          LM: 'Nile Crocodile',
          DM: 'Saltwater Crocodile',
          Pw: '4.0.0-beta1\t',
          Li: 'b',
          Con: '9876',
          M: '#FF00FF',
          S1: 'email@Google.com',
          S2: 'bed-free@tutanota.de',
          S3: 'bed-free@tutanota.de',
          S4: 'something@example.com',
          S5: 'something.example.com',
          S6: 'email@Google.com',
          S7: 'bed-free@tutanota.de',
          inclination: 3.0,
          lon: 12345,
          perigee: 56784,
          apogee: 12,
          period: 12,
          meanMotion: 9999,
          semimajorAxis: 2,
          eccentricity: -1.0,
          raan: 10,
          argPe: 987650,
          inView: -100,
          velocity: { total: 0, x: 380, y: 320, z: 550 },
          getTEARR: false,
          getAltitude: ['61.0865', '-144.7750'],
          getDirection: 'South',
          vmag: -100,
          id: 0,
        })),
      },
      {
        ...defaultSat,
        ...{
          alt: 5,
          beamwidth: 10,
          changeObjectInterval: -5.48,
          country: 'United States',
          lat: 520,
          linkAehf: true,
          linkWgs: true,
          lon: 520,
          name: 'Jean-Philippe',
          observerGd: { lat: 550, lon: 1, alt: 1 },
          obsmaxaz: -5.48,
          obsmaxel: -1.0,
          obsmaxrange: 380,
          obsminaz: 100,
          obsminel: -29.45,
          obsminrange: 0,
          shortName: '819843241',
          staticNum: 10,
          sun: '^5.0.0',
          type: SpaceObjectType.PAYLOAD,
          url: 'http://www.croplands.org/account/confirm?t=',
          volume: true,
          zoom: 'leo',
        },
      },
      param3,
      <SunObject>{ eci: { x: 0, y: 0, z: 0 } }
    );
    expect(result).toMatchSnapshot();
  });

  test('1', () => {
    let param3: any = new Date('01-13-2020');
    let result: any = calculateVisMag.calculateVisMag(
      {
        ...defaultSat,
        ...(<SatObject>(<unknown>{
          position: { x: 410, y: 400, z: 350 },
          static: false,
          TLE1: 'foo bar',
          TLE2: 'Hello, world!',
          sccNum: '£',
          active: false,
          C: 'hsl(10%,20%,40%)',
          LS: 'B/.',
          LV: 'Dwarf Crocodile',
          ON: '2021-07-29T17:54:41.653Z',
          OT: 987650,
          R: 'bed-free@tutanota.de',
          URL: 'http://base.com',
          O: 'TestUpperCase@Example.com',
          U: 'ponicode.com',
          P: '#F00',
          LM: 'Saltwater Crocodile',
          DM: 'Nile Crocodile',
          Pw: 'v1.2.4',
          Li: 'c',
          Con: 'test',
          M: 'rgb(0.1,0.2,0.3)',
          S1: 'user1+user2@mycompany.com',
          S2: 'bed-free@tutanota.de',
          S3: 'user@host:300',
          S4: 'ponicode.com',
          S5: 'user1+user2@mycompany.com',
          S6: 'bed-free@tutanota.de',
          S7: 'user1+user2@mycompany.com',
          inclination: 10,
          lon: 12,
          perigee: 56784,
          apogee: 987650,
          period: 987650,
          meanMotion: 2000.0,
          semimajorAxis: 5,
          eccentricity: 0.5,
          raan: 50,
          argPe: 12,
          inView: 1,
          velocity: { total: 0, x: 70, y: 410, z: 30 },
          getTEARR: true,
          getAltitude: ['39.2233', '-78.8613'],
          getDirection: 'South',
          vmag: 100,
          id: 0,
        })),
      },
      {
        ...defaultSat,
        ...{
          alt: 1,
          beamwidth: 40,
          changeObjectInterval: 1,
          country: 'France',
          lat: 30,
          linkAehf: true,
          linkWgs: false,
          lon: 50,
          name: 'Jean-Philippe',
          observerGd: { lat: 410, lon: 70, alt: 1 },
          obsmaxaz: 1,
          obsmaxel: 1.0,
          obsmaxrange: 400,
          obsminaz: -5.48,
          obsminel: 10.0,
          obsminrange: 0,
          shortName: 'test',
          staticNum: 1000,
          sun: 'v1.2.4',
          type: SpaceObjectType.PAYLOAD,
          url: 'http://base.com',
          volume: false,
          zoom: 'geo',
        },
      },
      param3,
      <SunObject>{ eci: { x: 0, y: 0, z: 0 } }
    );
    expect(result).toMatchSnapshot();
  });

  test('2', () => {
    let param3: any = new Date('01-13-2020');
    let result: any = calculateVisMag.calculateVisMag(
      {
        ...defaultSat,
        ...(<SatObject>(<unknown>{
          position: { x: 90, y: 1, z: 550 },
          static: true,
          TLE1: 'Hello, world!',
          TLE2: 'foo bar',
          sccNum: '£',
          active: true,
          C: 'rgb(0.1,0.2,0.3)',
          LS: 'B/.',
          LV: 'Saltwater Crocodile',
          ON: '2021-07-29T23:03:48.812Z',
          OT: 10,
          R: 'something.example.com',
          URL: 'Www.GooGle.com',
          O: 'user@host:300',
          U: 'bed-free@tutanota.de',
          P: 'black',
          LM: 'Australian Freshwater Crocodile',
          DM: 'Nile Crocodile',
          Pw: '1.0.0',
          Li: 'a',
          Con: 'fake',
          M: 'rgb(20%,10%,30%)',
          S1: 'something@example.com',
          S2: 'something@example.com',
          S3: 'TestUpperCase@Example.com',
          S4: 'ponicode.com',
          S5: 'something.example.com',
          S6: 'TestUpperCase@Example.com',
          S7: 'something.example.com',
          inclination: 0,
          lon: 50,
          perigee: 12,
          apogee: 12,
          period: 987650,
          meanMotion: 2000.0,
          semimajorAxis: 4,
          eccentricity: 0.0,
          raan: 10,
          argPe: 12,
          inView: 100,
          velocity: { total: 10000, x: 320, y: 350, z: 70 },
          getTEARR: true,
          getAltitude: ['39.2233', '-78.8613'],
          getDirection: 'Southwest',
          vmag: -5.48,
          id: 0,
        })),
      },
      {
        ...defaultSat,
        ...{
          alt: 1,
          beamwidth: 8,
          changeObjectInterval: 100,
          country: 'France',
          lat: 100,
          linkAehf: false,
          linkWgs: true,
          lon: 70,
          name: 'Edmond',
          observerGd: { lat: 320, lon: 30, alt: 5 },
          obsmaxaz: -100,
          obsmaxel: 0.5,
          obsmaxrange: 380,
          obsminaz: 0,
          obsminel: 0.0,
          obsminrange: 100,
          shortName: '254482186',
          staticNum: 1,
          sun: '4.0.0-beta1\t',
          type: SpaceObjectType.PAYLOAD,
          url: 'https://',
          volume: false,
          zoom: 'leo',
        },
      },
      param3,
      <SunObject>{ eci: { x: 0, y: 0, z: 0 } }
    );
    expect(result).toMatchSnapshot();
  });

  test('3', () => {
    let param3: any = new Date('32-01-2020');
    let result: any = calculateVisMag.calculateVisMag(
      {
        ...defaultSat,
        ...(<SatObject>(<unknown>{
          position: { x: 90, y: 30, z: 520 },
          static: false,
          TLE1: 'This is a Text',
          TLE2: 'foo bar',
          sccNum: 'лв',
          active: true,
          C: 'rgb(0,100,200)',
          LS: 'лв',
          LV: 'Australian Freshwater Crocodile',
          ON: '2021-07-30T00:05:36.818Z',
          OT: 10,
          R: 'ponicode.com',
          URL: 'https://',
          O: 'user@host:300',
          U: 'email@Google.com',
          P: 'rgb(0.1,0.2,0.3)',
          LM: 'Spectacled Caiman',
          DM: 'Australian Freshwater Crocodile',
          Pw: 'v4.0.0-rc.4',
          Li: 'a1969970175',
          Con: 'test',
          M: '#FF00FF',
          S1: 'something@example.com',
          S2: 'user1+user2@mycompany.com',
          S3: 'TestUpperCase@Example.com',
          S4: 'email@Google.com',
          S5: 'bed-free@tutanota.de',
          S6: 'email@Google.com',
          S7: 'email@Google.com',
          inclination: 4,
          lon: 50,
          perigee: 10,
          apogee: 12,
          period: 10,
          meanMotion: 2,
          semimajorAxis: 0,
          eccentricity: 0.5,
          raan: 10,
          argPe: 56784,
          inView: 0,
          velocity: { total: 0.0, x: 70, y: 550, z: 550 },
          getTEARR: false,
          getAltitude: 520,
          getDirection: 'Southeast',
          vmag: -5.48,
          id: 0,
        })),
      },
      {
        ...defaultSat,
        ...{
          alt: 1,
          beamwidth: 12000,
          changeObjectInterval: 0,
          country: 'FR',
          lat: 550,
          linkAehf: false,
          linkWgs: false,
          lon: 4,
          name: 'Pierre Edouard',
          observerGd: { lat: 520, lon: 100, alt: 1 },
          obsmaxaz: -100,
          obsmaxel: -29.45,
          obsmaxrange: 550,
          obsminaz: -100,
          obsminel: -0.5,
          obsminrange: 100,
          shortName: '992686820',
          staticNum: 10,
          sun: '4.0.0-beta1\t',
          type: SpaceObjectType.ROCKET_BODY,
          url: 'https://croplands.org/app/a/reset?token=',
          volume: false,
          zoom: 'leo',
        },
      },
      param3,
      <SunObject>{ eci: { x: 10, y: 10, z: 10 } }
    );
    expect(result).toMatchSnapshot();
  });

  test('4', () => {
    let param3: any = new Date('01-01-2020');
    let result: any = calculateVisMag.calculateVisMag(
      {
        ...defaultSat,
        ...(<SatObject>(<unknown>{
          position: { x: 70, y: 100, z: 550 },
          static: false,
          TLE1: 'Hello, world!',
          TLE2: 'Hello, world!',
          sccNum: 'B/.',
          active: true,
          C: 'rgb(0.1,0.2,0.3)',
          LS: '£',
          LV: 'Nile Crocodile',
          ON: '2021-07-29T17:54:41.653Z',
          OT: 10,
          R: 'something@example.com',
          URL: 'https://api.telegram.org/',
          O: 'bed-free@tutanota.de',
          U: 'bed-free@tutanota.de',
          P: 'rgb(0.1,0.2,0.3)',
          LM: 'Spectacled Caiman',
          DM: 'Nile Crocodile',
          Pw: 'v1.2.4',
          Li: 'fake',
          Con: 'fake',
          M: 'red',
          S1: 'bed-free@tutanota.de',
          S2: 'user1+user2@mycompany.com',
          S3: 'something.example.com',
          S4: 'email@Google.com',
          S5: 'something@example.com',
          S6: 'something@example.com',
          S7: 'user@host:300',
          inclination: 10,
          lon: 10,
          perigee: 12,
          apogee: 10,
          period: 50,
          meanMotion: 2000.0,
          semimajorAxis: 4,
          eccentricity: -1.0,
          raan: 12345,
          argPe: 12345,
          inView: 100,
          velocity: { total: 0.0, x: 550, y: 550, z: 4 },
          getTEARR: true,
          getAltitude: ['61.0865', '-144.7750'],
          getDirection: 'Southwest',
          vmag: -5.48,
          id: 0,
        })),
      },
      {
        ...defaultSat,
        ...{
          alt: 5,
          beamwidth: 120,
          changeObjectInterval: -100,
          country: 'France',
          lat: 50,
          linkAehf: false,
          linkWgs: true,
          lon: 550,
          name: 'Edmond',
          observerGd: { lat: 4, lon: 350, alt: 3 },
          obsmaxaz: -5.48,
          obsmaxel: -1.0,
          obsmaxrange: 50,
          obsminaz: 1,
          obsminel: 1.0,
          obsminrange: -5.48,
          shortName: '254482186',
          staticNum: 10,
          sun: 'v4.0.0-rc.4',
          type: SpaceObjectType.ROCKET_BODY,
          url: 'Www.GooGle.com',
          volume: true,
          zoom: 'leo',
        },
      },
      param3,
      <SunObject>{ eci: { x: -10, y: -10, z: -10 } }
    );
    expect(result).toMatchSnapshot();
  });
});