import { AccessToken, LoginManager } from 'react-native-fbsdk';
import auth from '@react-native-firebase/auth';

export async function onFacebookButtonPress() {
    console.log("\n\n 1111")
    try {
        console.log("\n\n 2222")
        // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions(['public_profile']);
        console.log("\n\n 3333")

        if (result.isCancelled) {
            console.log("\n\n 4444")
            throw 'User cancelled the login process';
        }
        console.log("\n\n 5555")

        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();
        console.log("\n\n 6666")

        if (!data) {
            console.log("\n\n 7777")
            throw 'Something went wrong obtaining access token';
        }
        console.log("\n\n 8888")

        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
        console.log("\n\n 9999")

        // Sign-in the user with the credential
        await auth().signInWithCredential(facebookCredential)
            .catch(error => {
                console.log("\n\n 1010")
                console.log('Something went wrong with sign up: ', error);
            });
        console.log("\n\n 111111")
    } catch (error) {
        console.log({ error });
    }
}