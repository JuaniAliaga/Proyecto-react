import {doc, getDoc, collection, getDocs, getFirestore, query, where} from "firebase/firestore"

// const productos = [
//     {id: '1', nombre: "Teclado Hyperx Alloy Fps",precio: 500, categoria: "Perifericos"},
//     {id: '2', nombre: "Teclado Hyperx Alloy Origin",precio: 600, categoria: "Perifericos"},
//     {id: '3', nombre: "Monitor ASUS VA27EHE ",precio: 1000, categoria: "Monitores"},
//     {id: '4', nombre: "Monitor AOC G2490VX",precio: 900, categoria: "Monitores"},
//     {id: '5', nombre: "Notebook Banghó L4", precio: 1500, categoria: "Notebooks"},
//     {id: '6', nombre: "Notebook Tuf F15", precio: 1400, categoria: "Notebooks"},
//     {id: '7', nombre: "RTX 3080 Ti ", precio: 2000, categoria: "GPU"},
//     {id: '8', nombre: "RTX 3070 GAMING", precio: 1700, categoria: "GPU"},
//     {id: '9', nombre: "AMD Ryzen 9 5900X", precio: 1550, categoria: "CPU"},
//     {id: '10', nombre: "AMD Ryzen 7 5800X", precio: 1450, categoria: "CPU"}
// ]

export const obtenerProduto = (id) => {
    return new Promise((resolve, reject) => {
        const db = getFirestore()

        const itemDoc = doc(db, "items", id)

        getDoc(itemDoc)
        .then((doc) => {
            if (doc.exists()) {
                resolve({id: doc.id, ...doc.data() })
            }else{
                resolve(null)
            }
        })
        .catch((error) =>  reject(error))
    })
}

export const obtenerProdutos = (categor) => {
    return new Promise((resolve, reject) => {
        const db = getFirestore()

        const itemCollection = collection(db, "items")

        let q;
        if (categor) {
            q = query(itemCollection, where("categoria", "==", categor))
        }else{
            q = query(itemCollection)
        }

        getDocs(q)
        .then((snapshot) => {
            const productos = snapshot.docs.map((doc) =>{
                return {id : doc.id, ...doc.data()}
            })  
            resolve(productos)
        })
        .catch((error) => reject(error))
    })
}
