import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import ResultImc from './ResultImc';

const Form = () => {

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState('Preencha o peso e altura');
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState('Calcular');

    function imcCalculator() {
        return (
            setImc(
                (weight / (height * height)).toFixed(2)
            )
        );
    }

    function validationImc() {
        if (height != null && weight != null) {
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu imc é igual: ");
            setTextButton("Calcular Novamente");
            return
        }
        setImc(null);
        setTextButton("Calcular");
        setMessageImc("Preencha o peso e altura");
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder='Ex. 1.75'
                    keyboardType='numeric'
                />

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder='Ex. 75.5'
                    keyboardType='numeric'
                />

                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => validationImc()}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    )
}

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: 30
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
    },
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#F6F6F6",
        height: 40,
        margin: 12,
        paddingLeft: 10
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#FF0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30
    },
    textButtonCalculator: {
        fontSize: 20,
        color: "#FFFFFF"
    }
})
export default Form;