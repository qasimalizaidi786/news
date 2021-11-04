import React, { useContext } from 'react';
import { StyleSheet,  View,StatusBar } from 'react-native';
import Context, { NewsContext } from './Component/Api/Context';
import InshotTabs from './Component/InshotTabs';


  const App=()=> {
  const{darkTheme} = useContext(NewsContext)
  return (
    <View style={{...styles.container ,backgroundColor:darkTheme?'#282C35':'white'}}>
     <InshotTabs/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   marginTop:StatusBar.currentHeight,
  },
});
export default()=>{
  return(
  <Context>
    <App/>
    </Context>
  )
}