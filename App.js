import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { fortunes } from './fortunes';

export default function App() {
  const [image, setImage] = useState(require('./assets/cookie_closed.png'));
  const [fortune, setFortune] = useState('');
  const [broken, setBroken] = useState(false);

  const breakCookie = () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    setFortune(fortunes[randomIndex]);
    setImage(require('./assets/cookie_opened.png'));
    setBroken(true);
  };

  const resetCookie = () => {
    setFortune('');
    setImage(require('./assets/cookie_closed.png'));
    setBroken(false);
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      {fortune !== '' && <Text style={styles.text}>"{fortune}"</Text>}

      <TouchableOpacity
        style={styles.button}
        onPress={broken ? resetCookie : breakCookie}
      >
        <Text style={styles.buttonText}>
          {broken ? 'Tentar de novo' : 'Quebrar o biscoito'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5cc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 18,
    color: '#6a4e42',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#d2691e',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
