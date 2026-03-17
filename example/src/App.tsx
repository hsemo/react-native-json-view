import { View, StyleSheet } from 'react-native';
import JsonView, { JsonThemeName } from 'react-native-json-view';

const sampleJson = {
  mission: 'Voyager Deep Space Expedition',
  launchDate: '1977-09-05T08:56:00.000Z',
  spacecraft: {
    name: 'Voyager 1',
    mass_kg: 721.9,
    powerSource: 'Radioisotope Thermoelectric Generator',
    operational: true,
    instruments: [
      'Plasma Wave Subsystem',
      'Magnetometer',
      'Cosmic Ray Subsystem',
      'Ultraviolet Spectrometer',
    ],
  },
  currentPosition: {
    distanceFromSun_km: 23_480_000_000,
    distanceFromEarth_km: 23_460_000_000,
    region: 'Interstellar Space',
    coordinates: {
      x: 14_967_000_000,
      y: 8_745_000_000,
      z: -3_210_000_000,
    },
  },
  timeData: {
    missionDuration_days: 17000,
    lightTravelTime_hours: 21.7,
    timeDialation: {
      velocityFraction_c: 0.000053,
      elapsedTimeDifference_ms: 0.000812,
    },
  },
  visitedBodies: [
    {
      name: 'Jupiter',
      flybyDate: '1979-03-05',
      closestApproach_km: 349_000,
      moonsObserved: ['Io', 'Europa', 'Ganymede', 'Callisto'],
      discovered: null,
    },
    {
      name: 'Saturn',
      flybyDate: '1980-11-12',
      closestApproach_km: 124_000,
      moonsObserved: ['Titan', 'Rhea', 'Dione'],
      discovered: "Saturn's F Ring",
    },
  ],
  interstellarMedium: {
    heliopause_crossed: true,
    crossingDate: '2012-08-25',
    plasmaDensity_cm3: 0.08,
    magneticField_nT: 0.5,
    particles: {
      hydrogenAtoms: true,
      cosmicRays: true,
      darkMatter: null,
    },
  },
  signals: {
    frequency_GHz: 8.4,
    transmissionPower_W: 23,
    roundTripSignalDelay_hours: 43.4,
    lastContact: '2024-11-20T14:32:00.000Z',
    status: 'Active',
  },
  nextMilestone: undefined,
} as const;

export default function App() {
  return (
    <View style={styles.container}>
      <JsonView
        data={sampleJson}
        style={{ height: 'auto', maxHeight: '100%' }}
        fontSize={20}
        themeName={JsonThemeName.Default}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
});
