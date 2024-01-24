import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import PushNotification from "react-native-push-notification";
const Exercice10Page = ({ navigation }) => {
  React.useEffect(() => {
    PushNotification.configure({
      onRegister: function (token) {
        console.log("TOKEN:", token);
      },
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
      },
      onAction: function (notification) {
        console.log("ACTION:", notification.action);
      },
      onRegistrationError: function (err) {
        console.error(err.message, err);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });

    PushNotification.localNotificationSchedule({
      message: "Ma notification planifiée",
      date: new Date(Date.now() + 2000), // dans 5 secondes
    });
  }, []);

  return (
    <View style={styles.container}>
      <Button
        title="Afficher la notification"
        onPress={() => {
          PushNotification.localNotification({
            message: "Ma notification immédiate",
          });
        }}
      />
    </View>
  );
};

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Exercice10Page;
