import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
          'Roboto-Black': require('../assets/fonts/Roboto-Black.ttf'),
          'Jost-Bold': require('../assets/fonts/Jost-Bold.ttf'),
          'Jost-Regular': require('../assets/fonts/Jost-Regular.ttf'),
          'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'), 
          'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'), 
          'Pattaya-Regular': require('../assets/fonts/Pattaya-Regular.ttf'), 
          'Archivo-Black': require('../assets/fonts/Archivo-Black.ttf'),
          'Archivo-Bold': require('../assets/fonts/Archivo-Bold.ttf'),
          'Archivo-Regular': require('../assets/fonts/Archivo-Regular.ttf'),
          'Archivo-ExtraBold': require('../assets/fonts/Archivo-ExtraBold.ttf'),
          'Heebo-Regular': require('../assets/fonts/Heebo-Regular.ttf'),

        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
