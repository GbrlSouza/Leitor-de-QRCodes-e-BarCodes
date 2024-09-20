import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const BarcodeScanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [codeType, setCodeType] = useState(null);
  const [codeData, setCodeData] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setCodeType(type);
    setCodeData(data);
    alert(`Código escaneado do tipo ${type} com os dados: ${data}`);
  };

  if (hasPermission === null) {
    return <Text>Solicitando permissão para acessar a câmera...</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sem permissão para acessar a câmera.</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={'Toque para escanear novamente'} onPress={() => setScanned(false)} />
      )}
      <View style={styles.codeBox}>
        <Text style={styles.codeText}>
          {codeData
            ? `Código ${codeType === BarCodeScanner.Constants.BarCodeType.qr ? 'QR' : 'de Barras'} lido: ${codeData}`
            : 'Aponte para o código de barras ou QR Code'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  codeBox: {
    position: 'absolute',
    bottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  codeText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default BarcodeScanner;
