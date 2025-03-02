import React, { useEffect, useState } from "react";
import { View } from "react-native";
import styles from "../utils/Styles";
import { Header, Popup, ProductList } from "../component";
import { color, icon } from "../utils/Constant";
import { useQuery, useRealm } from "@realm/react";
import { BSON } from "realm";
import { useDispatch } from "react-redux";
import { updateProductList } from "../redux/action/productAction";
import { showMessage } from "../utils";


const Home = () => {
  const dispatch = useDispatch();
  const realm = useRealm();
  const inventory = useQuery("Inventory");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(()=> {
    // console.log("inventory==>", inventory);
    const plainInventory = inventory.map(item => ({
      ...item,
      _id: item._id.toString(),
    }));
    dispatch(updateProductList(plainInventory));
  }, [inventory]);

  const onItemAction = (item, action) => {
    if(action === 'edit'){
      setSelectedItem(item);
      setShowPopup(true);
    }else{
      deleteItem(item);
    }
  };

  const onCancel = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };

  const onAddUpdate = (data) => {
    if(!data?.name || !data?.price || !data?.quantity){
      showMessage("Please enter all value.");
      return;
    }

    if(data?._id){
      updateItem(data);
    }else{
      addItem(data);
    }

    setSelectedItem(null);
    setShowPopup(false);
  };

  // Add Item
  const addItem = (item) => {
    realm.write(() => {
      realm.create("Inventory", {
        _id: new BSON.ObjectId(),
        name: item.name,
        quantity: Number(item.quantity),
        price: Number(item.price),
      });
    });

    showMessage("Product added successfully", color.green);
  };

  // Update Item
  const updateItem = (item) => {
    realm.write(() => {
      const data = realm.objectForPrimaryKey("Inventory", new BSON.ObjectId(item?._id));
      if (data) {
        data.name = item.name;
        data.quantity = item.quantity;
        data.price = item.price;
      }
    });

    showMessage("Product updated successfully", color.green);
  };

  // Delete Item
  const deleteItem = (item) => {
    realm.write(() => {
      const data = realm.objectForPrimaryKey("Inventory", new BSON.ObjectId(item?._id));
      if (data) realm.delete(data);
    });

    showMessage("Product deleted successfully", color.green);
  };

  return(
    <View style={styles.mainContainer}>
      <Header
        title="Inventory"
        leftIcon={icon.add}
        onLeftPress={()=>setShowPopup(true)}
      />

      <ProductList
        onPress={onItemAction}
      />

      {
        showPopup && <Popup
          item={selectedItem}
          onCancel={onCancel}
          onAddUpdate={onAddUpdate}
        />
      }
    </View>
  );
};

export default Home;
