import Snackbar from "react-native-snackbar";

const showMessage = (msg, color) => {
  // Alert.alert('Wait..', msg);
  Snackbar.show({
    text: msg,
    backgroundColor: color ? color : 'red',
    duration: Snackbar.LENGTH_SHORT,
  });
};

export {
  showMessage,
};
