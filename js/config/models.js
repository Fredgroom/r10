// for defining our Realm db schema later
import Realm from "realm";

const FaveSchema = {
    name: "Fave",
    primaryKey: 'id',
    properties: {
      id: "string",
      faved_on: 'date',
    }
  };
  
  const realm = new Realm({ schema: [FaveSchema] });
  
  // Create a Fave object
  export const newFave = (id) => {
    realm.write(() => {
      realm.create("Fave", { id: id, faved_on: new Date() });
    })
  };
  
  export const removeFave = (id) => {
    realm.write(() => {
      let allFaves = realm.objects("Fave");
      let faveId = id;
      let currentFave = allFaves.filtered('id == $0', faveId);
      realm.delete(currentFave);
  
    })
  }
    
  export const queryAllFaves = () => {
      let allFaves = realm.objects("Fave");
      let ascFaves = allFaves.sorted("id");
      return ascFaves;
  }
  

export default realm;