import { StyleSheet, View, StatusBar } from 'react-native';

import Title from './src/components/Title';
import Form from './src/components/Form';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Title />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
  },
});

export default App;
