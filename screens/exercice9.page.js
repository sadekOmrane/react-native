import * as React from "react";
import { ProgressBar, Button } from "react-native-paper";
import { View, StyleSheet } from "react-native";

const Exercice9Page = () => {
  const [progress, setProgress] = React.useState(0.0);

  const handleProgress = () => {
    setProgress((prevProgress) => {
      const newProgress = prevProgress + 0.2;
      return newProgress >= 1 ? 1 : newProgress;
    });
  };

  const handleReload = () => {
    setProgress(0);
  };

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      handleProgress();
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <ProgressBar progress={progress} />
      <View style={styles.container}>
        <Button onPress={handleReload}>Reload</Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Exercice9Page;
