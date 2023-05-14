import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Dimensions  } from 'react-native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    playListScroll:{
        flexDirection:'row',
        width:WIDTH,
        height:300,
        // backgroundColor:'red'
    },
    itemPlayList:{
        justifyContent:'flex-end',
        alignItems:'center',
        width:150,
        height:150,
        marginVertical:25,
        marginHorizontal:23,
        backgroundColor:'blue',
        borderRadius:20,
        overflow:'hidden'
    },
    textItemList:{
        color:'#ededed',
        fontSize:15,
        fontWeight:'600',
        bottom:10,
        position:'absolute',
        zIndex:1,
    },
    imgItemList:{
        position:'absolute',
        zIndex:0,
        width:"100%",
        height:"100%"
    },
})

const AlbumsComp = () => {
    return(
        <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.playListScroll}>
            <TouchableOpacity>
                <View style={styles.itemPlayList}>
                <Text style={styles.textItemList}>Популярное</Text>
                <Image style={styles.imgItemList} source={require('../source/images/albom1.jpg')}></Image>
                </View>
            </TouchableOpacity> 
            <TouchableOpacity>
                <View style={styles.itemPlayList}>
                    <Text style={styles.textItemList}>Музыка 90-х</Text>
                    <Image style={styles.imgItemList} source={require('../source/images/albom2.jpg')}></Image>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.itemPlayList}>
                    <Text style={styles.textItemList}>Русские хиты</Text>
                    <Image style={styles.imgItemList} source={require('../source/images/albom3.jpg')}></Image>
                </View>
            </TouchableOpacity>
            </ScrollView>
    )
}

export default AlbumsComp;