import { createRealmContext } from "@realm/react";
import { Realm, BSON } from "realm";

// Define Inventory Schema
class Inventory extends Realm.Object {
  static schema = {
    name: "Inventory",
    properties: {
      _id: "objectId",
      name: "string",
      quantity: "int",
      price: "double",
    },
    primaryKey: "_id",
  };
}

// Create Realm Context (Local Database Only)
// const realmConfig = {
//   schema: [Inventory], // No sync, only local storage
//   schemaVersion: 1, // Update this if you change the schema
// };

// export const RealmContext = createRealmContext(realmConfig);

export { Inventory };
