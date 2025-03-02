import React from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import EmptyList from "./EmptyList";
import styles from "../utils/Styles";
import { color, icon } from "../utils/Constant";
import { useSelector } from "react-redux";


const ProductList = ({
  onPress,
}) => {

  const productList = useSelector(state => state.product.productList);

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.productListCard}>
        <View style={styles.subCard}>
          <Text style={styles.username}>{item.name}</Text>
          <Text style={styles.price}>Price per unit: {item?.price}</Text>
          <Text style={styles.price}>Total quantity: {item?.quantity}</Text>
        </View>
        <Pressable onPress={()=>onPress(item, 'edit')}>
          <Image source={icon.edit} style={styles.closeIcon} tintColor={color.primary}/>
        </Pressable>
        <Pressable onPress={()=>onPress(item, 'delete')}>
          <Image source={icon.close} style={styles.closeIcon} tintColor={color.primary}/>
        </Pressable>
      </View>
    );
  };

  return(
    <FlatList
      data={productList}
      ListEmptyComponent={()=> <EmptyList />}
      renderItem={renderItem}
      keyExtractor={(item) => item?._id}
    />
  )
}

export default ProductList;
