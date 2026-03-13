import { app } from "./Config.js";
import { getFirestore, collection, getDocs } from "firebase/firestore";

async function testFirebaseConnection() {
    try {
        console.log("🔍 Iniciando prueba de conexión a Firebase...");
        
        const db = getFirestore(app);
        console.log("✅ Firebase inicializado correctamente");
        
        const querySnapshot = await getDocs(collection(db, "Productos"));
        console.log(`✅ Conexión exitosa! Se encontraron ${querySnapshot.size} productos`);
        
        querySnapshot.forEach((doc) => {
            console.log(`📦 ${doc.id}:`, doc.data());
        });
        
        return true;
    } catch (error) {
        console.error("❌ Error en la conexión a Firebase:", error);
        console.error("Detalles:", error.message);
        return false;
    }
}

export default testFirebaseConnection;
