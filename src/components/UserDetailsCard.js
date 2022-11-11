import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { onSignOutButtonPress } from '../functions/functions';

export default function UserDetailsCard({ user }) {
    return (
        <View style={styles.container}>
            <View style={styles.userCard}>
                <Image
                    source={{ uri: user?.photoURL }}
                    style={styles.userImage}
                />
                <Text style={styles.userText}>Welcome {user.displayName}</Text>
                <Text style={styles.userText}>{user.email}</Text>
                <Text />

                <Button
                    title='Logout'
                    onPress={onSignOutButtonPress}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%", height: "100%",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    userCard: {
        elevation: 8,
        shadowColor: "#999",
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 30,
        alignItems: "center",
    },
    userText: {
        fontSize: 16,
        color: "#000",
        fontWeight: "600",
        marginTop: 2
    },
    userImage: {
        width: 110,
        height: 110,
        borderRadius: 100,
        marginBottom: 20,
    }
})
