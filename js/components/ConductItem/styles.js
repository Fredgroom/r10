import { StyleSheet } from 'react-native';
import {colours, fonts} from '../../config/styles';

export const styles = StyleSheet.create({
    conductHeader: {
        fontFamily: fonts.regular,
        color: colours.purple,
        marginTop: 20,
        marginBottom: 20,
    },
    conductText: {
       fontFamily: fonts.light,
    },
});