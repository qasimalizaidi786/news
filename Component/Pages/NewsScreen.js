import React, { useContext, useState } from 'react'
import { View, Text,Dimensions,StyleSheet } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { NewsContext } from '../Api/Context'
import SingleNews from '../SingleNews';

const WindowHeight=Dimensions.get('window').height;
const NewsScreen = () => {

    const {
        news: { articles },
        
      } = useContext(NewsContext);
      const [active, setActive] = useState()
    // console.log(articles)
    return (
        <View style={styles.carousel}>
            {articles&&(
                <Carousel 
                layout='stack'
                data={articles.slice(0,10)}
                sliderHeight={300}
                itemHeight={WindowHeight}
                vertical={true}
                renderItem={({item,index})=>(
                    <SingleNews item={item} index={index}/>
                )}
                onSnapToItem={(index)=>setActive(index)}
                />
            )}
        </View>
    )
}
const styles = StyleSheet.create({
    carousel: {
      flex: 1,
      transform: [{ scaleY: -1 }],
      backgroundColor: "black",
    },
  });
export default NewsScreen
