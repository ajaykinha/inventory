import React, { useState } from "react";
import { Text, View } from "react-native";
import Input from "./Input";
import Button from "./Button";
import styles from "../utils/Styles";


const Popup = ({
  item,
  onCancel,
  onAddUpdate,
}) => {
  const [data, setData] = useState(item);

  const onChangeText = (text, key) => {
    setData((prev)=>{
      return {...prev, [key]: key==="name" ? text : Number(text)};
    });
  };

  return(
    <View style={styles.popupContainer}>
      {/* <Text>Add Inventory</Text> */}
      <Input
        placeholder={'Product Name'}
        value={data?.name || ""}
        onChangeText={(text) => onChangeText(text, "name")}
      />
      <Input
        placeholder={'Product Price'}
        keyboardType={'numeric'}
        value={data?.price?.toString() || ""}
        onChangeText={(text) => onChangeText(text, "price")}
      />
      <Input
        placeholder={'Product Quantity'}
        keyboardType={'numeric'}
        value={data?.quantity?.toString() || ""}
        onChangeText={(text) => onChangeText(text, "quantity")}
      />
      <View style={{flexDirection: "row"}}>
        <Button
          title={"Cancel"}
          btnExtStyle={{flex: 1}}
          onPress={onCancel}
        />
        <Button
          title={item ? "Update" : "Add"}
          btnExtStyle={{flex: 1}}
          onPress={()=>onAddUpdate(data)}
        />
      </View>
    </View>
  );
};

export default Popup;
