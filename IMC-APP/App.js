import { setStatusBarHidden } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, View, Text, Image, TextInput, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProfilStatique() {
  
  const [poids, setPoids] = useState('');
  const [taille, setTaille] = useState('');
  
  const [IMC, setIMC] = useState(null);
  function calculerIMC() {
    if (!poids || !taille) {
      setIMC(null);
    }else{
    const tailleEnMetres = parseFloat(taille) / 100;
    const imcCalcul = parseFloat(poids) / (tailleEnMetres * tailleEnMetres);
    setIMC(imcCalcul.toFixed(2));}
  }
  
  function EtatDeSante(imc) {
    if (!imc) {
      return '';
    }
    if (imc < 18.5) {
      return require('./assets/maigreur.png');
    } else if (imc < 25) {
      return require('./assets/normal.png');
    } else if (imc < 30) {
      return require('./assets/surpoids.png');
    } else if (imc < 40) {
      return require('./assets/obese.png');
    }else {
      return require('./assets/obese_severe.png');
    }
  }


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>IMC For II-Master BDCC 1</Text>
      
      <Image
        source={require('./assets/imc_img.png')}
        style={styles.label}
      />

      
    
     <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.label}>Poids </Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre poids"
          editable={true}
          value={poids}
          onChangeText={setPoids}
        /><Text style={styles.label}> KG</Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.label}>Taille </Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre taille"
          editable={true}
          value={taille}
        onChangeText={setTaille}   
        /><Text style={styles.label}> CM</Text>
      </View>

      <TouchableOpacity
        title="Calculer IMC"
        style={styles.Button}
        onPress={calculerIMC}
        >
        <Text style={styles.buttonText}>Calculer IMC</Text>
      </TouchableOpacity>
      

      <Text style={styles.title}>Votre IMC est : {IMC} </Text>
      {IMC && (
        <Image
          source={EtatDeSante(IMC)}
          style={{ width: 150, height: 150, resizeMode: 'contain' }}
        />
      )}

      
      
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    marginTop: 40,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    width: '70%',
   
    padding: 10,
    marginBottom: 20,
   borderBottomColor: 'gray',
   borderBottomWidth: 1,
  },
  message: {
    fontSize: 18,
    color: 'black',
    marginBottom: 20,
  },
  Button:{
    backgroundColor: '#5347bcff',   
    paddingVertical: 12,         
    paddingHorizontal: 25,        
    borderRadius: 25,             
    alignItems: 'center',         
    marginTop: 20,
    paddingLeft: 40,
    paddingRight: 40,
  }
});
