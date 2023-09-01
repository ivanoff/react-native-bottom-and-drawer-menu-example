import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { CounterContext } from '../context';
// import t from '../lang';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App({navigation}): JSX.Element {
  const { t, lang, setLang, theme, setTheme, count, increment, decrement } = React.useContext(CounterContext);

  // const isDarkMode = useColorScheme() === 'dark';
  const isDarkMode = theme === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text>{t('Home Screen')}</Text>
          <View>
            <Text>{`${theme} theme`}</Text>
          </View>

          <View>
            <Text>{`${lang}`}</Text>
            <Button title="En" onPress={() => setLang('en')} />
            <Button title="Es" onPress={() => setLang('es')} />
          </View>
          <View>
            <Text>{`${theme} theme`}</Text>
            <Button title="Light" onPress={() => setTheme('light')} />
            <Button title="Dark" onPress={() => setTheme('dark')} />
          </View>
          <View>
            <Text>{`Clicked ${count} times!`}</Text>
            <Button title="Increment" onPress={increment} />
            <Button title="Decrement" onPress={decrement} />
          </View>
          <Button
            onPress={() => navigation.navigate('Profile')}
            title="Go to Profile"
          />
          <Button
            onPress={() => navigation.navigate('About')}
            title="Go to About"
          />

          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
