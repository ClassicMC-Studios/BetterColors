# Pluto<a href="">CSS</a>

> Link stylesheet <a href="https://classicmc-studios.github.io/bc.css">here</a><br/>
> Download React-Native version <a href="https://github.com/ClassicMC-Studios/Better-Colors/blob/main/Bc.js">Here</a>

### A css <a href="">Color</a> framework

#### by, <a href="">C</a>l<a href="">a</a>s<a href="">s</a>i<a href="">c</a>M<a href="">C</a>

> <b>Basics in React</b>

```jsx
  import './bc.css'
  
  function basicReactComponent(){
    return(
      <h1 className='bc-green'>Hello World!</h1>
    );
  };
  
  export default basicReactComponent;

```

> **Basics in React-Native**

```js
  import * as React from 'react';
  import { Text, View, Image, StyleSheet } from 'react-native';
  import { bc } from './styles/Bc'

  export default function App(){
    return(
      <View>
        <Text style={[bc.mint, bc.textAlign,bc.padding25,bc.radius25]}>Hello, World!</Text>
        <View style={bc.alignItems}>
          <Image source={require('./assets/betterColors.png')} />
        </View>
      </View>
    );
  }
  ```

