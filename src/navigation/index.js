// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Splash from "../screens/auth/Splash";
// import Login from "../screens/auth/Login";
import { Provider } from "react-redux";
import store from "../redux/store";
import Home from "../screens/Home";
import { Inventory, RealmContext } from "../localDB";
import { RealmProvider } from "@realm/react";


const App = () => {
  return(
    <Provider store={store}>
      <RealmProvider schema={[Inventory]}>
        <Home />
      </RealmProvider>
    </Provider>
  );
};

export default App;
