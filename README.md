# React Native App com react-native-paper

Este projeto é uma aplicação simples em React Native que exibe um texto e um Card utilizando o componente Card da biblioteca react-native-paper e um componente customizado chamado AssetExample.

## Estrutura do Projeto

- App.js: O arquivo principal onde os componentes são renderizados.
- components/AssetExample.js: Componente customizado renderizado dentro do Card.

## Dependências

- React Native
- react-native-paper


## Instalação

- Clone o repositório:

```bash
git clone <link-do-repositorio>
```

- Acesse a pasta do projeto:

```bash
cd pasta-do-projeto
```

- Instale as dependências:

```bash
npm install
```

- Execute o projeto:

```bash
npx expo start
```

## Estrutura de Código

- App.js: Layout com SafeAreaView, Text e Card:

```javascript
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone!
      </Text>
      <Card>
        <AssetExample />
      </Card>
    </SafeAreaView>
  );
}
```

- Styles: Definindo o layout e o estilo:

```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
```

## Como Usar

- Edite o código e veja as mudanças em tempo real com Expo Go.
- Adicione novos componentes conforme necessário usando a biblioteca react-native-paper.
