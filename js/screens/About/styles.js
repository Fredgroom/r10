import { StyleSheet } from 'react-native';
import {fonts} from '../../config/styles'

export const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 12,
       
    },
    paragraph: {
        textAlign: 'left',
        marginTop: 20,
        marginBottom: 20,
        fontFamily: fonts.light,
        // margin: 10,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: fonts.regular,
        
        // margin: 10,
    },
    component: {
        marginBottom: 20,
    }
});