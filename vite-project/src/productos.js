import { doc, getDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore"


export const obtenerProduto = (id) => {
    return new Promise((resolve, reject) => {
        const db = getFirestore()

        const itemDoc = doc(db, "items", id)

        getDoc(itemDoc)
            .then((doc) => {
                if (doc.exists()) {
                    resolve({ id: doc.id, ...doc.data() })
                } else {
                    resolve(null)
                }
            })
            .catch((error) => reject(error))
    })
}

export const obtenerProdutos = (categor) => {
    return new Promise((resolve, reject) => {
        const db = getFirestore()

        const itemCollection = collection(db, "items")

        let q;
        if (categor) {
            q = query(itemCollection, where("categoria", "==", categor))
        } else {
            q = query(itemCollection)
        }

        getDocs(q)
            .then((snapshot) => {
                const productos = snapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                })
                resolve(productos)
            })
            .catch((error) => reject(error))
    })
}
