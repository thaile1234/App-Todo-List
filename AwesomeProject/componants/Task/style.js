import { StyleSheet } from 'react-native';
import color from './../../contain/color';
const styles=StyleSheet.create({
    item1:{
        flexDirection:'row',
        backgroundColor:color.pink,
        marginVertical:10,
        padding:10,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'space-between'
       },
       cricle:{
        width:40,
        height:30,
        borderRadius:10,
       },
       even:{
        backgroundColor:color.green,
       },
       odd:{
        backgroundColor:color.blue,
       },
       number:{
        fontSize:22,
        fontWeight:'bold',
        alignItems:'center',
        marginLeft:8,
        color: color.background,
       },
       content:{
        width:'80%',
        fontSize:20,
       },
       cricle1:{
        width:40,
        height:30,
        backgroundColor:color.blue,
        borderRadius:10,
        
       },
})
export default styles;