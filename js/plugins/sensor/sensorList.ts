import { SensorObject } from '@app/js/api/keepTrackTypes';
import { SpaceObjectType } from '@app/js/api/SpaceObjectType';

interface SensorList {
  [key: string]: SensorObject;
}

const sensorList: SensorList = {
  COD: {
    name: 'Cape Cod SFS, Massachusetts',
    shortName: 'COD',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: 41.754785,
    lon: -70.539151,
    alt: 0.060966,
    obsminaz: 347,
    obsmaxaz: 227,
    obsminel: 3,
    obsmaxel: 85,
    obsminrange: 200,
    obsmaxrange: 5556,
    changeObjectInterval: 1000,
    beamwidth: 2.0, // National Research Council 1979. Radiation Intensity of the PAVE PAWS Radar System. Washington, DC: The National Academies Press.
    linkAehf: true,
    linkWgs: true,
    zoom: 'leo',
    url: 'https://www.radartutorial.eu/19.kartei/01.oth/karte004.en.html',
    country: 'United States',
    sun: 'No Impact',
    volume: false,
  },
  BLE: {
    name: 'Beale AFB, California',
    shortName: 'BLE',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: 39.136064,
    lon: -121.351237,
    alt: 0.112, // Open Street Maps
    obsminaz: 126,
    obsmaxaz: 6,
    obsminel: 3,
    obsmaxel: 85,
    obsminrange: 200,
    obsmaxrange: 5556,
    changeObjectInterval: 1000,
    beamwidth: 2.0, // National Research Council 1979. Radiation Intensity of the PAVE PAWS Radar System. Washington, DC: The National Academies Press.
    linkAehf: true,
    linkWgs: true,
    zoom: 'leo',
    country: 'United States',
    sun: 'No Impact',
    volume: false,
  },
  CLR: {
    name: 'Clear SFS, Alaska',
    shortName: 'CLR',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: 64.290556,
    lon: -149.186944,
    alt: 0.175, // Open Street Maps
    obsminaz: 184,
    obsmaxaz: 64,
    obsminel: 3,
    obsmaxel: 85,
    obsminrange: 200,
    obsmaxrange: 5556,
    changeObjectInterval: 1000,
    beamwidth: 2.0, // National Research Council 1979. Radiation Intensity of the PAVE PAWS Radar System. Washington, DC: The National Academies Press.
    linkAehf: true,
    linkWgs: true,
    zoom: 'leo',
    country: 'United States',
    sun: 'No Impact',
    volume: false,
  },
  EGL: {
    name: 'Eglin AFB, Florida',
    shortName: 'EGL',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: 30.572411,
    lon: -86.214836,
    alt: 0.039, // Open Street Maps
    obsminaz: 120,
    obsmaxaz: 240,
    obsminel: 3,
    obsmaxel: 105,
    obsminrange: 200,
    obsmaxrange: 200000,
    changeObjectInterval: 1000,
    zoom: 'geo',
    beamwidth: 1.4, // National Research Council 1979. Radiation Intensity of the PAVE PAWS Radar System. Washington, DC: The National Academies Press.
    url: 'https://www.radartutorial.eu/19.kartei/01.oth/karte002.en.html',
    country: 'United States',
    sun: 'No Impact',
    volume: false,
  },
  FYL: {
    name: 'RAF Fylingdales, United Kingdom',
    shortName: 'FYL',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: 54.361758,
    lon: -0.670051,
    alt: 0.26, // Open Street Maps
    obsminaz: 0,
    obsmaxaz: 360,
    obsminel: 3,
    obsmaxel: 85,
    obsminrange: 200,
    obsmaxrange: 5556,
    changeObjectInterval: 1000,
    beamwidth: 2.0, // National Research Council 1979. Radiation Intensity of the PAVE PAWS Radar System. Washington, DC: The National Academies Press.
    linkAehf: true,
    linkWgs: true,
    zoom: 'leo',
    country: 'United Kingdom',
    sun: 'No Impact',
    volume: false,
  },
  CAV: {
    name: 'Cavalier SFS, North Dakota',
    shortName: 'CAV',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: 48.724567,
    lon: -97.899755,
    alt: 0.352, // Open Street Maps
    obsminaz: 298,
    obsmaxaz: 78,
    obsminel: 1.9,
    obsmaxel: 95,
    obsminrange: 200,
    obsmaxrange: 3300, // 1,780 Nm http://www.fortwiki.com/Cavalier_Air_Force_Station
    changeObjectInterval: 1000,
    beamwidth: 1.2, // National Research Council 1979. Radiation Intensity of the PAVE PAWS Radar System. Washington, DC: The National Academies Press.
    linkAehf: true,
    zoom: 'leo',
    url: 'https://mostlymissiledefense.com/2012/04/12/parcs-cavalier-radar-april-12-2012/',
    country: 'United States',
    sun: 'No Impact',
    volume: true,
  },
  THL: {
    name: 'Thule AFB, Greenland',
    shortName: 'THL',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: 76.570322,
    lon: -68.299211,
    alt: 0.392, // Open Street Maps
    obsminaz: 297,
    obsmaxaz: 177,
    obsminel: 3,
    obsmaxel: 85,
    obsminrange: 200,
    obsmaxrange: 5556,
    changeObjectInterval: 1000,
    beamwidth: 2.0, // National Research Council 1979. Radiation Intensity of the PAVE PAWS Radar System. Washington, DC: The National Academies Press.
    linkAehf: true,
    linkWgs: true,
    zoom: 'leo',
    url: 'https://www.radartutorial.eu/19.kartei/01.oth/karte004.en.html',
    country: 'United States',
    sun: 'No Impact',
    volume: false,
  },
  CDN: {
    name: 'Cobra Dane, Alaska',
    shortName: 'CDN',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: 52.737,
    lon: 174.092,
    alt: 0.066, // Open Street Maps
    obsminaz: 251, // TODO: Need to find an open-source reference
    obsmaxaz: 27,
    obsminel: 2,
    obsmaxel: 80,
    obsminrange: 200,
    obsmaxrange: 4200,
    // obsminaz2: 251,
    // obsmaxaz2: 27,
    // obsminel2: 30,
    // obsmaxel2: 80,
    // obsminrange2: 200,
    // obsmaxrange2: 4200,
    changeObjectInterval: 1000,
    linkWgs: true,
    zoom: 'leo',
    url: 'https://www.radartutorial.eu/19.kartei/01.oth/karte004.en.html',
    country: 'United States',
    sun: 'No Impact',
    volume: true,
  },
  ALT: {
    name: 'ALTAIR, Kwajalein Atoll',
    shortName: 'ALT',
    type: SpaceObjectType.MECHANICAL,
    lat: 8.716667,
    lon: 167.733333,
    alt: 0,
    obsminaz: 0,
    obsmaxaz: 360,
    obsminel: 1,
    obsmaxel: 90,
    obsminrange: 200,
    obsmaxrange: 200000,
    changeObjectInterval: 20000,
    linkAehf: true,
    linkWgs: true,
    zoom: 'geo',
    url: 'https://www.radartutorial.eu/19.kartei/01.oth/karte005.en.html',
    country: 'United States',
    sun: 'No Impact',
    volume: false,
  },
  MMW: {
    name: 'Millimeter Wave Radar, Kwajalein Atoll',
    shortName: 'MMW',
    type: SpaceObjectType.MECHANICAL,
    lat: 8.756668,
    lon: 167.773334,
    alt: 0,
    obsminaz: 0,
    obsmaxaz: 360,
    obsminel: 1,
    obsmaxel: 90,
    obsminrange: 0,
    obsmaxrange: 2500,
    changeObjectInterval: 20000,
    linkAehf: false,
    linkWgs: false,
    zoom: 'leo',
    url: '',
    country: 'United States',
    sun: 'No Impact',
    volume: false,
  },
  ALC: {
    name: 'ALCOR Radar, Kwajalein Atoll',
    shortName: 'ALC',
    type: SpaceObjectType.MECHANICAL,
    lat: 8.716668,
    lon: 167.773334,
    alt: 0,
    obsminaz: 0,
    obsmaxaz: 360,
    obsminel: 1,
    obsmaxel: 90,
    obsminrange: 0,
    obsmaxrange: 2300,
    zoom: 'leo',
    changeObjectInterval: 20000,
    linkAehf: false,
    linkWgs: false,
    url: '',
    country: 'United States',
    sun: 'No Impact',
    volume: false,
  },
  TDX: {
    name: 'TRADEX Radar, Kwajalein Atoll',
    shortName: 'TDX',
    type: SpaceObjectType.MECHANICAL,
    lat: 8.756668,
    lon: 167.733334,
    alt: 0,
    obsminaz: 0,
    obsmaxaz: 360,
    obsminel: 1,
    obsmaxel: 90,
    obsminrange: 0,
    obsmaxrange: 200000,
    zoom: 'geo',
    changeObjectInterval: 20000,
    linkAehf: false,
    linkWgs: false,
    url: '',
    country: 'United States',
    sun: 'No Impact',
    volume: false,
  },
  MIL: {
    name: 'Millstone, Massachusetts',
    shortName: 'MIL',
    type: SpaceObjectType.MECHANICAL,
    lat: 42.6233,
    lon: -71.4882,
    alt: 0.131,
    obsminaz: 0,
    obsmaxaz: 360,
    obsminel: 1,
    obsmaxel: 90,
    obsminrange: 200,
    obsmaxrange: 200000,
    zoom: 'geo',
    changeObjectInterval: 20000,
    url: 'https://mostlymissiledefense.com/2012/05/05/space-surveillance-sensors-millstone-hill-radar/',
    country: 'United States',
    sun: 'No Impact',
    volume: false,
  },
  DGC: {
    name: 'Diego Garcia',
    shortName: 'DGC',
    type: SpaceObjectType.OPTICAL,
    lat: -7.29648,
    lon: 72.390153,
    alt: 0.0,
    obsminaz: 0,
    obsmaxaz: 360,
    obsminel: 20,
    obsmaxel: 90,
    obsminrange: 0,
    obsmaxrange: 200000,
    zoom: 'geo',
    changeObjectInterval: 20000,
    url: 'https://mostlymissiledefense.com/2012/08/20/space-surveillance-sensors-geodss-ground-based-electro-optical-deep-space-surveillance-system-august-20-2012/',
    country: 'United States',
    sun: 'No Impact',
    volume: false,
  },
  MAU: {
    name: 'Maui, Hawaii',
    shortName: 'MAU',
    type: SpaceObjectType.OPTICAL,
    lat: 20.70835,
    lon: -156.257595,
    alt: 3.0,
    obsminaz: 0,
    obsmaxaz: 360,
    obsminel: 20,
    obsmaxel: 90,
    obsminrange: 0,
    obsmaxrange: 200000,
    zoom: 'geo',
    changeObjectInterval: 20000,
    url: 'https://mostlymissiledefense.com/2012/08/20/space-surveillance-sensors-geodss-ground-based-electro-optical-deep-space-surveillance-system-august-20-2012/',
    country: 'United States',
    sun: 'No Impact',
    volume: false,
  },
  SOC: {
    name: 'Socorro, New Mexico',
    shortName: 'SOC',
    type: SpaceObjectType.OPTICAL,
    lat: 33.817233,
    lon: -106.659961,
    alt: 1.24,
    obsminaz: 0,
    obsmaxaz: 360,
    obsminel: 20,
    obsmaxel: 90,
    obsminrange: 0,
    obsmaxrange: 200000,
    zoom: 'geo',
    changeObjectInterval: 20000,
    url: 'https://mostlymissiledefense.com/2012/08/20/space-surveillance-sensors-geodss-ground-based-electro-optical-deep-space-surveillance-system-august-20-2012/',
    country: 'United States',
    sun: 'No Impact',
    volume: false,
  },
  ASC: {
    name: 'Ascension Island, United Kingdom',
    shortName: 'ASC',
    type: SpaceObjectType.MECHANICAL,
    lat: -7.969444,
    lon: -14.393889,
    alt: 0.0,
    obsminaz: 0,
    obsmaxaz: 360,
    obsminel: 1,
    obsmaxel: 90,
    obsminrange: 200,
    obsmaxrange: 200000,
    zoom: 'geo',
    changeObjectInterval: 20000,
    url: '',
    country: 'United States',
    sun: 'No Impact',
    volume: false,
  },
  GLB: {
    name: 'Globus II, NOR',
    shortName: 'GLB',
    type: SpaceObjectType.MECHANICAL,
    lat: 70.3671,
    lon: 31.1271,
    alt: 0.0,
    obsminaz: 0,
    obsmaxaz: 360,
    obsminel: 1,
    obsmaxel: 90,
    obsminrange: 200,
    obsmaxrange: 200000,
    zoom: 'geo',
    changeObjectInterval: 20000,
    url: '',
    country: 'Norway',
    sun: 'No Impact',
    volume: false,
  },
  HOL: {
    name: 'C-Band (Holt) Radar, Australia',
    shortName: 'HOL',
    type: SpaceObjectType.MECHANICAL,
    lat: -21.816195,
    lon: 114.165637,
    alt: 0.0,
    obsminaz: 0,
    obsmaxaz: 360,
    obsminel: 1,
    obsmaxel: 90,
    obsminrange: 200,
    obsmaxrange: 200000,
    zoom: 'geo',
    changeObjectInterval: 20000,
    url: '',
    country: 'Australia',
    sun: 'No Impact',
    volume: false,
  },

  // //////////////
  // TPY-2 RADARS
  // //////////////

  HAR: {
    name: 'Har Keren TPY-2, Israel',
    shortName: 'HAR',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: 30.995807,
    lon: 34.496062,
    alt: 0.173,
    obsminaz: 5,
    obsmaxaz: 125,
    obsminel: 5,
    obsmaxel: 95,
    obsminrange: 0,
    obsmaxrange: 2000,
    zoom: 'leo',
    changeObjectInterval: 1000,
    url: '',
    country: 'Israel',
    sun: 'No Impact',
    volume: false,
  },
  QTR: {
    name: 'Centcom TPY-2, Qatar',
    shortName: 'QTR',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: 25.31598,
    lon: 51.146515,
    alt: 0.01,
    obsminaz: 335,
    obsmaxaz: 95,
    obsminel: 0,
    obsmaxel: 90,
    obsminrange: 0,
    obsmaxrange: 2000,
    zoom: 'leo',
    changeObjectInterval: 1000,
    url: '',
    country: 'United States',
    sun: 'No Impact',
    volume: false,
  },
  KUR: {
    name: 'Kürecik Radar Station, Turkey',
    shortName: 'KUR',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: 38.349444,
    lon: 37.793611,
    alt: 1.969,
    obsminaz: 40,
    obsmaxaz: 160,
    obsminel: 0,
    obsmaxel: 90,
    obsminrange: 0,
    obsmaxrange: 2000,
    zoom: 'leo',
    changeObjectInterval: 1000,
    url: '',
    country: 'United States',
    sun: 'No Impact',
    volume: false,
  },

  SHA: {
    name: 'Shariki Communication Site, Japan',
    shortName: 'SHA',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: 40.88809,
    lon: 140.337698,
    alt: 0.01,
    obsminaz: 230,
    obsmaxaz: 350,
    obsminel: 0,
    obsmaxel: 90,
    obsminrange: 0,
    obsmaxrange: 2000,
    zoom: 'leo',
    changeObjectInterval: 1000,
    url: '',
    country: 'United States',
    sun: 'No Impact',
    volume: false,
  },

  KCS: {
    name: 'Kyogamisaki Communication Site, Japan',
    shortName: 'KCS',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: 35.766667,
    lon: 135.195278,
    alt: 0.01,
    obsminaz: 210,
    obsmaxaz: 330,
    obsminel: 0,
    obsmaxel: 90,
    obsminrange: 0,
    obsmaxrange: 2000,
    zoom: 'leo',
    changeObjectInterval: 1000,
    url: '',
    country: 'United States',
    sun: 'No Impact',
    volume: false,
  },

  SBX: {
    name: 'Sea-Based X-Band Radar, Pacific Ocean',
    shortName: 'SBX',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: 36.5012,
    lon: 169.6941,
    alt: 0.0,
    obsminaz: 275,
    obsmaxaz: 300,
    obsminel: 0,
    obsmaxel: 90,
    obsminrange: 0,
    obsmaxrange: 4025,
    zoom: 'leo',
    changeObjectInterval: 1000,
    url: '',
    country: 'United States',
    sun: 'No Impact',
    volume: false,
  },

  // //////////////////////
  // LEO LABS
  // //////////////////////

  MSR: {
    name: 'Midland Space Radar, Texas',
    shortName: 'MSR',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: 31.9643,
    lon: -103.233245,
    alt: 0.855,
    obsminaz: 70,
    obsmaxaz: 72,
    obsminel: 30,
    obsmaxel: 91, // 91 to ensure visual overlap
    obsminrange: 100,
    obsmaxrange: 1800,
    obsminaz2: 250,
    obsmaxaz2: 252,
    obsminel2: 30,
    obsmaxel2: 91, // 91 to ensure visual overlap
    obsminrange2: 100,
    obsmaxrange2: 1800,
    zoom: 'leo',
    changeObjectInterval: 1000,
    url: 'https://platform.leolabs.space/sites/msr',
    country: 'United States',
    sun: 'No Impact',
    volume: true,
  },

  PFISR: {
    name: 'Poker Flat Incoherent Scatter Radar, Alaska',
    shortName: 'PFISR',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: 65.130029,
    lon: -147.470992,
    alt: 0.23,
    obsminaz: 0,
    obsmaxaz: 360,
    obsminel: 45,
    obsmaxel: 90, // 91 to ensure visual overlap
    obsminrange: 100,
    obsmaxrange: 1800,
    zoom: 'leo',
    changeObjectInterval: 1000,
    url: 'https://platform.leolabs.space/sites/pfisr',
    country: 'United States',
    sun: 'No Impact',
    volume: true,
  },

  KSR: {
    name: 'Kiwi Space Radar, New Zealand',
    shortName: 'KSR',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: -45.038725,
    lon: 170.095673,
    alt: 0.0,
    obsminaz: 269,
    obsmaxaz: 271,
    obsminel: 20,
    obsmaxel: 91,
    obsminrange: 100,
    obsmaxrange: 1800,
    obsminaz2: 89,
    obsmaxaz2: 91,
    obsminel2: 20,
    obsmaxel2: 91,
    obsminrange2: 100,
    obsmaxrange2: 1800,
    zoom: 'leo',
    changeObjectInterval: 1000,
    url: 'https://platform.leolabs.space/sites/ksr',
    country: 'United States',
    sun: 'No Impact',
    volume: true,
  },

  CRSR: {
    name: 'Costa Rica Space Radar, Costa Rica',
    shortName: 'CRSR',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: 10.611782670733335, // https://www.radartutorial.eu/19.kartei/02.surv/karte087.en.html
    lon: -85.52869380341954,
    alt: 0.0,
    obsminaz: 209,
    obsmaxaz: 211,
    obsminel: 20,
    obsmaxel: 180, // NOTE: Not sure why this looks correct, but 200 goes into the earth
    obsminrange: 100,
    obsmaxrange: 3000,
    obsminaz2: 119,
    obsmaxaz2: 121,
    obsminel2: 20,
    obsmaxel2: 180, // NOTE: Not sure why this looks correct, but 200 goes into the earth
    obsminrange2: 100,
    obsmaxrange2: 3000,
    zoom: 'leo',
    changeObjectInterval: 1000,
    url: 'https://platform.leolabs.space/sites/crsr',
    country: 'United States',
    sun: 'No Impact',
    volume: true,
  },

  // //////////////////////
  // ESOC RADARS
  // //////////////////////
  GRV: {
    name: 'Grand Réseau Adapté à la Veille Spatiale, France',
    shortName: 'GRV',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: 47.347778,
    lon: 5.51638,
    alt: 0.0,
    obsminaz: 90,
    obsmaxaz: 270,
    obsminel: 20,
    obsmaxel: 40,
    obsminrange: 0,
    obsmaxrange: 1700, // http://emits.sso.esa.int/emits-doc/AO5059RD1.pdf
    zoom: 'leo',
    changeObjectInterval: 20000,
    url: '',
    country: 'France',
    sun: 'No Impact',
    volume: true,
  },
  TIR: {
    name: 'Tracking and Imaging Radar, Germany',
    shortName: 'TIR',
    type: SpaceObjectType.MECHANICAL,
    lat: 50.6166,
    lon: 7.1296,
    alt: 0.0,
    obsminaz: 0,
    obsmaxaz: 360,
    obsminel: 1.5, // http://www.issfd.org/ISSFD_2012/ISSFD23_CRSD2_3.pdf
    obsmaxel: 90,
    obsminrange: 0,
    obsmaxrange: 200000, // http://emits.sso.esa.int/emits-doc/AO5059RD1.pdf
    zoom: 'geo',
    changeObjectInterval: 20000,
    url: '',
    country: 'Germany',
    sun: 'No Impact',
    volume: false,
  },
  NRC: {
    name: 'Croce del Nord, Italy',
    shortName: 'NRC',
    type: SpaceObjectType.BISTATIC_RADIO_TELESCOPE,
    lat: 44.5208,
    lon: 11.6469,
    alt: 0.025,
    obsminaz: 89.1,
    obsmaxaz: 90.9,
    obsminel: 45,
    obsmaxel: 90,
    obsminrange: 0,
    obsmaxrange: 1700,
    obsminaz2: 179.1,
    obsmaxaz2: 180.9,
    obsminel2: 45,
    obsmaxel2: 90,
    obsminrange2: 0,
    obsmaxrange2: 1700,
    zoom: 'leo',
    changeObjectInterval: 20000,
    url: '',
    country: 'Italy',
    sun: 'No Impact',
    volume: false,
  },
  TRO: {
    name: 'RAF Troodos, United Kingdom',
    shortName: 'TRO',
    type: SpaceObjectType.OPTICAL,
    lat: 34.912778,
    lon: 32.883889,
    alt: 0,
    obsminaz: 0,
    obsmaxaz: 360,
    obsminel: 10,
    obsmaxel: 90,
    obsminrange: 0,
    obsmaxrange: 200000,
    zoom: 'geo',
    changeObjectInterval: 20000,
    url: '',
    country: 'United Kingdom',
    sun: 'No Impact',
    volume: false,
  },
  SDT: {
    name: 'ESA Space Debris Telescope, Spain',
    shortName: 'SDT',
    type: SpaceObjectType.OPTICAL,
    lat: 28.3,
    lon: -16.5097,
    alt: 0,
    obsminaz: 0,
    obsmaxaz: 360,
    obsminel: 10,
    obsmaxel: 90,
    obsminrange: 0,
    obsmaxrange: 200000,
    zoom: 'geo',
    changeObjectInterval: 20000,
    url: '',
    country: 'Spain',
    sun: 'No Impact',
    volume: false,
  },

  // //////////////////////
  // RUSSIAN RADARS
  // //////////////////////
  ARM: {
    name: 'Armavir, Russia',
    shortName: 'ARM',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: 44.925106,
    lon: 40.983894,
    alt: 0.0,
    obsminaz: 55, // All Information via russianforces.org
    obsmaxaz: 295,
    obsminel: 2,
    obsmaxel: 60,
    obsminrange: 100,
    obsmaxrange: 4200,
    changeObjectInterval: 1000,
    country: 'Russia',
    sun: 'No Impact',
    volume: false,

    zoom: 'leo',
  },
  BAL: {
    name: 'Balkhash, Russia',
    shortName: 'BAL',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: 46.603076,
    lon: 74.530985,
    alt: 0.0,
    obsminaz: 91, // All Information via russianforces.org
    obsmaxaz: 151,
    obsminel: 5.5,
    obsmaxel: 34.5,
    obsminrange: 385,
    obsmaxrange: 4600,
    zoom: 'leo',
    changeObjectInterval: 1000,
    country: 'Russia',
    sun: 'No Impact',
    volume: false,
  },
  GAN: {
    name: 'Gantsevichi, Russia',
    shortName: 'GAN',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: 52.85,
    lon: 26.48,
    alt: 0.0,
    obsminaz: 190, // All Information via russianforces.org
    obsmaxaz: 310,
    obsminel: 3,
    obsmaxel: 80,
    obsminrange: 300,
    obsmaxrange: 6500,
    zoom: 'leo',
    changeObjectInterval: 1000,
    country: 'Russia',
    sun: 'No Impact',
    volume: false,
  },
  LEK: {
    name: 'Lekhtusi, Russia',
    shortName: 'LEK',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: 60.275458,
    lon: 30.546017,
    alt: 0.0,
    obsminaz: 245,
    obsmaxaz: 355,
    obsminel: 2,
    obsmaxel: 70,
    obsminrange: 100,
    obsmaxrange: 4200,
    zoom: 'leo',
    changeObjectInterval: 1000,
    country: 'Russia',
    sun: 'No Impact',
    volume: false,
  },
  MIS: {
    name: 'Mishelevka-D, Russia',
    shortName: 'MIS',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: 52.8555,
    lon: 103.2317,
    alt: 0.0,
    obsminaz: 41, // All Information via russianforces.org
    obsmaxaz: 219,
    obsminel: 5.5,
    obsmaxel: 34.5,
    obsminrange: 250,
    obsmaxrange: 4600,
    zoom: 'leo',
    changeObjectInterval: 1000,
    country: 'Russia',
    sun: 'No Impact',
    volume: false,
  },
  OLE: {
    name: 'Olenegorsk, Russia',
    shortName: 'OLE',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: 68.1141,
    lon: 33.9102,
    alt: 0.0,
    obsminaz: 280, // All Information via russianforces.org
    obsmaxaz: 340,
    obsminel: 5.5,
    obsmaxel: 34.5,
    obsminrange: 250,
    obsmaxrange: 4600,
    zoom: 'leo',
    changeObjectInterval: 1000,
    country: 'Russia',
    sun: 'No Impact',
    volume: false,
  },
  PEC: {
    name: 'Pechora, Russia',
    shortName: 'PEC',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: 65.21,
    lon: 57.295,
    alt: 0.0,
    obsminaz: 305, // All Information via russianforces.org
    obsmaxaz: 55,
    obsminel: 2,
    obsmaxel: 55,
    obsminrange: 300,
    obsmaxrange: 7200,
    zoom: 'leo',
    changeObjectInterval: 1000,
    country: 'Russia',
    sun: 'No Impact',
    volume: false,
  },
  PIO: {
    name: 'Pionersky, Russia',
    shortName: 'PIO',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: 54.857294,
    lon: 20.18235,
    alt: 0.0,
    obsminaz: 187.5, // All Information via russianforces.org
    obsmaxaz: 292.5,
    obsminel: 2,
    obsmaxel: 60,
    obsminrange: 100,
    obsmaxrange: 4200,
    zoom: 'leo',
    changeObjectInterval: 1000,
    country: 'Russia',
    sun: 'No Impact',
    volume: false,
  },
  // XUA: { // Not operational anymore
  //   name: 'Xuanhua, China',
  //   shortName: 'XUA',
  //   type: SpaceObjectType.PHASED_ARRAY_RADAR,
  //   lat: 40.446944,
  //   lon: 115.116389,
  //   alt: 1.6,
  //   obsminaz: 300, // Information via global ssa sensors amos 2010.pdf (sinodefence.com/special/airdefense/project640.asp)
  //   obsmaxaz: 60, // Information via global ssa sensors amos 2010.pdf (sinodefence.com/special/airdefense/project640.asp)
  //   obsminel: 2, // Information via globalsecurity.org
  //   obsmaxel: 80, // Information via globalsecurity.org
  //   obsminrange: 300,
  //   obsmaxrange: 3000, // Information via global ssa sensors amos 2010.pdf (sinodefence.com/special/airdefense/project640.asp)
  //   zoom: 'leo',
  //   changeObjectInterval: 1000,
  //   country: 'China',
  //   sun: 'No Impact',
  //   volume: false,
  // },
  XIN: {
    name: 'Xingjiang, China', // Korla
    shortName: 'XIN',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: 41.64131987863126, // https://hfasia.blogspot.com/2017/02/blog-post_50.html
    lon: 86.23695312232473,
    alt: 0.993, // https://www.freemaptools.com/elevation-finder.htm
    obsminaz: 0, // https://www.globalsecurity.org/space/world/china/images/xinjiang-radar-image-2018-1-s.jpg
    obsmaxaz: 360, // It is on a rotatable platform
    obsminel: 3, // Assumed same characteristics as AN/FPS-115
    obsmaxel: 85,
    obsminrange: 200, // Assumed same characteristics as AN/FPS-115
    obsmaxrange: 5556, // Assumed same characteristics as AN/FPS-115
    zoom: 'leo',
    changeObjectInterval: 1000,
    country: 'China',
    sun: 'No Impact',
    volume: false,
  },
  ZHE: {
    name: 'Zhejiang, China',
    shortName: 'ZHE',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: 30.28661248844618, // https://hfasia.blogspot.com/2017/02/blog-post_50.html
    lon: 119.12859385017512,
    alt: 1.342, // https://www.freemaptools.com/elevation-finder.htm
    obsminaz: 60,
    obsmaxaz: 300,
    obsminel: 2,
    obsmaxel: 80,
    obsminrange: 300,
    obsmaxrange: 3000,
    zoom: 'leo',
    changeObjectInterval: 1000,
    country: 'China',
    sun: 'No Impact',
    volume: false,
  },
  HEI: {
    name: 'Heilongjiang, China',
    shortName: 'HEI',
    type: SpaceObjectType.PHASED_ARRAY_RADAR, // https://www.globalsecurity.org/wmd/world/china/lpar-x.htm
    lat: 46.528164,
    lon: 130.755235,
    alt: 0.241, // https://www.freemaptools.com/elevation-finder.htm
    obsminaz: 135, // X-Band https://www.globalsecurity.org/wmd/world/china/lpar-x.htm
    obsmaxaz: 225, // Assumed +/- 45 degrees
    obsminel: 3,
    obsmaxel: 65,
    obsminrange: 200,
    obsmaxrange: 3000,
    zoom: 'leo',
    changeObjectInterval: 1000,
    country: 'China',
    sun: 'No Impact',
    volume: false,
  },
  SHD: {
    name: 'Shandong, China', // P-Band (225 Mhz - 390 Mhz)
    shortName: 'SHD',
    type: SpaceObjectType.PHASED_ARRAY_RADAR, // https://www.globalsecurity.org/wmd/world/china/lpar-p.htm
    lat: 36.023072,
    lon: 118.093115,
    alt: 0.694, // https://www.freemaptools.com/elevation-finder.htm
    obsminaz: 343.9, // Two Faces Boresight ~163.9 and ~103.9 degrees
    // https://www.omnicalculator.com/other/azimuth (163.9 degrees if aimed at Taipei)
    obsmaxaz: 223.9, // https://www.defensenews.com/global/asia-pacific/2022/04/18/new-chinese-radar-looks-towards-japan-satellite-image-shows/
    obsminel: 3,
    obsmaxel: 85,
    obsminrange: 200,
    obsmaxrange: 5500, // ~10,000 Transceivers
    zoom: 'leo',
    changeObjectInterval: 1000,
    country: 'China',
    sun: 'No Impact',
    volume: false,
  },

  // Telescopes
  MLS: {
    name: 'Mount Lemmon Survey, Arizona',
    shortName: 'MLS',
    type: SpaceObjectType.OPTICAL,
    lat: 32.442,
    lon: -110.789,
    alt: 2.791,
    obsminaz: 0,
    obsmaxaz: 360,
    obsminel: 10,
    obsmaxel: 90,
    obsminrange: 0,
    obsmaxrange: 200000,
    zoom: 'geo',
    changeObjectInterval: 20000,
    country: 'United States',
    sun: 'No Impact',
    volume: false,
  },

  PMO: {
    name: 'Purple Mountain Observatory, China',
    shortName: 'PMO',
    type: SpaceObjectType.OPTICAL,
    lat: 32.064946,
    lon: 118.829677,
    alt: 0.267,
    obsminaz: 0,
    obsmaxaz: 360,
    obsminel: 10,
    obsmaxel: 90,
    obsminrange: 0,
    obsmaxrange: 200000,
    zoom: 'geo',
    changeObjectInterval: 20000,
    country: 'China',
    sun: 'No Impact',
    volume: false,
  },

  PO: {
    name: 'Palomar Observatory, California',
    shortName: 'PO',
    type: SpaceObjectType.OPTICAL,
    lat: 33.3564,
    lon: -116.865,
    alt: 1.712,
    obsminaz: 0,
    obsmaxaz: 360,
    obsminel: 10,
    obsmaxel: 90,
    obsminrange: 0,
    obsmaxrange: 200000,
    zoom: 'geo',
    changeObjectInterval: 20000,
    country: 'United States',
    sun: 'No Impact',
    volume: false,
  },

  LSO: {
    name: 'La Sagra Observatory, Spain',
    shortName: 'LSO',
    type: SpaceObjectType.OPTICAL,
    lat: 37.9839,
    lon: -2.5644,
    alt: 0,
    obsminaz: 0,
    obsmaxaz: 360,
    obsminel: 10,
    obsmaxel: 90,
    obsminrange: 0,
    obsmaxrange: 200000,
    zoom: 'geo',
    changeObjectInterval: 20000,
    country: 'Spain',
    sun: 'No Impact',
    volume: false,
  },

  // ISON Sensors
  MAY: {
    name: 'Mayhill, New Mexico',
    shortName: 'MAY',
    type: SpaceObjectType.OPTICAL,
    lat: 32.9039,
    lon: -105.5289,
    alt: 2.225,
    obsminaz: 0,
    obsmaxaz: 360,
    obsminel: 10,
    obsmaxel: 90,
    obsminrange: 0,
    obsmaxrange: 200000,
    zoom: 'geo',
    changeObjectInterval: 20000,
    country: 'USA',
    sun: 'No Impact',
    volume: false,
  },
  TAI: {
    name: 'Surveillance Radar Program, Taiwan',
    shortName: 'TAI',
    type: SpaceObjectType.PHASED_ARRAY_RADAR,
    lat: 24.499,
    lon: 121.072,
    alt: 0.060966, // Find accurate altitude
    obsminaz: 0, // Appears to be 3 faced
    obsmaxaz: 360, // https://www.google.com/maps/place/24%C2%B029'45.6%22N+121%C2%B004'15.6%22E/@24.4985462,121.0709751,154m/data=!3m1!1e3!4m5!3m4!1s0x0:0xe0073e890dc05d63!8m2!3d24.496!4d121.071
    obsminel: -1, // "Tracks surface ships" https://www.globalsecurity.org/military/world/taiwan/air-defense-over.htm
    obsmaxel: 85,
    obsminrange: 200,
    obsmaxrange: 5556,
    changeObjectInterval: 1000,
    linkAehf: false,
    linkWgs: false,
    zoom: 'leo',
    url: 'https://fas.org/man/eprint/leshan.pdf',
    country: 'Taiwan',
    sun: 'No Impact',
    volume: false,
  },
};

let i = 0;
for (const sensor in sensorList) {
  sensorList[sensor].staticNum = i;
  i++;
}

export { sensorList };