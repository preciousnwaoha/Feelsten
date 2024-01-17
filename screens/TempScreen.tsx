import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

interface TempScreenProps {
    navigation: any;
    route: any;
}

const TempScreen: React.FC<TempScreenProps> = ({navigation, route}) => {
    const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

    return (
        <SafeAreaView style={backgroundStyle}>
      
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text>This is {route.params.name}'s profile</Text>
          <LearnMoreLinks />
        </View>
      </ScrollView>

      <Button
      title="Go to Home"
      onPress={() =>
        navigation.navigate('Home', {name: 'Jane'})
      }
    />
    </SafeAreaView>
    );
};


export default TempScreen;
