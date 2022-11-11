import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { onFacebookButtonPress } from '../functions/functions';

export function FacebookSignIn() {
    return (
        <View style={styles.container}>
            <Button
                title="Facebook Sign-In"
                color="#0073FF"
                onPress={onFacebookButtonPress}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: 'center',
    },
})