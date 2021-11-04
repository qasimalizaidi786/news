import React, { useContext } from 'react'
import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';
import { NewsContext } from './Api/Context';
const TopNavigation = ({index,setIndex}) => {

   const{FetchNews,darkTheme,setDarkTheme} =useContext(NewsContext)
    return (
        <View style={{...styles.container,backgroundColor:darkTheme?'#282C35':'white'}}>
            { index ===0 ? (<TouchableOpacity style={styles.left} onPress={()=>setDarkTheme(!darkTheme)}>
                <Text style={{...styles.text,color:darkTheme?'lightgrey':'black'}}>
                <MaterialCommunityIcons name="theme-light-dark" size={24} color="black" />
                </Text>
            </TouchableOpacity>):(
<TouchableOpacity onPress={() => setIndex(index === 0 ? 1 : 0) } style={styles.left} 


>
<AntDesign name="arrowleft" size={24} color="#007FFF" />
<Text style={{...styles.text, color:darkTheme?'lightgrey':'black'}}>Discover</Text>
</TouchableOpacity>
            )}

            <Text style={{...styles.center,color:darkTheme?'white':'black'}}>
                {index ? 'All News':'Discover'}
            </Text>
            {index ? (
                <TouchableOpacity onPress={()=>FetchNews('general')} style={styles.right}>
            <Text style={styles.text}>
                <AntDesign name="reload1" size={24} color='#007FFF'/>
            </Text>
                </TouchableOpacity>
            ):(
                <TouchableOpacity style={styles.left}
                onPress={()=>setIndex( index === 0 ? 1: 0)}>
                    <Text style={{...styles.text,color:darkTheme?'white':'black'}}>All News</Text>
                    <AntDesign name="arrowright" size={24} color="#007FFF" />


                </TouchableOpacity>
            )}
        </View>
    )
}
const styles=StyleSheet.create({
left:{
    flexDirection:'row',
    alignItems:'center',
    width:80,
    justifyContent:'space-between'
},
text:{
    fontSize:16,
},
container:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    alignItems:'center',
    borderBottomColor:'black',
    borderBottomWidth:0.5
},
right:{
width:80,
alignItems:'flex-end'
},
center:{
paddingBottom:6,
borderBottomColor:'#007FFF',
borderBottomWidth:5,
borderRadius:10,
fontSize:16,
fontWeight:'700'
}
})

export default TopNavigation
