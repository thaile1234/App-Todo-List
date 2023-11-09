import { StyleSheet } from 'react-native';
import color from './../../contain/color';
const styles=StyleSheet.create({
    addTask:{
        bottom:20,
        paddingHorizontal:40,
        width:'95%',
        marginLeft:22,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    input:{
        height:40,
        width:'80%',
        backgroundColor:color.background,
        borderRadius:18,
        borderColor: color.red,
        borderWidth:1,
        paddingHorizontal:10,
    },
    inputCricle:{
        width:40,
        height:40,
        backgroundColor:color.blue,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',

    },
    icon:{
        color:color.background,
        fontSize:25,
    }
})
export default styles;