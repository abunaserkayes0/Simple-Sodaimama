const addToData = value => {
   const db = getData();
    if (value in db) {
        db[value] = db[value] + 1;
    } else {
        db[value] = 1;
    }
    saveToData(db);
}

const removeFormData = value => {
    const db = getData();
    delete db[value];
    saveToData(db);
}
const saveToData = db => {
    const dbJson = JSON.stringify(db);
    localStorage.setItem('shopping-cart',dbJson);
}

const getData = () => {
    let saveDb = localStorage.getItem('shopping-cart');
    if (saveDb) {
        saveDb=JSON.parse(saveDb);
    } else {
        saveDb = {};
    }
  
    return saveDb;
}
export { addToData, removeFormData, getData, saveToData };