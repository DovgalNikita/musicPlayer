import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {FontAwesome, MaterialIcons} from '@expo/vector-icons';


const styles = StyleSheet.create({
    menuLinks:{
        flexDirection:'column',
        justifyContent:"space-between",
        width:"100%",
        height: "auto",
    },
    containerMenuLinks:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:20,
        marginTop:10,
        marginBottom:10
    },
    textItemMenuLinks:{
        width:'auto',
        alignItems:'center',
        color:'#ededed',
        fontSize: 15,
        fontWeight:'600',
        marginLeft:20
    },
})

const MenuLinks = () => {
    return(
        <View style={styles.menuLinks}>
            <TouchableOpacity style={styles.containerMenuLinks}>
                <MaterialIcons name="album" size={30} color="grey" />
                <Text style={styles.textItemMenuLinks}>Альбомы</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerMenuLinks}>
                <MaterialIcons name="playlist-add" size={30} color="grey" />
                <Text style={styles.textItemMenuLinks}>Плейлисты</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerMenuLinks}>
                <FontAwesome name="download" size={30} color="grey" />
                <Text style={styles.textItemMenuLinks}>Загруженное</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MenuLinks;