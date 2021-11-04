import React, { useContext } from 'react'
import { View, Text ,StyleSheet} from 'react-native'
import ModalDropdown from 'react-native-modal-dropdown';
import { NewsContext } from './Api/Context';


const DropDown = () => {
  const{country,setCountry}  =useContext(NewsContext)
    return (
        <View style={{...styles.container}}>
            <Text> Server </Text>
            <ModalDropdown options={[`Indai`  , 'USA','Australia','Russia','France','United' ]}/>
        </View>
    )
}
const styles=StyleSheet.create({
container:{
    fontWeight:'bold',
}
})

export default DropDown
