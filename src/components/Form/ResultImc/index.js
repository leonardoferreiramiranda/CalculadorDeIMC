import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ResultImc = (props) => {

    return (
        <View style={styles.resultImc}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    resultImc: {
        flex: 1,
        marginTop: 15,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: 'center',
        width: '100%',
        fontSize: 48,
        color: '#FF0043',
        fontWeight: 'bold'
    },
    information: {
        fontSize: 18,
        color: '#FF0043',
        fontWeight: 'bold'
    },
    numberImc: {
        fontSize: 48,
        color: '#FF0043',
        fontWeight: 'bold'
    }
})


export default ResultImc;