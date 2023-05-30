import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Share } from 'react-native';

const ResultImc = (props) => {

    const onShare = async () => {
        const result = await Share.share({
            message: "Meu imc hoje é: " + props.resultImc
        })
    }

    return (
        <View style={styles.resultImc}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
            <View style={styles.boxShareButton}>
                {props.resultImc != null ?
                    <TouchableOpacity
                        onPress={() => onShare()}
                        style={styles.sharedButton}>
                        <Text style={styles.sharedText}>Share</Text>
                    </TouchableOpacity>
                    :
                    <View />
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    resultImc: {
        flex: 1,
        marginTop: 15,
        paddingTop: 30,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
        fontSize: 48,
        color: '#FF0043',
        fontWeight: "bold"
    },
    information: {
        fontSize: 18,
        color: '#FF0043',
        fontWeight: "bold"
    },
    numberImc: {
        fontSize: 48,
        color: '#FF0043',
        fontWeight: "bold"
    },
    boxShareButton: {
        width: "100%",
        alignItems: "center",
        marginTop: 10
    },
    sharedButton: {
        backgroundColor: "#1877F2",
        borderRadius: 50,
    },
    sharedText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        paddingHorizontal: 30,
        paddingVertical: 5
    }
})


export default ResultImc;