import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.test',
  appName: 'ionic-test',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
